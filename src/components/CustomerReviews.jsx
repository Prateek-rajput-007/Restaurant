import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      rating: 5,
      text: "Food, service, and spacing are excellent. What sets Saffron apart is that it is very attractive and well-decorated. Parking on the street and free lot adjacent. We ordered vegetable samosas (2, served with sauces), Chicken Tikka Masala, Saag Paneer, Naan, and raita. Saffron is BYOB and we brought a nice dry Riesling, which was a good match. Everything was served hot and well-timed. Our favorite Indian restaurant!",
      reviewer: "John D.",
      avatar: "https://static-content.owner.com/brands/funnel/reviews-section-images/rYSPbAUtjkwGvMLIAx0Rf8aAHB1nEcxZ/khXoR6Z3I8hC3gZ3NXFgWWH7.png?v=4761751329",
    },
    {
      id: 2,
      rating: 5,
      text: "Saffron is a haven for those seeking authentic Indian cuisine, offering a rich variety of dishes that capture the essence of dining in India. From their diverse biryani selection to the exquisite South Indian delicacies, every dish is meticulously crafted to perfection. Don't miss out on their carefully flavored teas, adding an extra touch of delight to your dining experience. Give it a try; you won't be disappointed!",
      reviewer: "Nikki P",
      avatar: "https://static-content.owner.com/funnel/images/e9a2c305-ccfb-4b63-ac39-748c32e9e9cc?v=7325541774",
    },
    {
      id: 3,
      rating: 5,
      text: "Saffron is definitely an unexpected gem right on Butler Ave in downtown Ambler. I'm glad that we decided to go in person instead of ordering delivery. We ate right on the street and their presentation was fantastic.",
      reviewer: "Chad M.",
      avatar: "https://static-content.owner.com/brands/funnel/reviews-section-images/YECnB450nmOE7J1oBLKB9twcx13jaiSO/khXoR6Z3I8hC3gZ3NXFgWWH7.png?v=3697994388",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        viewBox="0 0 256 256"
        aria-label={`${index + 1} star${index + 1 !== 1 ? 's' : ''}`}
        className="shrink-0 text-gray-900"
      >
        <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
      </svg>
    ));
  };

  return (
    <section className="mx-auto flex max-w-7xl flex-col justify-center py-16 md:py-24 gap-8 md:gap-12">
      <div className="flex flex-col text-center gap-4 md:max-w-2xl md:self-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-900">
          What Our Guests Are Saying
        </h2>
        <p className="text-base md:text-lg text-gray-600 font-sans">
          Check out our most recent reviews!
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 px-4 md:px-0">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="flex flex-col bg-white rounded-xl shadow-lg p-6 h-[350px] w-full max-w-[400px] mx-auto"
          >
            <div className="flex flex-col justify-between h-full">
              <div className="flex flex-col gap-4">
                <div className="flex gap-1" aria-label={`Rating: ${review.rating} stars`}>
                  {renderStars(review.rating)}
                </div>
                <p className="text-base text-gray-800 font-sans line-clamp-6 overflow-hidden">
                  {review.text}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <img
                  alt={`Avatar of ${review.reviewer}`}
                  loading="lazy"
                  width="32"
                  height="32"
                  className="h-8 w-8 rounded-full object-cover"
                  srcSet={`${review.avatar}&w=32&q=80&auto=format 1x, ${review.avatar}&w=64&q=80&auto=format 2x`}
                  src={`${review.avatar}&w=64&q=80&auto=format`}
                />
                <p className="text-sm md:text-base text-gray-600 font-sans font-medium">
                  {review.reviewer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;