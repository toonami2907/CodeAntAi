import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { useState } from "react";
import Card1 from "../Card1";
import Card2 from "../Card2";
import { useNavigate } from "react-router-dom";

const authProviders = [
  { name: "Sign in with Github", img: "/giticon.png" },
  { name: "Sign in with Bitbucket", img: "/Icon.png" },
  { name: "Sign in with Azure Devops", img: "/ms.png" },
  { name: "Sign in with GitLab", img: "/bucket.png" },
];

const selfHostedAuth = [
  { name: "Sign in with GitLab", img: "/bucket.png" },
  { name: "Sign in with SSO", img: "/SSO.png" },
];

const SignIn = () => {
  const [activeTab, setActiveTab] = useState("SAAS");
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen w-full">
      <section className="hidden md:flex flex-col relative items-center justify-center  overflow-hidden">
        <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
          <Card1 />
          <div className="absolute z-50 -bottom-36 -right-5 transform hover:scale-105 transition-transform duration-300">
            <Card2 />
          </div>
        </div>
        <div className="absolute -bottom-5 -left-3">
          <img
            src="/Subtract.png"
            alt="Background decoration"
            className="w-[284px] h-[319px] opacity-75"
          />
        </div>
      </section>

      <section className="bg-[#FAFAFA] flex flex-col items-center justify-center px-4 py-8 md:px-6">
        <div className="w-full max-w-[672px] rounded-[8px] flex flex-col items-center">
          <div className="bg-white p-6 md:p-8 border rounded-t-[8px] w-full flex flex-col items-center gap-7">
            <div className="flex flex-col gap-7 w-full max-w-[624px]">
              <div className="place-self-center">
                <img
                  src="/Frame 9.png"
                  alt="CodeAnt AI Logo"
                  className="h-10 w-auto max-w-[201.38px]"
                />
              </div>
              <h1 className="text-2xl md:text-3xl font-semibold text-[#181D27] text-center">
                Welcome to CodeAnt AI
              </h1>
            </div>
            <div className="w-full max-w-[624px]">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                defaultValue="SAAS"
                className="w-full"
              >
                <TabsList className="grid grid-cols-2 h-[57px] bg-white w-full rounded-[8px]">
                  <TabsTrigger
                    className="h-[55px] rounded-[8px] text-lg md:text-xl text-[#414651] font-semibold bg-[#FAFAFA] transition-all
                    data-[state=active]:bg-[#1570EF] data-[state=active]:text-white hover:bg-[#F5F5F5]"
                    value="SAAS"
                  >
                    SAAS
                  </TabsTrigger>
                  <TabsTrigger
                    className="h-[55px] rounded-[8px] text-lg md:text-xl text-[#414651] font-semibold bg-[#FAFAFA] transition-all
                    data-[state=active]:bg-[#1570EF] data-[state=active]:text-white hover:bg-[#F5F5F5]"
                    value="Self Hosted"
                  >
                    Self Hosted
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </div>
          {activeTab === "SAAS" && (
            <div className="bg-white p-6 md:p-8 gap-4 border-x border-b rounded-b-[8px] w-full flex flex-col items-center">
              {authProviders.map((auth, idx) => (
                <Button
                  key={idx}
                  onClick={() => navigate("/dashboard")}
                  className="hover:bg-gray-50 bg-white text-[#414651] shadow-none text-sm rounded-[8px] 
                flex gap-3 items-center border border-[#D5D7DA] h-[57.59px] w-full max-w-[446px]
                transition-all duration-200 hover:border-[#1570EF] hover:shadow-sm
                active:transform active:scale-[0.99]"
                >
                  <img
                    src={auth.img}
                    alt={`${auth.name} icon`}
                    className="h-[25px] w-[25px] object-contain"
                  />
                  <span className="text-[16px] text-[#171717] font-medium">
                    {auth.name}
                  </span>
                </Button>
              ))}
            </div>
          )}
          {activeTab === "Self Hosted" && (
            <div className="bg-white p-6 md:p-8 gap-4 border-x border-b rounded-b-[8px] w-full flex flex-col items-center">
              {selfHostedAuth.map((auth, idx) => (
                <Button
                  key={idx}
                  onClick={() => navigate("/dashboard")}
                  className="hover:bg-gray-50 bg-white text-[#414651] shadow-none text-sm rounded-[8px] 
                flex gap-3 items-center border border-[#D5D7DA] h-[57.59px] w-full max-w-[446px]
                transition-all duration-200 hover:border-[#1570EF] hover:shadow-sm
                active:transform active:scale-[0.99]"
                >
                  <img
                    src={auth.img}
                    alt={`${auth.name} icon`}
                    className="h-[25px] w-[25px] object-contain"
                  />
                  <span className="text-[16px] text-[#171717] font-medium">
                    {auth.name}
                  </span>
                </Button>
              ))}
            </div>
          )}
          <p className="my-4 text-[#181D27] text-sm md:text-base text-center">
            By signing up you agree to the{" "}
            <button className="font-bold hover:text-[#1570EF] transition-colors">
              Privacy Policy
            </button>
            .
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
