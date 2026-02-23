import { useState } from "react";

interface ITabsContainerProps {
    title: string[];
    children: React.ReactNode;
}


const TabsContainer = ({ title, children }: ITabsContainerProps) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-center items-center py-6">
                {title.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-6 py-3 rounded-md border text-sm font-medium transition-colors duration-200
                        ${activeTab === index
                                ? 'bg-emerald-50 text-[#13ec5b] border-[#13ec5b]'
                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="w-full">
                {children}
            </div>
        </div>
    )

}

export default TabsContainer