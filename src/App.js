import React from 'react';
import {Link, Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import './App.css';
import Category from './Category';
import Products from './Products';
import Login,{fakeAuth} from './Login'
const products=[
  {
  id:1,
  name:'NIKE Liteforce Blue Sneakers',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
  status: 'Available'
  },
  {
  id:2,
  name:'U.S. POLO ASSN. Slippers',
  description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
  status: 'Available'
  },
  {
  id:3,
  name:'ADIDAS Adispree Running Shoes',
  description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
  status: 'Available'
  },
  {
  id:4, 
  name:'Lee Cooper Mid Sneakers',
  description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
  status: 'Out of Stock'
}]
function App() {
  return (
    <Router>
    <nav className="App">
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/Category'><li>Category</li></Link>
        <Link to='/Products'><li>Products</li></Link>
        <Link to='/AdminArea'><li>Admin area</li></Link>
      </ul>
    </nav>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/Category' component={Category}/>
      <Route path='/Products' render={(props)=> <Products products={products} {...props}/>}/>
      <Route path="/login" component={Login}/>
      <PrivateRoute authed={fakeAuth.isAuthenticated} path='/AdminArea' component = {Admin} />
      <Route component={Error} />
    </Switch>
    </Router>
  );
}
const Error=()=><h1>Oops! Page not found!</h1>;
/* PrivateRoute component definition */
const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}
const Home=()=><h2>Home</h2>;

const Admin=()=><h2>Welcome Admin</h2>;

export default App;
