import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  AI_PROMPT,
  SelectBudgetOptions,
  SelectTravelList,
} from "@/constants/options";
import { generateAIContent } from "@/service/AiModal";
import { useEffect, useState } from "react";

const CreateTrip = () => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    handleInputChange("location", "Porto");
  }, []);

  const OnGenerateTrip = async () => {
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
    } catch (error) {
      console.error("❌ Error generating trip:", error);
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
        <Button onClick={OnGenerateTrip}>Generate Plan</Button>
      </div>
    </div>
  );
};

export default CreateTrip;
