import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useParams, useLocation } from "react-router-dom";


function BreadCrumbs(){
    let location = useLocation();
    const path = location.pathname.replaceAll('/', ' > ');
    const pathWithOutSlug = removeSlug(path) + ' >';
    let params = useParams();

    return(
        <div className="items-center">
            <p>
            <FontAwesomeIcon icon={faHouse}/> {pathWithOutSlug} 
            <span className="text-red-400 text-xl"> {params.slug} </span>
            </p>
        </div>
    );
}

function removeSlug(path){
    const lastIndex = path.lastIndexOf('>');
    return path.slice(0, lastIndex);
}

export default BreadCrumbs;