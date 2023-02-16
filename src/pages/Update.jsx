import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
    const [supply, setSupply] = useState({
        product: "",
        contract: "",
        responsible: "",
    });

    const navigate = useNavigate();
    const location = useLocation();

    const supplyId = location.pathname.split("/")[2];
    
    const handlechange = (e) => {
        setSupply((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault();
        try{
            await axios.put("http://localhost:8800/supplies/"+ supplyId, supply);
            navigate("/");
        } catch(err) {
            console.log(err);
        }

    }

    return ( 
        <div>
            <h1>Update Supply</h1>
            <input type="text" placeholder="product" onChange={handlechange} name="product" />
            <input type="text" placeholder="contract" onChange={handlechange} name="contract" />
            <input type="text" placeholder="responsible" onChange={handlechange} name="responsible" />

            <button onClick={handleClick}>Update</button>
        </div>
    );
}
 
export default Update;