function fetchData(input)
{
    fetch('./travel_recommendation_api.json')
.then((res)=> 
{
    return res.json()
})
.then((data)=> 
    {
        
        
        input=input.toLowerCase()
        if(input=='country' || input==='countries')
        {
           
            let country= data.countries;
            let cities;
            let cityName;
            let count=0;
            country.forEach(item=>
            {
                cityName = item.name;
                 cities = item.cities;
                 count++;
                 if(count==2)
                 {
                       exit
                 }
                
                 city(cities)
                })
            
                
           
            
        }
       else if(input=='beach' || input==='beaches')
            {
               
                let beaches= data.beaches;
                
                let imgUrl;
                let desc;
                let cityName;
                beaches.forEach(beach=>
                {
                  
                    let mydiv = document.createElement("div");
                    //Image
                    const img = document.createElement("img");
                    img.setAttribute('src',`${beach.imageUrl}`);
                    img.setAttribute('class', 'democlass')
                    document.querySelector(".hero__right--body").appendChild(img);
                    // Heading
                    const heading = document.createElement("h1");
                    const headingText = document.createTextNode(`${beach.name}`);
                    heading.appendChild(headingText);
                    mydiv.appendChild(heading);
        
                    document.querySelector(".hero__right--body").appendChild(mydiv);
                    // Description 
                    const desc = document.createElement("h3");
                    const descText = document.createTextNode(`${beach.description}`);
                    desc.appendChild(descText);
                    mydiv.appendChild(desc);
        
                    document.querySelector(".hero__right--body").appendChild(mydiv);
                    // document.getElementById('hero__btn').style.display='block'
                    // Button 
                    const btn = document.createElement("button");
                    const btnText = document.createTextNode("Visit");
                    btn.appendChild(btnText);
                    mydiv.appendChild(btn);
                    document.querySelector(".hero__right--body").appendChild(mydiv);
                    
                    })
                   
                
                    
               
                
             }
             else if(input=='temple' || input==='temples')
                {
                   
                    let temples= data.temples;
                    
                    let imgUrl;
                    let desc;
                    let cityName;
                    temples.forEach(temple=>
                    {
                      
                        let mydiv = document.createElement("div");
                        //Image
                        const img = document.createElement("img");
                        img.setAttribute('src',`${temple.imageUrl}`);
                        img.setAttribute('class', 'democlass')
                        document.querySelector(".hero__right--body").appendChild(img);
                        // Heading
                        const heading = document.createElement("h1");
                        const headingText = document.createTextNode(`${temple.name}`);
                        heading.appendChild(headingText);
                        mydiv.appendChild(heading);
            
                        document.querySelector(".hero__right--body").appendChild(mydiv);
                        // Description 
                        const desc = document.createElement("h3");
                        const descText = document.createTextNode(`${temple.description}`);
                        desc.appendChild(descText);
                        mydiv.appendChild(desc);
            
                        document.querySelector(".hero__right--body").appendChild(mydiv);
                        // document.getElementById('hero__btn').style.display='block'
                        // Button 
                        const btn = document.createElement("button");
                        const btnText = document.createTextNode("Visit");
                        btn.appendChild(btnText);
                        mydiv.appendChild(btn);
                        document.querySelector(".hero__right--body").appendChild(mydiv);
                        
                        })
                       
                    
                        
                   
                    
                 }
    }
)
.catch((error)=>console.error('fetch error',error));
}
const btn = document.querySelector('#btn');
btn.addEventListener("click",()=>
{
    const search__input = document.querySelector("#search__input").value;
    fetchData(search__input);
})
function city(cities)
{
    cities.map(city=>
        {
            
            let mydiv = document.createElement("div");
            //Image
            const img = document.createElement("img");
            img.setAttribute('src',`${city.imageUrl}`)
            document.querySelector(".hero__right--body").appendChild(img);
            // Heading
            const heading = document.createElement("h1");
            const headingText = document.createTextNode(`${city.name}`);
            heading.appendChild(headingText);
            mydiv.appendChild(heading);

            document.querySelector(".hero__right--body").appendChild(mydiv);
            // Description 
            const desc = document.createElement("h3");
            const descText = document.createTextNode(`${city.description}`);
            desc.appendChild(descText);
            mydiv.appendChild(desc);

            document.querySelector(".hero__right--body").appendChild(mydiv);
            // document.getElementById('hero__btn').style.display='block'
            // Button 
            const btn = document.createElement("button");
            const btnText = document.createTextNode("Visit");
            btn.appendChild(btnText);
            mydiv.appendChild(btn);
            document.querySelector(".hero__right--body").appendChild(mydiv);
            
        }
        )
}


let rest = document.getElementById('reset');
rest.addEventListener("click",()=>
{
    document.querySelector('.hero__right--body').innerHTML='';
})
