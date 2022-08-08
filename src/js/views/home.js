import React,  { useContext } from "react";
import { CardListPlanets } from "../component/cardListPlanets";
import { Context } from "../store/appContext";

import "../../styles/home.css";

import { CardListCharacters } from "../component/cardListCharacters";


export const Home = () =>{
	return (

	<div className="container-fluid ">

	<CardListCharacters  />
	<CardListPlanets />
	
	
	</div>
);} 

