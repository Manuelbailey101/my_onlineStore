
import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {
    function handleQuantityChange(qty) {
        console.log("quantity change", qty);

    }
    return (
        <div className="product">
            <img src={"/images/"+props.data.image}  alt="" />

            <h5>{props.data.title}</h5>
            <div className="prices">
            <label >total: ${props.data.price.toFixed(2)}</label>
            <label >Price: ${props.data.price.toFixed(2)}</label>
            </div>
            
             <QuantityPicker onChange={handleQuantityChange} />

            <button>Add</button>
        </div>
    );
};

export default Product;