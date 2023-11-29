const allBabies = [
    {
        "id": 1,
        "name": "Baby Yoda",
        "health": 100,
        "imageURL": "../public/images/baby-yoda-crib.jpeg",
        "action1URL": "../public/images/baby-yoda-reaching.png",
        "action1": {
            "class": 1,
            "name": "Force Push"
            },
        "action2URL": "../public/images/baby-yoda-throwup.png",
        "action2": {
            "class": 2,
            "name": "Frog Throwup"
        },
        "action3URL": "../public/images/baby-yoda-cute.png",
        "action3": {
            "class": 3,
            "name": "Look Cute"
        }
    },
    {
        "id": 2,
        "name": "Baby Minnie Mouse",
        "health": 100,
        "imageURL": "../public/images/baby-minnie.png",
        "action1URL": "../public/images/baby-minnie-flowers.png",
        "action1": {
            "class": 1,
            "name": "Flower Attack"
            },
        "action2URL": "../public/images/baby-minnie-teddy-bear.png",
        "action2": {
            "class": 2,
            "name": "Sic Teddy Bear"
        },
        "action3URL": "../public/images/baby-minnie-mouse.png",
        "action3": {
            "class": 3,
            "name": "Devious Smile"
        }
    },
    {
        "id": 3,
        "name": "Baby Bowser",
        "health": 150,
        "imageURL": "../public/images/baby-bowser-pxl.png",
        "action1URL": "../public/images/baby-bowser-arms-out.png",
        "action1": {
            "class": 1,
            "name": "Stomp Feet"
            },
        "action2URL": "../public/images/baby-bowser-pout.png",
        "action2": {
            "class": 2,
            "name": "Anger Pout"
        },
        "action3URL": "../public/images/baby-bowser-arms-up.png",
        "action3": {
            "class": 3,
            "name": "Intimidate"
        }
    },
        {
        "id": 4,
        "name": "Baby Groot",
        "health": 140,
        "imageURL": "../public/images/baby-groot-wave.jpeg",
        "action1URL": "../public/images/baby-groot.png",
        "action1": {
            "class": 1,
            "name": "I am Groot"
            },
        "action2URL": "../public/images/baby-groot-sit.png",
        "action2": {
            "class": 2,
            "name": "I am Groot"
        },
        "action3URL": "../public/images/baby-groot-running.png",
        "action3": {
            "class": 3,
            "name": "I am Groot"
        }
    },
        {
        "id": 5,
        "name": "Baby Unicorn",
        "health": 100,
        "imageURL": "../public/images/baby-unicorn.png",
        "action1URL": "../public/images/baby-unicorn-rainbow.png",
        "action1": {
            "class": 1,
            "name": "Blinded by Rainbows"
            },
        "action2URL": "../public/images/baby-unicorn-stars.jpeg",
        "action2": {
            "class": 2,
            "name": "Star Fire"
        },
        "action3URL": "../public/images/baby-unicorn-smile.png",
        "action3": {
            "class": 3,
            "name": "Smug Smile"
        }
    },
    {
        "id": 6,
        "name": "Baby Dragon",
        "health": 140,
        "imageURL": "../public/images/baby-dragon-hatch.png",
        "action1URL": "../public/images/baby-dragon-fire.png",
        "action1": {
            "class": 1,
            "name": "Fun with Fire Breath"
            },
        "action2URL": "../public/images/baby-dragon-clash.png",
        "action2": {
            "class": 2,
            "name": "Fly Around and Lay Waste"
        },
        "action3URL": "../public/images/baby-dragon-cute.png",
        "action3": {
            "class": 3,
            "name": "Try to Train This Face"
        }
    },
    {
        "id": 7,
        "name": "Baby Jesus",
        "health": 100,
        "imageURL": "../public/images/baby-jesus-manger.png",
        "action1URL": "../public/images/baby-jesus-no-cry.png",
        "action1": {
            "class": 1,
            "name": "No Crying He Made"
            },
        "action2URL": "../public/images/baby-jesus-coerce-gifts.png",
        "action2": {
            "class": 2,
            "name": "Coerce Gifts from Wise Men"
        },
        "action3URL": "../public/images/baby-jesus-universal-love.png",
        "action3": {
            "class": 3,
            "name": "Infinite Love"
        }
    },
    {
        "id": 8,
        "name": "Baby Boo",
        "health": 100,
        "imageURL": "../public/images/baby-boo.png",
        "action1URL": "../public/images/baby-boo-sic-mike.png",
        "action1": {
            "class": 1,
            "name": "Sic Mike Wyzowski"
            },
        "action2URL": "../public/images/baby-boo-monsters.png",
        "action2": {
            "class": 2,
            "name": "Monsters Assist"
        },
        "action3URL": "../public/images/baby-boo-costume.png",
        "action3": {
            "class": 3,
            "name": "Monster Costume Fashion Show"
        }
    },
    {
        "id": 9,
        "name": "Baby Rory",
        "health": 100,
        "imageURL": "../public/images/baby-rory.png",
        "action1URL": "../public/images/baby-rory-sleep.png",
        "action1": {
            "class": 1,
            "name": "Intimidating Sleep"
            },
        "action2URL": "../public/images/baby-rory-fuss.png",
        "action2": {
            "class": 2,
            "name": "Extreme Fussiness"
        },
        "action3URL": "../public/images/baby-rory-irish.png",
        "action3": {
            "class": 3,
            "name": "Turn Irish"
        }
    }
]

let newID = 10

let handlerFunctions = {
    getBabies: (req, res) => {
        res.status(200).send(allBabies)
    },

    addBaby: (req, res) => {
        const {name, imgUrl, action1, action2, action3} = req.body 

        let newBaby = {
            id: newID,
            name: name,
            imageURL: imgUrl, 
            action1URL: "",
            action1: {
                class: 1,
                name: action1
            },
            action2URL: "",
            action2: {
                class: 2,
                name: action2
            },
            action3URL: "",
            action3: {
                class: 3,
                name: action3
            }
        }
        allBabies.push(newBaby)
        newID += 1

        res.json(newBaby)
    }
}

export default handlerFunctions