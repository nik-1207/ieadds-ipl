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
    /*
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
    ]*/
teamData = []
    /*
    allTeamData = {
        csk: {
            "team": {
                "captainId": "2101",
                "wicketKeeperId": "2109"
            },
            "players": [{
                    "id": "2101",
                    "name": "MS Dhoni",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1.png",
                    "stats": {
                        "matches": 15,
                        "runs": 416,
                        "wickets": 0
                    }
                },
                {
                    "id": "210898",
                    "name": "Imran Tahir",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/898.png",
                    "stats": {
                        "matches": 17,
                        "runs": 0,
                        "wickets": 26
                    }
                },
                {
                    "id": "2103746",
                    "name": "Lungi Ngidi",
                    "nationality": "",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/3746.png",
                    "stats": {
                        "matches": 10,
                        "runs": 76,
                        "wickets": 3
                    }
                },
                {
                    "id": "2105443",
                    "name": "Ruthuraj Gaikwad",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/5443.png",
                    "stats": {
                        "matches": 0,
                        "runs": 33,
                        "wickets": 0
                    }
                },
                {
                    "id": "210227",
                    "name": "Shane Watson",
                    "nationality": "",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/227.png",
                    "stats": {
                        "matches": 15,
                        "runs": 398,
                        "wickets": 10
                    }
                },
                {
                    "id": "210100",
                    "name": "Ambati Rayudu",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/100.png",
                    "stats": {
                        "matches": 17,
                        "runs": 282,
                        "wickets": 0
                    }
                },
                {
                    "id": "2107",
                    "name": "Murali Vijay",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/7.png",
                    "stats": {
                        "matches": 9,
                        "runs": 18,
                        "wickets": 1
                    }
                },
                {
                    "id": "210297",
                    "name": "Kedar Jadhav",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/297.png",
                    "stats": {
                        "matches": 14,
                        "runs": 162,
                        "wickets": 1
                    }
                },
                {
                    "id": "2109",
                    "name": "Ravindra Jadeja",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/9.png",
                    "stats": {
                        "matches": 16,
                        "runs": 106,
                        "wickets": 15
                    }
                },
                {
                    "id": "210140",
                    "name": "Deepak Chahar",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/140.png",
                    "stats": {
                        "matches": 7,
                        "runs": 34,
                        "wickets": 0
                    }
                },
                {
                    "id": "2104942",
                    "name": "Narayan Jagadeesan",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/4942.png",
                    "stats": {
                        "matches": 0,
                        "runs": 0,
                        "wickets": 0
                    }
                }
            ]
        },
        dc: {
            "team": {
                "captainId": "2101563",
                "wicketKeeperId": "2101664"
            },
            "players": [{
                    "id": "2101563",
                    "name": "Shreyas Iyer",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
                    "stats": {
                        "matches": 16,
                        "runs": 463,
                        "wickets": 0
                    }
                },
                {
                    "id": "2101664",
                    "name": "Kagiso Rabada",
                    "nationality": "",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
                    "stats": {
                        "matches": 12,
                        "runs": 14,
                        "wickets": 25
                    }
                },
                {
                    "id": "21038",
                    "name": "Ishant Sharma",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
                    "stats": {
                        "matches": 13,
                        "runs": 10,
                        "wickets": 13
                    }
                },
                {
                    "id": "21041",
                    "name": "Shikar Dhawan",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
                    "stats": {
                        "matches": 16,
                        "runs": 521,
                        "wickets": 0
                    }
                },
                {
                    "id": "2103764",
                    "name": "Prithwi Shaw",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
                    "stats": {
                        "matches": 16,
                        "runs": 353,
                        "wickets": 10
                    }
                },
                {
                    "id": "2101113",
                    "name": "Axar Patel",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
                    "stats": {
                        "matches": 14,
                        "runs": 110,
                        "wickets": 10
                    }
                },
                {
                    "id": "2102972",
                    "name": "Rishabh Pant",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
                    "stats": {
                        "matches": 16,
                        "runs": 488,
                        "wickets": 0
                    }
                },
                {
                    "id": "21030",
                    "name": "Amit Mishra",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
                    "stats": {
                        "matches": 11,
                        "runs": 21,
                        "wickets": 11
                    }
                }
            ]
        },
        kxip: {
            "team": {
                "captainId": "2101563",
                "wicketKeeperId": "2101664"
            },
            "players": [{
                    "id": "2101563",
                    "name": "Shreyas Iyer",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
                    "stats": {
                        "matches": 16,
                        "runs": 463,
                        "wickets": 0
                    }
                },
                {
                    "id": "2101664",
                    "name": "Kagiso Rabada",
                    "nationality": "",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
                    "stats": {
                        "matches": 12,
                        "runs": 14,
                        "wickets": 25
                    }
                },
                {
                    "id": "21038",
                    "name": "Ishant Sharma",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
                    "stats": {
                        "matches": 13,
                        "runs": 10,
                        "wickets": 13
                    }
                },
                {
                    "id": "21041",
                    "name": "Shikar Dhawan",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
                    "stats": {
                        "matches": 16,
                        "runs": 521,
                        "wickets": 0
                    }
                },
                {
                    "id": "2103764",
                    "name": "Prithwi Shaw",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
                    "stats": {
                        "matches": 16,
                        "runs": 353,
                        "wickets": 10
                    }
                },
                {
                    "id": "2101113",
                    "name": "Axar Patel",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
                    "stats": {
                        "matches": 14,
                        "runs": 110,
                        "wickets": 10
                    }
                },
                {
                    "id": "2102972",
                    "name": "Rishabh Pant",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
                    "stats": {
                        "matches": 16,
                        "runs": 488,
                        "wickets": 0
                    }
                },
                {
                    "id": "21030",
                    "name": "Amit Mishra",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
                    "stats": {
                        "matches": 11,
                        "runs": 21,
                        "wickets": 11
                    }
                }
            ]
        },
        kkr: {
            "team": {
                "captainId": "2101563",
                "wicketKeeperId": "2101664"
            },
            "players": [{
                    "id": "2101563",
                    "name": "Shreyas Iyer",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
                    "stats": {
                        "matches": 16,
                        "runs": 463,
                        "wickets": 0
                    }
                },
                {
                    "id": "2101664",
                    "name": "Kagiso Rabada",
                    "nationality": "",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
                    "stats": {
                        "matches": 12,
                        "runs": 14,
                        "wickets": 25
                    }
                },
                {
                    "id": "21038",
                    "name": "Ishant Sharma",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
                    "stats": {
                        "matches": 13,
                        "runs": 10,
                        "wickets": 13
                    }
                },
                {
                    "id": "21041",
                    "name": "Shikar Dhawan",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
                    "stats": {
                        "matches": 16,
                        "runs": 521,
                        "wickets": 0
                    }
                },
                {
                    "id": "2103764",
                    "name": "Prithwi Shaw",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
                    "stats": {
                        "matches": 16,
                        "runs": 353,
                        "wickets": 10
                    }
                },
                {
                    "id": "2101113",
                    "name": "Axar Patel",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
                    "stats": {
                        "matches": 14,
                        "runs": 110,
                        "wickets": 10
                    }
                },
                {
                    "id": "2102972",
                    "name": "Rishabh Pant",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
                    "stats": {
                        "matches": 16,
                        "runs": 488,
                        "wickets": 0
                    }
                },
                {
                    "id": "21030",
                    "name": "Amit Mishra",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
                    "stats": {
                        "matches": 11,
                        "runs": 21,
                        "wickets": 11
                    }
                }
            ]
        },
        mi: {
            "team": {
                "captainId": "2101563",
                "wicketKeeperId": "2101664"
            },
            "players": [{
                    "id": "2101563",
                    "name": "Shreyas Iyer",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
                    "stats": {
                        "matches": 16,
                        "runs": 463,
                        "wickets": 0
                    }
                },
                {
                    "id": "2101664",
                    "name": "Kagiso Rabada",
                    "nationality": "",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
                    "stats": {
                        "matches": 12,
                        "runs": 14,
                        "wickets": 25
                    }
                },
                {
                    "id": "21038",
                    "name": "Ishant Sharma",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
                    "stats": {
                        "matches": 13,
                        "runs": 10,
                        "wickets": 13
                    }
                },
                {
                    "id": "21041",
                    "name": "Shikar Dhawan",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
                    "stats": {
                        "matches": 16,
                        "runs": 521,
                        "wickets": 0
                    }
                },
                {
                    "id": "2103764",
                    "name": "Prithwi Shaw",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
                    "stats": {
                        "matches": 16,
                        "runs": 353,
                        "wickets": 10
                    }
                },
                {
                    "id": "2101113",
                    "name": "Axar Patel",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
                    "stats": {
                        "matches": 14,
                        "runs": 110,
                        "wickets": 10
                    }
                },
                {
                    "id": "2102972",
                    "name": "Rishabh Pant",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
                    "stats": {
                        "matches": 16,
                        "runs": 488,
                        "wickets": 0
                    }
                },
                {
                    "id": "21030",
                    "name": "Amit Mishra",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
                    "stats": {
                        "matches": 11,
                        "runs": 21,
                        "wickets": 11
                    }
                }
            ]
        },
        rr: {
            "team": {
                "captainId": "2101563",
                "wicketKeeperId": "2101664"
            },
            "players": [{
                    "id": "2101563",
                    "name": "Shreyas Iyer",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
                    "stats": {
                        "matches": 16,
                        "runs": 463,
                        "wickets": 0
                    }
                },
                {
                    "id": "2101664",
                    "name": "Kagiso Rabada",
                    "nationality": "",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
                    "stats": {
                        "matches": 12,
                        "runs": 14,
                        "wickets": 25
                    }
                },
                {
                    "id": "21038",
                    "name": "Ishant Sharma",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
                    "stats": {
                        "matches": 13,
                        "runs": 10,
                        "wickets": 13
                    }
                },
                {
                    "id": "21041",
                    "name": "Shikar Dhawan",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
                    "stats": {
                        "matches": 16,
                        "runs": 521,
                        "wickets": 0
                    }
                },
                {
                    "id": "2103764",
                    "name": "Prithwi Shaw",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
                    "stats": {
                        "matches": 16,
                        "runs": 353,
                        "wickets": 10
                    }
                },
                {
                    "id": "2101113",
                    "name": "Axar Patel",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
                    "stats": {
                        "matches": 14,
                        "runs": 110,
                        "wickets": 10
                    }
                },
                {
                    "id": "2102972",
                    "name": "Rishabh Pant",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
                    "stats": {
                        "matches": 16,
                        "runs": 488,
                        "wickets": 0
                    }
                },
                {
                    "id": "21030",
                    "name": "Amit Mishra",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
                    "stats": {
                        "matches": 11,
                        "runs": 21,
                        "wickets": 11
                    }
                }
            ]
        },
        rcb: {
            "team": {
                "captainId": "2101563",
                "wicketKeeperId": "2101664"
            },
            "players": [{
                    "id": "2101563",
                    "name": "Shreyas Iyer",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
                    "stats": {
                        "matches": 16,
                        "runs": 463,
                        "wickets": 0
                    }
                },
                {
                    "id": "2101664",
                    "name": "Kagiso Rabada",
                    "nationality": "",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
                    "stats": {
                        "matches": 12,
                        "runs": 14,
                        "wickets": 25
                    }
                },
                {
                    "id": "21038",
                    "name": "Ishant Sharma",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
                    "stats": {
                        "matches": 13,
                        "runs": 10,
                        "wickets": 13
                    }
                },
                {
                    "id": "21041",
                    "name": "Shikar Dhawan",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
                    "stats": {
                        "matches": 16,
                        "runs": 521,
                        "wickets": 0
                    }
                },
                {
                    "id": "2103764",
                    "name": "Prithwi Shaw",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
                    "stats": {
                        "matches": 16,
                        "runs": 353,
                        "wickets": 10
                    }
                },
                {
                    "id": "2101113",
                    "name": "Axar Patel",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
                    "stats": {
                        "matches": 14,
                        "runs": 110,
                        "wickets": 10
                    }
                },
                {
                    "id": "2102972",
                    "name": "Rishabh Pant",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
                    "stats": {
                        "matches": 16,
                        "runs": 488,
                        "wickets": 0
                    }
                },
                {
                    "id": "21030",
                    "name": "Amit Mishra",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
                    "stats": {
                        "matches": 11,
                        "runs": 21,
                        "wickets": 11
                    }
                }
            ]
        },
        srh: {
            "team": {
                "captainId": "2101563",
                "wicketKeeperId": "2101664"
            },
            "players": [{
                    "id": "2101563",
                    "name": "Shreyas Iyer",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1563.png",
                    "stats": {
                        "matches": 16,
                        "runs": 463,
                        "wickets": 0
                    }
                },
                {
                    "id": "2101664",
                    "name": "Kagiso Rabada",
                    "nationality": "",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1664.png",
                    "stats": {
                        "matches": 12,
                        "runs": 14,
                        "wickets": 25
                    }
                },
                {
                    "id": "21038",
                    "name": "Ishant Sharma",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/38.png",
                    "stats": {
                        "matches": 13,
                        "runs": 10,
                        "wickets": 13
                    }
                },
                {
                    "id": "21041",
                    "name": "Shikar Dhawan",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/41.png",
                    "stats": {
                        "matches": 16,
                        "runs": 521,
                        "wickets": 0
                    }
                },
                {
                    "id": "2103764",
                    "name": "Prithwi Shaw",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/3764.png",
                    "stats": {
                        "matches": 16,
                        "runs": 353,
                        "wickets": 10
                    }
                },
                {
                    "id": "2101113",
                    "name": "Axar Patel",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/1113.png",
                    "stats": {
                        "matches": 14,
                        "runs": 110,
                        "wickets": 10
                    }
                },
                {
                    "id": "2102972",
                    "name": "Rishabh Pant",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/2972.png",
                    "stats": {
                        "matches": 16,
                        "runs": 488,
                        "wickets": 0
                    }
                },
                {
                    "id": "21030",
                    "name": "Amit Mishra",
                    "nationality": "Indian",
                    "image": "https://iplstatic.s3.amazonaws.com/players/210/30.png",
                    "stats": {
                        "matches": 11,
                        "runs": 21,
                        "wickets": 11
                    }
                }
            ]
        }
    }*/
