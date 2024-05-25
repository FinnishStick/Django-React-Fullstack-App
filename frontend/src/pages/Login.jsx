import Form from "../components/Form"
import { Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
            <Link to="/register">Don't have an account?</Link>

        </div>
    )
    
}

export default Login