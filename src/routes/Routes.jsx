// import DashboardLayout from "../layouts/DashboardLayout";
// import About from "../pages/About/About";
// import AddService from "../pages/Admin/AddService";
// import MakeAdmin from "../pages/Admin/MakeAdmin";
// import ManageService from "../pages/Admin/ManageService";
// import Order from "../pages/Admin/Order";
// import Users from "../pages/Admin/Users";
// import Contact from "../pages/Contact/Contact";
// import Login from "../pages/Login/Login";
// import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
// import SignUp from "../pages/Signup/SignUp";
// import Book from "../pages/dashboard/Book";
// import MyBooking from "../pages/dashboard/MyBooking";
// import MyCart from "../pages/dashboard/MyCart";
// import Profile from "../pages/dashboard/Profile";
// import Review from "../pages/dashboard/Review";
// import PrivateRoute from "./PrivateRoute";
import CreateTrip from "@/pages/create-trip/CreateTrip.jsx";
import HomeGalilio from "@/pages/home/HomeGalilio.jsx";
import TripDetails from "@/pages/trip-details/[tripId]/index.jsx";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page.jsx";
import Main from "../layouts/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        // element: <Home />,
        element: <HomeGalilio />,
      },
      {
        path: "/create-trip",
        element: <CreateTrip />,
      },
      {
        path: "/view-trip/:tripId",
        element: <TripDetails />,
      },
      // {
      //   path: "/service/:id",
      //   element: (
      //     <PrivateRoute>
      //       <ServiceDetails />
      //     </PrivateRoute>
      //   ),
      // },
    ],
    // },
    // {
    //   path: "/about",
    //   element: <About />,
    // },
    // {
    //   path: "/contact",
    //   element: <Contact />,
    // },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/signup",
    //   element: <SignUp />,
    // },
    // {
    //   path: "/dashboard",
    //   element: (
    //     <PrivateRoute>
    //       <DashboardLayout />
    //     </PrivateRoute>
    //   ),
    //   children: [
    //     {
    //       path: "/dashboard/profile",
    //       element: <Profile />,
    //     },
    //     {
    //       path: "/dashboard/review",
    //       element: <Review />,
    //     },
    //     {
    //       path: "/dashboard/my-cart",
    //       element: <MyCart />,
    //     },
    //     {
    //       path: "/dashboard/my-booking",
    //       element: <MyBooking />,
    //     },
    //     {
    //       path: "/dashboard/payment/:id",
    //       element: <Book />,
    //     },
    //     {
    //       path: "/dashboard/order-list",
    //       element: <Order />,
    //     },
    //     {
    //       path: "/dashboard/add-service",
    //       element: <AddService />,
    //     },
    //     {
    //       path: "/dashboard/make-admin",
    //       element: <MakeAdmin />,
    //     },
    //     {
    //       path: "/dashboard/manage-service",
    //       element: <ManageService />,
    //     },
    //     {
    //       path: "/dashboard/users-list",
    //       element: <Users />,
    //     },
    //   ],
    // },
  },
]);
