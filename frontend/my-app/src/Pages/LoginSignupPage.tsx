import { Tabs } from "@/components/ui/tabs";
import Login from "../Components/Login";
import Signup from "../Components/Signup";

const LoginSignupPage: React.FC = () => {
  const tabs = [
    {
      title: "Login",
      value: "Login",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">
          <Login />

        </div>
      ),
    },
    {
      title: "Signup",
      value: "Signup",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white ">

          <Signup />
        </div>
      ),
    },
  ];



  return (
    <div className="bg-vs-black text-white p-6 rounded-lg w-full  font-mono">
      <div className="h-screen [perspective:1000px] relative b flex flex-col max-w-screen mx-auto w-full  items-start justify-start my-10">
        <Tabs tabs={tabs} />
      </div>

     
    </div>

 
  );
};

export default LoginSignupPage;
