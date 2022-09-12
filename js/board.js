//gamemode selector
let gamemode
$(document).ready(function () {
    $("#campainButton").click(function () {
        gamemode = "campain"
        sessionStorage.setItem("gamemode", gamemode);
    })
    $("#endlessButton").click(function () {
        gamemode = "endless"
        sessionStorage.setItem("gamemode", gamemode);
    })

    gamemodeCheck();
    showBoard();
    console.log(board);
})


var board = generateStandardBoard();
var monsterlvl = [];

let level1 = [
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 0, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 10, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 10, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 13, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 15, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 21, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 21, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 22, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 28, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 29, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 30, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 31, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 32, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 33, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 34, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 35, },
    { blocktype: 'woodenChest', solid: false, interactive: true, row: 13, column: 15, },
    { blocktype: 'key', solid: false, interactive: true, row: 16, column: 20, },
    { blocktype: 'closedDoorLower', solid: true, interactive: true, row: 17, column: 37, },
    { blocktype: 'closedDoorUpper', solid: true, interactive: true, row: 16, column: 37, },
];

let level2 = [
    { blocktype: 'doorLastLevelUpper', solid: false, interactive: true, row: 16, column: 0, },
    { blocktype: 'doorLastLevelLower', solid: false, interactive: true, row: 17, column: 0, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 3, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 5, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 6, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 5, },
    { blocktype: 'key', solid: false, interactive: true, row: 10, column: 5, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 7, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 12, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 13, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 13, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 18, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 19, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 19, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 19, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 21, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 24, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 25, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 25, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 26, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 26, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 27, },
    { blocktype: 'stone', solid: true, interactive: false, row: 12, column: 27, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 29, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 29, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 30, },
    { blocktype: 'stone', solid: true, interactive: false, row: 12, column: 31, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 32, },
    { blocktype: 'stone', solid: true, interactive: false, row: 16, column: 33, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 33, },
    { blocktype: 'stone', solid: true, interactive: false, row: 10, column: 34, },
    { blocktype: 'stone', solid: true, interactive: false, row: 10, column: 35, },
    { blocktype: 'stone', solid: true, interactive: false, row: 10, column: 36, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 34, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 35, },
    { blocktype: 'door', solid: false, interactive: true, row: 9, column: 37, },
    { blocktype: 'door', solid: false, interactive: true, row: 8, column: 37, },
    { blocktype: 'goldChest', solid: false, interactive: true, row: 9, column: 35, },
    { blocktype: 'closedDoorUpper', solid: true, interactive: true, row: 16, column: 37, },
    { blocktype: 'closedDoorLower', solid: true, interactive: true, row: 17, column: 37, },
];

let level3 = [
    { blocktype: 'doorLastLevelUpper', solid: false, interactive: true, row: 16, column: 0, },
    { blocktype: 'doorLastLevelLower', solid: false, interactive: true, row: 17, column: 0, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 2, },
    { blocktype: 'stone', solid: true, interactive: false, row: 17, column: 4, },
    { blocktype: 'stone', solid: true, interactive: false, row: 15, column: 6, },
    { blocktype: 'stone', solid: true, interactive: false, row: 14, column: 7, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 8, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 10, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 12, column: 12, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 13, },
    { blocktype: 'stone', solid: true, interactive: false, row: 13, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 12, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 12, column: 15, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 15, },
    { blocktype: 'stone', solid: true, interactive: false, row: 10, column: 15, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 16, },
    { blocktype: 'stone', solid: true, interactive: false, row: 11, column: 17, },
    { blocktype: 'stone', solid: true, interactive: false, row: 4, column: 8, },
    { blocktype: 'key', solid: false, interactive: true, row: 3, column: 8, },
    { blocktype: 'stone', solid: true, interactive: false, row: 4, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 5, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 6, column: 9, },
    { blocktype: 'stone', solid: true, interactive: false, row: 6, column: 10, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 11, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 12, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 13, },
    { blocktype: 'stone', solid: true, interactive: false, row: 6, column: 14, },
    { blocktype: 'stone', solid: true, interactive: false, row: 5, column: 15, },
    { blocktype: 'stone', solid: true, interactive: false, row: 4, column: 16, },
    { blocktype: 'stone', solid: true, interactive: false, row: 3, column: 17, },
    { blocktype: 'stone', solid: true, interactive: false, row: 10, column: 18, },
    { blocktype: 'stone', solid: true, interactive: false, row: 9, column: 19, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 21, },
    { blocktype: 'stone', solid: true, interactive: false, row: 5, column: 22, },
    { blocktype: 'stone', solid: true, interactive: false, row: 3, column: 24, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 23, },
    { blocktype: 'stone', solid: true, interactive: false, row: 6, column: 22, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 24, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 25, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 26, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 27, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 27, },
    { blocktype: 'stone', solid: true, interactive: false, row: 6, column: 27, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 28, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 29, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 30, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 31, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 32, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 33, },
    { blocktype: 'stone', solid: true, interactive: false, row: 7, column: 34, },
    { blocktype: 'stone', solid: true, interactive: false, row: 8, column: 35, },
    { blocktype: 'stone', solid: true, interactive: false, row: 9, column: 36, },
    { blocktype: 'door', solid: false, interactive: true, row: 8, column: 37, },
    { blocktype: 'door', solid: false, interactive: true, row: 7, column: 37, },
    { blocktype: 'stone', solid: true, interactive: false, row: 3, column: 19, },
    { blocktype: 'stone', solid: true, interactive: false, row: 3, column: 20, },
    { blocktype: 'stone', solid: true, interactive: false, row: 3, column: 18, },
    { blocktype: 'closedDoorLower', solid: true, interactive: true, row: 17, column: 37, },
    { blocktype: 'closedDoorUpper', solid: true, interactive: true, row: 16, column: 37, },
    // hier muss ne chest hin  { blocktype: '', solid: false, interactive: false, row: 6, column: 23, },
]

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

