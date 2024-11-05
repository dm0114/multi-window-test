import { useEffect, useState } from "react";

function ChildPage() {
	const [storageValue, setStorageValue] = useState<string>("");

	const updateStorage = () => {
		const newValue = `Child update: ${new Date().toISOString()}`;
		localStorage.setItem("testValue", newValue);
		setStorageValue(newValue);
	};

	useEffect(() => {
		const handleStorageChange = (e: StorageEvent) => {
			if (e.key === "testValue") {
				setStorageValue(e.newValue || "");
			}
		};

		setStorageValue(localStorage.getItem("testValue") || "");
		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	return (
		<div className="p-4">
			<h1 className="text-2xl mb-4">Child Window</h1>
			<div className="space-y-4">
				<button
					type="button"
					onClick={updateStorage}
					className="px-4 py-2 bg-green-500 text-white rounded"
				>
					Update localStorage
				</button>

				<div>localStorage value: {storageValue}</div>
			</div>
		</div>
	);
}

export default ChildPage;
