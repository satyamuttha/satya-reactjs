import "./AllProducts.css";
import axios from "axios";
import Card from "./card/Card";
import {useState} from "react";

function AllProducts() {
    let [allproducts, setAllProducts]=useState([]);
    const getProducts = () => {        
        //alert("Welcome to fakestoreapi.com");
        var promiseObject = axios.get("https://fakestoreapi.com/products");
        promiseObject
            .then((res) => {
                console.log("then");
                console.log(res.data);
                // console.table(res.data);
                setAllProducts(res.data);
            })
            .catch((error) => {
                console.log("error");
                console.log(error);
            });
    }
    return (
        <div style={{ padding: "50px" }}>
            <h2 style={{ marginBottom: "20px" }}>AllProducts Component</h2>
            <p style={{ marginBottom: "20px" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae sunt debitis natus, fugit tempora facere! Dignissimos, in? Tempora fugit vero quia aperiam in. Dicta laborum a nam sunt doloremque cupiditate, voluptatibus adipisci eius velit aut officiis ut distinctio eos corporis soluta dolor, aliquam modi dolorem labore esse! Esse, at suscipit labore ratione ipsam, tempore magni neque quod numquam iste et saepe excepturi eligendi. Exercitationem reiciendis cupiditate ipsa velit ut molestiae id facilis natus veniam et. Eos molestias minima sequi animi eum veniam rerum porro fugiat voluptatum quo. Porro deserunt eveniet modi dolorem ea, rem ipsam fugiat temporibus cumque minima, magni voluptate molestias nulla. Neque fugit sit optio, beatae consequatur accusantium non provident ea corporis, quas deserunt, amet totam aliquid natus quibusdam officia accusamus explicabo minima error assumenda? Ad commodi explicabo placeat ex? Iure adipisci nam quae recusandae, repellendus voluptates. Modi est qui quia vero magni possimus. Amet dolorem cupiditate a porro nam repudiandae quasi inventore, numquam fugiat! Magnam fugiat corrupti eius repellat animi et sapiente expedita inventore laboriosam. Blanditiis exercitationem itaque ipsa possimus ipsam est alias aliquam natus? Explicabo doloribus laboriosam consectetur maiores natus corrupti. Saepe perferendis inventore nesciunt recusandae dignissimos ipsam veniam iste, amet odit quas labore quidem ab possimus dolores totam sapiente, laborum omnis. Voluptatum expedita repellat temporibus harum cumque, vero maiores fugiat veniam quis eaque iure earum neque praesentium corporis eius animi labore et pariatur reprehenderit ex consectetur esse. Accusantium expedita totam fugiat maiores rerum culpa natus illo accusamus veniam, voluptatibus quae. Suscipit minima facilis architecto, nam culpa praesentium doloremque incidunt dignissimos quam repellendus natus expedita dolor laudantium dicta quae enim atque cupiditate iste repellat? Ad, cum. Earum ab excepturi repellendus eligendi sunt. Nostrum vero repellendus recusandae ipsum neque doloribus inventore voluptas tempora libero! Ipsam molestias aspernatur vitae corporis at nesciunt provident excepturi veritatis inventore? Illo necessitatibus maiores consequuntur odit accusantium optio ipsum eos, ipsam quia placeat, unde hic aperiam. Ipsum fugiat, voluptates modi asperiores ad repellendus quisquam quaerat deserunt incidunt, veritatis veniam? Veniam sapiente beatae repellendus temporibus, veritatis, doloremque molestias optio minus consequatur eos neque atque ducimus voluptatibus obcaecati sequi quod quibusdam. Eius voluptatibus in facere dolorum, quas animi. Minus, perferendis ut? Sequi tenetur ullam repudiandae dolores aliquam laboriosam cupiditate rem esse quo aliquid molestiae quod culpa corrupti quis atque delectus obcaecati iste, officiis reiciendis magnam adipisci nam nulla maiores pariatur. Veritatis deserunt impedit et nesciunt voluptatum. Deleniti iure nesciunt mollitia inventore! Laboriosam aliquid aliquam possimus.</p>
            <button onClick={getProducts}>Get Products</button>
            <div className="allProductsData">
            {
                allproducts.map(function(product){
                    return(
                    <Card 
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    rate={product.rating.rate}
                    count={product.rating.count}
                    />
                    );
                })           
            }  
            </div>
        </div>
    );
}

export default AllProducts;