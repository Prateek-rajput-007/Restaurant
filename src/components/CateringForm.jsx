import React, { useState } from 'react';

const CateringForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    date: '2025-06-26',
    time: '20:50',
    people: '1-9',
    deliveryOption: 'Delivery',
    address: '',
    orderDetails: '',
    dietaryRestrictions: '',
    additionalDetails: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email))
      newErrors.email = 'Invalid email address';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.people) newErrors.people = 'Please select number of people';
    if (!formData.deliveryOption) newErrors.deliveryOption = 'Please select delivery or pickup';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    // Simulate async submit
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phoneNumber: '',
        date: '2025-06-26',
        time: '20:50',
        people: '1-9',
        deliveryOption: 'Delivery',
        address: '',
        orderDetails: '',
        dietaryRestrictions: '',
        additionalDetails: '',
      });
    }, 1200);
  };

  const validOrderDates = [
    '2025-06-26', '2025-06-27', '2025-06-28', '2025-06-29',
    '2025-06-30', '2025-07-01', '2025-07-02',
  ];

  const validOrderTimes = [
    '00:00', '00:15', '00:30', '00:45', '01:00', '01:15', '01:30', '01:45',
    '02:00', '02:15', '02:30', '02:45', '03:00', '03:15', '03:30', '03:45',
    '04:00', '04:15', '04:30', '04:45', '05:00', '05:15', '05:30', '05:45',
    '06:00', '06:15', '06:30', '06:45', '07:00', '07:15', '07:30', '07:45',
    '08:00', '08:15', '08:30', '08:45', '09:00', '09:15', '09:30', '09:45',
    '10:00', '10:15', '10:30', '10:45', '11:00', '11:15', '11:30', '11:45',
    '12:00', '12:15', '12:30', '12:45', '13:00', '13:15', '13:30', '13:45',
    '14:00', '14:15', '14:30', '14:45', '15:00', '15:15', '15:30', '15:45',
    '16:00', '16:15', '16:30', '16:45', '17:00', '17:15', '17:30', '17:45',
    '18:00', '18:15', '18:30', '18:45', '19:00', '19:15', '19:30', '19:45',
    '20:00', '20:15', '20:30', '20:45', '21:00', '21:15', '21:30', '21:45',
    '22:00', '22:15', '22:30', '22:45', '23:00', '23:15', '23:30', '23:45',
  ];

  const peopleOptions = ['1-9', '10-19', '20-29', '30-39', '40-49', '50+'];
  const deliveryOptions = ['Delivery', 'Pickup'];

  return (
    <div className="flex flex-col items-center gap-12 px-6 py-20 md:px-8 md:py-32">
      <div className="flex grid w-full max-w-[1280px] gap-12 md:grid-cols-2 md:grid-rows-1 md:gap-32">
        <div className="flex flex-col gap-8 self-start sm:sticky sm:top-32">
          <div className="flex flex-col gap-1">
            <h2 className="text-[1.75rem] md:text-[2.5rem] lg:text-[3.5rem] font-[Inter] text-[rgb(244,92,36)]">
              Catering
            </h2>
            <p className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]">
              Please complete the form below to send us a catering request.
            </p>
            {success && (
              <span className="text-green-600 text-[1rem] mt-2">
                Thank you! Your catering request has been submitted.
              </span>
            )}
          </div>
        </div>
        <form className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
          <div className="flex w-full flex-col gap-y-1">
            <label className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]" htmlFor="fullName">
              Full Name <span className="text-[rgb(185,7,50)]">*</span>
            </label>
            <div className="relative">
              <input
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                className={`w-full bg-[rgb(255,255,255)] text-[rgb(13,13,13)] py-3 px-4 transition-all focus:outline focus:outline-2 focus:ring-[1.5px] rounded-[0.625rem] border shadow-none placeholder:text-[rgb(170,170,170)] disabled:cursor-not-allowed disabled:bg-[rgb(235,235,236)] disabled:hover:border-[rgb(214,214,214)] border-[rgb(214,214,214)] hover:border-black focus:border-[rgb(13,13,13)] focus:ring-[rgb(13,13,13)]/10 ${errors.fullName ? 'border-red-500' : ''}`}
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
                aria-describedby="fullName-helper-text"
                required
              />
            </div>
            {errors.fullName && (
              <span className="text-[0.875rem] font-[Inter] text-red-600" id="fullName-helper-text">{errors.fullName}</span>
            )}
          </div>
          <div className="flex w-full flex-col gap-y-1">
            <label className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]" htmlFor="email">
              Email <span className="text-[rgb(185,7,50)]">*</span>
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                placeholder="Email"
                className={`w-full bg-[rgb(255,255,255)] text-[rgb(13,13,13)] py-3 px-4 transition-all focus:outline focus:outline-2 focus:ring-[1.5px] rounded-[0.625rem] border shadow-none placeholder:text-[rgb(170,170,170)] disabled:cursor-not-allowed disabled:bg-[rgb(235,235,236)] disabled:hover:border-[rgb(214,214,214)] border-[rgb(214,214,214)] hover:border-black focus:border-[rgb(13,13,13)] focus:ring-[rgb(13,13,13)]/10 ${errors.email ? 'border-red-500' : ''}`}
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                aria-describedby="email-helper-text"
                required
              />
            </div>
            {errors.email && (
              <span className="text-[0.875rem] font-[Inter] text-red-600" id="email-helper-text">{errors.email}</span>
            )}
          </div>
          <div className="flex w-full flex-col gap-y-1">
            <label className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]" htmlFor="phoneNumber">
              Phone Number <span className="text-[rgb(185,7,50)]">*</span>
            </label>
            <div className="relative">
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="(555) 555-5555"
                className={`w-full bg-[rgb(255,255,255)] text-[rgb(13,13,13)] py-3 px-4 transition-all focus:outline focus:outline-2 focus:ring-[1.5px] rounded-[0.625rem] border shadow-none placeholder:text-[rgb(170,170,170)] disabled:cursor-not-allowed disabled:bg-[rgb(235,235,236)] disabled:hover:border-[rgb(214,214,214)] border-[rgb(214,214,214)] hover:border-black focus:border-[rgb(13,13,13)] focus:ring-[rgb(13,13,13)]/10 ${errors.phoneNumber ? 'border-red-500' : ''}`}
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                aria-describedby="phoneNumber-helper-text"
                required
              />
            </div>
            {errors.phoneNumber && (
              <span className="text-[0.875rem] font-[Inter] text-red-600" id="phoneNumber-helper-text">{errors.phoneNumber}</span>
            )}
          </div>
          <fieldset className="flex w-full flex-col gap-y-1">
            <legend className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]">
              Date and time you need catering <span className="text-[rgb(185,7,50)]">*</span>
            </legend>
            <div className="flex w-full">
              <div className="w-1/2 pr-1">
                <div className="flex w-full flex-col gap-y-1">
                  <div className="relative">
                    <input
                      name="date"
                      className={`w-full bg-[rgb(255,255,255)] text-[rgb(13,13,13)] py-3 px-4 transition-all focus:outline focus:outline-2 focus:ring-[1.5px] rounded-[0.625rem] border shadow-none placeholder:text-[rgb(170,170,170)] disabled:cursor-not-allowed disabled:bg-[rgb(235,235,236)] disabled:hover:border-[rgb(214,214,214)] border-[rgb(214,214,214)] hover:border-black focus:border-[rgb(13,13,13)] focus:ring-[rgb(13,13,13)]/10 ${errors.date ? 'border-red-500' : ''}`}
                      aria-label="Date"
                      list="valid-order-dates"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      aria-describedby="date-helper-text"
                      required
                    />
                    <datalist id="valid-order-dates">
                      {validOrderDates.map((date) => (
                        <option key={date} value={date} label={date} />
                      ))}
                    </datalist>
                  </div>
                  {errors.date && (
                    <span className="text-[0.875rem] font-[Inter] text-red-600" id="date-helper-text">{errors.date}</span>
                  )}
                </div>
              </div>
              <div className="w-1/2 pl-1">
                <div className="flex w-full flex-col gap-y-1">
                  <div className="relative">
                    <input
                      name="time"
                      className={`w-full bg-[rgb(255,255,255)] text-[rgb(13,13,13)] py-3 px-4 transition-all focus:outline focus:outline-2 focus:ring-[1.5px] rounded-[0.625rem] border shadow-none placeholder:text-[rgb(170,170,170)] disabled:cursor-not-allowed disabled:bg-[rgb(235,235,236)] disabled:hover:border-[rgb(214,214,214)] border-[rgb(214,214,214)] hover:border-black focus:border-[rgb(13,13,13)] focus:ring-[rgb(13,13,13)]/10 ${errors.time ? 'border-red-500' : ''}`}
                      aria-label="Time"
                      list="valid-order-times"
                      type="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      aria-describedby="time-helper-text"
                      required
                    />
                    <datalist id="valid-order-times">
                      {validOrderTimes.map((time) => (
                        <option key={time} value={time} label={time} />
                      ))}
                    </datalist>
                  </div>
                  {errors.time && (
                    <span className="text-[0.875rem] font-[Inter] text-red-600" id="time-helper-text">{errors.time}</span>
                  )}
                </div>
              </div>
            </div>
          </fieldset>
          <fieldset className="flex flex-col gap-y-2">
            <legend className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]">
              Number of people you are catering for <span className="text-[rgb(185,7,50)]">*</span>
            </legend>
            <div className="flex flex-wrap gap-y-2">
              {peopleOptions.map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-x-3 w-1/2">
                  <div
                    className={`relative h-6 w-6 flex-shrink-0 rounded-full focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[rgb(13,13,13)] ${
                      formData.people === option
                        ? 'border-[8.75px] border-[rgb(13,13,13)]'
                        : 'border border-[rgb(214,214,214)] hover:border-black'
                    }`}
                  >
                    <div className="h-full w-full rounded-full bg-[rgb(255,255,255)]"></div>
                    <input
                      className="sr-only"
                      type="radio"
                      name="people"
                      value={option}
                      checked={formData.people === option}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <span className="text-[1rem] font-[Inter] text-[rgb(13,13,13)]">
                    {option}
                  </span>
                </label>
              ))}
            </div>
            {errors.people && (
              <span className="text-[0.875rem] font-[Inter] text-red-600">{errors.people}</span>
            )}
          </fieldset>
          <fieldset className="flex flex-col gap-y-2">
            <legend className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]">
              Delivery or pickup? <span className="text-[rgb(185,7,50)]">*</span>
            </legend>
            <div className="flex flex-wrap gap-y-2">
              {deliveryOptions.map((option) => (
                <label key={option} className="flex cursor-pointer items-center gap-x-3 w-1/2">
                  <div
                    className={`relative h-6 w-6 flex-shrink-0 rounded-full focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-[rgb(13,13,13)] ${
                      formData.deliveryOption === option
                        ? 'border-[8.75px] border-[rgb(13,13,13)]'
                        : 'border border-[rgb(214,214,214)] hover:border-black'
                    }`}
                  >
                    <div className="h-full w-full rounded-full bg-[rgb(255,255,255)]"></div>
                    <input
                      className="sr-only"
                      type="radio"
                      name="deliveryOption"
                      value={option}
                      checked={formData.deliveryOption === option}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <span className="text-[1rem] font-[Inter] text-[rgb(13,13,13)]">
                    {option}
                  </span>
                </label>
              ))}
            </div>
            {errors.deliveryOption && (
              <span className="text-[0.875rem] font-[Inter] text-red-600">{errors.deliveryOption}</span>
            )}
          </fieldset>
          <div className="flex relative w-full flex-col gap-y-1">
            <label className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]" htmlFor="address">
              If delivery, enter the address it’s being delivered to
            </label>
            <div className="relative">
              <div className="absolute top-1/2 -translate-y-1/2 left-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="shrink-0 text-[rgb(170,170,170)] h-4 w-4"
                >
                  <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" />
                </svg>
              </div>
              <input
                id="address"
                name="address"
                placeholder="Search for an address..."
                className="w-full bg-[rgb(255,255,255)] text-[rgb(13,13,13)] py-3 pl-10 pr-4 transition-all focus:outline focus:outline-2 focus:ring-[1.5px] rounded-[0.625rem] border shadow-none placeholder:text-[rgb(170,170,170)] disabled:cursor-not-allowed disabled:bg-[rgb(235,235,236)] disabled:hover:border-[rgb(214,214,214)] border-[rgb(214,214,214)] hover:border-black focus:border-[rgb(13,13,13)] focus:ring-[rgb(13,13,13)]/10"
                type="search"
                value={formData.address}
                onChange={handleInputChange}
                aria-labelledby="address-label"
                autoComplete="off"
                role="combobox"
              />
            </div>
            <span className="text-[0.875rem] font-[Inter] text-[rgb(77,77,77)]" id="address-helper-text"></span>
          </div>
          <div className="flex w-full flex-col gap-y-1">
            <label className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]" htmlFor="orderDetails">
              What would you like to order?
            </label>
            <textarea
              id="orderDetails"
              name="orderDetails"
              className="w-full flex-1 bg-transparent px-4 py-3 text-[rgb(13,13,13)] transition-all focus:outline focus:outline-2 focus:ring-[1.5px] rounded-[0.625rem] border placeholder:text-[rgb(170,170,170)] disabled:cursor-not-allowed disabled:bg-[rgb(235,235,236)] disabled:hover:border-[rgb(214,214,214)] border-[rgb(214,214,214)] hover:border-black focus:border-[rgb(13,13,13)] focus:ring-[rgb(13,13,13)]/10"
              rows="4"
              value={formData.orderDetails}
              onChange={handleInputChange}
              aria-describedby="orderDetails-helper-text"
            />
            <span className="text-[0.875rem] font-[Inter] text-[rgb(77,77,77)]" id="orderDetails-helper-text"></span>
          </div>
          <div className="flex w-full flex-col gap-y-1">
            <label className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]" htmlFor="dietaryRestrictions">
              Dietary restrictions or allergies
            </label>
            <textarea
              id="dietaryRestrictions"
              name="dietaryRestrictions"
              className="w-full flex-1 bg-transparent px-4 py-3 text-[rgb(13,13,13)] transition-all focus:outline focus:outline-2 focus:ring-[1.5px] rounded-[0.625rem] border placeholder:text-[rgb(170,170,170)] disabled:cursor-not-allowed disabled:bg-[rgb(235,235,236)] disabled:hover:border-[rgb(214,214,214)] border-[rgb(214,214,214)] hover:border-black focus:border-[rgb(13,13,13)] focus:ring-[rgb(13,13,13)]/10"
              rows="4"
              value={formData.dietaryRestrictions}
              onChange={handleInputChange}
              aria-describedby="dietaryRestrictions-helper-text"
            />
            <span className="text-[0.875rem] font-[Inter] text-[rgb(77,77,77)]" id="dietaryRestrictions-helper-text"></span>
          </div>
          <div className="flex w-full flex-col gap-y-1">
            <label className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]" htmlFor="additionalDetails">
              Additional details or special instructions
            </label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              className="w-full flex-1 bg-transparent px-4 py-3 text-[rgb(13,13,13)] transition-all focus:outline focus:outline-2 focus:ring-[1.5px] rounded-[0.625rem] border placeholder:text-[rgb(170,170,170)] disabled:cursor-not-allowed disabled:bg-[rgb(235,235,236)] disabled:hover:border-[rgb(214,214,214)] border-[rgb(214,214,214)] hover:border-black focus:border-[rgb(13,13,13)] focus:ring-[rgb(13,13,13)]/10"
              rows="4"
              value={formData.additionalDetails}
              onChange={handleInputChange}
              aria-describedby="additionalDetails-helper-text"
            />
            <span className="text-[0.875rem] font-[Inter] text-[rgb(77,77,77)]" id="additionalDetails-helper-text"></span>
          </div>
          <button
            className="group relative flex items-center text-[1rem] font-[Inter] rounded-[0.625rem] transition-all ease-in-out bg-[rgb(244,92,36)] text-white min-h-12 py-3 px-4 justify-center disabled:opacity-60"
            aria-label="Send Catering Request"
            type="submit"
            disabled={submitting}
          >
            <span className="pointer-events-none absolute inset-0 bg-black/[0.04] opacity-0 transition-opacity group-hover:opacity-100 rounded-[0.625rem]"></span>
            <span className="flex items-center justify-center gap-x-2 flex-1">
              {submitting ? 'Sending...' : 'Send Catering Request'}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default CateringForm;