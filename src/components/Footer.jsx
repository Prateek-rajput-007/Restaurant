import React from 'react';

const Footer = () => {
  const navLinks = [
    { id: 1, text: 'Home', href: '/', isCurrent: true },
    { id: 2, text: 'Menu', href: 'https://saffronofphilly.com/menu', isCurrent: false },
    { id: 3, text: 'Catering', href: '/page/catering', isCurrent: false },
    { id: 4, text: 'Gift Cards', href: '/gift-cards', isCurrent: false },
  ];

  const legalLinks = [
    { id: 1, text: 'Terms & Policies', href: 'https://saffronofphilly.com/terms' },
    { id: 2, text: 'Accessibility Statement', href: 'https://owner.com/accessibility' },
  ];

  return (
    <div className="bg-[rgb(235,235,236)] overflow-hidden rounded-[1.5rem] w-full px-6 py-12">
      <div className="bg-transparent mx-auto max-w-[1208px] gap-x-8 gap-y-4 md:flex lg:gap-x-20 xl:gap-x-36">
        <div className="bg-transparent mb-6 md:mb-0">
          <img
            height="48"
            className="object-contain"
            src="https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=48&auto=format&dpr=1"
            srcSet="
              https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=48&auto=format&dpr=1 1x,
              https://static-content.owner.com/brands/logos/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=7455699470&h=48&auto=format&dpr=2 2x"
            alt="Saffron Indian Kitchen"
            aria-hidden="true"
          />
        </div>
        <div className="bg-transparent grid flex-grow grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-[1fr_auto_auto] md:gap-x-8 md:gap-y-10 lg:gap-x-12 xl:grid-cols-[1fr_200px_200px]">
          <div className="bg-transparent grid grid-cols-1 gap-x-4 gap-y-2 md:grid-cols-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                aria-current={link.isCurrent ? 'page' : 'false'}
                href={link.href}
              >
                <p className="text-[1rem] text-black font-[Inter] hover:underline">
                  {link.text}
                  {link.isCurrent && (
                    <span
                      style={{
                        position: 'absolute',
                        border: 0,
                        width: '1px',
                        height: '1px',
                        padding: 0,
                        margin: '-1px',
                        overflow: 'hidden',
                        clip: 'rect(0, 0, 0, 0)',
                        whiteSpace: 'nowrap',
                        wordWrap: 'normal',
                      }}
                    >
                      Current Page
                    </span>
                  )}
                </p>
              </a>
            ))}
          </div>
          <div className="bg-transparent hidden md:block"></div>
          <div className="bg-transparent mt-4 flex flex-col md:mt-0 md:justify-self-end">
            <a
              className="group relative flex items-center text-[1rem] font-[Inter] rounded-[0.625rem] transition-all ease-in-out bg-[rgb(244,92,36)] text-white min-h-10 py-2 px-3 justify-center"
              aria-label="Order Now"
              href="/menu"
            >
              <span className="pointer-events-none absolute inset-0 bg-black/[0.04] opacity-0 transition-opacity group-hover:opacity-100 rounded-[0.625rem]"></span>
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
          <div className="bg-transparent col-span-1 border-t border-[rgb(214,214,214)] md:col-span-3"></div>
          <div className="bg-transparent flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 hover:underline"
              >
                <span className="text-[0.875rem] text-black font-[Inter]">
                  {link.text}
                </span>
              </a>
            ))}
          </div>
          <div className="bg-transparent hidden md:block"></div>
          <div className="bg-transparent hidden md:block"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;