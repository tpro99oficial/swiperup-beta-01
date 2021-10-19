def on_a_pressed():
    pass
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_life_zero():
    info.set_score(0)
info.on_life_zero(on_life_zero)
