import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const HomeContact = () => {
    return (
        <section className='py-8' style={{
            background:`url(${appointment})`
        }}>
            <div className='text-center p-3'>
                <h4 className='text-primary font-bold'>Contact Us</h4>
                <h3 className='text-white text-2xl'>Stay connected with us</h3>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <input type="text" placeholder="Email Address" className="input w-11/12 max-w-xs mb-5" />
                <input type="text" placeholder="Subject" className="input w-11/12 max-w-xs mb-5" />
                <textarea type="text" placeholder="Type here" className="textarea input-bordered input-lg w-11/12 max-w-xs mb-5" />
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default HomeContact;