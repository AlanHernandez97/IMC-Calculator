import { BriefcaseMedical, CircleCheck, TriangleAlert } from "lucide-react";

interface BMIResultsProps {
    bmi: number;
}

const BMIResults = ({ bmi }: BMIResultsProps) => {

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) {
      return (
          <div className="p-3 flex flex-col w-full md:w-3/4 items-center justify-center gap-3 border border-gray-300 rounded-md border-t-10 border-t-red-500">
            <h2 className="text-lg text-gray-500">Tu resultado</h2>
            <p className="text-5xl font-bold">{bmi.toFixed(2)}</p>
            <div className="flex gap-1 items-center text-red-600 bg-red-100 p-2 rounded-lg w-full md:w-3/4 justify-center">
                <TriangleAlert />
                <p className="text-red-600 font-bold text-lg">Bajo peso</p>
            </div>
            <p className="text-lg text-gray-500 text-center">¡Cuidado! Tu peso está por debajo del rango saludable para tu estatura</p>
          </div>
      );
    } else if (bmi >= 18.5 && bmi < 25) {
      return (
        <div className="p-3 flex flex-col w-full md:w-3/4 items-center justify-center gap-3 border border-gray-300 rounded-md border-t-10 border-t-emerald-500">
          <h2 className="text-lg text-gray-500">Tu resultado</h2>
          <p className="text-5xl font-bold">{bmi.toFixed(2)}</p>
          <div className="flex gap-1 items-center text-green-600 bg-green-100 p-2 rounded-lg w-full md:w-3/4 justify-center">
              <CircleCheck />
              <p className="text-emerald-600 font-bold text-lg">Peso Normal</p>
          </div>
          <p className="text-lg text-gray-500 text-center">¡Buen trabajo! Tu peso está dentro del rango saludable para tu estatura</p>
        </div>
      )
    } else if (bmi >= 25 && bmi < 30) {
      return (
        <div className="p-3 flex flex-col w-full md:w-3/4 items-center justify-center gap-3 border border-gray-300 rounded-md border-t-10 border-t-yellow-500">
          <h2 className="text-lg text-gray-500">Tu resultado</h2>
          <p className="text-5xl font-bold">{bmi.toFixed(2)}</p>
          <div className="flex gap-1 items-center text-yellow-600 bg-yellow-100 p-2 rounded-lg w-full md:w-3/4 justify-center">
              <TriangleAlert />
              <p className="text-yellow-600 font-bold text-lg">Sobrepeso</p>
          </div>
          <p className="text-lg text-gray-500 text-center">¡Cuidado! Tu peso está por encima del rango saludable para tu estatura</p>
        </div>
      );
    } else {
      return (
          <div className="p-3 flex flex-col w-full md:w-3/4 items-center justify-center gap-3 border border-gray-300 rounded-md border-t-10 border-t-red-500">
            <h2 className="text-lg text-gray-500">Tu resultado</h2>
            <p className="text-5xl font-bold">{bmi.toFixed(2)}</p>
            <div className="flex gap-1 items-center text-red-600 bg-red-100 p-2 rounded-lg w-full md:w-3/4 justify-center">
              <BriefcaseMedical />
              <p className="text-red-600 font-bold text-lg">Obesidad</p>
            </div>
            <p className="text-lg text-gray-500 text-center">¡Cuidado! Tienes obesidad, te recomendamos consultar a un profesional de la salud para recibir orientación adecuada.</p>
          </div>
      );
    }
  }
  return (
    getBMICategory(bmi)
  )
}

export default BMIResults;