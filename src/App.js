
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Aboutme from "./components/aboutme";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./components/home";
import Projects from "./components/projects";



function App() {
	return (
		<Router >
			<Header />
      <Nav/>
      <Home/>
      <Footer/>
			<Routes>
				<Route path="/aboutme" element={<Aboutme />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</Router>
	);
}

export default App;
