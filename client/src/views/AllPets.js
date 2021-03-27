import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import PetsDisplay from '../components/PetsDisplay';

const AllPets = (props) =>{
    const [pets, setPets] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:8000/api/pets/")
            .then(res=>setPets(res.data.pets))
            .catch(err=> console.log(err))
    },[props.loaded])
    
    return(
        <div className = "container">
            <h1>Pet Shelter</h1>
            <div className ="row d-flex justify-content-center">
                <h3>These pets are looking for a good home</h3>
            </div>
            <div className="row d-flex justify-content-end">
                <Link to ="/pets/new">Add a pet to the shelter</Link>
            </div>
            <table className= "table table-striped table-bordered border-dark">
                <thead>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {pets.map((pet,key)=>{
                        return <tr pet={pet} key={key}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td><Link to ={`/pets/${pet._id}`}>details</Link> | <Link to ={`/pets/update/${pet._id}`}>edit</Link></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllPets;