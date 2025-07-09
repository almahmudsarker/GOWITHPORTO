import { Link } from "react-router-dom";

const HomeGalilio = () => {
  return (
    <div>
      <div
        className="relative flex min-h-screen flex-col bg-[#f0f6fa] justify-between overflow-x-hidden"
        style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
      >
        {/* Hero Section */}
        <div className="@container">
          <div className="@[480px]:p-4">
            <div
              className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url('https://cdn.usegalileo.ai/sdxl10/97bcd939-8b07-443d-b6bd-97ee084fbbb6.png')",
              }}
            >
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                  Plan Your Porto Adventure
                </h1>
                <h2 className="text-white text-sm @[480px]:text-base">
                  Explore Porto with AI-powered recommendations.
                </h2>
              </div>
              <Link to="/create-trip">
                <button className="flex h-10 @[480px]:h-12 px-4 @[480px]:px-5 rounded-full bg-[#57b9ea] text-white text-sm font-bold @[480px]:text-base">
                  <span className="truncate">Generate My Plan</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Preferences Section */}
        <div className="@container">
          <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-[#0b181e] text-[32px] font-bold @[480px]:text-4xl">
                Customize Your Trip
              </h1>
              <p className="text-[#0b181e] text-base max-w-[720px]">
                Tell us your preferences for a personalized plan.
              </p>
            </div>
            <div className="flex justify-center">
              <label className="flex flex-col min-w-40 h-14 max-w-[480px] flex-1 @[480px]:h-16">
                <div className="flex w-full h-full items-stretch rounded-xl">
                  <input
                    placeholder="Enter your travel dates, interests, etc."
                    className="form-input w-full flex-1 resize-none rounded-xl border-none bg-[#ddecf3] h-full px-4 pr-2 text-sm @[480px]:text-base placeholder:text-[#3b82a5]"
                  />
                  <div className="flex items-center justify-center rounded-r-xl bg-[#ddecf3] pr-2">
                    <button className="h-10 @[480px]:h-12 px-4 @[480px]:px-5 rounded-full bg-[#57b9ea] text-[#0b181e] text-sm font-bold @[480px]:text-base">
                      <span className="truncate">Generate My Plan</span>
                    </button>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Dashboard Section */}
        <h2 className="text-[#0b181e] text-[22px] font-bold px-4 pb-3 pt-5">
          Your Dashboard
        </h2>
        <div className="flex overflow-x-auto px-4 pb-6 gap-3">
          {[
            {
              title: "Itinerary Suggestions",
              subtitle: "Your daily travel plan.",
              img: "https://cdn.usegalileo.ai/sdxl10/3e255385-646b-4e05-8f8c-60d0f7c3f6df.png",
            },
            {
              title: "Hotel Recommendations",
              subtitle: "Top-rated hotels in Porto.",
              img: "https://cdn.usegalileo.ai/sdxl10/ecf04248-5223-4fce-bb03-27466986da64.png",
            },
            {
              title: "Must-Try Foods",
              subtitle: "Taste the best of Porto.",
              img: "https://cdn.usegalileo.ai/sdxl10/c1520a2e-44c6-4421-9393-52ad7a2d6beb.png",
            },
            {
              title: "Souvenirs",
              subtitle: "Shop unique Porto items.",
              img: "https://cdn.usegalileo.ai/sdxl10/2dedcea2-b04d-442b-a591-ebe8ac52f2b1.png",
            },
            {
              title: "Local Guides",
              subtitle: "Hire experienced local guides.",
              img: "https://cdn.usegalileo.ai/sdxl10/efa04f6c-e16e-4fe6-9fe2-e5cffa92a2f3.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-xl bg-[#f0f6fa] shadow-md min-w-60"
            >
              <div
                className="aspect-video bg-center bg-cover rounded-xl"
                style={{ backgroundImage: `url(${item.img})` }}
              ></div>
              <div className="p-4 pt-0 flex flex-col justify-between gap-4">
                <div>
                  <p className="text-[#0b181e] text-base font-medium">
                    {item.title}
                  </p>
                  <p className="text-[#3b82a5] text-sm">{item.subtitle}</p>
                </div>
                <button className="h-10 px-4 rounded-full bg-[#ddecf3] text-[#0b181e] text-sm font-bold">
                  <span className="truncate">Explore</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Souvenir Shopping */}
        <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0b181e]">
          Souvenir Shopping
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {[
            "Port Wine",
            "Handmade Tiles",
            "Cork Products",
            "Portuguese Ceramics",
            "Local Art",
            "Traditional Sweets",
          ].map((item, i) => (
            <div className="flex flex-col gap-3 pb-3" key={i}>
              <div
                className="aspect-square w-full rounded-xl bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(https://cdn.usegalileo.ai/sdxl10/${
                    [
                      "c1f71f04-d4e5-4111-8a37-6613de03d21c",
                      "c598f6d0-1727-4e4f-8c17-2b2ebce17c7a",
                      "201926e9-c6df-4cf9-9767-6ddb72d029bd",
                      "4f5fb073-7662-424b-8794-7d0c17824c1e",
                      "bff8a06e-46bf-43aa-8d22-a0c5e39c9317",
                      "6751d3eb-2b08-4486-a67f-9f6f5cb2799c",
                    ][i]
                  }.png)`,
                }}
              ></div>
              <div>
                <p className="text-base font-medium leading-normal text-[#0b181e]">
                  {item}
                </p>
                <p className="text-sm font-normal leading-normal text-[#3b82a5]">
                  ${[30, 15, 25, 40, 20, 10][i]}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-stretch">
          <div className="flex flex-1 flex-wrap justify-between gap-3 px-4 py-3">
            <button className="h-10 min-w-[84px] max-w-[480px] rounded-full bg-[#57b9ea] px-4 text-sm font-bold text-[#0b181e]">
              Add to Cart
            </button>
            <button className="h-10 min-w-[84px] max-w-[480px] rounded-full bg-[#ddecf3] px-4 text-sm font-bold text-[#0b181e]">
              View Details
            </button>
          </div>
        </div>

        {/* AI Suggestions */}
        <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0b181e]">
          AI-Generated Suggestions
        </h2>
        <div className="px-4 py-3">
          <div
            className="aspect-video w-full rounded-xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url(https://cdn.usegalileo.ai/maps/e3f91964-9ad5-4c00-8596-c022d13c209f.png)",
            }}
          ></div>
        </div>
        <div className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl bg-[#f0f6fa] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-base font-bold leading-tight text-[#0b181e]">
                  Hotel Porto Charm
                </p>
                <p className="text-sm font-normal leading-normal text-[#3b82a5]">
                  $120 per night | 4.8/5
                </p>
              </div>
              <button className="flex w-fit items-center gap-1 rounded-full bg-[#ddecf3] px-4 pr-2 text-sm font-medium text-[#0b181e] h-8">
                Book Now
              </button>
            </div>
            <div
              className="aspect-video flex-1 rounded-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://cdn.usegalileo.ai/replicate/91e15c55-3b4d-4984-8d44-41a102df9818.png)",
              }}
            ></div>
          </div>
        </div>

        {/* Local Guide */}
        <div className="flex items-center justify-between gap-4 bg-[#f0f6fa] px-4 py-2 min-h-[72px]">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#ddecf3] text-[#0b181e]">
              📍
            </div>
            <div className="flex flex-col justify-center">
              <p className="line-clamp-1 text-base font-medium leading-normal text-[#0b181e]">
                Ribeira District Walk
              </p>
              <p className="line-clamp-2 text-sm font-normal leading-normal text-[#3b82a5]">
                Explore Porto's historic riverside.
              </p>
            </div>
          </div>
          <button className="w-fit rounded-full bg-[#ddecf3] px-4 text-sm font-medium text-[#0b181e] h-8">
            View Route
          </button>
        </div>

        <h2 className="px-4 pb-3 pt-5 text-[22px] font-bold leading-tight tracking-[-0.015em] text-[#0b181e]">
          Hire a Local Guide
        </h2>
        <div className="flex flex-wrap gap-3 px-4 py-3">
          <div className="flex basis-[fit-content] flex-1 flex-col items-center gap-2 rounded-lg border border-[#c7dfeb] p-3 text-center min-w-[111px]">
            <p className="text-2xl font-bold leading-tight tracking-light text-[#0b181e]">
              4.9
            </p>
            <p className="text-sm font-normal leading-normal text-[#3b82a5]">
              Rating
            </p>
          </div>
          <div className="flex basis-[fit-content] flex-1 flex-col items-center gap-2 rounded-lg border border-[#c7dfeb] p-3 text-center min-w-[111px]">
            <p className="text-2xl font-bold leading-tight tracking-light text-[#0b181e]">
              $50/hr
            </p>
            <p className="text-sm font-normal leading-normal text-[#3b82a5]">
              Price
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-stretch justify-between gap-4 rounded-xl bg-[#f0f6fa] p-4 shadow-[0_0_4px_rgba(0,0,0,0.1)]">
            <div className="flex flex-[2_2_0px] flex-col gap-4">
              <div className="flex flex-col gap-1">
                <p className="text-base font-bold leading-tight text-[#0b181e]">
                  Ana Silva - History Expert
                </p>
                <p className="text-sm font-normal leading-normal text-[#3b82a5]">
                  Specializes in Porto's rich history.
                </p>
              </div>
              <button className="flex w-fit items-center gap-1 rounded-full bg-[#ddecf3] px-4 pr-2 text-sm font-medium text-[#0b181e] h-8">
                Hire Now
              </button>
            </div>
            <div
              className="aspect-video flex-1 rounded-xl bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://cdn.usegalileo.ai/sdxl10/40910424-bb3e-4527-b27a-844d497b702b.png)",
              }}
            ></div>
          </div>
        </div>
        {/* Footer Section */}
        {/* Bottom Navigation */}
        <div className="flex gap-2 border-t border-[#ddecf3] bg-[#f0f6fa] px-4 pb-3 pt-2">
          {[
            { label: "Home", iconColor: "#0b181e" },
            { label: "Explore", iconColor: "#3b82a5" },
            { label: "Favorites", iconColor: "#3b82a5" },
            { label: "Profile", iconColor: "#3b82a5" },
          ].map(({ label, iconColor }) => (
            <a
              key={label}
              className="flex flex-1 flex-col items-center justify-end gap-1 text-[#3b82a5]"
              href="#"
            >
              <div
                className={`flex h-8 items-center justify-center text-[${iconColor}]`}
              >
                {/* You can place appropriate icons or use Lucide/React Icons */}
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="text-inherit"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              <p className="text-xs font-medium leading-normal tracking-[0.015em] text-inherit">
                {label}
              </p>
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <footer className="flex flex-col gap-6 px-5 py-10 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 md:flex-row md:justify-around">
            {["Privacy Policy", "Terms of Service", "Contact Us"].map(
              (text) => (
                <a
                  key={text}
                  className="text-[#3b82a5] text-base font-normal leading-normal min-w-40"
                  href="#"
                >
                  {text}
                </a>
              )
            )}
          </div>

          {/* Social Media */}
          <div className="flex flex-wrap justify-center gap-4">
            {["facebook", "instagram", "twitter"].map((media) => (
              <a key={media} href="#">
                <div className="text-[#3b82a5]">
                  <svg width="24" height="24" fill="currentColor">
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </div>
              </a>
            ))}
          </div>

          <p className="text-[#3b82a5] text-base font-normal leading-normal">
            © 2023 GoWithPorto. All rights reserved.
          </p>
        </footer>

        {/* Bottom Padding */}
        <div className="h-5 bg-[#f0f6fa]" />
      </div>
    </div>
  );
};

export default HomeGalilio;
