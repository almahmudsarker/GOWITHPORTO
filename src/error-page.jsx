import { Button } from "@/components/ui/button";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src="/GOWITHPORTO Error.jpg" alt="" />
      <Link to="/" className="relative">
        <Button className="p-6 hover:bg-teal-700 bg-teal-600 text-white cursor-pointer absolute top-[-586px] left-[470px] font-bold ">
          GO Back To Porto
        </Button>
      </Link>
    </div>
  );
}
