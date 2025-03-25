import sb from "../assets/imgs/cover.avif";

const Cover = ({ title, sub1 ,sub2 }) => {
    return (
        <div className="relative w-full mb-30">
            {/* Background Image */}
            <img src={sb} className="w-full h-60 sm:h-80 md:h-96 lg:h-[450px] object-cover" alt="Cover" />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 poppins-font">
                    {title}  {/* Dynamic Title */}
                </p>
                <div className="flex items-center space-x-3 text-lg sm:text-xl md:text-2xl">
                    <p className="">{sub1}</p>
                    <p className="">{'>'}</p>
                    <p>{sub2}</p> 
                </div>
            </div>
        </div>
    );
};

export default Cover;