let monster1 = [
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
]

let monster2 = [
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },

]

let monster3 = [
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'unten', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
    { dir: 'oben', monstertype: 'geist', row: getRandomInt(1, 16), column: getRandomInt(5, 33) },
]



var monsterBewegung = []

function showBoard() {

    for (let e = 0; e < board.length; e++) {

        for (let d = 0; d < board[e].length; d++) {
            let blocktype = board[e][d].blocktype;
            $('#board').append('<div class="' + blocktype + '"> ' + d + " " + e + '</div>');
        }
    }

      for (let i = 0; i < monsterlvl.length; i++) {
          let monstertype = monsterlvl[i];
          $('#board').append('<div class="monster" id="monster' + i + '" class="' + monstertype + '"> </div>');
          setMonsterPosition(i);
          monsterBewegung.push(setInterval(function () { moveMonster(i) }, 500));
      }
}

function generateStandardBoard() {
    let board = [];
    for (let i = 0; i < 20; i++) {

        board[i] = [];

        for (let j = 0; j < 38; j++) {

            if (i > 17) {
                board[i][j] = generateBlock('stone', true, false, i, j);
            } else {
                board[i][j] = generateBlock('air', false, false, i, j);
            }
        }
    }
    return board;
}

function generateBlock(blocktype, solid, interactive, column, row) {
    /*Befüllt die "unter Arrays" mit Objekten*/
    return {
        blocktype: blocktype,
        solid: solid,
        interactive: interactive,
        column: column,
        row: row
    }
}

function generateMonster(dir, monstertype, row, column) {
    return {
        dir: dir,
        monstertype: monstertype,
        column: column,
        row: row
    }
}

function loadBoard() {
    let newBoard;
    let allMonster;
    switch (player.level) {
        case 1:
            newBoard = level1;
            allMonster = monster1;
            $("#board").removeClass("background2");
            $("#board").addClass("background1");
            break;
        case 2:
            newBoard = level2;
            allMonster = monster2;
            $("#board").removeClass("background1");
            $("#board").addClass("background2");
            break;
        case 3:
            newBoard = level3;
            allMonster = monster3;
            $("#board").removeClass("background1");
            $("#board").addClass("background2");
            break;
        default:
            location.replace('victoryscreen.html');
            allMonster = monster1;
            break;
    }

    for (let d = 0; d < newBoard.length; d++) {
        let blocktype = newBoard[d].blocktype;

        board[newBoard[d].row][newBoard[d].column] = generateBlock(blocktype, newBoard[d].solid, newBoard[d].interactive, newBoard[d].row, newBoard[d].column);
    }

    for (let i = 0; i < allMonster.length; i++) {
        monsterlvl[i] = generateMonster(allMonster[i].dir, allMonster[i].monstertype, allMonster[i].row, allMonster[i].column);
    }
}

