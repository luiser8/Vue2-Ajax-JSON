
new Vue({
	el:'#app',
	mounted(){
		axios.get('api/data.json')
			.then((respuesta) => {
				this.personajes = respuesta.data;
				console.log(respuesta.data);
			});
	},
	data:{
	personajes: null,
	busqueda: ''
	},
	methods:{
		borrarPersonaje(index){
			console.log('Borraste la personaje ' + index);
			this.personajes.splice(index, 1);
		}
	}
});