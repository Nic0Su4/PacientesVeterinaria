import {useState, useEffect} from "react"

const Formulario = () => {

    const [nombre, setNombre] = useState('');

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>

            <p className="text-lg mt-5 mb-10 text-center">Añade pacientes y <span className="font-bold text-indigo-600">Adminístralos</span></p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5">
                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="mascota">Nombre Mascota</label>

                    <input id="mascota" type="text" placeholder="Nombre de la Mascota" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="propietario">Nombre Propietario</label>

                    <input id="propietario" type="text" placeholder="Nombre del Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="email">Email</label>

                    <input id="email" type="email" placeholder="Email Contacto Propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>

                    <input id="alta" type="date" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
                </div>

                <div className="mb-5">
                    <label className="block text-gray-700 uppercase font-bold" htmlFor="alta">Alta</label>

                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los síntomas"
                    />
                </div>

                <input type="submit" 
                    className="bg-indigo-600 w-full p-2 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-colors"
                    value="Agregar Paciente"
                />

            </form>
        </div>
    )
}

export default Formulario