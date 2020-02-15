use mdc_sys::MDCRipple;
use web_sys::Element;
use yew::prelude::*;

pub struct Button {
    ripple: Option<MDCRipple>,
    props: Props,
    link: ComponentLink<Self>,
    node_ref: NodeRef,
}

#[derive(Properties, Debug, Clone)]
pub struct Props {
    pub children: Children,
    pub onclick: Option<Callback<MouseEvent>>,
}

pub enum Msg {
    Clicked(MouseEvent),
}

impl Component for Button {
    type Properties = Props;
    type Message = Msg;

    fn create(props: Self::Properties, link: ComponentLink<Self>) -> Self {
        Button {
            ripple: None,
            props,
            link,
            node_ref: NodeRef::default(),
        }
    }

    fn mounted(&mut self) -> ShouldRender {
        if let Some(root) = self.node_ref.try_into::<Element>() {
            self.ripple = Some(MDCRipple::new(root));
        }
        false
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        match msg {
            Msg::Clicked(ev) => {
                if let Some(callback) = &self.props.onclick {
                    callback.emit(ev);
                }
            }
        }
        false
    }

    fn view(&self) -> Html {
        let onclick = self.link.callback(Msg::Clicked);

        html! {
            <button class="mdc-button mdc-button--raised"
                ref=self.node_ref.clone()
                onclick=onclick >
                <div class="mdc-button__ripple"></div>
                <span class="mdc-button__label">{ self.props.children.render() }</span>
            </button>
        }
    }

    fn destroy(&mut self) {
        if let Some(ripple) = &self.ripple {
            ripple.destroy();
        }
    }
}
