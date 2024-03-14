function HomeHero() {
  return (
    <header>
      <div className="w-full bg-center bg-cover bg-[url('/thumbs/toyotas.jpg')]">
        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
          <div className="text-center">
            <div className="container px-4 mx-auto">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                  Toyota
                </h2>
                <p className=" max-w-3xl mx-auto mb-10 text-2xl font-semibold text-gray-300">
                  The brand of reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HomeHero;
