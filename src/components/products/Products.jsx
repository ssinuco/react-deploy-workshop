import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getProducts, removeToken } from "../../services/APIClient";
import './products.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const handleLogout = (e) => {
      e.preventDefault();  
      removeToken()
      .then(
        ()=>{
            navigate(`/`);
        }
    );
  }

  useEffect(() => {
    getProducts().then((results) => {
      setProducts(results);
    });
  }, []);

  return (
  <div className="products">
    {
      products.map((product) => {
        return <article>
          <img alt={product.name} src={product.image}></img>
          <p>
            <small>{product.name}</small>
          </p>          
        </article>;
      })
    }
    <button onClick={handleLogout}>Log out</button>
  </div>);
}

export default Products;