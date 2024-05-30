import logohtml from '../../assets/img/HTML5_logo_and_wordmark.svg.png';
import logocss from '../../assets/img/CSS3_logo_and_wordmark.svg.png'
import logojs from '../../assets/img/1200px-Javascript-shield.svg.png'
import logoreact from '../../assets/img/react-original-wordmark-icon-840x1024-vhmauxp6.png'
import logotailwind from '../../assets/img/7-pasos-para-instalar-tailwind-css-en-laravel-10-removebg-preview.png'
function Technology() {
    return (
        <>
            <div className=" mt-10 flex px-4 w-full justify-center sm:px-20 md:px-48">
                <h1 className='text-center text-white sm:text-5xl text-5xl'>
                    Tecnología
                </h1>
            </div>
            <div className='mt-10 flex flex-wrap items-center justify-center p-8 sm:p-8 '>
                <div className=" m-4 trasform rounded-xl h-24 w-24 sm:h-64 sm:w-64 md:h-64 bg-blue-700 shadow-lg transition duration-300 hover:scale-105">
                    <div className="flex h-full justify-center items-center">
                        <span >
                            <img className='w-16 sm:w-24 md:w-48' src={logohtml} alt="" />
                        </span>
                    </div>
                </div>
                <div className="m-4 trasform rounded-xl h-24 w-24 sm:h-64 sm:w-64 md:h-64 bg-blue-700 shadow-lg transition duration-300 hover:scale-105">
                    <div className=" flex h-full justify-center items-center">
                        <span >
                            <img className='w-16 sm:w-24 md:w-36 ' src={logocss} alt="" />
                        </span>
                    </div>
                </div>
                <div className="m-4 trasform rounded-xl h-24 w-24 sm:h-64 sm:w-64 md:h-64  bg-blue-700 shadow-lg transition duration-300 hover:scale-105">
                    <div className="flex h-full justify-center items-center">
                        <span >
                            <img className='w-16 sm:w-24 md:w-36' src={logojs} alt="" />
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-16'>
                <h1 className='text-white text-5xl' >
                    Aprendiendo
                </h1>
            </div>
            <div>

                <div className=' flex justify-center mt-24'>
                    <div className=' mr-7 sm:mr-24 md:mr-14  trasform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-lg transition duration-300 hover:scale-105'>
                        <div className='flex h-full justify-center items-center'>
                            <span>
                                <img className='w-16 sm:w-24 md:w-36' src={logoreact} alt="" />
                            </span>
                        </div>
                    </div>
                    <div className='trasform rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-lg transition duration-300 hover:scale-105'>
                        <div className='flex h-full justify-center items-center'>
                            <span>
                                <img className='w-96' src={logotailwind} alt="" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Technology;
