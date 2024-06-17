
function* numStream() {
    let n = 0;
    while (true) {
        yield n++;
    };
};

// const natures = {}
// async function getNature() {
//     const natureData = await (await fetch("https://pokeapi.co/api/v2/nature?limit=25")).json()
//     for (const nat of natureData.results) {
//         const details = await (await fetch(nat.url)).json()
//         natures[nat.name] = {
//             [details.decreased_stat?.name]: .9,
//             [details.increased_stat?.name]: 1.1
//         }
//     }
//     console.log(JSON.stringify(natures))}
// getNature()

// const natures = JSON.parse(`{"hardy":{"undefined":1.1},"bold":{"attack":0.9,"defense":1.1},"modest":{"attack":0.9,"special-attack":1.1},"calm":{"attack":0.9,"special-defense":1.1},"timid":{"attack":0.9,"speed":1.1},"lonely":{"defense":0.9,"attack":1.1},"docile":{"undefined":1.1},"mild":{"defense":0.9,"special-attack":1.1},"gentle":{"defense":0.9,"special-defense":1.1},"hasty":{"defense":0.9,"speed":1.1},"adamant":{"special-attack":0.9,"attack":1.1},"impish":{"special-attack":0.9,"defense":1.1},"bashful":{"undefined":1.1},"careful":{"special-attack":0.9,"special-defense":1.1},"rash":{"special-defense":0.9,"special-attack":1.1},"jolly":{"special-attack":0.9,"speed":1.1},"naughty":{"special-defense":0.9,"attack":1.1},"lax":{"special-defense":0.9,"defense":1.1},"quirky":{"undefined":1.1},"naive":{"special-defense":0.9,"speed":1.1},"brave":{"speed":0.9,"attack":1.1},"relaxed":{"speed":0.9,"defense":1.1},"quiet":{"speed":0.9,"special-attack":1.1},"sassy":{"speed":0.9,"special-defense":1.1},"serious":{"undefined":1.1}}`);
// for (const nat in natures) {
//     delete natures[nat].undefined;
//     if ("special-attack" in natures[nat]) {
//         natures[nat].spatk = natures[nat]["special-attack"];
//         delete natures[nat]["special-attack"];
//     }
//     if ("special-defense" in natures[nat]) {
//         natures[nat].spdef = natures[nat]["special-defense"];
//         delete natures[nat]["special-defense"];
//     }
// }
// console.log(JSON.stringify(natures))

const natures = JSON.parse(`{"hardy":{},"bold":{"attack":0.9,"defense":1.1},"modest":{"attack":0.9,"spatk":1.1},"calm":{"attack":0.9,"spdef":1.1},"timid":{"attack":0.9,"speed":1.1},"lonely":{"defense":0.9,"attack":1.1},"docile":{},"mild":{"defense":0.9,"spatk":1.1},"gentle":{"defense":0.9,"spdef":1.1},"hasty":{"defense":0.9,"speed":1.1},"adamant":{"attack":1.1,"spatk":0.9},"impish":{"defense":1.1,"spatk":0.9},"bashful":{},"careful":{"spatk":0.9,"spdef":1.1},"rash":{"spatk":1.1,"spdef":0.9},"jolly":{"speed":1.1,"spatk":0.9},"naughty":{"attack":1.1,"spdef":0.9},"lax":{"defense":1.1,"spdef":0.9},"quirky":{},"naive":{"speed":1.1,"spdef":0.9},"brave":{"speed":0.9,"attack":1.1},"relaxed":{"speed":0.9,"defense":1.1},"quiet":{"speed":0.9,"spatk":1.1},"sassy":{"speed":0.9,"spdef":1.1},"serious":{}}`)

const typeStuff = {
    "bug": {"icon": "./static/images/icons/Bug_icon.png", "color": "#91A119"},
    "dark": {"icon": "./static/images/icons/Dark_icon.png", "color": "#624D4F"},
    "dragon": {"icon": "./static/images/icons/Dragon_icon.png", "color": "#5160E2"},
    "electric": {"icon": "./static/images/icons/Electric_icon.png", "color": "#FAC100"},
    "fairy": {"icon": "./static/images/icons/Fairy_icon.png", "color": "#EF75F0"},
    "fighting": {"icon": "./static/images/icons/Fighting_icon.png", "color": "#FF8001"},
    "fire": {"icon": "./static/images/icons/Fire_icon.png", "color": "#E62729"},
    "flying": {"icon": "./static/images/icons/Flying_icon.png", "color": "#80B9EF"},
    "ghost": {"icon": "./static/images/icons/Ghost_icon.png", "color": "#704270"},
    "grass": {"icon": "./static/images/icons/Grass_icon.png", "color": "#3FA129"},
    "ground": {"icon": "./static/images/icons/Ground_icon.png", "color": "#905120"},
    "ice": {"icon": "./static/images/icons/Ice_icon.png", "color": "#3CCEF2"},
    "normal": {"icon": "./static/images/icons/Normal_icon.png", "color": "#A0A1A0"},
    "poison": {"icon": "./static/images/icons/Poison_icon.png", "color": "#9141CB"},
    "psychic": {"icon": "./static/images/icons/Psychic_icon.png", "color": "#EF427A"},
    "rock": {"icon": "./static/images/icons/Rock_icon.png", "color": "#AFA980"},
    "steel": {"icon": "./static/images/icons/Steel_icon.png", "color": "#60A0B7"},
    "water": {"icon": "./static/images/icons/Water_icon.png", "color": "#2880EE"},
}

const stats = ["hp", "attack", "defense", "spatk", "spdef", "speed"];

const loadList = document.getElementById("loaded")

const sheet = {
    sheet: document.getElementById("sheet"),
    portrait: document.getElementById("portrait"),
    name: document.getElementById("name"),
    pokedex: document.getElementById("pokedex"),
    height: document.getElementById("height"),
    weight: document.getElementById("weight"),
    type: document.getElementById("type"),
    nature: document.getElementById("nature"),
    ability: document.getElementById("ability"),
    level: document.getElementById("level"),
    moves: document.getElementById("moves"),
    move_button: document.getElementById("move-button"),
    hp: {
        hp: document.getElementById("hp"),
        base: document.getElementById("hpbase"),
        iv: document.getElementById("hpiv"),
        ev: document.getElementById("hpev"),
    },
    attack: {
        attack: document.getElementById("attack"),
        base: document.getElementById("attackbase"),
        iv: document.getElementById("attackiv"),
        ev: document.getElementById("attackev"),
        nature: document.getElementById("attacknature"),
    },
    defense: {
        defense: document.getElementById("defense"),
        base: document.getElementById("defensebase"),
        iv: document.getElementById("defenseiv"),
        ev: document.getElementById("defenseev"),
        nature: document.getElementById("defensenature"),
    },
    spatk: {
        spatk: document.getElementById("spatk"),
        base: document.getElementById("spatkbase"),
        iv: document.getElementById("spatkiv"),
        ev: document.getElementById("spatkev"),
        nature: document.getElementById("spatknature"),
    },
    spdef: {
        spdef: document.getElementById("spdef"),
        base: document.getElementById("spdefbase"),
        iv: document.getElementById("spdefiv"),
        ev: document.getElementById("spdefev"),
        nature: document.getElementById("spdefnature"),
    },
    speed: {
        speed: document.getElementById("speed"),
        base: document.getElementById("speedbase"),
        iv: document.getElementById("speediv"),
        ev: document.getElementById("speedev"),
        nature: document.getElementById("speednature"),
    },

}

sheet.nature.addEventListener("change", updateNature)

for (const nat in natures) {
    const option = document.createElement("option");
    option.value = nat;
    option.innerText = nat;
    sheet.nature.appendChild(option);
}


class Pokemon {
    static idGen = numStream();
    static nextId = () => this.idGen.next().value;

    constructor(data) {
        this.id = Pokemon.nextId();
        this.level = 34;
        this.nature = "bashful";
        this.parseData(data);
        this.ability = this.abilities[0].name;
    };

    parseData (data) {
        this.abilities = [];
        data.abilities.forEach(ability => {
            this.abilities.push({
                name: ability.ability.name,
                url: ability.ability.url
            });
        });
        this.height = data.height;
        this.pokedex = data.id;
        this.moves = [];
        data.moves.forEach(move => {
            const details = move.version_group_details.find(
                group => group.version_group.name == "sun-moon"
            );
            if (details?.level_learned_at > 0) {
                this.moves.push({
                    name: move.move.name,
                    url: move.move.url,
                    level: details.level_learned_at
                });
            };
        });
        this.moves.sort((a,b) => a.level - b.level)
        this.name = data.name[0].toUpperCase() + data.name.slice(1);
        this.sprite = data.sprites.front_default;
        this.portrait = data.sprites.other["official-artwork"].front_default;
        this.stats = {};
        data.stats.forEach(stat => {
            this.stats[stat.stat.name] = {
                base: stat.base_stat,
                iv: 15,
                ev:0
            };
        });
        this.stats.spatk = this.stats["special-attack"];
        delete this.stats["special-attack"];
        this.stats.spdef = this.stats["special-defense"];
        delete this.stats["special-defense"];
        this.type = data.types.map(type => type.type.name);
        this.weight = data.weight;
    };

    get hp() {
        let result = 2*this.stats.hp.base + this.stats.hp.iv;
        result += this.stats.hp.ev/4 << 0;
        result *= this.level / 100;
        result <<= 0;
        return result + this.level + 10
    };

    get speed() {
        let result = 2*this.stats.speed.base + this.stats.speed.iv;
        result += this.stats.speed.ev/4 << 0;
        result *= this.level / 100;
        result <<= 0;
        return (result + 5) * (natures[this.nature].speed ?? 1) << 0
    };

    get attack() {
        let result = 2*this.stats.attack.base + this.stats.attack.iv;
        result += this.stats.attack.ev/4 << 0;
        result *= this.level / 100;
        result <<= 0;
        return (result + 5) * (natures[this.nature].attack ?? 1) << 0
    };

    get defense() {
        let result = 2*this.stats.defense.base + this.stats.defense.iv;
        result += this.stats.defense.ev/4 << 0;
        result *= this.level / 100;
        result <<= 0
        return (result + 5) * (natures[this.nature].defense ?? 1) << 0
    };

    get spatk() {
        let result = 2*this.stats.spatk.base + this.stats.spatk.iv;
        result += this.stats.spatk.ev/4 << 0;
        result *= this.level / 100;
        result <<= 0
        return (result + 5) * (natures[this.nature].spatk ?? 1) << 0
    };

    get spdef() {
        let result = 2*this.stats.spdef.base + this.stats.spdef.iv;
        result += this.stats.spdef.ev/4 << 0;
        result *= this.level / 100;
        result <<= 0
        return (result + 5) * (natures[this.nature].spdef ?? 1) << 0
    };

};

const loadedPokemon = {};
let current;

