import {Navigate, Outlet} from "react-router-dom";

function PrivateRoute() {

    const auth = false;

    return (
        auth ? <Outlet /> : <Navigate to="login" />
    );
}

export default PrivateRoute;