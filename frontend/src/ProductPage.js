import React from 'react';
import bOil1 from './b-oil1.jpg';
import bOil2 from './b-oil2.jpg';
import bOil3 from './b-oil3.jpg';
import bOil4 from './b-oil4.jpg';
import { FaLeaf, FaRegGem, FaTint, FaStar, FaCheckCircle } from 'react-icons/fa';

const products = [
  {
    name: 'BellaOil Classic',
    desc: 'Pure, cold-pressed olive oil for daily skin nourishment.',
    image: bOil1,
  },
  {
    name: 'BellaOil Glow',
    desc: 'Infused with botanical extracts for a radiant finish.',
    image: bOil2,
  },
  {
    name: 'BellaOil Luxe',
    desc: 'Enriched with vitamins for deep hydration and repair.',
    image: bOil3,
  },
  {
    name: 'BellaOil Calm',
    desc: 'Soothing formula for sensitive skin types.',
    image: bOil4,
  },
];

const ProductPage = () => (
  <div className="font-sans bg-white min-h-screen pt-24 pb-12 px-2 md:px-0">
    <section className="container mx-auto px-4 py-12 text-center" data-aos="fade-up">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'serif' }}>
        Shop BellaOil
      </h1>
      <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
        Discover our collection of premium olive oil skincare products. Each formula is crafted for radiant, healthy skin and a luxurious self-care experience.
      </p>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center text-center gap-4 border border-rose-gold-50" data-aos="fade-up">
            <img src={p.image} alt={p.name + ' product bottle'} className="rounded-2xl shadow-lg w-48 h-48 object-cover object-center border-4 border-white mb-2" />
            <h2 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'serif' }}>{p.name}</h2>
            <p className="text-gray-600 text-base mb-2">{p.desc}</p>
            <button className="bg-rose-gold-500 hover:bg-rose-gold-600 text-white px-6 py-2 rounded-full text-base font-semibold shadow transition-all duration-300 mt-auto">Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-16">
        <div className="flex items-center gap-2 text-gray-700"><FaLeaf className="text-rose-gold-400" /> 100% Natural</div>
        <div className="flex items-center gap-2 text-gray-700"><FaRegGem className="text-rose-gold-300" /> Premium Quality</div>
        <div className="flex items-center gap-2 text-gray-700"><FaTint className="text-rose-gold-200" /> Deep Hydration</div>
        <div className="flex items-center gap-2 text-gray-700"><FaStar className="text-rose-gold-400" /> Loved by Many</div>
      </div>
      <div className="mt-16">
        <a href="#buy" className="bg-rose-gold-500 hover:bg-rose-gold-600 text-white px-12 py-5 rounded-full text-xl font-semibold shadow-lg transition-all duration-300">Checkout</a>
      </div>
    </section>
  </div>
);

export default ProductPage; 