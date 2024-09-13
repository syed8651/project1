import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Mohmammad Ubaid Mir",
    image: assets.profile_pic,
    email: "ubaidmir623@gmail.com",
    phone: "7006688330",
    address: {
      line1: "highway 701A",
      line2: "kanli bagh baramulla",
    },
    gender: "male",
    dob: "1996-10-15", // using the correct format for date input (YYYY-MM-DD)
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-3 text-sm">
      <img className="w-36 rounded " src={userData.image} alt="" />
      {isEdit ? (
        <input className="bg-gray-50 font-medium max-w-60 mt-4"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          type="text"
        />
      ) : (
        <p className=" font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3  text-neutral-700">
          <p className="font-medium ">Email Id</p>
          <p className="text-blue-400">{userData.email}</p>
          <p className="fonte font-medium">Phone:</p>
          {isEdit ? (
            <input className="bg-gray-100 max-w-52"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              type="tel"
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input className="bg-gray-50"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                type="text"
              />
              <br />
              <input className="bg-gray-50"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p>Gender:</p>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
         </div>
         <div>
          <p className="font-medium">Date of Birth:</p>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
            />
          ) : (
            <p className="text-gray-500">{userData.dob}</p>
          )}
        </div>
      </div>
      <div>
        {
          isEdit? <button className="border border-primary px-8 py-2  rounded-full hover:bg-primary hover:text-white
          transition-all" onClick={()=>setIsEdit(false)}>Save Information</button>:
          <button  className="border px-8 py-2  border-primary rounded-full  hover:bg-primary hover:text-white
          transition-all" onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  );
};

export default MyProfile;
