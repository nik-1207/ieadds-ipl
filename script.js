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

function Router(routes) {
    try {
        if (!routes) {
            throw "Invalid Routes";
        }
        this.constructor(routes);
        this.init();

    } catch (e) {
        console.log(e);
    }
}
Router.prototype = {
    routes: undefined,
    rootElem: undefined,
    constructor: function(routes) {
        this.routes = routes;
        this.rootElem = document.getElementById('app');
    },
    init: function() {
        (function(scope, r) {
            window.addEventListener('hashchange', function(e) {
                scope.hasChanged(scope, r);
            });
        })(this, this.routes);
        this.hasChanged(this, this.routes)
    },
    hasChanged: function(scope, r) {
        if (window.location.hash.length > 0) {
            for (var i = 0, length = r.length; i < length; i++) {
                var route = r[i];
                if (route.isActive(window.location.hash.substr(1))) {
                    scope.gotoRoute(route.htmlName)
                }
            }

        }
    },
    gotoRoute: function(htmlName) {
        (function(scope) {
            var url = "views/" + htmlName;
            xhttp = new XMLHttpRequest();
            xhttp.open('GET', url, true);
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    scope.rootElem.innerHTML = this.responseText
                }
            };
            xhttp.send();
        })(this)
    }
};

function Route(name, htmlName, defaultRoute) {
    try {
        if (!name || !htmlName) {
            throw "missing params"
        }
        this.constructor(name, htmlName, defaultRoute);
    } catch (e) {
        console.log(e)
    }
}
Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    constructor: function(name, htmlName, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.defaultRoute = defaultRoute;
    },
    isActive: function(hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    }
}

function init() {
    var router = new Router(
        [
            new Route('about', 'about.html'),
        ]
    );
}
init();
fetch("https://cors-anywhere.herokuapp.com/https://ipl-t20.herokuapp.com/teams", {
    method: "GET",
}).then((data) => { return data.json() }).then((res) => {
    teamData = res
    if (res.length != 0) {
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
    }
}).catch((e) => {
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
})