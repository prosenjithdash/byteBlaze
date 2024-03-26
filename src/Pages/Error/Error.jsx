import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <div className="text-xl text-white font-extrabold flex flex-col justify-center items-center bg-blue-700 rounded-2xl p-6 m-10">
                <h2>404</h2>
                <p>Page is not found</p>
                <Link to='/'><button className="bg-red-600 text-xl p-4 rounded-xl mt-4">Home</button></Link>
            </div>

        </div>
    );
};

export default Error;