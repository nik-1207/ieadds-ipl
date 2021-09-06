const root = document.getElementById('root');
root.innerHTML = `<div class="loader"></div>`;
let getAllTeamData = async() => {
    const options = {
        method: 'GET',

    };
    try {
        const response = await fetch(`https://ipl-t20.herokuapp.com/teams`, options)
        const json = await response.json();
        console.log(json)
        return json
    } catch (err) {
        root.innerHTML = "Not found"
        console.log('Error getting documents', err)
    }
}

let Home = {
    render: async() => {
        let allTeamData = await getAllTeamData()
        let view = `
<div class="box-container">
    <div class="card card-csk ">
        <img src="./assets/csk.png" alt="">
        <div class="tab-layout">
            <h2 id="h-csk">${allTeamData[0].teamName}</h2>
            <h4 id="venue-csk">${allTeamData[0].venue}</h4>
            <div class="winnings">
                <i class="fas fa-trophy"></i>
                <span id="win-csk">${allTeamData[0].winningYears}</span>
            </div>
        </div>
        <a href="/#teams/csk" style="margin: 0;">Team Home</a>
        <i class="fas fa-angle-right tab-arrow"></i>
    </div>
    <div class="card card-dc">
        <img src="./assets/dc.png" alt="">
        <div class="tab-layout">
            <h2 id="h-dc">${allTeamData[1].teamName}</h2>
            <h4 id="venue-dc">${allTeamData[1].venue}</h4>
            <div class="winnings">
                <i class="fas fa-trophy"></i>
                <span id="win-dc">${allTeamData[1].winningYears}</span>
            </div>
        </div>
        <a href="/#teams/dc" style="margin: 0;">Team Home</a>
        <i class="fas fa-angle-right tab-arrow"></i>
    </div>
    <div class="card card-kxip">
        <img src="./assets/pk.png" alt="">
        <div class="tab-layout">
            <h2 id="h-kxip">${allTeamData[2].teamName}</h2>
            <h4 id="venue-kxip">${allTeamData[2].venue}</h4>
            <div class="winnings">
                <i class="fas fa-trophy"></i>
                <span id="win-kxip">${allTeamData[2].winningYears}</span>
            </div>
        </div>
        <a href="/#teams/kxip" style="margin: 0;">Team Home</a>
        <i class="fas fa-angle-right tab-arrow"></i>
    </div>
    <div class="card card-kkr" >
        <img src="./assets/kkr.png" alt="">
        <div class="tab-layout">
            <h2 id="h-kkr">${allTeamData[3].teamName}</h2>
            <h4 id="venue-kkr">${allTeamData[3].venue}</h4>
            <div class="winnings">
                <i class="fas fa-trophy"></i>
                <span id="win-kkr">${allTeamData[3].winningYears}</span>
            </div>
        </div>
        <a href="/#teams/kkr" style="margin: 0;">Team Home</a>
        <i class="fas fa-angle-right tab-arrow"></i>
    </div>
    <div class="card card-mi">
        <img src="./assets/mi.png" alt="">
        <div class="tab-layout">
            <h2 id="h-mi">${allTeamData[4].teamName}</h2>
            <h4 id="venue-mi">${allTeamData[4].venue}</h4>
            <div class="winnings">
                <i class="fas fa-trophy"></i>
                <span id="win-mi">${allTeamData[4].winningYears}</span>

            </div>
        </div>
        <a href="/#teams/mi" style="margin: 0;">Team Home</a>
        <i class="fas fa-angle-right tab-arrow"></i>
    </div>
    <div class="card card-rr">
        <img src="./assets/rr.png" alt="">
        <div class="tab-layout">
            <h2 id="h-rr">${allTeamData[5].teamName}</h2>
            <h4 id="venue-rr">${allTeamData[5].venue}</h4>
            <div class="winnings">
                <i class="fas fa-trophy"></i>
                <span id="win-rr">${allTeamData[5].winningYears}</span>

            </div>
        </div>
        <a href="/#teams/rr" style="margin: 0;">Team Home</a>
        <i class="fas fa-angle-right tab-arrow"></i>
    </div>
    <div class="card card-rcb">
        <img src="./assets/rcb.png" alt="">
        <div class="tab-layout">
            <h2 id="h-rcb">${allTeamData[6].teamName}</h2>
            <h4 id="venue-rcb">${allTeamData[6].venue}</h4>
            <div class="winnings">
                <i class="fas fa-trophy"></i>
                <span id="win-rcb">${allTeamData[6].winningYears}</span>
            </div>
        </div>
        <a href="/#teams/rcb" style="margin: 0;">Team Home</a>
        <i class="fas fa-angle-right tab-arrow"></i>
    </div>
    <div class="card card-srh">
        <img src="./assets/srh.png" alt="">
        <div class="tab-layout">
            <h2 id="h-srh">${allTeamData[7].teamName}</h2>
            <h4 id="venue-srh">${allTeamData[7].venue}</h4>
            <div class="winnings">
                <i class="fas fa-trophy"></i>
                <span id="win-srh">${allTeamData[5].winningYears}</span>
            </div>
        </div>
        <a href="/#teams/srh" style="margin: 0;">Team Home</a>
        <i class="fas fa-angle-right tab-arrow"></i>
    </div>
</div>
                `
        return view
    },
    after_render: async() => {
        let win = document.getElementsByClassName('winnings')
        for (let i = 0; i < win.length; i++) {
            if (!win[i].innerText) {
                win[i].style.visibility = "hidden"
            }
        }

    }


}

export default Home;