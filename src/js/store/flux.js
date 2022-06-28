const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],



			characters: [],
			planets: [],
			detail:{},
			favList:[],
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			listCharacters: () => {
				
					fetch("https://swapi.dev/api/people")
					.then((res) => res.json())
					.then(data => setStore({characters: data.results}))
				
			},
			listPlanets: () => {
				
				fetch("https://swapi.dev/api/planets")
				.then((res) => res.json())
				.then(data => setStore({planets: data.results}))

				
			
		    },
			details: (type,uid) => {
				
				fetch(`https://www.swapi.tech/api/${type}/${uid}`)
				.then(response => {
					if (response.ok) {
						return response.json();
					} else {
						setStore({ error: "No se pudo obtener el personaje" });
					}
				})
				.then(data => setStore({ detail: data.result.properties }));

				
			
		    },
			setFavorites: (item) =>{

				const store = getStore();

				setStore({ favList: [...store.favList, item] });

			},
			deleteFavorites: (index) =>{

				const store = getStore();

				setStore({ favList: store.favList.filter((favList, i) => i !== index)})

			},
			changeColor: (index, color) => {
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				setStore({ demo: demo });
			}
		}
	};
};

export default getState;