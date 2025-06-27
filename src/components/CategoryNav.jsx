import React, { useRef, useState } from 'react';
import Footer from './Footer';

const dishesByCategory = {
  'Popular': [
    {
      name: 'Chicken Tikka Masala',
      desc: 'Tender chicken cooked in a creamy tomato sauce with Indian spices.',
      price: '$14.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Chicken Tikka Masala
    },
    {
      name: 'Paneer Butter Masala',
      desc: 'Cottage cheese cubes simmered in a rich buttery tomato gravy.',
      price: '$12.99',
      img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', // Paneer Butter Masala
    },
    {
      name: 'Vegetable Biryani',
      desc: 'Basmati rice cooked with fresh vegetables and fragrant spices.',
      price: '$11.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Vegetable Biryani
    },
  ],
  'Lunch Vegetable Specials': [
    {
      name: 'Aloo Gobi',
      desc: 'Potato and cauliflower cooked with mild spices.',
      price: '$10.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Aloo Gobi
    },
    {
      name: 'Baingan Bharta',
      desc: 'Smoky mashed eggplant with onions and tomatoes.',
      price: '$11.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Baingan Bharta
    },
    {
      name: 'Mixed Veg Curry',
      desc: 'Seasonal vegetables in a light curry sauce.',
      price: '$10.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Mixed Veg Curry
    },
  ],
  'Lunch Chicken Specials': [
    {
      name: 'Chicken Curry',
      desc: 'Classic chicken curry with aromatic spices.',
      price: '$12.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Chicken Curry
    },
    {
      name: 'Chicken Saag',
      desc: 'Chicken cooked with spinach and mild spices.',
      price: '$13.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Chicken Saag
    },
    {
      name: 'Chicken Korma',
      desc: 'Chicken in a creamy cashew and almond sauce.',
      price: '$13.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Chicken Korma
    },
  ],
  'Lunch Lamb Specials': [
    {
      name: 'Lamb Curry',
      desc: 'Tender lamb in a traditional curry sauce.',
      price: '$15.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Lamb Curry
    },
    {
      name: 'Lamb Saag',
      desc: 'Lamb cooked with spinach and spices.',
      price: '$16.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Lamb Saag
    },
    {
      name: 'Lamb Vindaloo',
      desc: 'Spicy lamb curry with potatoes.',
      price: '$16.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Lamb Vindaloo
    },
  ],
  'Lunch Breads': [
    {
      name: 'Naan',
      desc: 'Soft leavened bread baked in tandoor.',
      price: '$2.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Naan
    },
    {
      name: 'Garlic Naan',
      desc: 'Naan topped with fresh garlic and cilantro.',
      price: '$3.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Garlic Naan
    },
    {
      name: 'Roti',
      desc: 'Whole wheat flatbread.',
      price: '$2.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Roti
    },
  ],
  'Appetizers': [
    {
      name: 'Samosa',
      desc: 'Crispy pastry filled with spiced potatoes and peas.',
      price: '$4.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Samosa
    },
    {
      name: 'Paneer Pakora',
      desc: 'Cottage cheese fritters.',
      price: '$5.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Paneer Pakora
    },
    {
      name: 'Chicken Pakora',
      desc: 'Spiced chicken fritters.',
      price: '$6.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Chicken Pakora
    },
  ],
  'Vegetarian Specialties': [
    {
      name: 'Dal Makhani',
      desc: 'Black lentils slow-cooked with butter and cream.',
      price: '$11.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Dal Makhani
    },
    {
      name: 'Chana Masala',
      desc: 'Chickpeas cooked in onion-tomato gravy.',
      price: '$10.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Chana Masala
    },
    {
      name: 'Malai Kofta',
      desc: 'Vegetable balls in creamy sauce.',
      price: '$12.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Malai Kofta
    },
  ],
  'Chicken Specialties': [
    {
      name: 'Butter Chicken',
      desc: 'Chicken in creamy tomato sauce.',
      price: '$14.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Butter Chicken
    },
    {
      name: 'Chicken Chettinad',
      desc: 'Spicy South Indian chicken curry.',
      price: '$15.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Chicken Chettinad
    },
    {
      name: 'Chicken Madras',
      desc: 'Chicken in coconut-based curry.',
      price: '$14.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Chicken Madras
    },
  ],
  'Lamb Specialties': [
    {
      name: 'Lamb Korma',
      desc: 'Lamb in creamy nut sauce.',
      price: '$16.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Lamb Korma
    },
    {
      name: 'Lamb Bhuna',
      desc: 'Lamb cooked with onions and peppers.',
      price: '$16.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Lamb Bhuna
    },
    {
      name: 'Lamb Do Pyaza',
      desc: 'Lamb with double onions.',
      price: '$16.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Lamb Do Pyaza
    },
  ],
  'Seafood Specialties': [
    {
      name: 'Fish Curry',
      desc: 'Fish fillet in tangy curry sauce.',
      price: '$15.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Fish Curry
    },
    {
      name: 'Shrimp Masala',
      desc: 'Shrimp cooked in spicy masala.',
      price: '$16.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Shrimp Masala
    },
    {
      name: 'Goan Fish Curry',
      desc: 'Fish in coconut-based Goan sauce.',
      price: '$16.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Goan Fish Curry
    },
  ],
  'Goat Specials': [
    {
      name: 'Goat Curry',
      desc: 'Goat meat in traditional curry.',
      price: '$17.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Goat Curry
    },
    {
      name: 'Goat Vindaloo',
      desc: 'Spicy goat curry with potatoes.',
      price: '$18.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Goat Vindaloo
    },
    {
      name: 'Goat Saag',
      desc: 'Goat cooked with spinach.',
      price: '$18.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Goat Saag
    },
  ],
  'Tandoor (Bar-Be-Que)': [
    {
      name: 'Tandoori Chicken',
      desc: 'Chicken marinated in yogurt and spices, cooked in tandoor.',
      price: '$13.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Tandoori Chicken
    },
    {
      name: 'Paneer Tikka',
      desc: 'Grilled cottage cheese cubes.',
      price: '$12.99',
      img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', // Paneer Tikka
    },
    {
      name: 'Seekh Kebab',
      desc: 'Minced meat skewers.',
      price: '$14.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Seekh Kebab
    },
  ],
  'Biryani': [
    {
      name: 'Chicken Biryani',
      desc: 'Basmati rice with chicken and spices.',
      price: '$13.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Chicken Biryani
    },
    {
      name: 'Lamb Biryani',
      desc: 'Basmati rice with lamb and spices.',
      price: '$15.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Lamb Biryani
    },
    {
      name: 'Veg Biryani',
      desc: 'Basmati rice with vegetables and spices.',
      price: '$11.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Veg Biryani
    },
  ],
  'Breads': [
    {
      name: 'Butter Naan',
      desc: 'Naan brushed with butter.',
      price: '$3.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Butter Naan
    },
    {
      name: 'Onion Kulcha',
      desc: 'Naan stuffed with onions.',
      price: '$3.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Onion Kulcha
    },
    {
      name: 'Aloo Paratha',
      desc: 'Whole wheat bread stuffed with potatoes.',
      price: '$4.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Aloo Paratha
    },
  ],
  'Accompaniments': [
    {
      name: 'Raita',
      desc: 'Yogurt with cucumber and spices.',
      price: '$2.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Raita
    },
    {
      name: 'Papadum',
      desc: 'Crispy lentil crackers.',
      price: '$1.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Papadum
    },
    {
      name: 'Pickle',
      desc: 'Spicy Indian pickle.',
      price: '$1.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Pickle
    },
  ],
  'Desserts': [
    {
      name: 'Gulab Jamun',
      desc: 'Milk dumplings in sugar syrup.',
      price: '$4.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Gulab Jamun
    },
    {
      name: 'Ras Malai',
      desc: 'Cottage cheese balls in sweetened milk.',
      price: '$5.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Ras Malai
    },
    {
      name: 'Kheer',
      desc: 'Rice pudding with cardamom.',
      price: '$4.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Kheer
    },
  ],
  'Drinks': [
    {
      name: 'Mango Lassi',
      desc: 'Refreshing yogurt drink blended with ripe mangoes.',
      price: '$4.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Mango Lassi
    },
    {
      name: 'Masala Chai',
      desc: 'Spiced Indian tea.',
      price: '$2.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Masala Chai
    },
    {
      name: 'Sweet Lassi',
      desc: 'Sweetened yogurt drink.',
      price: '$3.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Sweet Lassi
    },
  ],
  'June Entree Special': [
    {
      name: 'Jackfruit Curry',
      desc: 'Tender jackfruit in spicy curry sauce.',
      price: '$13.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Jackfruit Curry
    },
    {
      name: 'Methi Malai Murg',
      desc: 'Chicken with fenugreek and cream.',
      price: '$14.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Methi Malai Murg
    },
    {
      name: 'Paneer Lababdar',
      desc: 'Paneer in rich tomato gravy.',
      price: '$12.99',
      img: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg', // Paneer Lababdar
    },
  ],
  'June Appetizer Specials': [
    {
      name: 'Corn Tikki',
      desc: 'Corn patties with spices.',
      price: '$6.99',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Corn Tikki
    },
    {
      name: 'Stuffed Mushroom',
      desc: 'Mushrooms stuffed with cheese and herbs.',
      price: '$7.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Stuffed Mushroom
    },
    {
      name: 'Crispy Okra',
      desc: 'Fried okra with spices.',
      price: '$6.49',
      img: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg', // Crispy Okra
    },
  ],
};

