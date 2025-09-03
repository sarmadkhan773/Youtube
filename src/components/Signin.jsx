


import React from "react";
import "../App.css";
import "../index.css";





function App() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white pt-16">

     
      <div
        className="bg-white w-[811px] h-[378px] shadow-lg rounded-xl p-8 flex flex-col justify-between"
       
      >
        
        <div className="flex justify-between items-start mb-4">
          
          <div>
            <img
              src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"
              alt="google logo"
              className=" h-[48px] [w-48px] mb-5"
            />
            <p className="  flex flex-col item-start  text-3xl text-left w-[93px] h-[40px] 
             font-[32px] mt-[24px]  text-gray-900 mb-1">Sign in</p>
             <br/>
            
            <p className="  h-[68px] w-[340px] flex flex-col item-start
              text-left text-sm text-black">with your Google Account to continue to YouTube. 
              This account will be available to other Google apps in the browser.</p>
          </div>

         
          <div className="flex flex-col w-[360px] h-20  mt-16">
            <input
              type="email"
              placeholder="Email or phone"
              className="border border-black px-2 py-1 w-[360px]  text-black  mb-2"
            />
            <a href="#" className="text-blue-600 text-sm hover:underline text-left mb-2">
              Forgot email?
            </a>
            <div className='mt-10'>
            <p className="text-black text-sm space-x-0 text-left  ">Not your computer? Use Guest mode to sign in privately.</p>
             <div className=" hover:underline text-left"> <a href="https://support.google.com/chrome/answer/6130773?hl=en"> Learn more about using Guest mode</a></div>
                       
                     <div className="flex w-full mt-2 ">
                          
                           <div className="mx-auto mt-16">
                       <a href="./Account.jsx" className="text-blue-600  ml-20 w-[133px]  h-[48px]">
                          Create account
                             </a>
                     </div>
                     <div className="ml-auto w-[86px] mt-16 h-[48px]">
                    <button className="bg-blue-400 text-blue-900  h-10 text-center  w-[78px] mr-2 rounded-full">
                            Next
                        </button>
                       </div>
</div>

            </div>
          </div>
        </div>
      </div>

     
      <div className="flex justify-between w-[811px] mt-4 text-xs text-black">
        <span>English</span>
        <span className="space-x-2 ">
          <a href="https://support.google.com/accounts?hl=en&visit_id=638923326195717679-2919032403&rd=2&p=account_iph#topic=3382296"
           className="hover:underline">Help</a>
          <a href="https://policies.google.com/privacy?gl=PK&hl=en" className="hover:underline">Privacy</a>
          <a href="https://policies.google.com/terms?gl=PK&hl=en" className="hover:underline">Terms</a>
        </span>
      </div>

    </div>
  );
}

export default App;