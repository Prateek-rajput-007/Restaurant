import React from 'react';

const PromoBanner = () => {
  return (
    <div className="bg-transparent relative max-h-screen min-h-[50vh] max-w-[1536px] mx-auto p-2 md:p-4 lg:p-10 xl:p-20">
      <div className="relative flex md:items-center h-full">
        <div className="absolute inset-0 overflow-hidden rounded-[2rem]">
          <img
            alt="Promotional banner encouraging direct website orders"
            loading="lazy"
            decoding="async"
            fetchpriority="high"
            className="object-cover w-full h-full"
            sizes="100vw"
            srcSet="
              https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=640&q=80&auto=format 640w,
              https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=750&q=80&auto=format 750w,
              https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=828&q=80&auto=format 828w,
              https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=1080&q=80&auto=format 1080w,
              https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=1200&q=80&auto=format 1200w,
              https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=1920&q=80&auto=format 1920w,
              https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=2048&q=80&auto=format 2048w,
              https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=3840&q=80&auto=format 3840w"
            src="https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=3840&q=80&auto=format"
          />
        </div>
        <div className="relative flex w-full px-2 pb-2 pt-[200px] md:p-10 lg:p-20">
          <div className="flex flex-col w-full items-center rounded-[1.5rem] bg-[rgba(245,245,243,0.8)] p-8 shadow-lg backdrop-blur-2xl md:min-h-[640px] md:max-w-[632px] md:p-10 lg:p-20">
            <div className="flex w-full">
              <h2 className="text-[1.75rem] md:text-[2.5rem] lg:text-[3.5rem] font-[Inter] text-[rgb(4,4,4)] text-balance">
                Saffron Indian Kitchen Rewards
              </h2>
            </div>
            <div className="flex w-full flex-col gap-8">
              <p className="text-[1rem] text-[rgb(77,77,77)] font-[Inter] whitespace-pre-wrap">
               Join our rewards program to earn points, get free items, and stay up to date with us.
              </p>
              <div className="bg-transparent w-full md:w-fit">
                <a
                  role="button"
                  aria-label="Order Now"
                  href="/menu"
                  className="group relative flex items-center justify-center text-[1rem] font-[Inter] rounded-[0.625rem] bg-[rgb(244,92,36)] text-white min-h-[48px] py-3 px-4 transition-all ease-in-out hover:scale-105"
                >
                  <span className="pointer-events-none absolute inset-0 bg-black/[0.04] opacity-0 transition-opacity group-hover:opacity-100 rounded-[0.625rem]"></span>
                  <span className="flex items-center justify-center gap-x-2 flex-1">
                    <span className="flex flex-row items-center gap-x-[4px]">
                      Profile
                      <span className="h-fit w-fit opacity-50 transition-opacity group-hover:opacity-100">
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 scale-[1.15] transition-transform group-hover:translate-x-0 translate-x-[-3px]"
                          role="img"
                          viewBox="0 0 256 256"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="256" height="256" fill="none" />
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
                          />
                          <polyline
                            points="144 56 216 128 144 200"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="24"
                          />
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
  );
};

export default PromoBanner;