import im1 from '../assets/im1.png'
function Hero  ()  {
  return (
    <section className="grid md:grid-cols-2 gap-6 p-8 bg-pink-50 items-center">
      <div>
        <span className="bg-pink-100 text-blue-800 px-10 py-3 rounded-full text-sm font-medium">Nouvelle collection</span>
        <h1 className="mt-4 text-4xl font-bold">
          Agency
          <br />
          <span className="text-blue-500">Rico Buzy_TD</span>
        </h1>
        <p className="mt-4 text-gray-600">Trouvez votre style parmi nos vêtements tendance pour femmes, hommes et enfants.</p>
        <div className="mt-6 flex space-x-8">
          <button className="px-6 py-3 Pbg-pink-600 text-black rounded-xl">Voir la collection</button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-xl">S'inscrire</button>
        </div>
      </div>
      <div>
        <img
          src={im1}
          alt="Illustration mode"
          className="w-full rounded-lg shadow-md"
        />
      </div>
    </section>
  );
};

export default Hero;