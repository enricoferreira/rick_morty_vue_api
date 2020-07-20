import VueApexCharts from 'vue-apexcharts';
export default {
    components:{
            apexchart: VueApexCharts
        },
    data() {
        return {
            characterLoadedData: [],  
            status: 'Alive'          
        }
    },
    methods: {
        loadChart(path = `https://rickandmortyapi.com/api/character/?page=1`) {            
            fetch(path)
                .then(r => r.json())
                .then(json => {
                   this.characterLoadedData.push(...json.results);                    
                    if (json.info.next != null) {
                        this.loadChart(json.info.next);                        
                    }
                })
                .catch(err => console.log(err))
        },              
    },
    computed: {
        filtroCharacter() {
            return [{
              "name": 'Episódios',
              "data": this.characterLoadedData.filter(r => r.episode.length > this.minEpPers).map(r => r.episode.length)
            }]
          },
          filtroNome() {                    
            return {    
              chart: {
                height: 300
              },
                colors: ['#E91E63', '#E91E63'], 
                fill: {
                    type: "gradient",
                    gradient: {
                      shadeIntensity: .2,
                      opacityFrom: 0.88,
                      opacityTo: 0.9,
                      stops: [0, 10, 100]
                    }
                  },
                legend: {
                    show: 'true'
                },
                tooltip:{
                    theme: 'dark'
                }  ,
              xaxis: {
                categories: this.characterLoadedData.filter(r => r.episode.length > this.minEpPers).map(r => r.name)
              }
            }
          },
          filtroPersonagensVivosNome(){
              return {    
                theme: {
                    palette: 'palette8' // upto palette10
                  },
                fill: {
                    type: "gradient",
                    gradient: {
                      shadeIntensity: .5,
                      opacityFrom: 0.88,
                      opacityTo: 0.9,
                      stops: [0, 30, 100]
                    }
                  },
                legend: {
                    show: 'true'
                },
                tooltip:{
                    theme: 'dark'
                }  ,
              labels: ['Alive', 'Dead', 'Unknonw']
            }
          },
          filtroValuesPersonagensVivos(){
              const personagensVivos = this.characterLoadedData.filter(r => r.status == 'Alive' && r.episode.length > this.minEpPers).length;
              const personagensMortos = this.characterLoadedData.filter(r => r.status == 'Dead' && r.episode.length > this.minEpPers).length;
              const personagensDesconhecidos = this.characterLoadedData.filter(r => r.status == 'unknown' && r.episode.length > this.minEpPers).length;
              return [personagensVivos, personagensMortos, personagensDesconhecidos]
          }
    },
}