function activity(){
    let posit = window.scrollY
    
    
    let Home = document.getElementById('posit-a')
    let About = document.getElementById('posit-b')
    let Projects = document.getElementById('posit-c')
    let Contacts = document.getElementById('posit-d')

    if(posit < 520){
        if(Home.classList.contains('header-transition-r')){
            Home.classList.remove('header-transition-r')
        }
        Home.classList.add('header-transition')

        check(About)
        check(Projects)
        check(Contacts)
    }
    else if(posit >=520 && posit < 1200){
        if(About.classList.contains('header-transition-r')){
            About.classList.remove('header-transition-r')
        }
        About.classList.add('header-transition')

        check(Home)
        check(Projects)
        check(Contacts)
    }
    else if(posit >=1200 && posit < 2080){
        if(Projects.classList.contains('header-transition-r')){
            Projects.classList.remove('header-transition-r')
        }
        Projects.classList.add('header-transition')

        check(About)
        check(Home)
        check(Contacts)
    }
    else if(posit >= 2080){
        if(Contacts.classList.contains('header-transition-r')){
            Contacts.classList.remove('header-transition-r')
        }
        Contacts.classList.add('header-transition')

        check(About)
        check(Home)
        check(Projects)
    }
    console.log(posit)
}

function check(section){
    if(section.classList.contains('header-transition')){
        section.classList.remove('header-transition')
        section.classList.add('header-transition-r')
    }
    
}
    
window.addEventListener('scroll',activity)