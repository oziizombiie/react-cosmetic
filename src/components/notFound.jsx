import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage(){
    return (
        <div className="h-screen w-full text-center">
            <h2 className="text-2xl my-2">Ooops looks like the page was moved :(</h2>
            <img className="object-cover w-full h-auto" alt="notFoundPage" src="https://picsum.photos/1920/1080"/>
            <Link to={"/"}>
                <p className="my-4 text-2xl"> &lt;- Back to home</p>
            </Link>
        </div>
    );
}

export default NotFoundPage;