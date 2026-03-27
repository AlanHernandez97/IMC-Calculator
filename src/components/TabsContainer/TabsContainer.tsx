import React, { useState } from "react";

interface ITabsProps {
	title: React.ReactNode[] | string[];
	className?: string;
	children?: React.ReactNode[];
	disabled?: number[];
}

const TabsContainer = ({
	children = [],
	className = "",
	title,
	disabled = [],
}: ITabsProps) => {
	const [activeTab, setActiveTab] = useState(0);

	const tabsCount = Math.min(children.length, title.length);

	return (
		<div className={`w-full ${className}`}>
			{/* Tabs header */}
			<div className={`w-full flex rounded-md overflow-hidden text-emerald-500 border border-gray-300`}>
				{Array.from({ length: tabsCount }).map((_, index) => {
					const isDisabled = disabled.includes(index);
					const isActive = activeTab === index;

					return (
						<button
							key={index}
							onClick={() => !isDisabled && setActiveTab(index)}
							disabled={isDisabled}
							className={`
								flex-1 px-4 py-2 text-sm font-semibold transition
								${isActive ? "bg-emerald-100 shadow" : "bg-transparent"}
								${isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
							`}
						>
							{title[index]}
						</button>
					);
				})}
			</div>

			{/* Tab content */}
			<div className="mt-4">
				{Array.from({ length: tabsCount }).map((_, index) => {
					if (index !== activeTab) return null;

					return (
						<div key={index} className="w-full">
							{children[index]}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default TabsContainer;