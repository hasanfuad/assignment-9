import React from 'react';

const Login = () => {
    const handleSubmitForm = (e) => {
            console.log(e.target.name, e.target.value);
    }

    const styles = {
        marginTop: "200px"
    }
    return (
        <div className="d-flex justify-content-around "style={styles}>
            <form onSubmit={handleSubmitForm}>
                <input className="rounded" style={{width: "300px", padding: "10px"}} type="text" name="name" onBlur={handleSubmitForm} placeholder="Your name" />
                <br/>
                <input className="rounded" style={{width: "300px", padding: "10px", marginTop: "15px"}} type="text" name="email" onBlur={handleSubmitForm} placeholder="Your email" required/>
                <br/>
                <input className="rounded" style={{width: "300px", padding: "10px", marginTop: "15px"}} type="password" name="password" onBlur={handleSubmitForm} placeholder="Your password" required/>
                <br/>
                <input style={{width: "300px", padding: "10px", marginTop: "15px"}} type="submit"/>
            </form>
        </div>
    );
};

export default Login;