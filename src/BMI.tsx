
import TabsContainer from './components/TabsContainer/TabsContainer'
import CalculatorForm from './components/CalculatorForm/CalculatorForm'
import { useState } from 'react';
import BMIResults from './components/BMIResults/BMIResults';
import BMITable from './components/BMITable/BMITable';
import BMIHistory from './components/BMIHistory/BMIHistory';
import type { IBMI } from './Types/BMI';


const BMI = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [BIM, setBIM] = useState(0);
    const [newBMI, setNewBMI] = useState<IBMI[]>([])

    const handleCreateBMI = (bmi: IBMI) => {
        const newBMIEntry: IBMI = {
            id: bmi.id + Math.floor(Math.random() * 1000),
            bmi: bmi.bmi
        }
        setNewBMI([...newBMI, newBMIEntry])
    }

    console.log('BMI:', newBMI)

    return (
        <div className='w-full'>

            <TabsContainer title={['Calculadora', 'Historial']}>
                <div className='flex flex-col gap-6 justify-center items-center'>
                    <div className='w-full md:w-3/4 flex flex-col gap-3 items-center justify-center border border-gray-300 rounded-md p-5 flex-wrap'>
                        <h1 className='text-3xl font-bold text-center'>Tu salud es primero</h1>
                        <span className='text-lg text-center'>Ingresa tus datos corporales para comenzar el análisis</span>
                        <div className='w-full md:w-1/2 flex flex-col gap-5 items-center justify-center'>
                            <CalculatorForm altura={height} peso={weight} BIM={BIM} setBMI={setBIM} setWeight={setWeight} setHeight={setHeight} handleCreateBMI={handleCreateBMI}/>
                        </div>
                    </div>

                    {
                    BIM > 0 && (
                       <div className='w-full items-center justify-center flex flex-col gap-4'>
                         <BMIResults bmi={BIM}/>
                         <BMITable />
                       </div>
                    )
                    }
                </div>
                <div className='w-full md:w-3/4 md:py-5 mx-auto'>
                    <BMIHistory bmiHistory={newBMI} weight={weight} height={height} setNewBMI={setNewBMI}/>
                </div>
               
            </TabsContainer>
        </div>
    )
}

export default BMI