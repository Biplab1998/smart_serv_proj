import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import axios from "./config/axios";

function App() {
  const [products, setProducts] = useState([]);
  // const [arrangedProduct, setArrangedProduct] = useState();

  // const sortByPosition = obj => {
  //   return Object.assign(...Object.entries(obj).sort().map(([key, value]) => {
  //      return {
  //         [key]: value
  //      }
  //   }));
  // }


  function sort_object_of_objects(data, attr) {
    var arr = [];
    for (var prop in data) {
        if (data.hasOwnProperty(prop)) {
            var obj = {};
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
        var obj = arr[i];
        delete obj.popularity;
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                var id = prop;
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
        const response = await axios
          .get("https://s3.amazonaws.com/open-to-cors/assignment.json")
          .then((res) => {

            console.log(sort_object_of_objects(res.data.products, 'popularity'))

            // var data = res.data;
            // for (var key of Object.keys(data)) {
            //   console.log("response bip ::-", data[key]);
            // }
            // const newArray = Object.entries(res.data.products)
            // const checking = Object.values(newArray[1])
            // console.log(checking)
            // console.log(newArray)
            // Object.entries(res.data.products).map((prod) => (
            //   if(res.data.products)
            //   console.log(prod[1].popularity.toString())
            // ))
            // setProducts(response.data.products);
          });
        // console.log(Object.keys(response.data.products));
        // console.log(response.data.products);

        // setProducts(response.data.products);
        // console.log(products);
        // products.map((prod) => {
        //   console.log("prod - ",prod)
        // })
        // console.log(response.data.results[2].name.first);
        // console.log();
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
