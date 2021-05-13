import React, {useState} from 'react';
import {navigate} from '@reach/router';

const Index = props =>{
    const [myForm, setMyForm] = useState({
        Type:"people",
        Id: 1

    })
    const options =["people", "planets"];
    const onChangeHandler = e =>{
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }
    const onSubmitHandler = e =>{
        e.preventDefault();
        props.findOption(myForm);
        console.log(myForm.Type);
        console.log(myForm.Id);
        if(myForm.Type=="people"){
            navigate(`/people`);
        }else{
            navigate(`/planets`)
        }
    }
    return(
    <>
    <form onSubmit={onSubmitHandler}>
        <div className="form-group">
            <label htmlFor="Type">Select One:</label>
            <select name="Type" className="form-control" onChange={onChangeHandler}>
                {
                    options.map((item, i) =>{
                        return <option value={item} key={i}>{item}</option>
                    })
                }
            </select>
        </div>
        <div className="form-group">
        <input type="text" name="Id" onChange={onChangeHandler}></input>
        </div>
        <input type="submit" className="btn btn-primary" value="Search"></input>
    </form>
    </>
    )
}
export default Index;