import React, {useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import Form from '../components/Form';

const CreatePet = (props) =>{

    const [form, setForm] =useState({
        "name": '',
        "type": '',
        "description": '',
        "skill_1": '',
        "skill_2": '',
        "skill_3": '',
    });

    const [errors, setErrors] = useState({});

    const onChangeHandler =(event) =>{
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })

    }

    const onSubmitHandler =(event)=>{
        event.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", form)
            .then(res =>{
                console.log(res.data);
                if(res.data.pet){
                    props.setLoaded(false)
                    navigate("/pets")
                }
                else {
                    setErrors(res.data.error.errors);
                }

            })
            .catch(err => console.log(err));
    }
    return(
        <div className="container">
            <h2 className="mt-3 mb-3"> Know a pet needing a home? </h2>
            <div className= "row d-flex justify-content-end mb-5">
                <Link to ="/pets">back to home</Link>
            </div>
            <Form form={form} setForm={setForm} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} errors={errors} setErrors={setErrors}/>

        </div>
    )
}

export default CreatePet;