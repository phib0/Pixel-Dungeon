var player = {
    dir: 'R',
    x: 2,
    y: 0,
    level: 1,
    key: false,
    hp: 3
};


function setPosition() {
    $('#player').css("top", player.y * 50 + 10);
    $('#player').css("left", player.x * 50 + 10);
}

function testBlock(x, y) {
    if (!board[y] && !board[y][x]) return true;
    testInteraktion(x, y);
    return board[y][x].solid;
}

function testInteraktion(x, y) {
    if (board[y][x].interactive) {
        switch (board[y][x].blocktype) {
            case "key":
                player.key = true;
                board[y][x].blocktype = "air";
                board[y][x].interactive = false;
                replaceBlock("key");
                playerInteraction();
                break;
            case "closedDoorLower":
                if (player.key == true) {
                    player.key = false;
                    board[y][x].blocktype = "openedDoorLower";
                    board[y - 1][x].blocktype = "openedDoorUpper";
                    replaceBlock("closedDoor");
                    playerInteraction();
                }
                break;
            case "openedDoorLower":
            case "doorNextLevel":
                player.level++;
                $('#board').empty();
                for (let i = 0; i < monsterBewegung.length; i++) {
                    clearInterval(monsterBewegung[i]);
                }
                monsterlvl = [];
                monsterBewegung = [];
                board = generateStandardBoard();
                //loadBoard();
                loadRandomBoard();
                showBoard();
                player.x = 1;
                player.y = 0;
                setPosition();
                break;
            case "woodenChest":
                board[y][x].blocktype = "woodenChestOpen";
                replaceBlock("woodenChest");
                playerInteraction();
                player.hp++;
                herzenErstllen(0);
                displayHerz(true);
                break;
            case "goldChest":
                board[y][x].blocktype = "goldChestOpen";
                replaceBlock("goldChest");
                playerInteraction();
                player.hp++;
                herzenErstllen(1);
                displayHerz(true);
                break;
            case "diaChest":
                board[y][x].blocktype = "diaChestOpen";
                replaceBlock("diaChest");
                playerInteraction();
                player.hp++;
                herzenErstllen(2);
                displayHerz(true);
                break;
            case "doorLastLevelLower":
            case "doorLastLevelUpper":
                player.level--;
                $('#board').empty();
                board = generateStandardBoard();
                loadBoard();
                showBoard();
                player.x = 36;
                player.y = 16;
                setPosition();
                break;
            default:
                break;
        }
    }
}

function fallcheck() {
    while (testBlock(player.x, player.y + 2) == false) {
        player.y++;
        setPosition();
    }
    playerLandingAnimation();
}

function jumpUp() {
    if (testBlock(player.x, player.y - 1) == false) {
        player.y -= 1;
        setPosition();
    }
}

function jumpDown() {
    if (testBlock(player.x, player.y + 2) == false) {
        player.y += 1;
        setPosition();
    }
}

function jump() {
    canJump = false;
    for (let i = 0; i < 3; i++) {
        setTimeout(jumpUp, i * 100);
    }
    for (let i = 0; i < 3; i++) {
        setTimeout(jumpDown, 300 + i * 100);
    }
    setTimeout(function () { canJump = true; fallcheck() }, 600);
}

let canJump = true;

$(document).ready(e => {
    setPosition();
    herzenErstllen(3);
    fallcheck();
    $(document).on('keydown', e => {
        switch (e.code) {
            case "Space":
            case "ArrowUp":
            case "KeyW":
                if (canJump)
                    jump();
                playerJumpAnimation();
                break;
            case "ArrowLeft":
            case "KeyA":
                if (testBlock(player.x - 1, player.y + 1) == false && testBlock(player.x - 1, player.y) == false) {
                    player.x--;
                    setPosition();
                }
                if (canJump)
                    fallcheck();
                player.dir = 'L';
                break;

            case "ArrowRight":
            case "KeyD":
                if (testBlock(player.x + 1, player.y + 1) == false && testBlock(player.x + 1, player.y) == false) {
                    player.x++;
                    setPosition();
                }
                if (canJump)
                    fallcheck();
                player.dir = 'R';
                break;
            default:
                break;
        }
        for (let i = 0; i < monsterlvl.length; i++)
            checkMonsterCollision(i)
    });
});

function setMonsterPosition(monsterNum) {
    monster = monsterlvl[monsterNum];
    $('#monster' + monsterNum).css("top", monster.row * 50 + 10);
    $('#monster' + monsterNum).css("left", monster.column * 50 + 10);
}

function moveMonster(monsterNum) {
    monster = monsterlvl[monsterNum];

    if (monster.row == 0) {
        monster.dir = "unten";
    } else if (monster.row == 19) {
        monster.dir = "oben";
    }

    if (monster.dir == "unten") {
        monster.row++;
    }
    if (monster.dir == "oben") {
        monster.row--;
    }
    setMonsterPosition(monsterNum);
    checkMonsterCollision(monsterNum);
}

function checkMonsterCollision(monsterNum) {
    monster = monsterlvl[monsterNum];

    if (monster.column == player.x) {
        if (monster.row == player.y || monster.row == player.y + 1) {
            player.hp--;
            herzEntfernen(1);
            $("#player").addClass("blink");
            setTimeout(function () { $("#player").removeClass("blink") }, 450);
        }
    }

    if (player.hp == 0) {
        location.replace('gameover.html');
    }
}

var aktuelleHerzen;
var counterHerzen;

function herzenErstllen(anzahlHerzen) {
    anzahl = anzahlHerzen;
    for (counterHerzen = 0; counterHerzen < anzahl; counterHerzen++) {
        displayHerz(true);
    }
    aktuelleHerzen = anzahlHerzen;
    return aktuelleHerzen;
}

function herzEntfernen(anzahl) {
    aktuelleHerzen = aktuelleHerzen - anzahl;
    displayHerz(false);
}

function displayHerz(hinzu) {
    if (hinzu == true) {
        $('#herzbox').append('<div class="herz" id="herz' + counterHerzen + '"></div>');
    } else if (hinzu == false) {
        $(('#herz' + aktuelleHerzen)).remove();
    }
}