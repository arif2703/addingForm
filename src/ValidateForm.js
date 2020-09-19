import React, { useState } from 'react'
import { Container } from 'react-bootstrap'


const ValidateForm = () => {
    const [fName, setfName] = useState({
        value: '',
        error: null
    })

    const [lName, setlName] = useState({
        value: '',
        error: null
    })

    const [phone, setPhone] = useState({
        value: '',
        error: null
    })

    const [eMail, seteMail] = useState({
        value: '',
        error: null
    })

    const [descript, setdescription] = useState({
        value : '',
        error : null
    })

    const [genders, setgenders] = useState({
        value : 'Female',
        error : null
    })

    const changeGenderHandler = (e) => {
        const obj = {
            value: e.target.id,
            error: ""
        }
        setgenders(obj)
        console.log(obj)
    }



    const changeDescriptionHandler = (e) => {
        setdescription({
            value: e.target.value,
            error: e.target.value.length > 10 ? "maximum 10 charactor require" : null
        })
    }

    const changeEmailHandler = (e) => {
        var emails = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        console.log(e.target.value.match(emails))
        //console.log(emails.test(e.target.value)) (Other Method)
        seteMail({
            value: e.target.value,
            error: e.target.value.match(emails) ? null : "email id is not valid"
            //error: emails.test(e.target.value) ? null : "email id is not valid" (Other Method)
        })
    }
    
    const changeFnameHandler = (e) => {
        setfName({
            value: e.target.value,
            error: e.target.value.length < 3 ? "enter minimum 3 charactor" : null
        })
    }
    const changeLnameHandler = (e) => {
        setlName({
            value: e.target.value,
            error: e.target.value.length < 5 ? "enter minimum 3 charactor" : null
        })
    }

    const changePhoneHandler = (e) => {
        var phoneno = /^\d{10}$/;
        setPhone({
            value: e.target.value,
            error: e.target.value.match(phoneno) ? null : "use only numeric value"
        })
    }





    return (
        <Container>
            <form>
                <div className="form-group">
                    <label>First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter First Name"
                        value={fName.value}
                        onChange={changeFnameHandler}
                    />
                    <span className="error">{fName.error}</span>
                </div>
                <div className="form-group">
                    <label>Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Last Name"
                        value={lName.value}
                        onChange={changeLnameHandler}
                    />
                    <span className="error">{lName.error}</span>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={eMail.value}
                        onChange={changeEmailHandler}
                    />
                    <span className="error">{eMail.error}</span>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        value={phone.value}
                        onChange={changePhoneHandler}
                    />
                    {<span className="error">{phone.error}</span>}
                </div>
                <div className="form-group">
                    <label>Gender </label>&nbsp; &nbsp;  
                    <input type="radio" name="optradio" id="Male" checked={genders.value==="Male"} onChange={changeGenderHandler} /> Male &nbsp; &nbsp;                   
                    <input type="radio" name="optradio" id="Female" checked={genders.value==="Female"} onChange={changeGenderHandler} /> Female
                </div>
                {<span className="error">{genders.error}</span>}
                <div className="form-group">
                    <label>Subject</label>
                    <select className="form-control" id="sel1">
                        <option>Hindi</option>
                        <option>English</option>
                        <option>Maths</option>
                        <option>Science</option>
                        <option>History</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        className="form-control"
                        placeholder="Description"
                        value={descript.value}
                        onChange={changeDescriptionHandler}
                />
                {<span className="error">{descript.error}</span>}
                </div>
                <div className="form-group">
                    <button>Submit Now</button>
                </div>
            </form>
        </Container>
    )
}

export default ValidateForm;