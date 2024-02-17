// import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="logo">
                <p
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    CF Practice
                </p>
            </div>
            <div className="links">
                <p
                    onClick={() => {
                        navigate("/resources");
                    }}
                >
                    Resources
                </p>
            </div>
            {/* <div className="navbar-github">
                <a href="https://github.com/Aloksh42">
                    <FaGithub />
                </a>
            </div> */}
            <div className="auth">
                <p>Login</p>
            </div>
        </nav>
    );
};

export default Navbar;