const categories = Object.keys(dishesByCategory);

const CategoryNav = () => {
  const scrollRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (category, refId) => {
    setSelectedCategory(category);
    const section = document.getElementById(refId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-full bg-white shadow-sm sticky top-[112px] z-20">
      {/* Navigation Bar */}
      <div className="relative flex items-center px-4 py-2">
        {/* Scroll Left Icon Button */}
        <button
          type="button"
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
            }
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
          aria-label="Scroll left"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            className="text-gray-600"
          >
            <path
              d="M15 6l-6 6 6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hidden gap-2 w-full mx-8"
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map((category, idx) => (
            <button
              key={idx}
              className={`flex-shrink-0 px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold font-['Inter'] transition-colors ${
                selectedCategory === category
                  ? 'bg-[#f45c24] text-white'
                  : 'bg-transparent text-gray-600 hover:bg-gray-100 hover:text-black'
              }`}
              title={category}
              onClick={() => handleCategoryClick(category, `category-${idx}`)}
            >
              {category}
              {selectedCategory === category && (
                <span
                  style={{
                    position: 'absolute',
                    border: '0px',
                    width: '1px',
                    height: '1px',
                    padding: '0px',
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0px, 0px, 0px, 0px)',
                    whiteSpace: 'nowrap',
                    overflowWrap: 'normal',
                  }}
                >
                  Current Category
                </span>
              )}
            </button>
          ))}
        </div>
        {/* Scroll Right Icon Button */}
        <button
          type="button"
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 ml-2 z-10 hover:bg-gray-100"
          aria-label="Scroll right"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            className="text-gray-600"
          >
            <path
              d="M9 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Category Sections with Headings and Dish Grids */}
      <div className="mx-auto max-w-[1400px] px-4 py-8">
        {categories.map((category, idx) => (
          <div key={idx} id={`category-${idx}`} className="mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#0D0D0D] font-['Inter'] tracking-tight mb-6">
              {category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {dishesByCategory[category].map((dish, dishIdx) => (
                <div
                  key={dishIdx}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#0D0D0D] font-['Inter']">
                      {dish.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{dish.desc}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-lg font-medium text-[#f45c24]">
                        {dish.price}
                      </span>
                      <button className="bg-[#f45c24] text-white py-2 px-4 rounded-md hover:bg-[#d6501f] transition-colors duration-200">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CategoryNav;