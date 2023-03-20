import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <h3>AN UNEXPECTED ERROR OCCURED</h3>
            <h4>Error: {error}</h4>
            <p> P.S: You should probably edit this later</p>
        </>
    );
}

export default ErrorPage;