function selectify(id) {
    const pokemon = loadedPokemon[id];
    current?.side?.classList?.remove?.("active")
    current = pokemon
    pokemon.side.classList.add("active")
    const color1 = typeStuff[pokemon.type[0]].color;
    const color2 = typeStuff[pokemon.type?.[1]]?.color ?? color1
    sheet.sheet.style.background = `linear-gradient(to bottom right, ${color1}, ${color2})`
    sheet.portrait.src = pokemon.portrait;
    for (const field of ["name", "pokedex", "height", "weight"]) {
        sheet[field].innerText = pokemon[field];
    }
    sheet.type.innerText = pokemon.type.join(", ")
    sheet.nature.value = pokemon.nature;
    sheet.level.value = pokemon.level;
    for (const stat of stats) {
        sheet[stat][stat].innerText = pokemon[stat];
        sheet[stat].base.innerText = pokemon.stats[stat].base;
        sheet[stat].iv.value = pokemon.stats[stat].iv;
        sheet[stat].ev.value = pokemon.stats[stat].ev;
        if (natures[current.nature]?.[stat] > 1) {
            sheet[stat].nature.innerHTML = `<span class="raise">&#9650;</span>`;
        } else if (natures[current.nature]?.[stat] < 1) {
            sheet[stat].nature.innerHTML = `<span class="lower">&#9660;</span>`;
        } else if (stat != "hp") {
            sheet[stat].nature.innerHTML = "";
        }
    }
    while (sheet.moves.firstChild) sheet.moves.removeChild(sheet.moves.firstChild);
    for (const move of pokemon.moves) sheet.moves.innerHTML += `<li>Lvl ${move.level}: ${move.name}</li> `;
    while (sheet.ability.firstChild) sheet.ability.removeChild(sheet.ability.firstChild);
    for (const ability of pokemon.abilities) {
        const option = document.createElement("option");
        option.value = ability.name;
        option.innerText = ability.name;
        sheet.ability.appendChild(option);
    }
    sheet.ability.value = pokemon.ability;

}

function updateNature(event) {
    current.nature = event.target.value;
    for (const stat of stats) {
        sheet[stat][stat].innerText = current[stat];
        if (natures[current.nature]?.[stat] > 1) {
            sheet[stat].nature.innerHTML = `<span class="raise">&#9650;</span>`;
        } else if (natures[current.nature]?.[stat] < 1) {
            sheet[stat].nature.innerHTML = `<span class="lower">&#9660;</span>`;
        } else if (stat != "hp") {
            sheet[stat].nature.innerHTML = "";
        }

    }
}

for (const stat of stats) {
    sheet[stat].iv.addEventListener("change", event => {
        current.stats[stat].iv = +event.target.value;
        sheet[stat][stat].innerText = current[stat];
    });
    sheet[stat].ev.addEventListener("change", event => {
        current.stats[stat].ev = +event.target.value;
        sheet[stat][stat].innerText = current[stat];
    });
}

sheet.level.addEventListener("change", event => {
    current.level = +event.target.value;
    for (const stat of stats) sheet[stat][stat].innerText = current[stat];
})

sheet.ability.addEventListener("change", event => current.ability = event.target.value);

async function fetchPokemonData(name) {

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return await response.json();
};

async function handleSubmit(event) {
    event.preventDefault();

    const pokemonName = event.target.search.value;

    const pokemonData = await fetchPokemonData(pokemonName);

    const newPokemon = new Pokemon(pokemonData);
    loadedPokemon[newPokemon.id] = newPokemon;
    const side = document.createElement("button");
    side.classList.add("list-group-item", "list-group-item-action", "side");
    side.id = newPokemon.id;
    side.innerHTML =
    `<img src="${newPokemon.sprite}" class="sprite">
    ${newPokemon.name}
    `;
    if (newPokemon.type[1]) side.innerHTML += `
        <span class="icon" style="background-color: ${typeStuff[newPokemon.type[1]].color};">
            <img src="${typeStuff[newPokemon.type[1]].icon}" class="img-fluid">
        </span>
        `;
    side.innerHTML += `
    <span class="icon" style="background-color: ${typeStuff[newPokemon.type[0]].color};">
        <img src="${typeStuff[newPokemon.type[0]].icon}" class="img-fluid">
    </span>    `;
    side.setAttribute("type", "button")
    side.setAttribute("onclick", `selectify(${newPokemon.id})`);
    loadList.append(side);
    newPokemon.side = side;
    selectify(newPokemon.id);
};

function removify(id) {
    loadList.remove(loadedPokemon[id].side);
    delete loadedPokemon[id];
}

