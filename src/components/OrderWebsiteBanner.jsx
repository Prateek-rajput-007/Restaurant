import React from 'react';
// If using image assets directly, you'd import them like this:
// import bannerImage from '../assets/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg'; // Adjust path as needed

const OrderWebsiteBanner = () => {
  return (
    <div className="bg-transparent relative max-h-screen min-h-[600px] max-w-section-container p-2 md:max-h-full xl:mx-auto">
      <div className="bg-transparent relative flex md:items-center">
        {/* Background Image Container */}
        <div className="bg-transparent overflow-clip rounded-mercury-ui-lg absolute h-full w-full">
          {/* Note: In a real Next.js app, this would use the next/image component for optimization.
              For Vite React, a standard <img> tag works. Make sure the image path is correct.
              If you imported the image, use {bannerImage} as src. Otherwise, direct URL.
          */}
          <img
            alt="Order From Our Website"
            fetchPriority="high"
            decoding="async"
            data-nimg="fill" // This is a Next.js specific attribute, can be removed if not using Next.js Image
            className="object-cover"
            style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent', maxWidth: '100%' }}
            sizes="100vw"
            // Using the largest srcset image for simplicity in a standalone component
            src="https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&amp;w=3840&amp;q=80&amp;auto=format"
            // You can optionally put the full srcset if you want the browser to pick, but the URL in src is sufficient for display.
            srcSet="https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&amp;w=640&amp;q=80&amp;auto=format 640w, https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&amp;w=750&amp;q=80&amp;auto=format 750w, https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&amp;w=828&amp;q=80&amp;auto=format 828w, https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&amp;w=1080&amp;q=80&amp;auto=format 1080w, https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&amp;w=1200&amp;q=80&amp;auto=format 1200w, https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&amp;w=1920&amp;q=80&amp;auto=format 1920w, https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&amp;w=2048&amp;q=80&amp;auto=format 2048w, https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&amp;w=3840&amp;q=80&amp;auto=format 3840w"
          />
        </div>

        {/* Content Wrapper */}
        <div className="flex w-full px-2 pb-2 pt-[100px] md:p-20">
          <div className="flex w-full items-center rounded-mercury-ui-md bg-mercury-ui-primary/80 p-8 shadow-lg backdrop-blur-2xl md:min-h-[640px] md:max-w-[632px] md:p-20">
            <div className="flex w-full flex-col gap-6">
              {/* Title */}
              <div className="flex w-full">
                <h2 className="text-mercury-ui-title-2xl md:text-mercury-ui-title-3xl lg:text-mercury-ui-title-4xl text-mercury-ui-primary font-mercury-ui-primary text-balance">
                  Order From Our Website
                </h2>
              </div>

              {/* Description and Button */}
              <div className="flex w-full flex-col gap-8">
                {/* Description */}
                <div className="text-mercury-ui-text-base text-mercury-ui-secondary font-mercury-ui-secondary font-mercury-ui-text-base flex flex-col gap-1 whitespace-pre-wrap">
                  Order directly from our website to save money in fees, get faster service, earn free food via our rewards program, and support local business.
                </div>

                {/* Button */}
                <div className="bg-transparent w-full md:w-fit">
                  <a
                    className="group relative flex items-center text-mercury-ui-button-base font-mercury-ui-secondary rounded-mercury-ui-control transition-all ease-in-out bg-mercury-ui-button-primary text-mercury-ui-brand-accessibleOverPrimary min-h-12 py-3 px-4 justify-center"
                    aria-label="Order Now"
                    href="/menu"
                  >
                    <span className="pointer-events-none absolute inset-0 bg-black/[0.04] opacity-0 transition-opacity group-hover:opacity-100 rounded-mercury-ui-control"></span>
                    <span className="flex items-center justify-center gap-x-2 flex-1">
                      <span className="flex flex-row items-center gap-x-[4px]">
                        Order Now
                        <span className="h-fit w-fit opacity-50 transition-opacity group-hover:opacity-100">
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4 scale-[1.15] transition-transform group-hover:translate-x-0 translate-x-[-3px]"
                            role="img"
                            viewBox="0 0 256 256"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect width="256" height="256" fill="none"></rect>
                            <line
                              className="origin-[216px_128px] scale-x-0 transition-transform group-hover:scale-x-100"
                              x1="70"
                              y1="128"
                              x2="216"
                              y2="128"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="24"
                            ></line>
                            <polyline
                              points="144 56 216 128 144 200"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="24"
                            ></polyline>
                          </svg>
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderWebsiteBanner;