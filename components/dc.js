const root = document.getElementById('root');
root.innerHTML = `<div class="loader"></div>`;
let getPlayerList = async() => {
    try {
        const response = await fetch('https://ipl-t20.herokuapp.com/teams/delhi-capitals');
        const json = await response.json();
        return json;
    } catch (err) {
        root.innerHTML = `    <div id="not-found">
        Page Not Found
        <br> 404 Error
    </div>`
        console.log(err);
    }
}
let Dc = {
        render: async() => {
                let playersList = await getPlayerList();
                console.log(playersList.players);
                let view = `
        <div class="team-container">
            <div class="team-header dc">
                <div class="team-header-overlay">
                    <div class="team-header-overlay-img">
                        <div class="teamheader-overlay-color">
                        </div>
                    </div>
                </div>
            </div>
         
            <div class="team-card-container">
                <div  class="team-player">
                    ${playersList.players.map(player => 
                    `<div class="team-card">
                        <div class="team-card-image  image-dc">
                            <img src=${player.image} alt=${player.name}/>
                        </div>
                        <div class="team-card-player-detail">
                            <p class="player-name">${player.name}</p>
                            <ul class="player-stats">
                                <li>
                                    <span class="value">${player.stats.matches}</span>
                                    <span class="label">Matches</span>
                                </li>
                                <li>
                                    <span class="value">${player.stats.runs}</span>
                                    <span class="label">Runs</span>
                                </li>
                                
                                <li>
                                    <span class="value">${player.stats.wickets}</span>
                                    <span class="label">Wickets</span>
                                </li>
                            </ul>
                            <button class="team-card-button">View Profile</button>
                        </div>
                    </div>`
                    ).join('')
                    }
                </div>
           </div>
        </div>
    
    `

        return view
    },
    after_render: async () => { }
}

export default Dc;