function replaceBlock(blockClass) {
    switch (blockClass) {
        case "key":
            $('.key').addClass('air');
            $('.key').removeClass('key');
            break;
        case "closedDoor":
            $('.closedDoorLower').addClass('openedDoorLower');
            $('.closedDoorLower').removeClass('closedDoorLower');
            $('.closedDoorUpper').addClass('openedDoorUpper');
            $('.closedDoorUpper').removeClass('closedDoorUpper');
            break;
        case "woodenChest":
            $('.woodenChest').addClass('woodenChestOpen');
            $('.woodenChest').removeClass('woodenChest');
            break;
        case "goldChest":
            $('.goldChest').addClass('goldChestOpen');
            $('.goldChest').removeClass('goldChest');
            break;
        case "diaChest":
            $('.diaChest').addClass('diaChestOpen');
            $('.diaChest').removeClass('diaChest');
            break;
        default:
            break;
    }
}

function rndInt(n, c) {
    return Math.floor(Math.random() * n + c);
}

function boardPart(n) {
    if (n < 9) {
        return 0;
    }
    else if (n < 21) {
        return 1;
    }
    else if (n < 33) {
        return -1;
    }
    else {
        return -3;
    }
}

function rndBackground() {
    switch (rndInt(3, 0)) {
        case 0:
            $("#board").removeClass();
            $("#board").addClass("background1");
            break;
        case 1:
            $("#board").removeClass();
            $("#board").addClass("background2");
            break;
        case 2:
            $("#board").removeClass();
            $("#board").addClass("background3");
            break;
        default:
            $("#board").removeClass();
            $("#board").addClass("background1");
            break;
    }
}

