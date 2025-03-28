export const HomeHeader = () => {

    return (
      <div className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?travel,landscape')` }}>
        <div className="bg-gray-500 bg-opacity-50 w-full h-full absolute top-0 left-0 z-0"></div>
  
        <div className="relative z-10 text-white text-center max-w-xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">เที่ยวไหนดี</h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in delay-100">หาที่เที่ยวสักที่ แล้วไปด้วยกัน 🌍✈️</p>
  
          <form className="flex flex-col md:flex-row bg-white rounded-xl p-4 gap-2 shadow-lg animate-fade-in delay-200">
            <input
              type="text"
              id="search"
              name="search"

              placeholder="พิมพ์ชื่อสถานที่ เช่น เชียงใหม่, พัทยา..."
              className="flex-1 px-4 py-2 rounded-md text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-2 rounded-md transition-all"
            >
              ค้นหา
            </button>
          </form>
        </div>
      </div>
    );
  };
  