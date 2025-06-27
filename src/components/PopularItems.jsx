import React from 'react';

function PopularItems() {
  const images = [
    {
      src: "https://static-content.owner.com/funnel/images/c44feb58-64ce-4619-a383-48db3357e2c8?v=2222715488",
      alt: "Butter Chicken",
    },
    {
      src: "https://static-content.owner.com/funnel/images/e46f265e-0346-4380-a9eb-f6fe741e67f2?v=3554305536",
      alt: "Naan Bread",
    },
    {
      src: "https://static-content.owner.com/funnel/images/19e32454-4f82-4080-963b-f83f790bf53c?v=7596945030",
      alt: "Chicken Tikka Masala",
    },
    {
      src: "https://static-content.owner.com/funnel/images/7f34291b-a456-4485-9e04-5d1c4b6c4fd5?v=4346514943",
      alt: "Vegetable Samosa",
    },
    {
      src: "https://static-content.owner.com/funnel/images/43affc98-602f-4400-b3cf-5f2c38bee115?v=5212649697",
      alt: "Palak Paneer",
    },
    {
      src: "https://static-content.owner.com/funnel/images/e1744252-08cd-4f86-8df3-89d780e9e1a4?v=1244943571",
      alt: "Biryani",
    },
  ];

  return (
    <section className="bg-transparent px-4 py-16 md:px-6 md:py-24">
      <div className="flex mx-auto max-w-7xl flex-col gap-12 md:gap-16">
        <div className="flex flex-col text-center gap-4 md:max-w-2xl md:self-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-900">
            See Our Most Popular Items
          </h2>
          <p className="text-base md:text-lg text-gray-600 font-sans">
            Here’s a sneak peek of the items our customers can’t stop talking about
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group"
            >
              <img
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-[2] group-hover:z-10 md:group-hover:scale-[1.8]"
                sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
                srcSet={`${image.src}&w=384&q=80&auto=format 384w, ${image.src}&w=640&q=80&auto=format 640w, ${image.src}&w=750&q=80&auto=format 750w, ${image.src}&w=828&q=80&auto=format 828w, ${image.src}&w=1080&q=80&auto=format 1080w, ${image.src}&w=1200&q=80&auto=format 1200w, ${image.src}&w=1920&q=80&auto=format 1920w, ${image.src}&w=2048&q=80&auto=format 2048w, ${image.src}&w=3840&q=80&auto=format 3840w`}
                src={`${image.src}&w=3840&q=80&auto=format`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularItems;