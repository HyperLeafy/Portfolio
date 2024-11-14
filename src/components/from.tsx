import { useState } from 'react';

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields.");
      return;
    }

    // Convert formData to JSON
    const jsonData = JSON.stringify(formData);

    try {
      const response = await fetch("https://getform.io/f/amddmwmb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: jsonData
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form on success
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="md:flex-col font-montserrat mx-auto p-6 bg-slate-900 text-slate-100 border-dashed border-2 border-slate-100 shadow-lg rounded-lg space-y-4 hover:scale-105 hover:-translate-y-5 hover:-translate-x-5">
      <h2 className="text-2xl font-medium font-tomo text-slate-50 mb-4">Say hello</h2>

      <label className="block">
        <span className="">Name</span>
        <input 
          type="text" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
          placeholder="Your name"
        />
      </label>

      <label className="block">
        <span className="">Email</span>
        <input 
          type="email" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring"
          placeholder="you@example.com"
        />
      </label>

      <label className="block">
        <span className="">Message</span>
        <textarea 
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border rounded-md text-gray-900 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring resize-none"
          rows={4}
          placeholder="Your message"
        />
      </label>

      <button 
        type="submit"
        className="w-1/4 bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Submit
      </button>
    </form>
  );
}

export default MyForm;
