import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    //navbar theme state
    const [theme, setTheme] = useState('light');

    //navbar theme 
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    //navbar theme 
    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme('synthwave')
        }
        else {
            setTheme('light')
        }
    }

    const Links = <>

        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'font-bold'
        }>Home</NavLink></li>

        {/* <li><NavLink to="/statistics">Statistics</NavLink></li> */}

        {/* <li><NavLink to="/blogs">Blogs</NavLink></li> */}
        <li><NavLink to="/blogs" className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'font-bold'
        }>Blogs</NavLink></li>



        {/* <li><NavLink to="/bookmarks">Bookmarks</NavLink ></li> */}

        <li> <NavLink to="/bookmarks" className={({ isActive }) =>
            isActive ? 'text-primary font-bold' : 'font-bold'
        }>Bookmarks</NavLink></li>

    </>
    return (
        <div>
            <div className="navbar bg-base-100 px-10 mb-[25px] shadow-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {Links}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-2xl gap-0 text-secondary"><span>Byte</span><span className="text-primary">Blaze</span></a>
                </div>
                {/* <div className="navbar-end hidden lg:flex">
                    
                </div> */}
                <div className="navbar-end flex-1  gap-6">
                    <ul className="gap-6 menu-horizontal  hidden lg:flex  px-1">
                        {Links}
                    </ul>
                    {/* //navbar theme  */}
                    <label className="cursor-pointer grid place-items-center">
                        <input type="checkbox" onChange={handleTheme} className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                        <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                        <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;






