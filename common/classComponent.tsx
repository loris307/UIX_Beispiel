import { template } from "uix/html/template.ts";
import { Component } from "uix/components/Component.ts";

@template(
    <div>
        <h1 id="header">UIX</h1>
        <section id="description">Hello, UIX!</section>
    </div>
)
class MyCustomComponent extends Component {
    public sayHello() {
        // Do something
    }
}

export default MyCustomComponent;