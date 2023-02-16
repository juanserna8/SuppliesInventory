import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Supplies = () => {
    const [supplies, setSupplies] = useState([]);

    useEffect(() => {
        const fetchSupplies = async () => {
            try{
                const res = await axios.get("http://localhost:8800/supplies")
                setSupplies(res.data)
                console.log(supplies);
            } catch(err) {
                console.log(err)
            }
        }
        fetchSupplies();
    },[]);

    const handleDelete = async (id) => {
        try{
            await axios.delete("http://localhost:8800/supplies/"+id);
            // Refresh the window when this is done
            window.location.reload();
        } catch(err) {
            console.log(err);
        }
    }
    
    return ( 
        <div className="p-4">
            <h1 className="text-center w-full font-bold text-xl">Supplies</h1>
            <div className="mt-4 grid grid-cols-3 gap-2">
                {supplies.map(supply=>(
                    <div key={supply.id} className="mx-auto">
                        <div>
                            <h2 className="font-bold text-red-200">{supply.Contract}</h2>
                            <p>{supply.Product}</p>
                            <p>{supply.Responsible}</p>
                            <button onClick={()=>handleDelete(supply.id)}>Delete</button>
                            <button ><Link to={`/update/${supply.id}`}>Update</Link></button>
                        </div>
                    </div>
                ))}
            </div>
            <button><Link to="/add">Add new supply</Link></button>
        </div>
     );
}
 
export default Supplies;