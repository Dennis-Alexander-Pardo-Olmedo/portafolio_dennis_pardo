import { useState, ChangeEvent, FormEvent } from 'react';

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // falta la logiaca para en viar un correo 
    };

    return (
        <div className=" max-w-72 md:max-w-md mx-auto   mt-10">
            <h1 className="flex justify-center text-white text-3xl font-bold mb-5">
                Contactame
            </h1>
            <form onSubmit={handleSubmit} className=" mt-14 sm:mt-20 md:mt-24 bg-white p-6 rounded-lg shadow-lg">
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="mensaje" className="block text-gray-700 font-bold mb-2">
                        Mensaje
                    </label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default Formulario;