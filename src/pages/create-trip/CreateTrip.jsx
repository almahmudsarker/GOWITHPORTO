import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "@/constants/options";
import { generateAIContent } from "@/service/AiModal";
import { db } from "@/service/firebaseConfig";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const CreateTrip = () => {
  const [formData, setFormData] = useState({ location: "Porto" });

  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Function to handle input changes
  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  // Google OAuth login setup
  const login = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log("Login Successful:", credentialResponse);
      GetUserProfile(credentialResponse);
    },
    onError: (error) => {
      console.error("Login Failed:", error);
    },
  });

  // Function to handle generating the trip
  const OnGenerateTrip = async () => {
    const user = localStorage.getItem("user");
    if (!user) {
      setModal(true);
      return;
    }
    if (
      !formData?.noOfDays ||
      parseInt(formData.noOfDays) <= 0 ||
      !formData?.budget ||
      !formData?.people
    ) {
      alert(
        "Please enter a valid number of days, and select budget and number of people."
      );
      return;
    }
    setLoading(true);
    console.log("📝 Generating trip with data:", formData);

    const FINAL_PROMPT = AI_PROMPT.replace("{location}", formData?.location)
      .replace(/{totalDays}/g, formData?.noOfDays)
      .replace(
        "{traveler}",
        `${formData?.people?.label} (${formData?.people?.type})`
      )
      .replace("{budget}", formData?.budget);

    console.log("📝 Prompt:", FINAL_PROMPT);

    try {
      const responseText = await generateAIContent(FINAL_PROMPT);
      console.log("✅ AI Response:", responseText);
      // TODO: Handle JSON parsing or rendering
      setLoading(false);
      if (responseText) {
        await SaveAiTrip(responseText);
      } else {
        alert("No response received from AI. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error generating trip:", error);
      setLoading(false);
      alert("An error occurred while generating the trip. Please try again.");
    }
  };

  // Function to fetch user profile from Google
  const GetUserProfile = (tokenInfo) => {
    axios
      .get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        console.log("User Profile:", response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        setModal(false);
        OnGenerateTrip();
      })
      .catch((error) => {
        console.error("Error fetching user profile:", error);
      });
  };

  // Firebase imports
  // const SaveAiTrip = async (TripData) => {
  //   setLoading(true);
  //   const user = JSON.parse(localStorage.getItem("user"));
  //   const docId = Date.now().toString();
  //   // Clean up AI response if it contains markdown formatting
  //   const cleanedTripData = TripData.replace(/```json/g, "")
  //     .replace(/```/g, "")
  //     .trim();
  //   console.log("📝 Saving trip data:", cleanedTripData);
  //   await setDoc(doc(db, "AITrips", docId), {
  //     userChoice: formData,
  //     tripData: JSON.parse(TripData),
  //     userEmail: user?.email,
  //     id: docId,
  //   });
  //   navigate("/view-trip/" + docId);
  // };
  const SaveAiTrip = async (TripData) => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    const docId = Date.now().toString();

    // Clean up AI response if it contains markdown formatting
    const cleanedTripData = TripData.replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsedData;
    try {
      parsedData = JSON.parse(cleanedTripData);
    } catch (error) {
      console.error("❌ Failed to parse AI response as JSON:", error);
      alert(
        "Oops! The generated plan has an unexpected format. Please try again."
      );
      setLoading(false);
      return;
    }

    try {
      await setDoc(doc(db, "AITrips", docId), {
        userChoice: formData,
        tripData: parsedData,
        userEmail: user?.email,
        id: docId,
      });
      navigate("/view-trip/" + docId);
    } catch (error) {
      console.error("❌ Error saving trip to Firestore:", error);
      alert(
        "Something went wrong while saving your plan. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Share your travel with GOWITHPORTO 🏖️🎋
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Give your wish and our AI can generate travel plan for you.
      </p>

      <div className="mt-20 flex flex-col gap-9">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination?
          </h2>
          <Input name="location" value="Porto" readOnly />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days will you stay?
          </h2>
          <Input
            placeholder="Enter the number of days"
            type="number"
            min={1}
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">Thought Your Budget?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleInputChange("budget", item.title)}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                  formData?.budget === item.title && "shadow-lg border-cyan-900"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
            {SelectTravelList.map((item, index) => (
              <div
                key={index}
                onClick={() =>
                  handleInputChange("people", {
                    label: item.people,
                    type: item.type,
                  })
                }
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${
                  formData?.people?.label === item.people &&
                  "shadow-lg border-cyan-900"
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 flex justify-center">
        <Button disabled={loading} onClick={OnGenerateTrip}>
          {loading ? "Generating Plan..." : "Generate Plan"}
        </Button>
      </div>
      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Please Login</h2>
            <p className="mb-4">
              You need to be logged in to generate a trip plan.
            </p>
            <Button onClick={login}>
              <FcGoogle className="h-7 w-7" />
              Login with Google
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTrip;
