
import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(props) {
    return (
        <div className="product">
            <img src="https://picsum.photos/200/200" alt="" />

            <h5>{props.title}</h5>
            <label>$255</label>

             <QuantityPicker />
            <button>Add</button>
        </div>
    );
};

export default Product;