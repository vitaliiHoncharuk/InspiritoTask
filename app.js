const express = require("express");
const app = express();
const path = require('path');
const fs = require("fs");

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/json', (req, res) =>{
   res.json(obj);
});

//TASK 1. Give the JSON representation of the following tree structure.

let obj = {
    id: 1,
    label: 'A',
    ChildNodes: [
        {
            id: 2,
            label: 'B',
            ChildNodes: [
                {
                    id: 5,
                    label: 'E',
                    ChildNodes:[]
                }, {
                    id: 6,
                    label: 'F',
                    ChildNodes:[]
                }, {
                    id: 7,
                    label: 'G',
                    ChildNodes:[]
                }
            ]
        },
        {
            id: 3,
            label: 'C',
            ChildNodes: []
        },
        {
            id: 4,
            label: 'D',
            ChildNodes: [
                {
                    id: 8,
                    label: 'F',
                    ChildNodes: []
                }, {
                    id: 9,
                    label: 'I',
                    ChildNodes: []
                }
            ]
        }
    ]
};
const toJsonFile = JSON.stringify(obj);
fs.writeFile(`./obj.json`,toJsonFile, err => console.log(err));


app.listen(3000,_ =>{
    console.log("listening port 3000");
});
