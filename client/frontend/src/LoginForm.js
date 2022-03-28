
const LoginForm = () => {
    return (
        <>
            <h1 className="title">Dawit's Bank</h1>
            <div className="login_div">
                <form className="login_form">
                    <h4>Username: </h4>
                    <input type="text"/> <br/>
                    <h4>Password: </h4>
                    <input type="text"/> <br/>
                    <button type="submit">Login</button>
                    <button type="submit">Register</button>
                </form>
            </div>
        </>
    )
}

export default LoginForm;