function loadRandomBoard() {
    rndBackground();
    let doorPlaced = false
    //Blöcke werden plaziert
    for (let e = 0; e < board.length - 2; e++) {
        for (let d = 0; d < board[e].length; d++) {
            if (d < board[e].length - 2) {
                if (rndInt(e, 0) < e - 8 + boardPart(d)) {
                    if (e < 17) {
                        board[e][d] = { blocktype: 'dirt', solid: true, interactive: false, row: e, column: d, };
                        if (e > 11) {
                            for (let f = e + 1; f < board.length - 2; f++) {
                                if (board[f][d].solid != true) {
                                    board[f][d] = { blocktype: 'dirt', solid: true, interactive: false, row: f, column: d, };
                                }
                                else {
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        board[e][d] = { blocktype: 'stone', solid: true, interactive: false, row: e, column: d, };
                    }
                }
            }
            else {
                board[e][d] = { blocktype: 'air', solid: false, interactive: false, row: e, column: d, };
            }
        }
    }
    //Blöcke werden auf erreichbarkeit von links geprüft
    for (let e = 0; e < board.length - 2; e++) {
        for (let d = board[e].length - 1; d > 0; d--) {
            if (board[e][d].solid == true) {
                if (board[e][d - 1].solid != true && board[e + 1][d - 1].solid != true && board[e + 2][d - 1].solid != true) {
                    if (d != 1) {
                        if (board[e][d - 2].solid != true && board[e + 1][d - 2].solid != true && board[e + 2][d - 2].solid != true) {
                            board[e + 2][d - 2] = { blocktype: 'dirt', solid: true, interactive: false, row: e + 2, column: d - 2, };
                            for (let f = e + 3; f < board.length - 2; f++) {
                                if (board[f][d - 2].solid != true) {
                                    board[f][d - 2] = { blocktype: 'dirt', solid: true, interactive: false, row: f, column: d - 2, };
                                }
                                else {
                                    break;
                                }
                            }
                        }
                        else {
                            board[e + 2][d - 1] = { blocktype: 'dirt', solid: true, interactive: false, row: e + 2, column: d - 1, };
                            for (let f = e + 3; f < board.length - 2; f++) {
                                if (board[f][d - 1].solid != true) {
                                    board[f][d - 1] = { blocktype: 'dirt', solid: true, interactive: false, row: f, column: d - 1, };
                                }
                                else {
                                    break;
                                }
                            }
                        }
                    }
                    else {
                        board[e + 2][d - 1] = { blocktype: 'dirt', solid: true, interactive: false, row: e + 2, column: d - 1, };
                        for (let f = e + 3; f < board.length - 2; f++) {
                            if (board[f][d - 1].solid != true) {
                                board[f][d - 1] = { blocktype: 'dirt', solid: true, interactive: false, row: f, column: d - 1, };
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }
        }

    }
    //Blöcke werden auf erreichbarkeit von rechts geprüft
    for (let e = 0; e < board.length - 2; e++) {
        for (let d = 0; d < board[e].length - 2; d++) {
            if (board[e][d].solid == true) {
                if (board[e][d + 1].solid != true && board[e + 1][d + 1].solid != true && board[e + 2][d + 1].solid != true && board[e + 3][d + 1].solid != true) {
                    if (board[e][d + 2].solid != true && board[e + 1][d + 2].solid != true && board[e + 2][d + 2].solid != true && board[e + 3][d + 2].solid != true) {
                        board[e + 3][d + 1] = { blocktype: 'dirt', solid: true, interactive: false, row: e + 3, column: d + 2, };
                        for (let f = e + 4; f < board.length - 2; f++) {
                            if (board[f][d + 1].solid != true) {
                                board[f][d + 1] = { blocktype: 'dirt', solid: true, interactive: false, row: f, column: d - 1, };
                            }
                            else {
                                break;
                            }
                        }
                    }
                }
            }

        }
    }
    //Tür wird auf letzter Blockhöhe generiert
    for (let e = 0; e < board.length - 2; e++) {
        if (board[e + 2][35].solid == true && board[e + 1][35].solid != true) {
            board[e][37] = { blocktype: 'closedDoorUpper', solid: true, interactive: true, row: e, column: 37, };
            board[e + 1][37] = { blocktype: 'closedDoorLower', solid: true, interactive: true, row: e + 1, column: 37, };
            doorPlaced = true
        }
        if (doorPlaced == true) {
            for (let d = 36; d < board[e].length; d++) {
                if (e < 15) {
                    board[e + 2][d] = { blocktype: 'dirt', solid: true, interactive: false, row: e + 2, column: d, };
                }
                else {
                    board[e + 2][d] = { blocktype: 'stone', solid: true, interactive: false, row: e + 2, column: d, };
                }
            }
        }
    }


    //Blockakzente werden plaziert
    let foxPlaced = false
    for (let e = 0; e < board.length; e++) {
        for (let d = 0; d < board[e].length; d++) {
            if (board[e][d].blocktype == "dirt") {
                if (board[e - 1][d].solid != true) {
                    board[e][d].blocktype = 'dirtWithGrass';
                }
                else {
                    switch (rndInt(50, 0)) {
                        case 0:
                            if (foxPlaced == false) {
                                board[e][d].blocktype = 'fox';
                                foxPlaced = true
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
            else if (board[e][d].blocktype == "stone") {
                switch (rndInt(100, 0)) {
                    case 0:
                    case 1:
                        board[e][d].blocktype = "stone2";
                        break;
                    case 2:
                        board[e][d].blocktype = "holeInWall";
                        break;
                    default:
                        break;
                }
                if (board[e - 1][d].blocktype == "dirt") {
                    switch (rndInt(10, 0)) {
                        case 0:
                            board[e][d].blocktype = "mossStone";
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    let g = rndInt(20, 9)
    for (let e = 0; e < board.length; e++) {
        if (board[e][g].blocktype == "air" && board[e + 1][g].solid == true) {
            board[e][g] = { blocktype: 'key', solid: false, interactive: true, row: e, column: g, };
            break;
        }
    }
    if (rndInt(5, 0) == 1) {
        let h = rndInt(20, 9)
        if (h == g) {
            h++
        }
        for (let e = 0; e < board.length; e++) {
            if (board[e][h].blocktype == "air" && board[e + 1][h].solid == true) {
                board[e][h] = { blocktype: '', solid: false, interactive: true, row: e, column: h, };
                switch (rndInt(10, 0)) {
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        board[e][h].blocktype = "woodenChest";
                        break;
                    case 5:
                    case 6:
                    case 7:
                        board[e][h].blocktype = "goldChest";
                        break;
                    case 8:
                    case 9:
                        board[e][h].blocktype = "diaChest";
                        break;
                    default:
                        board[e][h].blocktype = "woodenChest";
                        break;
                }
                break;
            }
        }

    }
}

function gamemodeCheck(gamemode) {
    gamemode = sessionStorage.getItem("gamemode");
    switch (gamemode) {
        case "campain":
            loadBoard();
            break;
        case "endless":
            loadRandomBoard();
            break;
    }
}