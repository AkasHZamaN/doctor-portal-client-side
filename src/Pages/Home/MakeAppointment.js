import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center mt-24'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-6'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white py-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas enim provident exercitationem asperiores, error nihil repellat saepe eaque vel magni itaque minima? Eveniet totam, asperiores at esse odio tenetur debitis deserunt animi maxime nostrum ullam voluptates laborum atque quo ipsa aperiam recusandae enim? Ab omnis maxime expedita ducimus quo aliquam.</p>
                <PrimaryButton>get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;