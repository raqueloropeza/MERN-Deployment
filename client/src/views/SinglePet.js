import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';

const SinglePet =(props)=>{
    const [pet, setPet]= useState({})
    const [like, setLike]=useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
        .then(res=>setPet(res.data.pet))
        .catch(err=>console.log(err))
    }, [props.id, props.loaded, like])

    const onDeleteHandler =(id)=>{
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
        .then(res=>{
            console.log(res);
            navigate("/")
        })
        .catch(err => console.log(err))
    }
    
    const onClickHandler =(id)=>{
        axios.put(`http://localhost:8000/api/pets/like/${id}`)
        .then(res=>{
            console.log(res);
            setLike(true)
        })
        .catch(err => console.log(err))
        document.getElementById('button').setAttribute("disabled","disabled")
    }
    return(
        <div className="container mt-3">
            <div className= "row d-flex justify-content-end">
                <Link to="/">Back to Home</Link>
            </div>
            <div className= "row d-flex justify-content-center">
                <h1 className="display-3">Details about: {pet.name}</h1>
            </div>
            <div className= "row d-flex justify-content-end">
            <button className="btn btn-danger" onClick={()=> onDeleteHandler(pet._id)}>Adopt {pet.name}</button>
            </div>
            <div className= " row d-flex justify-content-start">
                <h4 className="display-4">Pet type: {pet.type}</h4>
            </div>
            <div className= " row d-flex justify-content-start">
                <h4 className="display-4">Description: {pet.type}</h4>
            </div>
            <div className= " row d-flex justify-content-start">
                <h4 className="display-4">Skills:</h4>
            </div>
            <div className="row d-flex justify-content-start">
                <ul className= " col-sm-4 list-group-flush">
                    <li className="list-group-item">{pet.skill_1}</li>
                    <li className="list-group-item">{pet.skill_2}</li>
                    <li className="list-group-item">{pet.skill_3}</li>
                </ul>
            </div>
                <button className= { like ? "btn btn-secondary disabled" : "btn btn-success"}  id="button" onClick ={()=> onClickHandler(pet._id)}>Like {pet.name}</button> 
            
            <h4>{pet.likes} like(s)</h4>
            
        </div>
    )
}
export default SinglePet;