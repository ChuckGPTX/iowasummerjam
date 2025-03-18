"use client";

import { useState } from "react";

interface TicketFormData {
  ticketType: string;
  quantity: number;
  name: string;
  email: string;
  phone: string;
  agreeTerms: boolean;
}

export default function TicketForm() {
  const [formData, setFormData] = useState<TicketFormData>({
    ticketType: "general",
    quantity: 1,
    name: "",
    email: "",
    phone: "",
    agreeTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      quantity: parseInt(e.target.value, 10),
    });
  };

  const calculateTotal = () => {
    const prices = {
      general: 25,
      vip: 50,
      group: 120,
    };

    return prices[formData.ticketType as keyof typeof prices] * formData.quantity;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.phone) {
      setFormError("Please fill out all required fields");
      return;
    }

    if (!formData.agreeTerms) {
      setFormError("You must agree to the terms and conditions");
      return;
    }

    setFormError("");
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <h3 className="mt-4 text-xl font-bold text-gray-900">Thank You!</h3>
          <p className="mt-1 text-sm text-gray-600">
            Your ticket purchase has been confirmed. We have sent a confirmation email to {formData.email}.
          </p>
          <div className="mt-6 border-t border-gray-200 pt-6">
            <h4 className="font-bold">Order Summary</h4>
            <p className="mt-2">
              {formData.quantity} x {formData.ticketType.charAt(0).toUpperCase() + formData.ticketType.slice(1)} Admission
            </p>
            <p className="mt-1 font-bold">Total: ${calculateTotal()}</p>
          </div>
          <div className="mt-6">
            <button
              type="button"
              className="btn-iowa"
              onClick={() => {
                setFormData({
                  ticketType: "general",
                  quantity: 1,
                  name: "",
                  email: "",
                  phone: "",
                  agreeTerms: false,
                });
                setIsSubmitted(false);
              }}
            >
              PURCHASE MORE TICKETS
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {formError && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
          <p>{formError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="ticketType">
            Ticket Type
          </label>
          <select
            id="ticketType"
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d53f46]"
          >
            <option value="general">General Admission - $25</option>
            <option value="vip">VIP Package - $50</option>
            <option value="group">Group Package (5 tickets) - $120</option>
          </select>
        </div>

        {formData.ticketType !== "group" && (
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <select
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleQuantityChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d53f46]"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        )}

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d53f46]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d53f46]"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d53f46]"
          />
        </div>

        <div className="mb-8">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="h-5 w-5 text-[#d53f46] focus:ring-[#d53f46] border-gray-300 rounded"
            />
            <label className="ml-2 block text-sm text-gray-700" htmlFor="agreeTerms">
              I agree to the <a href="#" className="text-[#d53f46] hover:underline">terms and conditions</a> *
            </label>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-bold text-xl">Total: ${calculateTotal()}</h3>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn-iowa flex items-center justify-center min-w-[200px] ${isSubmitting ? 'opacity-70' : ''}`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                PROCESSING...
              </>
            ) : (
              'PURCHASE TICKETS'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
