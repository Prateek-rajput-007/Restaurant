import React from 'react';

function Hero() {
  return (
    <section className="relative flex min-h-[700px] h-[70vh] flex-1 flex-col justify-center gap-8 p-8 sm:p-10 lg:p-12 lg:pb-20 bg-white rounded-4xl overflow-hidden">
      {/* Restaurant Image */}
      <img
        src="https://static-content.owner.com/funnel/images/c6d426ad-c841-441d-9e82-98fa6354c6fe?v=4558772693&w=3840&q=80&auto=format"
        alt="Cozy interior of an authentic Indian restaurant in Philadelphia"
        className="absolute inset-0 w-[calc(100%-2rem)] h-[calc(100%-2rem)] mx-4 my-4 object-cover opacity-100 pointer-events-none select-none rounded-4xl"
        style={{ zIndex: 0, filter: 'brightness(0.6)' }}
      />
      <div className="relative bg-transparent max-w-3xl z-10 mt-60"> 
        <div className="flex flex-col gap-6 text-left">
          <h1 className="text-white font-sans text-base md:text-lg" aria-labelledby="subtitle">
            <span
              className="font-sans text-sm md:text-base lg:text-lg border-l-4 pl-4 border-white-400"
              id="subtitle"
            >
              Best Indian Food in Philadelphia, PA
            </span>
          </h1>
          <p
            className="text-white font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            id="title"
          >
            Authentic Indian Cuisine
          </p>
        </div>
      </div>
      <div className="relative flex flex-col gap-2 sm:flex-row z-10 mt-1"> 
        <a
          className="group relative flex items-center text-base font-sans rounded-lg transition-all ease-in-out bg-orange-500 text-white min-h-12 py-3 px-5 justify-center hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 w-full sm:w-auto"
          aria-label="Order Online"
          href="/menu"
        >
          <span className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100 rounded-lg"></span>
          <span className="flex items-center justify-center gap-2">
            Order Online
            <svg
              aria-hidden="true"
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="256" height="256" fill="none" />
              <line
                x1="70"
                y1="128"
                x2="216"
                y2="128"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="24"
                className="origin-[216px_128px] scale-x-0 group-hover:scale-x-100 transition-transform"
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
        </a>
      </div>
    </section>
  );
}

export default Hero;