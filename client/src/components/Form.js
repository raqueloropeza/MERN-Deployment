import React from 'react';



const Form = (props) => {

    return (
        <div className="container">
        <form onSubmit = {props.onSubmitHandler}>
        <div className = "row mb-3">
            <div className = "col-sm-6">
                <label className ="font-weight-bold" htmlFor= "name">Pet Name: </label>

                <input className="form-control" type = "text" name= "name" placeholder="name" onChange={props.onChangeHandler} value={props.form.name}></input>
                {props.errors.name && <span className="alert-danger">{props.errors.name.message}</span>}
            </div>
            <div className = "col-sm-6">
                <h4>Skills(optional):</h4>
                <label className ="font-weight-bold" htmlFor= "skill_1">Skill 1: </label>

                <input className="form-control" type = "text" name= "skill_1" placeholder="skill_1" onChange={props.onChangeHandler} value={props.form.skill_1}></input>
            </div>

        </div>
        <div className = "row mb-3">
            <div className = "col-sm-6">
                <label className ="font-weight-bold" htmlFor= "type">Type: </label>
                <input className="form-control" type = "text" name= "type" onChange={props.onChangeHandler} value= {props.form.type} placeholder="type"></input>
                {props.errors.type && <span className="alert-danger">{props.errors.type.message}</span>}
            </div>
            <div className = "col-sm-6">
                <label className ="font-weight-bold" htmlFor= "skill_2">Skill 2: </label>
                <input className="form-control" type = "text" name= "skill_2" placeholder="skill_2" onChange={props.onChangeHandler} value={props.form.skill_2}></input>
            </div>
        </div>
        <div className = "row mb-3">
            <div className = "col-sm-6">
                <label className ="font-weight-bold" htmlFor= "description">Description: </label>
                <input className="form-control" type = "text" name= "description" onChange={props.onChangeHandler}  placeholder="details" value={props.form.description}></input>
                {props.errors.description && <span className="alert-danger">{props.errors.description.message}</span>}
            </div>
            <div className = "col-sm-6">
                <label className ="font-weight-bold" htmlFor= "skill_3">Skill 3: </label>
                <input className="form-control" type = "text" name= "skill_3" placeholder="skill_3" onChange={props.onChangeHandler} value={props.form.skill_3}></input>
            </div>
        </div>
        <div className = "row mt-3 d-flex justify-content-center">
            <div className = "col-sm-4">
                <input type = "submit" value= "Submit" className="btn btn-primary"></input>
            </div>
        </div>
        
        </form>
    </div>
    )
}

export default Form;