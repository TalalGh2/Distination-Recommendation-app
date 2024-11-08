import React from 'react';
import hawaii from '../images/Hanalei Bay, Hawaii.webp';
import florida from '../images/Grayton Beach, Florida.webp';
import temple1 from '../images/Shayan Naveed.webp';
import temple2 from '../images/Rota Rakula.webp';

const DistenationCard = ({ search }) => {
  const distinations = [
    {
      img: hawaii,
      country: "us",
      city: "hawaii",
      name: 'Hanalei Bay, us',
      type: "beach",
      info: `Long before Hollywood put it on the tourist map (first with "South Pacific" in 1958, then with "The Descendants" in 2011), Kauai's Hanalei Bay attracted locals for its near-mystical beauty. Its beaches — Wai'oli, Hanalei Pavilion, and Black Pot — are framed by jade-colored mountains rising more than 4,000 feet high. The area is especially popular with surfers in the winter when the waves pick up size and speed`
    },
    {
      img: florida,
      country: "us",
      city: "florida",
      name: 'Grayton Beach,us',
      type: "beach",
      info: `Perhaps the most famous beach in the world, Copacabana has just about everything going for it: roughly 2.5 miles of glorious golden sand, a party vibe, and a dazzling skyline of jagged mountains and art deco and modernist architecture. Even the beach boulevard, a Portuguese-inspired black-and-white mosaic design by landscape architect Roberto Burle Marx, is a visual knockout.`
    },
    {
      img: temple1,
      country: "thailand",
      city: "Bangkok",
      name: 'Shayan Naveed,thailand',
      type: "temple",
      info: `Perched on man-made hill is Wat Saket or popularly known as the Golden Mount. It was built back in the Ayutthaya dynasty around 1500s and was renovated in the late 1700s. The most prominent feature of this temple is the 58 meter chedi at the top, reachable by over 300 steps, This is one of few temples in Bangkok, which is often overlooked by tourists in favor of The Grand Palace, Wat Pho and Wat Arun. Locals go here to worship with a very few foreigners being seen around. The temple also hosts an annual temple fair in November, which lasts a week during Loy Krathong festival.`
    },
    {
      img: temple2,
      country: "thailand",
      city: "Chiang Mai",
      name: 'Rota Rakula,thailand',
      type: "temple",
      info: `A stunning ancient structure located in the heart of the old city, Wat Chedi Luang sits at a height where it can overlook much of Chiang Mai. In fact it was the tallest structure in Chiang Mai for over 500 years, but is now characterised mainly by its massive crumbling dome. Its other claim to fame is that the greatly revered Jade Buddha – now located in Wat Phra Kaew in Bangkok – was actually kept in this temple until the late 1400’s. There is also a pillar on the grounds of Wat Chedi Luang – Lak Mueang or the City Pillar – that is believed to protect the city of Chiang Mai.`
    }
  ];

  if (!search) {
    return null;
  }

  const filteredDestinations = distinations.filter((destination) => {
    return (
      destination.name.toLowerCase().includes(search.toLowerCase()) ||
      destination.city.toLowerCase().includes(search.toLowerCase()) ||
      destination.country.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className='w-[400px] max-h-[600px] flex flex-col absolute gap-5 top-36 z-20 overflow-scroll'>
      {filteredDestinations.length > 0 ? (
        filteredDestinations.map((destination) => (
          <div key={destination.name} className='bg-white rounded-lg h-auto'>
            <div className='w-full h-[60%]'>
              <img
                src={destination.img}
                alt={destination.name}
                style={{ objectFit: 'cover' }}
                className='rounded-t-lg'
              />
            </div>
            <div className='p-2'>
              <h1 className='text-black'>{destination.name}</h1>
              <p className='text-sm text-gray-400'>{destination.info}</p>
              <button className='w-16 h-9 bg-cyan-800 text-white rounded-lg'>
                Visit
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-white">No destinations found.</p>
      )}
    </div>
  );
};

export default DistenationCard;
