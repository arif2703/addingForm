import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

const Adduser = () => {

    const [firstNameState, setFirstNameState] = useState({
        value : '',
        error : null
    })

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        description: ''
    })

    const onFirstNameChange = (e) =>{
        setFirstNameState({
            value : e.target.value,
            error : e.target.value.length < 3 ? "user name should be at least 3 charactor" : null            
        })
    }

    const onChangeHandle =(e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }

    const submitHandle =(e) => {
        e.preventDefault() 
        console.log(JSON.stringify(user))

        setUser(
            {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                description: ''
            }        
        )
    }

    return (
        <Container>
            <form onSubmit={submitHandle}>
                <div className="form-group">
                    <label>First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="First Name" 
                        name="firstName" 
                        value={firstNameState.value} 
                        onChange={onFirstNameChange}
                    />
                    <span>{firstNameState.error} </span>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Last Name" 
                        name="lastName" 
                        value={user.lastName} 
                        onChange={onChangeHandle}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Email" 
                        name="email" 
                        value={user.email}
                        onChange={onChangeHandle}
                    />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Phone" 
                        name="phone" 
                        value={user.phone}
                        onChange={onChangeHandle} 
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                        className="form-control" 
                        placeholder="Description" 
                        name="description" 
                        value={user.description}
                        onChange={onChangeHandle}
                    >
                    </textarea>
                </div>
                <div className="form-group">
                    <button className="btn btn-primary"> Add User </button>
                </div>
            </form>
        </Container>
    )
}
export default Adduser;
