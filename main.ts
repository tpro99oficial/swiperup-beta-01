controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.loadMap(tiles.createMap(tilemap`level 1 secret escape dungeon`))
})
info.onLifeZero(function () {
    game.over(false, effects.dissolve)
    info.setScore(0)
})
tiles.loadMap(tiles.createMap(tilemap`level 1 exiting the base`))
