
import { useEffect, useState } from 'react';
import Product from '../components/product';
import DataService from '../services/dataServices';
import "./catalog.css";


function Catalog(){
    const [products, setProdcuts] = useState([]);



    //when the component loads
    useEffect(() => {
        console.log("catalog loaded");
        let service = new DataService();
        let prodList = service.getCatalog();
        setProdcuts(prodList);
         },[]);
    
     return (
        <div className="catalog">
            <h3>Check out our amazing products!</h3>
              <h5>we have {products.length} amazing items for you </h5>
              
            <div className="products">
                {products.map (prod => <Product data={prod} />) }
            </div>
        </div>
     );
}

export default Catalog;
