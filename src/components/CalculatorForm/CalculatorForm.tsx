import { CalculateBMI } from '../../Utils';
import Input from '../UI/Input';

interface ICalculatorForm {
    peso: number;
    altura: number;
    BIM:number;
    setBMI: React.Dispatch<React.SetStateAction<number>>
    setWeight: React.Dispatch<React.SetStateAction<number>>
    setHeight: React.Dispatch<React.SetStateAction<number>>
}

const CalculatorForm = ({peso, altura, setBMI, setWeight, setHeight}: ICalculatorForm) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const result = CalculateBMI(peso,altura)
        setBMI(result)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if(name === 'peso') {
            setWeight(Number(value))
        } else {
            setHeight(Number(value))
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <div>
                <Input onChange={handleChange} label="Peso" name="peso" type="number" fullWidth value={peso}/>
                <Input onChange={handleChange} label="Altura" name="altura" type="number" fullWidth value={altura}/>
            </div>
            <button type='submit' className='w-40 cursor-pointer border border-gray-300 bg-emerald-500 text-white p-3 rounded-2xl'>Calcular IMC</button>
        </form>
    )
}

export default CalculatorForm