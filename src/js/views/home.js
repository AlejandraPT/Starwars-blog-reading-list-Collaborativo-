import React from "react";
import { CardListPlanets } from "../component/cardListPlanets";

import "../../styles/home.css";

import { CardListCharacters } from "../component/cardListCharacters";


export const Home = () => (
	<div className="container-fluid ">

	<CardListCharacters  />
	<CardListPlanets />
	
	
	</div>
);

