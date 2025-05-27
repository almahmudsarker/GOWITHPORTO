import Header from "@/components/shared/header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <div className="pt-24 min-h-[calc(100vh-188.250px)]">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Main;