allTeamData = []
let team = "";

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
            xhttp.open("GET", url);
            xhttp.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                    console.log(allTeamData[team])
                    scope.rootElem.innerHTML = ""
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

function setTeam(a) {
    team = a
    const teamUrl = {
        csk: 'https://ipl-t20.herokuapp.com/teams/chennai-super-kings',
        dc: 'https://ipl-t20.herokuapp.com/teams/delhi-capitals',
        kxip: 'https://ipl-t20.herokuapp.com/teams/kings-xi-punjab',
        kkr: 'https://ipl-t20.herokuapp.com/teams/kolkata-knight-riders',
        mi: 'https://ipl-t20.herokuapp.com/teams/mumbai-indians',
        rr: 'https://ipl-t20.herokuapp.com/teams/rajasthan-royals',
        rcb: 'https://ipl-t20.herokuapp.com/teams/royal-challengers-bangalore',
        srh: 'https://ipl-t20.herokuapp.com/teams/sunrisers-hyderabad'

    }
    if (team == "csk") {

        fetchTeamData(team, teamUrl[team]);

    } else if (team == "dc") {
        fetchTeamData(team, teamUrl[team]);

    } else if (team === "kxip") {
        fetchTeamData(team, teamUrl[team]);

    } else if (team === "kkr") {
        fetchTeamData(team, teamUrl[team]);

    } else if (team === "mi") {
        fetchTeamData(team, teamUrl[team]);

    } else if (team === "rr") {
        fetchTeamData(team, teamUrl[team]);

    } else if (team === "rcb") {
        fetchTeamData(team, teamUrl[team]);

    } else if (team === "srh") {
        fetchTeamData(team, teamUrl[team]);

    }
}

async function fetchTeamData(teamName, url) {
    return await fetch('https://cors-anywhere.herokuapp.com/' + url, {
        method: "GET",
    }).then((data) => { return data.json() }).then((res) => {
        allTeamData = res;
        console.log(allTeamData)
    }).catch((e) => {

    })
}
async function fetchallTeamData() {
    return await fetch("https://cors-anywhere.herokuapp.com/https://ipl-t20.herokuapp.com/teams", {
        method: "GET",
    }).then((data) => { return data.json() }).then((res) => {
        teamData = res;
        setAllTeamData()
    }).catch((e) => {
        console.log("error");
    })
}

function setAllTeamData() {
    for (let i = 0; i < teamData.length; i++) {
        teamHeader[i].innerText = teamData[i].teamName
        teamVenue[i].innerText = teamData[i].venue
        if (teamData[i].winningYears.length > 0) {
            teamWin[i].innerText = teamData[i].winningYears

        } else {
            teamWin[i].parentElement.style.visibility = 'hidden'
        }

    }
}

init();
fetchallTeamData();
setAllTeamData();