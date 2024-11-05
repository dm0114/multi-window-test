import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChildPage from "./pages/ChildPage";
import CurrentPage from "./pages/CurrentPage";
import ParentPage from "./pages/ParentPage";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<CurrentPage />} />
				<Route path="/parent" element={<ParentPage />} />
				<Route path="/child" element={<ChildPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
