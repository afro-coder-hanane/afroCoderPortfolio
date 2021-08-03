let themeDots = document.getElementsByClassName('theme-dot')
let theme = localStorage.getItem('theme')
if(theme=='null'){
    setMode('ligth')
}
else{
    setMode(theme)
}

for(var i=0; i< themeDots.length;i++){
    themeDots[i].addEventListener('click',function(){
        let mode =this.dataset.mode
        console.log('clicked', mode)
        setMode(mode)

    })
}

function setMode(mode){

    if(mode == 'light'){
        document.getElementById('theme-style').href ='style.css'
    }
    if(mode == 'blue'){
        document.getElementById('theme-style').href ='blue.css'
    }
    if(mode == 'green'){
        document.getElementById('theme-style').href ='green.css'
    }
    if(mode == 'dark'){
        document.getElementById('theme-style').href ='dark.css'
    }

    localStorage.setItem('theme', mode)

}