import React from "react";

const dummyData = {
    date: "2023-06-22",
    explanation: "Cosmic dust clouds cross a rich field of stars in this telescopic vista near the northern boundary of Corona Australis, the Southern Crown. Part of a sprawling molecular cloud complex this star forming region is a mere 500 light-years away. That's about one third the distance of the more famous stellar nursery known as the Orion Nebula. The 2 degree wide frame would span 15 light-years at the clouds' estimated distance. Mixed with bright nebulosities the dust clouds effectively block light from more distant background stars in the Milky Way and obscure from view embedded stars still in the process of formation. Large dark nebula Bernes 157 is on the left. To its right are a group of pretty reflection nebulae cataloged as NGC 6726, 6727, 6729, and IC 4812. Their characteristic blue color is produced as light from hot stars is reflected by the cosmic dust. The more compact NGC 6729 surrounds young variable star R Coronae Australis. Just below it, filamentary arcs and loops are identified as Herbig Haro objects associated with energetic newborn stars. In fact, at the heart of this area lies the Coronet Cluster, one of the nearest and most active star forming regions.",
    hdurl: "https://apod.nasa.gov/apod/image/2306/corona_aus.jpg",
    title: "Stars and Dust across Corona Australis"
  }


const NasaPhoto = (props) => {
    return (
        <div className="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p className="explanation">{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;