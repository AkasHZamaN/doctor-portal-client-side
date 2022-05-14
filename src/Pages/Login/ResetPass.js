import React, { useRef } from "react";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from '../Shared/Loading';

const ResetPass = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
      auth
    );

    const resetPassword = async () =>{
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      if(email){
        toast('Please check your Eamil !');
      }
      else{
        toast('Enter your Email !')
      }
    }

    if(sending){
      return <Loading></Loading>
    }

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold">Reset Password</h2>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input ref={emailRef} type="email" name="email" placeholder="Enter Email" className="input input-bordered input-secondary w-full max-w-xs" />
            </div>

            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Enter Password" className="input input-bordered input-secondary  w-full max-w-xs" />
            </div>

          <div className="card-actions justify-end mt-10">
            <button onClick={resetPassword} className="btn border-0 text-white bg-gradient-to-r from-secondary to-primary w-full max-w-xs">Send Link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
