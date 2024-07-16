import React from 'react';
import { useForm } from 'react-hook-form';

function ContactUs() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <div className="contact-us-form p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true })}
            className={`form-control w-full p-2 border border-gray-300 rounded-md ${errors.name ? 'border-red-500' : ''}`}
          />
          {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
            className={`form-control w-full p-2 border border-gray-300 rounded-md ${errors.email ? 'border-red-500' : ''}`}
          />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        
        <div className="form-group mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            {...register("message", { required: true })}
            className={`form-control w-full p-2 border border-gray-300 rounded-md ${errors.message ? 'border-red-500' : ''}`}
          />
          {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        
        <div className="form-group">
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
