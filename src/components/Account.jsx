

import "../App.css";
import "../index.css";

import React, { useState } from "react";

function Account() {
  const [step, setStep] = useState(1);

  
  const [firstName, setFirstName] = useState("");
  const  [lastName, setLastName] = useState("");
  const  [month, setMonth] = useState("");
  const     [day, setDay] = useState("");
  const    [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const  [email, setEmail] = useState("");

  const nextStep = () => {setStep(step + 1);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 pt-16">
    <div className="bg-white max-w-[811px] w-full shadow-lg rounded-xl p-8">
    <div className="flex flex-col md:flex-row justify-between">
         
          <div className="md:w-1/2 mb-6 md:mb-0">
          <img src="https://cdn2.hubspot.net/hubfs/53/image8-2.jpg" alt="Google Logo" className="h-12 mb-5"
            />

   {step === 1 && (
              <>
                <h2 className="text-2xl flex text-left font-semibold mb-2"> Create your Google Account</h2>
                <p className="text-sm flex text-left text-gray-700">Enter your name to continue to YouTube.</p>
              </>
            )}

     {step === 2 && (
       <>
       <h2 className="text-2xl flex text-left font-semibold mb-2">Basic Information</h2>
         <p className="text-sm flex text-left text-gray-700">Enter your birthday and gender.</p>
              </>
            )}

  {step === 3 && (
              <>
     <h2 className="text-2xl flex text-left font-semibold mb-2">Choose your Email</h2>
         <p className="text-sm flex text-left text-gray-700">Enter your email address.</p>
              </>
            )}
          </div>

         
          <div className="md:w-1/2 flex flex-col">
           
            {step === 1 && (
              <div className="space-y-4">
                <input
                  type="text" placeholder="First name" value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border border-black px-4 py-2 rounded-md w-full"
                />
                <input
                  type="text" placeholder="Last name" value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-black px-4 py-2 rounded-md w-full"
                />
                <div className="flex justify-end">
                  <button
                    onClick={nextStep}
                    className="bg-blue-600 text-white py-2 rounded-md w-[86px]"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

           
            {step === 2 && (
              <div className="space-y-4">
                <div className="flex space-x-2">
                  <select
              value={month}
               onChange={(e) => setMonth(e.target.value)}
               className="border border-black px-4 py-2 rounded-md w-1/3"
                  >
                    <option value="">Month</option>
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>

                  <input
                    type="text" placeholder="Day" value={day}
                    onChange={(e) => setDay(e.target.value)}
                    className="border border-black px-4 py-2 rounded-md w-1/3"
                  />

                  <input
                    type="text"  placeholder="Year"   value={year}
                   onChange={(e) => setYear(e.target.value)}
                    className="border border-black px-4 py-2 rounded-md w-1/3"
                  />
                </div>

                <select
                  value={gender}
              onChange={(e) => setGender(e.target.value)}
                  className="border border-black px-4 py-2 rounded-md w-full"
                >
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

                <div className="flex justify-end">
                  <button
                    onClick={nextStep}
                    className="bg-blue-600 text-white py-2 rounded-md w-[86px]"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

           
            {step === 3 && (
              <div className="space-y-4">
                <input  type="email"  placeholder="Email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-black px-4 py-2 rounded-md w-full"
                />
                <div className="flex justify-end">
                  <button
                    onClick={nextStep}
                    className="bg-blue-600 text-white py-2 rounded-md w-[86px]"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}

           
            {step === 4 && (
              <div className="flex flex-col space-y-4">
                <p className="text-sm text-gray-700">
                  Welcome, {firstName} {lastName}! Your email{" "}
                  <strong>{email}</strong> has been registered.
                </p>
                <div className="flex justify-end">
                  <button
                    disabled
                    className="bg-gray-400 text-white py-2 rounded-md w-[86px] cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-between max-w-[811px] w-full mt-4 text-xs text-black">
        <span>English</span>
        <span className="space-x-2">
          <a
            href="https://support.google.com/accounts?hl=en"
            className="hover:underline"
          >
            Help
          </a>
          <a
            href="https://policies.google.com/privacy"
            className="hover:underline"
          >
            Privacy
          </a>
          <a
            href="https://policies.google.com/terms"
            className="hover:underline"
          >
  Terms
          </a>
        </span>
      </div>
    </div>
  );
}

export default Account;
