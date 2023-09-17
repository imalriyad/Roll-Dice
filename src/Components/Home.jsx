/* eslint-disable react/prop-types */

const Home = ({pageRedirect}) => {
    return (
        <div>
             <div className="md:flex items-center md:my-20 gap-20 mx-auto px-8">
                <img src="./public/dicess.png" alt="" className="w-[649px] mt-10" />
               <div>
               <h1 className="md:text-8xl mt-10 text-[44px] text-[#000000] font-bold text-center">DICE GAME</h1>

               <div className="md:text-right text-center">
               <button onClick={pageRedirect} className="md:py-3 md:px-24 px-10 py-2 md:mt-6 mt-4 rounded text-base text-white bg-[#000000] hover:bg-white hover:border-[1px] hover:border-[#000000] hover:text-[#000000] hover:font-semibold transition duration-0 ease-in-out hover:duration-500">Play Now</button>
               </div>
               </div>
             </div>
             
        </div>
    );
};

export default Home;