import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import Products from "./pages/Products";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
		<Router>
			<NavBar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/reports' component={Reports} />
          		<Route path='/products' component={Products} />
			</Switch>
		</Router>
    </div>
  );
}

export default App;
