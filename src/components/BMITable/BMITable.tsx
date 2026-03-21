import { Info } from "lucide-react";

const BMITable = () => {
  return (
    <div className="w-full md:w-3/4 bg-white rounded-md p-5 border border-gray-300">
        <div className="flex items-center gap-2 mb-4 md:justify-center justify-start">
            <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-center">
                <Info className="text-emerald-500" size={18}/>
            </div>
            <h2 className="text-2xl font-bold">Tabla de referencia</h2>
        </div>

        <table className="w-full md:border border-gray-100 text-center">
            <thead>
                <tr className="border-b border-gray-100">
                    <th className="p-2 text-gray-400">Clasificación</th>
                    <th className="p-2 text-gray-400">Rango de IMC</th>
                </tr>
            </thead>

            <tbody>
                <tr className="border-b border-gray-100">
                    <th className="p-2 flex items-center gap-2 justify-center">
                        <div className="w-2 h-2 rounded-full bg-blue-400"/>
                        <p>Bajo peso</p>
                    </th>
                    <td className="p-2">Menos de 18.5</td>
                </tr>

                <tr className="border-b border-gray-100">
                    <th className="p-2 flex items-center gap-2 justify-center">
                        <div className="w-2 h-2 rounded-full bg-green-400"/>
                        <p>Normal</p>
                    </th>
                    <td className="p-2">18.5 - 24.9</td>
                </tr>

                <tr className="border-b border-gray-100">
                    <th className="p-2 flex items-center gap-2 justify-center">
                        <div className="w-2 h-2 rounded-full bg-yellow-400"/>
                        <p>Sobrepeso</p>
                    </th>
                    <td className="p-2">25 - 29.9</td>
                </tr>

                <tr>
                    <th className="p-2 flex items-center gap-2 justify-center">
                        <div className="w-2 h-2 rounded-full bg-red-400"/>
                        <p>Obesidad</p>
                    </th>
                    <td className="p-2">30 o más</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default BMITable;