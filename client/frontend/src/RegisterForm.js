const RegisterForm = () => {
    return (
        <>
            <h1 className="title">Create Account</h1>
            <div className="register_div">
                <form className="registration_form">
                    <label>FirstName: </label>
                    <input type="text"/>
                    <label>LastName: </label>
                    <input type="text"/> <br/>
                    <label>UserName: </label>
                    <input type="text"/>
                    <label>Password: </label>
                    <input type="text"/> <br/>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}

export default RegisterForm