import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


function Conponentcontats() {
    return (
        <>
            <div>
                <div className="mt-10 sm:mt-14 md:mt-20 flex justify-center ">
                    <div >
                        <h1 className="text-5xl text-white">
                            Contacta
                            <span className="p-3">
                                ¡Me!
                            </span>
                        </h1>
                    </div>
                </div>
                <div>
                    <div className="mt-4 sm:mt-8 md:mt-10 flex justify-center">
                        <p className="text-white text-2xl sm:text-3xl  md:text-4xl ">
                            ¡Ponte en contacto conmigo!
                        </p>
                    </div>
                    <div className=" flex justify-center mt-5">
                        <p className="text-white w-80 sm:w-96 md:w-3/6 text-left  ">
                            ¡Hola! Si estás buscando un programador junior para colaborar en tus
                            proyectos, no dudes en ponerte en contacto conmigo. Puedes comunicarte a
                            través de mis diferentes redes de comunicación:
                            envíame un mensaje por LinkedIn, escríbeme un correo electrónico
                            o llame a mi telefono.
                            Estoy entusiasmado por la oportunidad de trabajar juntos y aportar mis habilidades en programación a tus
                            proyectos. ¡Espero tu mensaje!
                        </p>
                    </div>
                </div>
                <div className=" sm:block md:flex justify-center mt-10 w-auto">
                    <div className="text-center text-lg sm:text-2xl md:text-2xl mr-10">
                        <div>
                            <FontAwesomeIcon className="text-white" icon={faPhone} />
                            <p className="text-white">
                                +593979571120
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="text-center text-lg sm:text-2xl md:text-2xl mr-10">
                            <FontAwesomeIcon className="text-white" icon={faLocationDot} />
                            <p className="text-white">
                                Ecuador -  Quito
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className=" text-center text-lg sm:text-2xl md:text-2xl mr-10 ">
                            <FontAwesomeIcon className="text-white" icon={faEnvelope} />
                            <p className="text-white   ">
                                dennisalexander11770@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Conponentcontats;