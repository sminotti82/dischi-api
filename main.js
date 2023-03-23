const app = new Vue({
    el:'#root',
    data:{
       
        dischi:[],
        generi:['All'], 
        cerca:'',
    },
    mounted(){
          axios.get('https://flynn.boolean.careers/exercises/api/array/music')
               .then((disco)=>{
                         this.dischi=disco.data.response
                        this.dischi.sort((x, y)=> x.year - y.year)
                        console.log(this.dischi);
                         this.dischi.forEach(element => {
                    
                               
                               !this.generi.includes(element.genre)?this.generi.push(element.genre):''


                         });

                       
               })


         
    },
    methods:{
              selected(song){
                if(song.genre==this.cerca||this.cerca=='All' ){
                    return true
                } else {
                    return false
                }
              },

              ritorna(){
                location.reload()
              }
    }
})