import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What are you known for?',
      answer: (
        <p className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]">
          We are known for{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/kabob">Kabob</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/lassi">Lassi</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/kebab">Kebab</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/pakora">Pakora</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/vegetarian-food">Vegetarian Food</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/butter-chicken">Butter Chicken</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/basmati-rice">Basmati Rice</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/paratha">Paratha</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/chutneys">Chutneys</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/raita">Raita</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/aloo-gobi">Aloo Gobi</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/curry">Curry</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/dosa">Dosa</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/saag-paneer">Saag Paneer</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/naan">Naan</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/samosas">Samosas</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/vindaloo">Vindaloo</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/tandoori-chicken">Tandoori Chicken</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/masala-dosa">Masala Dosa</a>, and{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/biryani">Biryani</a>
        </p>
      ),
    },
    {
      id: 2,
      question: 'What meals do you serve?',
      answer: (
        <p className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]">
          We serve{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/lunch">Lunch</a> and{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/dinner">Dinner</a>
        </p>
      ),
    },
    {
      id: 3,
      question: 'Do you offer delivery or takeout?',
      answer: (
        <p className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]">
          Yes, we offer{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/takeout">Takeout</a> and{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/tags/delivery">Delivery</a>
        </p>
      ),
    },
    {
      id: 4,
      question: 'What areas do you serve?',
      answer: (
        <p className="text-[1rem] font-[Inter] text-[rgb(77,77,77)]">
          We serve the following areas:{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/ambler">Ambler</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/cynwyd-estates">Cynwyd Estates</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/strafford">Strafford</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/wayne">Wayne</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/merion-station">Merion Station</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/west-wayne">West Wayne</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/merion-park">Merion Park</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/narberth">Narberth</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/devon">Devon</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/lower-merion">Lower Merion</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/penn-valley">Penn Valley</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/bala-cynwyd">Bala-Cynwyd</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/west-manayunk">West Manayunk</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/bala">Bala</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/camden">Camden</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/radnor">Radnor</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/pencoyd">Pencoyd</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/upper-dublin">Upper Dublin</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/broad-axe">Broad Axe</a>,{' '}
          <a className="text-[rgb(77,77,77)] hover:underline" href="/places/wynnewood">Wynnewood</a>.
        </p>
      ),
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-transparent px-8 py-18 md:px-6 md:py-30">
      <div className="flex mx-auto max-w-[1208px] flex-col gap-12 md:gap-16">
        <div className="flex flex-col self-stretch text-balance text-center md:max-w-[672px] md:self-start md:text-left">
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-[1.75rem] md:text-[2.5rem] lg:text-[3.5rem] font-[Inter] text-[rgb(10,10,10)]">
              Frequently asked questions
            </h2>
          </div>
        </div>
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <section key={faq.id} className="w-full">
              <button
                className="flex w-full items-center justify-between border-b border-[rgb(214,214,214)]"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-[1rem] md:text-[1.25rem] lg:text-[1.375rem] font-[Inter] text-[rgb(7,7,7)] py-6">
                  {faq.question}
                </span>
                <div className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                    className="shrink-0 text-[rgb(77,77,77)] h-4 w-4"
                  >
                    <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all ${openIndex === index ? 'h-auto' : 'h-0'}`}
              >
                <div>
                  <div className="border-b border-[rgb(214,214,214)] bg-[rgb(235,235,236)] p-6">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;