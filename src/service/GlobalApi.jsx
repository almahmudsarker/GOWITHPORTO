const BASEURL = "https://places.googleapis.com/v1/places:searchText";
const config = {
    headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_API_KEY,
        "X-Goog-FieldMask": {
            'places.photos',
            'places.displayName',
            'places.id',
        },
    } 
}

export const GetPlaceDetails = (data) => axios.post(BASEURL, data, config)
