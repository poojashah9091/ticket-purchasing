import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getShowsList } from "../../data/showsSlice";
import ShowCard from "../ShowCard";
import "./style.scss";

const Shows = () =>{

    const dispatch = useDispatch();
    const showsList = useSelector(store=>store.shows.allShowsList);

    useEffect(()=>{
        dispatch(getShowsList());
    },[dispatch]);

    return (
        <div className="show_list_container">
            {
                showsList.map(show=>{
                    return(
                        <ShowCard 
                            key={show.title}
                            title={show.title}
                            posterURL={show.posterURL}
                            price={show.price}
                            showDate={show.date}
                        />
                    )
                })
            }
        </div>
    )
}

export default Shows;