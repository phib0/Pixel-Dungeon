$(document).ready(function () {
    $(document).on("keydown", e => {
        switch (e.code) { 
            case"ArrowLeft":
            case "KeyA":
                $("#player").removeClass("playerStandingRight");
                $("#player").removeClass("playerStandingLeft");
                $("#player").removeClass("playerWalkingRight");
                $("#player").addClass("playerWalkingLeft");
                break;
            case"ArrowRight":
            case "KeyD":
                $("#player").removeClass("playerWalkingLeft");
                $("#player").removeClass("playerStandingRight");
                $("#player").removeClass("playerStandingLeft");
                $("#player").addClass("playerWalkingRight");
                break;
            default:
                break;
        }
    })

    $(document).on("keyup", e => {
        switch (e.code) {
            case"ArrowLeft":
            case "KeyA":
                $("#player").removeClass("playerWalkingRight");
                $("#player").removeClass("playerWalkingLeft");
                $("#player").removeClass("playerStandingRight");
                $("#player").addClass("playerStandingLeft");
                break;
            case"ArrowRight":
            case "KeyD":
                $("#player").removeClass("playerWalkingRight");
                $("#player").removeClass("playerWalkingLeft");
                $("#player").removeClass("playerStandingLeft");
                $("#player").addClass("playerStandingRight");
                break;

            default:
                break;
        }

    })
})

function playerJumpAnimation() {
    switch (player.dir) {
        case "L":
            $("#player").removeClass("playerWalkingRight");
            $("#player").removeClass("playerWalkingLeft");
            $("#player").removeClass("playerStandingRight");
            $("#player").removeClass("playerStandingLeft");
            $("#player").addClass("playerJumpingLeft");
            break;
        case "R":
            $("#player").removeClass("playerWalkingRight");
            $("#player").removeClass("playerWalkingLeft");
            $("#player").removeClass("playerStandingRight");
            $("#player").removeClass("playerStandingLeft");
            $("#player").addClass("playerJumpingRight");
            break;
    }
}

function playerLandingAnimation() {
    switch (player.dir) {
        case "L":
            $("#player").removeClass("playerJumpingLeft");
            $("#player").removeClass("playerJumpingRight");
            $("#player").removeClass("playerWalkingRight");
            $("#player").removeClass("playerWalkingLeft");
            $("#player").removeClass("playerStandingRight");
            $("#player").addClass("playerStandingLeft");
            break;

        case "R":
            $("#player").removeClass("playerJumpingLeft");
            $("#player").removeClass("playerJumpingRight");
            $("#player").removeClass("playerWalkingRight");
            $("#player").removeClass("playerWalkingLeft");
            $("#player").addClass("playerStandingRight");
            $("#player").removeClass("playerStandingLeft");
            break;
    }

}

function playerInteraction() {
    switch (player.dir) {
        case "L":
            $("#player").removeClass("playerJumpingLeft");
            $("#player").removeClass("playerJumpingRight");
            $("#player").removeClass("playerWalkingRight");
            $("#player").removeClass("playerWalkingLeft");
            $("#player").removeClass("playerStandingRight");
            $("#player").removeClass("playerStandingLeft");
            $("#player").addClass("playerInteractionLeft");
            break;

        case "R":
            $("#player").removeClass("playerJumpingLeft");
            $("#player").removeClass("playerJumpingRight");
            $("#player").removeClass("playerWalkingRight");
            $("#player").removeClass("playerWalkingLeft");
            $("#player").removeClass("playerStandingRight");
            $("#player").removeClass("playerStandingLeft");
            $("#player").addClass("playerInteractionRight");
            break;
    }
    setTimeout(playerLandingAnimation, 1000);
}