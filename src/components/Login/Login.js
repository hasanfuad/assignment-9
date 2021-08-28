import React from 'react';

import './Login.css'

const Login = () => {
    const handleSubmitForm = (e) => {
            console.log(e.target.name, e.target.value);
            let isValid = true;

            if(e.target.name === 'email'){
                const validMail = /\S+@\S+\.\S+/.test(e.target.value);
                isValid = validMail;
            }

            if(e.target.name === 'password'){
                const validLength = e.target.value.length > 6;
                const validPass = /\d{1}/.test(e.target.value);
                
                isValid = validLength && validPass;
            }

            if(isValid){
                console.log("Successfully logged in");
            }
    }

    const styles = {
        marginTop: "200px"
    }
    return (
        <div className="d-flex justify-content-around login-bg"style={styles}>
            <form onSubmit={handleSubmitForm}>
                <p style={{fontSize: "20px", fontWeight: "600"}}>Create an account</p>
                <input className="input-btn rounded" type="text" name="name" onBlur={handleSubmitForm} placeholder="Your name" />
                <br/>
                <input className="input-btn rounded" type="text" name="email" onBlur={handleSubmitForm} placeholder="Your email" required/>
                <br/>
                <input className="input-btn rounded" type="password" name="password" onBlur={handleSubmitForm} placeholder="Your password" required/>
                <br/>
                <input className="input-btn rounded btn-warning form-btn" type="submit" value="Sign In"/>
            </form>
        </div>
    );
};

export default Login;