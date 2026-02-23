
import TabsContainer from './components/TabsContainer/TabsContainer'
import CalculatorForm from './components/CalculatorForm/CalculatorForm'
import { useState } from 'react';


const BMI = () => {
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(0)
    const [BIM, setBIM] = useState(0)
    return (
        <div className='w-full h-screen'>

            <TabsContainer title={['Calculadora', 'Historial']}>
                <div className='w-full flex flex-col gap-3 items-center justify-center border border-gray-300 rounded-md p-5'>
                    <h1 className='text-3xl font-bold'>Calcula tu IMC</h1>
                    <span className='text-lg'>Pon los datos para obtener tu IMC</span>
                    <div className='w-full flex flex-col gap-5 items-center justify-center'>
                        <CalculatorForm altura={height} peso={weight} BIM={BIM} setBMI={setBIM} setWeight={setWeight} setHeight={setHeight}/>
                    </div>
                </div>

                {
                   BIM > 0 && (
                     <div className='w-full flex flex-col gap-3 items-center justify-center border border-gray-300 rounded-md p-5'>
                        <span className='text-lg'>tu IMC es de: {BIM.toFixed(2)}</span>
                     </div>
                   )
                }
            </TabsContainer>
        </div>
    )
}

export default BMI