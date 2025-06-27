// components/PopularItems.jsx
import React from 'react';

const PopularItems = () => {
  const popularItems = [
    {
      id: 1,
      name: "Tandoori Chicken",
      description: "Spring chicken marinated in masala yogurt for 24 hrs and baked in tandoor.",
      image: "https://static-content.owner.com/menu-items/items/5ed386cfc40e11001383c255.png?v=7392687967",
      link: "/menu?item=tandoori-chicken-ydJF"
    },
    {
      id: 2,
      name: "Chicken Kathi Roll",
      description: "Thin Indian homemade bread wrapped around charcoal-grilled chicken tikka with sautéed onions, tomatoes, and our own blend of spices.",
      image: "https://static-content.owner.com/menu-items/items/5ed37d8cdcd743001318c4c5.png?v=5127557439",
      link: "/menu?item=chicken-kathi-roll-g3v4"
    },
    {
      id: 3,
      name: "Chatpata Murg Tikka",
      description: "Chicken tenders, marinated in hung yogurt spiced with coriander, ginger, and cumin powder and baked in charcoal clay oven.",
      image: "https://static-content.owner.com/menu-items/items/5ed37dcac40e11001383bef4.png?v=3485164884",
      link: "/menu?item=chatpata-murg-tikka-1TP9"
    },
    {
      id: 4,
      name: "Garlic Naan",
      description: "Leavened bread with garlic and cilantro.",
      image: "https://static-content.owner.com/menu-items/items/5ed38a07dcd743001318c993.png?v=1367421716",
      link: "/menu?item=garlic-naan"
    },
    {
      id: 5,
      name: "Tandoori Lamb Chops",
      description: "French rack of lamb, marinated with sour cream, and spices, grilled in the tandoor oven.",
      image: "https://static-content.owner.com/menu-items/items/5ed3875bdcd743001318c87f.png?v=5099909432",
      link: "/menu?item=tandoori-lamb-chops-j8tw"
    },
    {
      id: 6,
      name: "Vegetable Samosa (2 Pieces)",
      description: "Homemade turnovers stuffed with diced potatoes and peas, flavored with spices.",
      image: "https://static-content.owner.com/menu-items/items/5ed37cddc40e11001383beb4.png?v=1296788168",
      link: "/menu?item=vegetable-samosa-2-pieces"
    },
    {
      id: 7,
      name: "Navratan Korma",
      description: "Nine sliced vegetables with nuts, cooked in a creamy cashew sauce.",
      image: "https://static-content.owner.com/menu-items/items/5ed380c9c40e11001383bfea.png?v=5714212160",
      link: "/menu?item=navratan-korma-AOGN"
    },
    {
      id: 8,
      name: "Chicken Tikka Masala",
      description: "Tandoori chicken tenders cooked in a delightful delicate, tangy tomato sauce.",
      image: "https://static-content.owner.com/menu-items/items/5ed3834bdcd743001318c6b6.png?v=8493198453",
      link: "/menu?item=chicken-tikka-masala-d26f"
    },
    {
      id: 9,
      name: "Saag Paneer",
      description: "Homemade cheese tossed with spinach, masala, and a touch of garlic.",
      image: "https://static-content.owner.com/menu-items/items/5ed38030c40e11001383bfbd.png?v=2585860838",
      link: "/menu?item=saag-paneer-CUig"
    }
  ];

  return (
    <div className="flex flex-col gap-12 py-18 md:gap-16 md:py-30">
      <div className="bg-transparent px-8">
        <div className="flex mx-auto flex-col gap-8 text-balance text-center md:max-w-2xl md:items-center">
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black-600">
              Try our most popular items
            </h2>
            <p className="text-base text-gray-600">
              Treat yourself to our must-try list that has everyone talking
            </p>
          </div>
          <a 
            className="group relative flex items-center text-base font-medium rounded-lg transition-all ease-in-out bg-orange-600 text-white min-h-12 py-3 px-4 justify-center" 
            aria-label="View Full Menu" 
            href="/menu"
          >
            <span className="pointer-events-none absolute inset-0 bg-black/5 opacity-0 transition-opacity group-hover:opacity-100 rounded-lg"></span>
            <span className="flex items-center justify-center gap-x-2 flex-1">
              <span className="flex flex-row items-center gap-x-1">
                View Full Menu
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
      
      <div className="flex w-full overflow-hidden">
        <div className="hover:animation-pause flex gap-4 animate-infinite-ticker" style={{ animationDuration: '140.4s' }}>
          {/* First set of items */}
          <div className="flex gap-4">
            {popularItems.map(item => (
              <div key={item.id} className="bg-transparent overflow-clip rounded-xl relative w-64 shrink-0 md:w-72">
                <div className="absolute h-full rounded-xl ml-0.5 w-[98%]">
                  <img 
                    alt="" 
                    loading="lazy" 
                    decoding="async" 
                    className="rounded-[1.7rem] object-cover" 
                    src={item.image}
                    style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent', maxWidth: '100%' }}
                  />
                </div>
                <div className="relative flex h-full w-full select-none flex-col gap-4 bg-black/50 px-2 pb-4 pt-2 backdrop-blur-sm">
                  <div className="bg-transparent overflow-clip rounded-lg h-60 w-60 md:h-64 md:w-64 relative">
                    <img 
                      alt="" 
                      loading="lazy" 
                      decoding="async" 
                      className="h-60 w-60 md:h-64 md:w-64 select-none object-cover" 
                      src={item.image}
                      style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent', maxWidth: '100%' }}
                    />
                  </div>
                  <div className="flex grow flex-col justify-between gap-4 px-2">
                    <div className="flex flex-col gap-1">
                      <p className="text-base text-white font-medium line-clamp-1">{item.name}</p>
                      <p className="text-sm line-clamp-2 text-gray-300">{item.description}</p>
                    </div>
                    <a 
                      className="flex justify-center rounded-lg bg-white/20 py-2" 
                      href={item.link}
                    >
                      <span className="text-sm text-white font-medium">Add Item</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second set of items (duplicate for infinite scroll effect) */}
          <div className="flex gap-4">
            {popularItems.map(item => (
              <div key={`dup-${item.id}`} className="bg-transparent overflow-clip rounded-xl relative w-64 shrink-0 md:w-72">
                <div className="absolute h-full rounded-xl ml-0.5 w-[98%]">
                  <img 
                    alt="" 
                    loading="lazy" 
                    decoding="async" 
                    className="rounded-[1.7rem] object-cover" 
                    src={item.image}
                    style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent', maxWidth: '100%' }}
                  />
                </div>
                <div className="relative flex h-full w-full select-none flex-col gap-4 bg-black/50 px-2 pb-4 pt-2 backdrop-blur-sm">
                  <div className="bg-transparent overflow-clip rounded-lg h-60 w-60 md:h-64 md:w-64 relative">
                    <img 
                      alt="" 
                      loading="lazy" 
                      decoding="async" 
                      className="h-60 w-60 md:h-64 md:w-64 select-none object-cover" 
                      src={item.image}
                      style={{ position: 'absolute', height: '100%', width: '100%', inset: '0px', color: 'transparent', maxWidth: '100%' }}
                    />
                  </div>
                  <div className="flex grow flex-col justify-between gap-4 px-2">
                    <div className="flex flex-col gap-1">
                      <p className="text-base text-white font-medium line-clamp-1">{item.name}</p>
                      <p className="text-sm line-clamp-2 text-gray-300">{item.description}</p>
                    </div>
                    <a 
                      className="flex justify-center rounded-lg bg-white/20 py-2" 
                      href={item.link}
                    >
                      <span className="text-sm text-white font-medium">Add Item</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItems;