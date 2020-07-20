export default{
    data() {
        return {
            currentPage: 1,
            api: []    
        }
    },
    methods: {
        fetchAllDataType(path){
            const originalPath = `https://rickandmortyapi.com/api${path}/?page=${this.currentPage}`;            
            fetch(originalPath)
            .then(r => r.json())
            .then(json => {                
                this.api.push(...json.results);
                if(json.info.next != null){
                    this.currentPage++;
                    this.fetchAllDataType(path)
                }
            })
            .catch(err => console.log(err))
        }
    },
}