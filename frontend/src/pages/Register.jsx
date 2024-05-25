import Form from "../components/Form"
import { Link } from "react-router-dom";

function Register() {
    return (
        <div>
            <Form route="/api/user/register/" method="register" />
            <Link to="/login">Already have an account?</Link>
        </div>
    )
}

export default Register