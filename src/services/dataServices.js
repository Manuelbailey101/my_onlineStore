import axios from 'axios';

const catalog = [
    {
        title: "apples",
        price: 2.99,
        Category: "fruit",
        image: "apple.jpg"
    },
    {
        title: "cabbage",
        price: 3.99,
        Category: "vegatable",
        image: "cabbage.jpg"
    },
    {
        title: "bell pepper",
        price: 6,
        Category: "vegatable",
        image: "bell.jpg"
    },
    {
        title: "banana",
        price: 6.99,
        Category: "fruit",
        image: "banana.jpg"
    },
];







class DataService{

  async getCatalog(){
      let response = await axios.get("http://127.0.0.1:5000/api/catalog");
      return response.data;
      
    }
}

export default DataService;