use mdc_sys::{MDCRipple, get_element_by_id};
use yew::prelude::*;

pub struct Button {
    id: String,
    ripple: Option<MDCRipple>,
    props: Props,
}

#[derive(Properties, Debug)]
pub struct Props {
    pub children: Children<Button>,
    #[props(required)]
    pub id: String,
    #[props(required)]
    pub text: String,
    pub ripple: bool,
    pub onclick: Option<Callback<()>>,
}

pub enum Msg {
    Clicked,
}

impl Component for Button {
    type Properties = Props;
    type Message = Msg;

    fn create(props: Self::Properties, _: ComponentLink<Self>) -> Self {
        Button {
            id: props.id.to_owned(),
            ripple: None,
            props,
        }
    }

    fn mounted(&mut self) -> ShouldRender {
        if self.props.ripple {
            self.ripple = get_element_by_id(&self.id).map(MDCRipple::new);
        }
        false
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::Clicked => {
                if let Some(callback) = &self.props.onclick {
                    callback.emit(());
                }
            }
        }
        false
    }

    fn view(&self) -> Html<Self> {
        let ripple = if self.props.ripple {
            html! {
                <div class="mdc-button__ripple"></div>
            }
        } else {
            html! {}
        };

        let inner = html! { <>
            { self.props.children.render() }
            <span class="mdc-button__label">{ &self.props.text }</span>
        </> };

        html! {
            <button class="mdc-button mdc-button--raised"
                    id=self.id
                    onclick=|_| Msg::Clicked>
                { ripple }
                { inner }
            </button>
        }
    }

    fn destroy(&mut self) {
        if let Some(ripple) = &self.ripple {
            ripple.destroy();
        }
    }
}