import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import axios from "./config/axios";

function App() {
  const [products, setProducts] = useState([]);


  function sort_object_of_objects(data, attr) {
    var arr = [];
    for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
            let obj = {};
            obj[prop] = data[prop];
            obj.popularity = data[prop][attr];
            arr.push(obj);
        }
    }

    arr.sort(function(a, b) {
        var at = parseInt(a.popularity),
            bt = parseInt(b.popularity);
        return at > bt ? 1 : ( at < bt ? -1 : 0 );
    });

    var result = [];
    for (var i=0, l=arr.length; i<l; i++) {
        let obj = arr[i];
        delete obj.popularity;
        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                var id = property;
            }
        }
        var item = obj[id];
        result.push(item);
    }
    setProducts(result.reverse());
  } 


  useEffect(() => {
    async function fetchData() {
      try {
        await axios
          .get("https://s3.amazonaws.com/open-to-cors/assignment.json")
          .then((res) => {
            sort_object_of_objects(res.data.products, 'popularity')
          });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <div className="main-div">
        {products.map((product) => (
          <Home productDetail={product} />
        ))}
        
      </div>
    </div>
  );
}

export default App;
