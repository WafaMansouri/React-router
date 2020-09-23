import React from 'react';
import './App.css'
import {Link, Route, BrowserRouter as Router, Switch} from 'react-router-dom'
function Products({match,products}) {
    const ProductsList= products.map((el,index)=> <Link key={index} to={`${match.url}/${el.id}`}>
        <li>{el.name}</li></Link>)
    return (
        <Router >
            <div className="products">
                <div style={{backgroundColor:'rgb(240, 240, 240)', padding:10, marginLeft:13, width:'30%'}}>
                    <h2>Products</h2>
                    <ul>
                        {ProductsList}
                    </ul>
                </div>
                <div className="product">
                    <Switch>
                        <Route exact path={`${match.url}`} render={()=>
                        <div style={{textAlign:'center', fontSize:'1.2em'}}>Please select a product</div>}/>
                        <Route path={`${match.url}/:productId`} render={(props)=>
                        <Product productsArr={products} {...props} />}/>
                        
                    </Switch>
                </div>
            </div>
        </Router>
    );
}
const Product=({match, productsArr})=>{
    const product=productsArr.find(el=>el.id==match.params.productId);
    return (
        product?
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <hr/>
            <h3>{product.status}</h3>
        </div>:
        <h1>Product not found</h1>
    )
}
export default Products;