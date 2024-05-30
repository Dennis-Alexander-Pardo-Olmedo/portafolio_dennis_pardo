import Botton from '../Átomos/botton';
import dennis_pardo from './../../assets/img/dennispardo.png'
function Imgperfiles() {
    return (
        <>
            <div className='flex  flex-wrap items-center justify-center p-8 sm:p-8 '>
                <div className='flex flex-col sm:flex-row items-center sm:items-start sm:space-x-8'>
                    <div className="flex flex-col items-center mb-4 sm:mb-0   ">
                        <img src={dennis_pardo} alt={''} className="  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  h-96 sm:h-64 md:h-80 lg:h-96 rounded-full animate-pulse-shadow " />
                        <Botton />
                    </div>
                    <div className='w-full sm:w-3/4 text-center sm:text-left lg:mt-32 '>
                        <h1 className=' text-white text-2xl  sm:text-3xl md:text-4xl lg:text-5xl text-center'>
                            ¡ Mi nombre es
                            <span className='pl-2 text-blue-500 '>
                                Dennis Pardo
                            </span>
                            !
                        </h1>
                        <div className=' mt-4 sm:mt-0 sm:ml-0  ' >
                            <p className='text-white text-lg  sm:text-xl md:text-2xl  '>
                                ¡Bienvenido a mi portafolio! Aquí comparto mi pasión por la tecnología y la programación.
                                Como programador junior, soy una persona entusiasta, 
                                siempre dispuesta a aprender y a aplicar mis conocimientos en proyectos innovadores!.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Imgperfiles;