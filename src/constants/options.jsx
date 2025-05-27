export const SelectTravelList = [
  {
    id: 1,
    title: "Solo Adventure",
    desc: "Embark on a journey of self-discovery",
    icon: "🎒",
    people: "1 person",
    type: "solo traveler",
  },
  {
    id: 2,
    title: "Romantic Getaway",
    desc: "Experience the world together",
    icon: "💑",
    people: "2 people",
    type: "couple",
  },
  {
    id: 3,
    title: "Family Fun",
    desc: "Create unforgettable memories with loved ones",
    icon: "🏠",
    people: "3 to 4 people",
    type: "family",
  },
  {
    id: 4,
    title: "Friends' Escapade",
    desc: "Thrilling adventures with your best pals",
    icon: "🧑‍🤝‍🧑",
    people: "5 to 10 people",
    type: "group of friends",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Budget-Friendly",
    desc: "Travel smart, spend less",
    icon: "💸",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Balance comfort and cost",
    icon: "💵",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Indulge in lavish experiences",
    icon: "💎",
  },
];

export const AI_PROMPT = `
You are a travel assistant. Create a detailed travel plan in JSON format.

Destination: {location}  
Number of Days: {totalDays}  
Traveler Type: {traveler}  
Budget: {budget}

Instructions:
1. Suggest 3 hotel options with:
   - Name
   - Address
   - Working image URL
   - Geo coordinates
   - Rating
   - Short description

2. Create a {totalDays}-day itinerary:
   - For each day, suggest 2-3 places to visit
   - Include place name, description, image URL, geo coordinates, rating, estimated ticket price, best time to visit, and estimated travel time between locations

Output only valid JSON. Do not include any explanation or extra text.
`;

export const PHOTO_REF_URL =
  "https://places.googleapis.com/v1/{NAME}/media?maxHeightPx=600&maxWidthPx=600&key=" +
  import.meta.env.VITE_GOOGLE_PLACE_API_KEY;
