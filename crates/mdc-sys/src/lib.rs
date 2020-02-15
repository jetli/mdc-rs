//! Bindings to mdc components.

use wasm_bindgen::prelude::*;
use web_sys::{Element, Event};

#[wasm_bindgen(module = "@material/base/component/index")]
extern "C" {
    pub type MDCComponent;

    #[wasm_bindgen(method)]
    pub fn listen(this: &MDCComponent, evt_type: &str, handler: &Closure<dyn FnMut(Event)>);

    #[wasm_bindgen(method)]
    pub fn unlisten(this: &MDCComponent, evt_type: &str, handler: &Closure<dyn FnMut(Event)>);

    #[wasm_bindgen(method)]
    pub fn destroy(this: &MDCComponent);
}

#[wasm_bindgen(module = "@material/ripple/index")]
extern "C" {
    #[wasm_bindgen(extends = MDCComponent)]
    pub type MDCRipple;

    #[wasm_bindgen(constructor)]
    pub fn new(root: Element) -> MDCRipple;

    #[wasm_bindgen(method, getter)]
    pub fn unbounded(this: &MDCRipple) -> bool;

    #[wasm_bindgen(method, setter)]
    pub fn set_unbounded(this: &MDCRipple, unbounded: bool);

    #[wasm_bindgen(method)]
    pub fn activate(this: &MDCRipple);

    #[wasm_bindgen(method)]
    pub fn deactivate(this: &MDCRipple);

    #[wasm_bindgen(method)]
    pub fn layout(this: &MDCRipple);

    #[wasm_bindgen(method)]
    pub fn handle_focus(this: &MDCRipple);

    #[wasm_bindgen(method)]
    pub fn handle_blur(this: &MDCRipple);

}
