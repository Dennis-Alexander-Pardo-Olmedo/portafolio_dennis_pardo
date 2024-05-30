import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Botton() {
    return (
        <>
            <div className=" bg-blue-700 w-20 mt-14 ml-28 rounded-full text-center">
                <button className="shadow-blue-500/50 shadow-lg rounded-full size-20 text-5xl">
                    <a href="https://www.linkedin.com/in/dennis-pardo-116241210" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='text-white' icon={faLinkedin} />
                    </a>
                </button>
            </div>
            <div className='bg-blue-700 w-20 -mt-20 -ml-28 rounded-full text-center'>
                <button className="shadow-blue-500/50 shadow-lg rounded-full size-20 text-5xl">
                    <a href='https://github.com/Dennis-Alexander-Pardo-Olmedo' target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className='text-white' icon={faGithub} />
                    </a>
                </button>
            </div>
        </>
    )
}
export default Botton;