const catalog = [
    {
        title: "apples",
        price: 250,
        Category: "sports shoes",
        image: "test1.png"
    }
];






class DataService{

    getCatalog(){
           //TODO: get the cataog from the server 
           return catalog;
    };
}

export default DataService;