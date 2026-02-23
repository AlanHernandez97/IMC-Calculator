
type InputType = 'text' | 'number' | 'email' | 'password';

interface IInput {
    label: string;
    name: string;
    type: InputType;
    fullWidth?: boolean;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, name, type, fullWidth, value, onChange }: IInput) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input onChange={onChange} className={`border border-gray-300 rounded-md p-2 ${fullWidth ? 'w-full' : 'w-[30%]'}`}type={type} name={name} id={name} value={value ?? 0} />
        </div>
    )
}

export default Input