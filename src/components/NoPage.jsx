// 404 ERROR PAGE


export default function NoPage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-6xl font-bold text-[#e0e0eb]">404 Error</h1>
            <h2 className="text-2xl font-bold text-[#8892b0]">Oops! Can't Find That Page</h2>
            <a href="/">
                <button className="text-black font-bold group border-2 px px-6 py-3 my-2 flex items-center hover:bg-blue-800 hover:border-blue-800">
                    Go Back Home
                </button>
            </a>
        </div>
    );
}