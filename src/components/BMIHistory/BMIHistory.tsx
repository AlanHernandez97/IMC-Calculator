import { CircleCheck, Trash2 } from "lucide-react";
import type { IBMI } from "../../Types/BMI";


interface IBMIHistoryProps {
    bmiHistory: IBMI[];
    height?: number;
    weight?: number;
}

const BMIHistory = ({ bmiHistory, height, weight }: IBMIHistoryProps) => {

    const getBMICategory = (bmi: IBMI) => {
        if (bmi.bmi < 18.5) {
          return (
             <>
                    <div className="w-3/4 flex gap-3 items-center">
                        <div className="w-14 h-12 rounded-full bg-blue-100 text-center flex items-center justify-center">
                            <CircleCheck size={32} className="text-blue-500 text-center"/>
                        </div>
                        <div className="w-full flex flex-col gap-0">
                            <h3 className="text-lg font-bold mb-2">{new Date().getDate().toString()} {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}</h3>
                            <div className="w-18 h-fit p-1 rounded-full bg-blue-100">
                                <p className="text-blue-700 text-xs text-center font-semibold">Bajo peso</p>
                            </div>
                            <p className="text-sm text-gray-600">{weight?.toFixed(2)} kg | {height?.toFixed(2)} mts</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-end">
                        <p className="font-bold text-xl">IMC: {bmi.bmi.toFixed(1)}</p>
                        <div className="hover:bg-red-100 hover:text-red-500 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer">
                            <Trash2 />
                        </div>
                    </div>
                </>
          );
        } else if (bmi.bmi >= 18.5 && bmi.bmi < 25) {
          return (
             <>
                    <div className="w-3/4 flex gap-3 items-center">
                        <div className="w-14 h-12 rounded-full bg-emerald-100 text-center flex items-center justify-center">
                            <CircleCheck size={32} className="text-emerald-500 text-center"/>
                        </div>
                        <div className="w-full flex flex-col gap-0">
                            <h3 className="text-lg font-bold mb-2">{new Date().getDate().toString()} {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}</h3>
                            <div className="w-14 h-fit p-1 rounded-full bg-emerald-100">
                                <p className="text-emerald-700 text-xs text-center font-semibold">Normal</p>
                            </div>
                            <p className="text-sm text-gray-600">{weight?.toFixed(2)} kg | {height?.toFixed(2)} mts</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-end">
                        <p className="font-bold text-xl">IMC: {bmi.bmi.toFixed(1)}</p>
                        <div className="hover:bg-red-100 hover:text-red-500 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer">
                            <Trash2 />
                        </div>
                    </div>
                </>
          );
        } else if (bmi.bmi >= 25 && bmi.bmi < 30) {
          return (
             <>
                    <div className="w-3/4 flex gap-3 items-center">
                        <div className="w-14 h-12 rounded-full bg-yellow-100 text-center flex items-center justify-center">
                            <CircleCheck size={32} className="text-yellow-500 text-center"/>
                        </div>
                        <div className="w-full flex flex-col gap-0">
                            <h3 className="text-lg font-bold mb-2">{new Date().getDate().toString()} {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}</h3>
                            <div className="w-18 h-fit p-1 rounded-full bg-yellow-100">
                                <p className="text-yellow-700 text-xs text-center font-semibold">Sobrepeso</p>
                            </div>
                            <p className="text-sm text-gray-600">{weight?.toFixed(2)} kg | {height?.toFixed(2)} mts</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-end">
                        <p className="font-bold text-xl">IMC: {bmi.bmi.toFixed(1)}</p>
                        <div className="hover:bg-red-100 hover:text-red-500 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer">
                            <Trash2 />
                        </div>
                    </div>
                </>
          );
        } else {
          return (
             <>
                    <div className="w-3/4 flex gap-3 items-center">
                        <div className="w-14 h-12 rounded-full bg-red-100 text-center flex items-center justify-center">
                            <CircleCheck size={32} className="text-red-500 text-center"/>
                        </div>
                        <div className="w-full flex flex-col gap-0">
                            <h3 className="text-lg font-bold mb-2">{new Date().getDate().toString()} {new Date().toLocaleString('default', { month: 'long' })} {new Date().getFullYear()}</h3>
                            <div className="w-18 h-fit p-1 rounded-full bg-red-100">
                                <p className="text-red-700 text-xs text-center font-semibold">Obesidad</p>
                            </div>
                            <p className="text-sm text-gray-600">{weight?.toFixed(2)} kg | {height?.toFixed(2)} mts</p>
                        </div>
                    </div>
                    <div className="w-1/3 flex flex-col justify-center items-end">
                        <p className="font-bold text-xl">IMC: {bmi.bmi.toFixed(1)}</p>
                        <div className="hover:bg-red-100 hover:text-red-500 h-8 w-8 rounded-full flex items-center justify-center cursor-pointer">
                            <Trash2 />
                        </div>
                    </div>
                </>
          );
        }
    }

  return (
    <div className='w-full flex flex-col gap-5 flex-wrap items-center'>
        <div className='w-full flex items-center justify-between mb-5 md:p-5 p-2.5'>
            <h2 className='text-2xl font-bold'>Historial</h2>
            <button className=' text-red-500 px-4 py-2 rounded bg-transparent hover:bg-red-100 hover:border-red-500 hover:rounded-xl'>Borrar todo</button>
        </div>
        <div className="w-full flex flex-wrap gap-4 justify-start items-center">
            {bmiHistory ?  bmiHistory.map((bmi) => (
                <div key={bmi.id} className="w-full items-center justify-center flex gap-2 md:w-1/4 bg-white rounded-md p-2 border border-gray-300">
                    {
                        getBMICategory(bmi)
                    }
                </div>
            )) : (
               <div className="w-full">
                 <p className="text-xl text-gray-500 text-center">No hay registros de IMC calculados aún.</p>
               </div>
            )}
        </div>
    </div>
  )
}

export default BMIHistory