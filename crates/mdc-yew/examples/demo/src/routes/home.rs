use yew::prelude::*;
use mdc_yew::components::button::Button;

/// Home page
pub struct Home;

impl Component for Home {
    type Message = ();
    type Properties = ();

    fn create(_: Self::Properties, _: ComponentLink<Self>) -> Self {
        Home {}
    }

    fn update(&mut self, _: Self::Message) -> ShouldRender {
        true
    }

    fn view(&self) -> Html<Self> {
        html! {
            <div class="app">
                <header class="app-header">
                    <Button id="my_button" ripple=true text="This is a button"/>
                    <a
                        class="app-logo"
                        href="https://yew.rs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    </a>
                    <p>
                        { "Edit " } <code>{ "src/components/home.rs" }</code> { " and save to reload." }
                    </p>
                    <a
                        class="app-link"
                        href="https://yew.rs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        { "Learn Yew" }
                    </a>
                </header>
            </div>
        }
    }
}
