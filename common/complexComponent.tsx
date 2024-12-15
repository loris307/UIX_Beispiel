const ComplexComponent = template<{customAttr: number}>(({customAttr}) =>
    <div class="complex">
        <b>Answer is: {customAttr}</b>
    </div>
);

const component = <ComplexComponent id="c2" customAttr={42}/>;
// We could do document.body.append(component) or component.classList.add("test") now
export default component;