console.log("skrypty załadowane!")

const owce = [
{
    name: "asas",
    age: 12,   
    color: "white", 
},
{
    name: "dasas",
    age: 8,   
    color: "yellow", 
},
{
    name: "pasas",
    age: 19,   
    color: "white", 
},
{
    name: "osas",
    age: 9,   
    color: "white", 
},
{
    name: "tsas",
    age: 10,   
    color: "violet", 
},
{
    name: "ksas",
    age: 8,   
    color: "red", 
},
{
    name: "nsas",
    age: 13,   
    color: "orange", 
},
]

const reprezentacjaOwiec = owce.map(owca => `
    <div class="owca">
    <h3>${owca.name}</h3>
    <h3>${owca.age}</h3>
    <h3>${owca.color}</h3>
    </div>
    `)

    const tekstDoWstawienia = reprezentacjaOwiec.join("");

    const miejsceNaTekst = document.querySelector("#miejsceNaOwce")

    miejsceNaTekst.innerHTML = tekstDoWstawienia;
