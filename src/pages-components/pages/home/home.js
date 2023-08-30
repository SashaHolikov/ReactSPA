import React from "react";
import './home.css'
import montsaintmichel from './img/montsaintmichel.jpg';

function Home() {
    return (
        <div className="conteiner">
            <h1>Mont-Saint-Michel</h1>
            <img src={montsaintmichel} alt="MonSentMichel"></img>
            <p>Mont-Saint-Michel is a tidal island and mainland commune in Normandy, France.
                The island lies approximately one kilometre (one-half nautical mile) off France's north-western coast,
                at the mouth of the Couesnon River near Avranches and is 7 hectares (17 acres) in area. 
                The mainland part of the commune is 393 hectares (971 acres) in area so that the total
                surface of the commune is 400 hectares (990 acres).[5][6] As of 2019, the island had a population of 29.
                The commune's position—on an island just a few hundred metres (yards) from land—made it accessible at low 
                tide to the many pilgrims to its abbey, and defensible as the incoming tide stranded,
                drove off, or drowned would-be assailants. The island remained unconquered during the Hundred Years' War.
                A small garrison fended off a full attack by the English in 1433.[8] Louis XI recognised the benefits
                of its natural defence and turned it into a prison. The abbey was used regularly 
                as a prison during the Ancien Régime.</p>

        </div>
    )
}

export default Home