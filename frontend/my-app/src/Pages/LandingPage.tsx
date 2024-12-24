import Lobby from "../Components/Lobby";

const LandingPage = () => {
  return (
    <div className="size-screen bg-[#1e1e1e] flex items-center justify-center text-white overflow-hidden">
      <div className="z-20">
        <Lobby />
      </div>
    </div>
  );
};

export default LandingPage;
