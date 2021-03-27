import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';
import Form from '../components/Form';

const EditPet = (props) =>{
    const [form, setForm] = useState({
        'name': '',
        "type": '',
        "description": '',
        "skill_1": '',
        "skill_2": '',
        "skill_3": '',
    })


    const [errors, setErrors] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res=>setForm(res.data.pet))
            .catch(err=>console.log(err))
    }, [props.id])

    const onChangeHandler =(event) =>{
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        })

        }

    const onSubmitHandler = (event) =>{
        event.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props.id}`, form)
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
            <div>
                <h1 className="display-3 mt-5 mb-5 d-flex justify-content-center">Update {form.name}</h1>
                <Form form={form} setForm={setForm} loaded={props.loaded} setLoaded={props.setLoaded} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} errors={errors} setErrors={setErrors}/>
                
                

            </div>
        )

}

export default EditPet;