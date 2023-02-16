import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [supply, setSupply] = useState({
        product: "",
        contract: "",
        responsible: "",
    });

    const navigate = useNavigate()
    
    const handlechange = (e) => {
        setSupply((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async e => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8800/supplies", supply);
            navigate("/");
        } catch(err) {
            console.log(err);
        }

    }

    return ( 
        <div>
            <h1>Add New Supply</h1>
            <input type="text" placeholder="product" onChange={handlechange} name="product" />
            <input type="text" placeholder="contract" onChange={handlechange} name="contract" />
            <input type="text" placeholder="responsible" onChange={handlechange} name="responsible" />

            <button onClick={handleClick}>Add</button>
        </div>
     );
}
 
export default Add;