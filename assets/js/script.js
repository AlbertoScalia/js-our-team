//Assegno all'elemento .row una costante
const contenitoreTeam = document.querySelector('.row');

//Creo l'array con i membri del team
const teamCompleto = [
    {
        nome: 'Wayne Barnett',
        ruolo: 'Founder & CEO',
        foto: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome: 'Angela Caroll',
        ruolo: 'Chief Editor',
        foto: 'angela-caroll-chief-editor.jpg'
    },
    {
        nome: 'Walter Gordon',
        ruolo: 'Office Manager',
        foto: 'walter-gordon-office-manager.jpg'
    },
    {
        nome: 'Angela Lopez',
        ruolo: 'Social Media Manager',
        foto: 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome: 'Scott Estrada',
        ruolo: 'Developer',
        foto: 'scott-estrada-developer.jpg'
    },
    {
        nome: 'Barbara Ramos',
        ruolo: 'Graphic Designer',
        foto: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.log(teamCompleto);

arrayDaIterare(teamCompleto);

//Creo la funzione per iterare dentro l'array al cui interno inserisco un ciclo for
function arrayDaIterare(teamCompleto) {
    for (let i = 0; i < teamCompleto.length; i++) {
        //Assegno ad una variabile ogni oggetto dell'array
        const membroTeam = teamCompleto[i];
        //Scrivo la funzione per far apparire le card
        elementiDaInserire(contenitoreTeam, membroTeam);
    }
}

// Creo la funzione per far apparire le card quando si aprirà la pagina
function elementiDaInserire(elementiDom, oggetto) {
    const colonnaDaInserire = `
    <div class="col-12 col-sm-6 col-lg-4">
        <div class="card rounded-0 mb-4 shadow-sm ">
            <img src="./assets/img/${oggetto.foto}" alt="${oggetto.nome}">
            <div class="card-body text-center">
                <h4>${oggetto.nome}</h4>
                <p class="text-secondary">${oggetto.ruolo}</p>
            </div>
        </div>
    </div>
    `
    elementiDom.innerHTML += colonnaDaInserire;
}
