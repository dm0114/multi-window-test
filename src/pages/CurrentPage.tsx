import { useEffect, useState } from "react";

const CurrentPage = () => {
	const [parentWindow, setParentWindow] = useState<Window | null>(null);
	const [storageValue, setStorageValue] = useState<string>("");

	const openParentWindow = () => {
		const parent = window.open("/parent", "Parent", "width=500,height=500");
		setParentWindow(parent);
	};

	const updateStorage = () => {
		const newValue = `Current update: ${new Date().toISOString()}`;
		localStorage.setItem("testValue", newValue);
		setStorageValue(newValue);
	};

	useEffect(() => {
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === "testValue") {
				setStorageValue(e.newValue || "");
			}
		};
		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-2xl mb-4">Current Page</h1>
			<div className="space-y-4">
				<button
					type="button"
					onClick={openParentWindow}
					className="px-4 py-2 bg-blue-500 text-white rounded"
				>
					Open Parent Window
				</button>

				<button
					type="button"
					onClick={updateStorage}
					className="px-4 py-2 bg-green-500 text-white rounded ml-2"
				>
					Update localStorage
				</button>

				<div>Current localStorage value: {storageValue}</div>
			</div>
		</div>
	);
};

export default CurrentPage;
