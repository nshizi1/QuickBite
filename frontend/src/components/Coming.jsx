function Coming() {
    const  year = new Date().getFullYear();
  return (
    <section id="coming" className="flex flex-col items-center justify-between px-20 py-10">
        <header className="flex items-center justify-between w-full text-blue-400">
            <div className="logo">
                <h3 className="text-4xl font-bold ">Fudie</h3>
            </div>
            <div className="links">
                <ul className="flex gap-1">
                    <li><a href="#" className="text-xl font-bold">About</a></li>
                    <li><a href="#" className="text-xl font-bold">Contact</a></li>
                </ul>
            </div>
        </header>
        <div className="flex flex-col items-center gap-2 text-white">
            <h1 className="text-5xl font-bold uppercase">Coming soon</h1>
            <p className="text-xl">We are currently working on this website.</p>
            <p className="text-xl">It will be here soon, click &quot;Notify me&quot; button to be ready for the grand day!</p>
            <button className="px-6 py-2 text-xl font-bold transition ease-in-out bg-blue-500 rounded-md hover:bg-blue-600 ">Notify me</button>
        </div>
        <footer className="flex flex-col items-center text-xl text-white">
            <p>{year} &copy; <a href="#" className="font-bold">Trave designs</a>. All rights reserved.</p>
            <ul className="flex gap-4">
                <li><a href="#"><i className="text-2xl text-blue-700 fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="text-2xl text-pink-700 fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="text-2xl text-blue-500 fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="text-2xl text-gray-800 fa-brands fa-github"></i></a></li>
                <li><a href="#"><i className="text-2xl text-purple-600 fa-solid fa-globe"></i></a></li>
            </ul>
        </footer>
    </section>
  )
}

export default Coming;
