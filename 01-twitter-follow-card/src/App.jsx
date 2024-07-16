import React from "react";
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard";
const midudev = { userName:"midudev", name:"Miguel Ángel Durán" }

export function App () {
    return (
    <section className="App">
        <TwitterFollowCard {...midudev}/>

        <TwitterFollowCard 
            userName="mouredev" 
            name="Brais Moure" />
        <TwitterFollowCard 
            userName="pheralb" 
            name="Pablo Hernández"/>
        <TwitterFollowCard 
            userName="elon_musk" 
            name="Elon Musk" />
    </section>
    )
}

