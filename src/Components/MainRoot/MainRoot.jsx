import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Footer/Footer";

const MainRoot = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[692px]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainRoot;