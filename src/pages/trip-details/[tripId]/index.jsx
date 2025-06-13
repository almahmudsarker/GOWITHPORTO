import { db } from "@/service/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TripDetails = () => {
  const { tripId } = useParams();
  const [trip, setTrip] = useState(null);
  useEffect(() => {
    tripId && GetTripData();
  }, [tripId]);
  const GetTripData = async () => {
    const docRef = doc(db, "AITrips", tripId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setTrip(docSnap.data());
    } else {
      console.log("No such document!");
    }
  };
  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        <div className="layout-container flex h-full grow flex-col">
          <div className="px-40 flex flex-1 justify-center py-5">
            <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
              {/* banner image sections */}
              {/* <div className="@container">
                <div className="@[480px]:px-4 @[480px]:py-3">
                  <div
                    className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-gray-50 @[480px]:rounded-xl min-h-[218px]"
                    style={{
                      backgroundImage: 'url("/GOWITHPORTO LOGO.png")',
                    }}
                  ></div>
                </div>
              </div> */}

              <div className="flex flex-wrap justify-between gap-3 p-4">
                <p className="text-[#101518] tracking-light text-[32px] font-bold leading-tight min-w-72">
                  Your Porto Adventure Awaits: {trip?.tripData?.destination} for{" "}
                  {trip?.userChoice?.noOfDays} days
                </p>
              </div>

              {/* hotels */}
              <Section title="Recommended Hotels">
                {trip?.tripData?.hotels?.length > 0 ? (
                  trip?.tripData?.hotels?.map((hotel, index) => (
                    <Card
                      key={index}
                      image="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG90ZWx8ZW58MHx8MHx8fDA%3D"
                      title={hotel.name}
                      subtitle={hotel.description}
                    />
                  ))
                ) : (
                  <p>No hotel data available.</p>
                )}
              </Section>

              {/* Itinerary */}

              {trip?.tripData?.itinerary ? (
                Object.entries(trip.tripData.itinerary).map(
                  ([dayKey, places]) => (
                    <Section
                      key={dayKey}
                      title={`Itinerary ${dayKey.replace("day", "Day ")}`}
                    >
                      {places && places.length > 0 ? (
                        places.map((place, index) => (
                          <Card
                            key={index}
                            image="https://images.unsplash.com/photo-1591028544607-57e17c55e8c9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRvfGVufDB8fDB8fHww"
                            title={place.name}
                            subtitle={place.description}
                            bestTime={place.bestTime}
                            travelTime={place.travelTime}
                            rating={place.rating}
                          />
                        ))
                      ) : (
                        <p className="text-gray-500">
                          No places planned for this day.
                        </p>
                      )}
                    </Section>
                  )
                )
              ) : (
                <Section title="Itinerary">
                  <p className="text-gray-500">No itinerary data available.</p>
                </Section>
              )}

              {/* Food Suggestions */}
              <Section title="Food Suggestions" isVertical>
                {foodSuggestions.map((food, index) => (
                  <FoodSuggestion key={index} {...food} />
                ))}
              </Section>
            </div>
          </div>
        </div>
      </div>

      {/* static contents starts */}
      <div className=" w-full max-w-screen-md mx-auto mt-8 px-4">
        <div className="">
          <div>
            <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Guide to Hire
            </h3>

            {[
              {
                name: "Isabella Rossi",
                desc: "Licensed local guide specializing in historical tours. 5-star rating.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAV7UNRRLxock9y0k80ig7db-BRU0W1f4-wMkbkSmhbWlSH1vMg5Oo5QzzQIM7VFR9462EjnMdVC7_6CJZcfh2Hd2psoRKe9ALfjDAwCik2Rfxo4F89HvQZ4YfnlwAFcI8kUcOeLwjiSfKD76u0eyZRMz3gDXHGk7eQSA4aDebAsWuAX63ojPcasTL5IhkgFbmI5tGmOH7g-d_LjuWWfopA7_ifaIC1tl1lg5PEwK079vKFa7Ju-Drzs40juCZC3nXTlzWQvhP4wiM",
              },
              {
                name: "Marco Bianchi",
                desc: "Expert in Porto's culinary scene, offering food and wine tours. 4.8-star rating.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDHmeONP23tW8JNcspNfQWD3pTPRE6K2uj8ByIzefGgDDqBsS8oMLTf3PQypY2-s6qXjdGoUMvHQ9bCHFcfPROnaMfWe7czCigYDthW9SohS1U7cKGzkbiZj9kyfIRKS3NY_DcG9bh83g_HPCVNiIbBlq3NIFUUlBXt-WufRiI7hrOrevxDEhY_AIGG1ONmvEEd3W-ES6UxMz7qBNL1L48sYPv7OciAPf3fsMHaOjtWLhTrQ40Ihb8T6_gbZssUY2L2yaTWKgNhR4I",
              },
              {
                name: "Sophia Lombardi",
                desc: "Art historian providing insightful tours of Porto's architecture and museums. 4.9-star rating.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEsgIJ6K8nPayYPUAVR2iGexOBgecDgtTKXjUiOYoUu5GHErlcwZ7HEs7vGulSKnoZuvRsv6j4TBPJE55Hbk1lQXGzdgpyueeKH5ZobQ1-C_QarHj16deGKK1B451Ixz6-btW1M-XVxmnm83B72m_tlZrtX1TVPdTEJagAJYh_cTpVSQmdDT11z8whnUoWmox5Q7wTzHb8h2H1sWeorZYbxy3fygOLC96PDFBFqEXkldqn_ZwvUCB0bIY0LGrrRTnaqVw2qk832Ic",
              },
            ].map((guide, index) => (
              <div key={index} className="p-4">
                <div className="flex items-stretch justify-between gap-4 rounded-xl">
                  <div className="flex flex-[2_2_0px] flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#1B3936] text-base font-bold leading-tight">
                        {guide.name}
                      </p>
                      <p className="text-[#5c788a] text-sm font-normal leading-normal">
                        {guide.desc}
                      </p>
                    </div>
                    <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#1B3936] text-white text-sm font-medium leading-normal w-fit">
                      <span className="truncate">Book Now</span>
                    </button>
                  </div>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                    style={{ backgroundImage: `url(${guide.image})` }}
                  ></div>
                </div>
              </div>
            ))}

            <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Rent a Bicycle
            </h3>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-xl">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#1B3936] text-base font-bold leading-tight">
                      Bike Tours Porto
                    </p>
                    <p className="text-[#5c788a] text-sm font-normal leading-normal">
                      Explore Porto on two wheels with our half-day city bike
                      rentals. €15 for a half-day.
                    </p>
                  </div>
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#1B3936] text-white text-sm font-medium leading-normal w-fit">
                    <span className="truncate">Learn More</span>
                  </button>
                </div>
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCB3sWHM2krnlTY-Cwu5CBi0w-YnhO9T3ThHkJ2Yviuvfa3acA7S8ScbT1TAj0w6ZJNj8EKse23h0rYsVy8Ouin1gH6mKkwt4eCOVEZ3M1blJ8F7VBUeYJBeilrf7lZNKnNPH3YatXn1ar9N6v242mLVxFOJw-q49hjwoWTNSd9WIDX7xdtC_jIN87SHl9C-u8RAEQepPL5dKmEq5SRZTvTnqLCVERqv7PILI9wsXkLZn6z8Oc6_5mBWc6lNMtDhdMjUEXV3GuyyUk')",
                  }}
                ></div>
              </div>
            </div>

            <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Souvenir Items
            </h3>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                {[
                  {
                    name: "Cork Handbag",
                    desc: "Stylish and sustainable cork handbag, a unique Portuguese craft. €45",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-nUICV1cv1cWcYJwMN6dmTBrtm_ZycgmxugFecCuZyS-bLKpRJEF444PFamwuIPcQUYoZcrIAJeSldlYs2mDY37pXTxGULN-UysmrTKHIYE92xq53BtFGLaeQqIGbh7A2Hc1HGaAKNtFR36ujhR8kgRNDYXKYKfdYsQjZSKZg2_oJuRCI2WsbaC0UNnrIBcLhJMyw0Wy-aQDhElyLvi2dKUMpbJvkLEfmTsLFKYYN0n0qIdOJZKxS0JRxwuNPXEF7f4_jXCNUaqg",
                  },
                  {
                    name: "Cork Wallet",
                    desc: "Durable and eco-friendly cork wallet, perfect for everyday use. €25",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuB9Rw9kqRW6On-3xF46I35Gl_4JSTVIOatbpLUNQ9-Ar3g9d6HpUniA4DfqnOikplNw7jWlwCC-pHbA7KRJxE8keIsOZMijkCTuGBXhMYsPGfHMiGqcuV8P_13NAV-VcUMHXV2_-qscbg-9atidfI53J65dEIZEaaXrwStb2BeIJCtMi2Q3qq0sFUXqc6bAV4Dl3r7Q1GXGrL8UFIobHA8FNWVZJ20uJIuBJMPK8iGZ62QGajb85LPdAD2JquFDUFSqameuNhR9IGA",
                  },
                  {
                    name: "10-Year Tawny Port",
                    desc: "A rich and complex fortified wine with notes of caramel and dried fruit. €30",
                    image:
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuBV7XO13xRA5WLjFPf_m51fFosBtj6itZDXLUeR7azZH9AVHFRYdUJy5DybjQ2r7LpvztLniJ9nyrUm4PaIeQ9geWBAHd4rZNryVBv_xmMpEWroolvrnLxHXHdam0_GnJ0m_R8FXI1pEmNevyixtStpOzwxaLkprdr6AfRpi44JLU7lbex18Hu-G15lVw943Vt4qzxcX89VthXP8S9fNoi_yilE9EVKe8UX16Nzn1qdkHvw355rM4N-6IIzeLJ6dBD6dkE2l9teb4Y",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40"
                  >
                    <div
                      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div>
                      <p className="text-[#101518] text-base font-medium leading-normal">
                        {item.name}
                      </p>
                      <p className="text-[#5c788a] text-sm font-normal leading-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[#101518] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              Based on your preferences for a {trip?.userChoice?.budget}{" "}
              {trip?.userChoice?.people?.type} trip in Porto lasting{" "}
              {trip?.userChoice?.noOfDays} day...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Section = ({ title, children, isVertical = false }) => (
  <>
    <h3 className="text-[#101518] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
      {title}
    </h3>
    <div
      className={`${
        isVertical
          ? "flex flex-col gap-4"
          : "flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      }`}
    >
      <div className="flex items-stretch p-4 gap-3">{children}</div>
    </div>
  </>
);

const Card = ({ image, title, subtitle, bestTime, travelTime, rating }) => (
  <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40">
    <div
      className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div>
      <p className="text-[#101518] text-base font-medium leading-normal">
        {title}
      </p>
      <p className="text-[#5c788a] text-sm font-normal leading-normal">
        {subtitle}
      </p>
      {bestTime && (
        <p className="text-[#5c788a] text-sm font-normal leading-normal">
          {`Best Time to Visit: ${bestTime}`}
        </p>
      )}
      {travelTime && (
        <p className="text-[#5c788a] text-sm font-normal leading-normal">
          {`Travel Time: ${travelTime}`}
        </p>
      )}
      {rating && (
        <p className="text-[#5c788a] text-sm font-normal leading-normal">
          {`Rating: ${rating}`}
        </p>
      )}
    </div>
  </div>
);

const FoodSuggestion = ({ title, description, image }) => (
  <div className="p-4">
    <div className="flex items-stretch justify-between gap-4 rounded-xl">
      <div className="flex flex-[2_2_0px] flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[#101518] text-base font-bold leading-tight">
            {title}
          </p>
          <p className="text-[#5c788a] text-sm font-normal leading-normal">
            {description}
          </p>
        </div>
        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#1B3936] text-white text-sm font-medium leading-normal w-fit">
          <span className="truncate">Find on Map</span>
        </button>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  </div>
);

const foodSuggestions = [
  {
    title: "Francesinha at Restaurante Cervejaria Brasão Aliados",
    description:
      "A classic Porto sandwich with layers of meat, sausage, and cheese, covered in a rich tomato and beer sauce.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdlN9mRp32XF4g5Z9PVVjOB0E_zD4WosBnmnQV06YEsCSnYuSf4aIq22CLcT9L4LLC4-1EnDoZBQFqGp73-tHM6HyzLliiNDmaGC-s3RwrrK0noFiE848YWC18XFMtRLNHWKpjLYvGNqvPw-47u1iK_aq35mor58X7La473B9VcLH8z24g9C2LCg-9ltYh4rSQmo47ZfHQiQEjMfdYqkAOcfkcHaSi20ga5QJHRFM8nsGGURinU-aMyDABwbEG5eWP_lTUiSXZcoc",
  },
  {
    title: "Pastel de Nata at Manteigaria",
    description:
      "Famous Portuguese custard tarts with a flaky crust and creamy filling, dusted with cinnamon.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDifdI3chr3T0f7l9nIGGLGb9I5EGbUbETRQWCONES8dYarErl8Tx9oQ-0-KHW2gcbcIBU995x2PoGu0sRMYcr...",
  },
];

export default TripDetails;
