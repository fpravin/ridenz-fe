import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const DasboardRoot = () => {





    return (
        <div className="flex flex-row bg-blue-200 h-dvh">
            {/* <NavBar /> */}
            <aside className="bg-red-100 min-w-56">
                <SideBar />
            </aside>
            <main className="bg-green-100 flex-grow">
                <Outlet />
            </main>
        </div>
    );
}

export default DasboardRoot;