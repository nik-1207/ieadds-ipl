teamHeader = [
    document.querySelector('#h-csk'),
    document.querySelector('#h-dc'),
    document.querySelector('#h-kxip'),
    document.querySelector('#h-kkr'),
    document.querySelector('#h-mi'),
    document.querySelector('#h-rr'),
    document.querySelector('#h-rcb'),
    document.querySelector('#h-srh'),

]
teamVenue = [
    document.querySelector('#venue-csk'),
    document.querySelector('#venue-dc'),
    document.querySelector('#venue-kxip'),
    document.querySelector('#venue-kkr'),
    document.querySelector('#venue-mi'),
    document.querySelector('#venue-rr'),
    document.querySelector('#venue-rcb'),
    document.querySelector('#venue-srh'),

]
teamWin = [
    document.querySelector('#win-csk'),
    document.querySelector('#win-dc'),
    document.querySelector('#win-kxip'),
    document.querySelector('#win-kkr'),
    document.querySelector('#win-mi'),
    document.querySelector('#win-rr'),
    document.querySelector('#win-rcb'),
    document.querySelector('#win-srh'),

]
teamData = [{
        "id": "chennai-super-kings",
        "teamName": "Chennai Super Kings",
        "winningYears": [
            2010,
            2011,
            2018
        ],
        "venue": "M. A. Chidambaram Stadium"
    },
    {
        "id": "delhi-capitals",
        "teamName": "Delhi Capitals",
        "winningYears": [],
        "venue": "Feroz Shah Kotla Ground"
    },
    {
        "id": "kings-xi-punjab",
        "teamName": "Kings XI Punjab",
        "winningYears": [],
        "venue": "IS Bindra Stadium"
    },
    {
        "id": "kolkata-knight-riders",
        "teamName": "Kolkata Knight Riders",
        "winningYears": [
            2012,
            2014
        ],
        "venue": "Eden Gardens"
    },
    {
        "id": "mumbai-indians",
        "teamName": "Mumbai Indians",
        "winningYears": [
            2013,
            2015,
            2017,
            2019
        ],
        "venue": "Wankhede Stadium"
    },
    {
        "id": "rajasthan-royals",
        "teamName": "Rajasthan Royals",
        "winningYears": [
            2008
        ],
        "venue": "Sawai Mansingh Stadium"
    },
    {
        "id": "royal-challengers-bangalore",
        "teamName": "Royal Challengers Bangalore",
        "winningYears": [],
        "venue": "M. Chinnaswamy Stadium"
    },
    {
        "id": "sunrisers-hyderabad",
        "teamName": "Sunrisers Hyderabad",
        "winningYears": [
            2016
        ],
        "venue": "Rajiv Gandhi Intl. Cricket Stadium"
    }
]
fetch("https://cors-anywhere.herokuapp.com/https://ipl-t20.herokuapp.com/teams", {
    method: "GET",
}).then((data) => { return data.json() }).then((res) => {
    teamData = res
});

for (let i = 0; i < teamData.length; i++) {
    console.log()
    teamHeader[i].innerText = teamData[i].teamName
    teamVenue[i].innerText = teamData[i].venue
    if (teamData[i].winningYears.length > 0) {
        teamWin[i].innerText = teamData[i].winningYears

    } else {
        teamWin[i].parentElement.style.visibility = 'hidden'
    }

}