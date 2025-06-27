import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="shrink-0 text-[rgb(77,77,77)] h-6 w-6"
        >
          <path d="M53.92,34.62A8,8,0,1,0,42.08,45.38l9.73,10.71Q49.91,56,48,56a8,8,0,0,0-8,8v80a88.1,88.1,0,0,0,88,88h0a87.82,87.82,0,0,0,61.21-24.78l12.87,14.16a8,8,0,1,0,11.84-10.76ZM136.29,149A88.17,88.17,0,0,0,128,163.37a88.16,88.16,0,0,0-72-51V72.44a71.31,71.31,0,0,1,13.18,2.75ZM120,215.56A72.1,72.1,0,0,1,56,144V128.44A72.1,72.1,0,0,1,120,200Zm16,0V200a72.09,72.09,0,0,1,11.36-38.81l31.08,34.19A71.85,71.85,0,0,1,136,215.56ZM216,144a88.13,88.13,0,0,1-3.15,23.4,8,8,0,0,1-7.71,5.88A7.79,7.79,0,0,1,203,173a8,8,0,0,1-5.59-9.83A72.55,72.55,0,0,0,200,144V128.43a71.07,71.07,0,0,0-24.56,7.33,8,8,0,1,1-7.24-14.26,86.64,86.64,0,0,1,31.8-9.14V72.45a72.33,72.33,0,0,0-50.35,29.36,8,8,0,1,1-13-9.39,88.15,88.15,0,0,1,25.16-23.30C152.62,49.8,135.45,37.74,128,33.2A100.2,100.2,0,0,0,104.6,53.14,8,8,0,1,1,92.39,42.81a112.32,112.32,0,0,1,32-26,8,8,0,0,1,7.16,0c1.32.66,30.27,15.43,44.59,45.15A87.91,87.91,0,0,1,208,56a8,8,0,0,1,8,8Z" />
        </svg>
      ),
      text: "Gluten-Free Options",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="shrink-0 text-[rgb(77,77,77)] h-6 w-6"
        >
          <path d="M178,32c-20.65,0-38.73,8.88-50,23.89C116.73,40.88,98.65,32,78,32A62.07,62.07,0,0,0,16,94c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,220.66,240,164,240,94A62.07,62.07,0,0,0,178,32ZM128,206.8C109.74,196.16,32,147.69,32,94A46.06,46.06,0,0,1,78,48c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,147.61,146.24,196.15,128,206.8Z" />
        </svg>
      ),
      text: "Healthy Options",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
          className="shrink-0 text-[rgb(77,77,77)] h-6 w-6"
        >
          <path d="M240,112H229.2L201.42,49.5A16,16,0,0,0,186.8,40H69.2a16,16,0,0,0-14.62,9.5L26.8,112H16a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V192h96v16a16,16,0,0,0,16,16h24a16,16,0,0,0,16-16V128h8a8,8,0,0,0,0-16ZM69.2,56H186.8l24.89,56H44.31ZM64,208H40V192H64Zm128,0V192h24v16Zm24-32H40V128H216ZM56,152a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H64A8,8,0,0,1,56,152Zm112,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,152Z" />
        </svg>
      ),
      text: "Easy Parking",
    },
  ];

  return (
    <div className="bg-transparent px-8 py-18 md:px-6 md:py-30">
      <div className="flex mx-auto max-w-[1208px] flex-col gap-12 md:gap-16">
        <div className="flex flex-col self-stretch text-balance text-center md:max-w-[672px] md:self-center">
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-[1.75rem] md:text-[2.5rem] lg:text-[3.5rem] font-[Inter] text-[rgb(5,5,5)]">
              Featuring
            </h2>
          </div>
        </div>
        <div className="bg-transparent flex flex-wrap justify-center gap-x-6 self-center md:gap-x-10 md:gap-y-14 lg:max-w-[900px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-shrink-0 flex-grow-0 basis-[calc(50%-1.5rem)] flex-col items-center gap-4 py-4 text-center md:w-[220px] md:basis-auto md:px-0 md:py-0"
            >
              {feature.icon}
              <div className="bg-transparent">
                <p className="text-[0.875rem] text-[rgb(13,13,13)] font-[Inter]">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;