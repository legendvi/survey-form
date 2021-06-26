var filmData = [
    {
        filmName : "Enthiran 2.0",
        yearOfRelease : 2018,
        duration : {
            hour : 2,
            min : 28
        },
        genre : ["Action","Sci-Fi"],
        dateofrelease : {
            date : 29,
            month : 11,
            year : 2018
        },
        userRatting : [
            {
                username : "person 1",
                ratting : 3
            },
            {
                username : "person 2",
                ratting : 5
            }
        ],
        thumbnail : "http://storage.in/filmname.jpg",
        trailer : "http://storage.in/filmname.jpg",
        cast : [
            {
                charName : ["Dr.Vassekaran","Chitti"],
                actorName : "Rajikanth",
                imgUrl : "http://store/actor.jpg"
            },
            {
                charName : ["Pakshi Rajan"],
                actorName : "Rajikanth",
                imgUrl : "http://store/actor.jpg"
            }
        ]
    },
    {
        filmName : "Enthiran 2.0",
        yearOfRelease : 2018,
        duration : {
            hour : 2,
            min : 28
        },
        genre : ["Action","Sci-Fi"],
        dateofrelease : {
            date : 29,
            month : 11,
            year : 2018
        },
        userRatting : [
            {
                username : "person 1",
                ratting : 3
            },
            {
                username : "person 2",
                ratting : 5
            },
            {
                username : "person 2",
                ratting : 2
            }
        ],
        thumbnail : "http://storage.in/filmname.jpg",
        trailer : "http://storage.in/filmname.jpg",
        cast : [
            {
                charName : ["Dr.Vassekaran","Chitti"],
                actorName : "Rajikanth",
                imgUrl : "http://store/actor.jpg"
            },
            {
                charName : ["Pakshi Rajan"],
                actorName : "Rajikanth",
                imgUrl : "http://store/actor.jpg"
            }
        ]
    }
]

var ul = document.createElement("ul");

filmData.forEach(function (film) {
    var li = document.createElement("li");

    var rattingLength = film.userRatting.length;

    var totalRatting = film.userRatting.reduce(function(starting,obj){
        return starting + obj.ratting
    },0)

    var finalRatting = Math.trunc(totalRatting / rattingLength);
    

    li.innerText = film.filmName + "-" + film.yearOfRelease + "(" + finalRatting + ")";
    
    
    ul.appendChild(li)
});

document.body.appendChild(ul)

// Ice Cream - 50
// Ice Cream - 30
// Ice Cream - 20
// Ice Cream - 60
// Ice Cream - 100

var price = [20,50,60];

var priceTotAL = price.reduce(function(prv,cur){
    console.log(prv)
    return prv + cur
},0)