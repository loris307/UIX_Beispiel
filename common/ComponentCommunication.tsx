function UserView() {
    const name = $("John");

    return <main>
        <p>
            Der hier ist dumm: {name} 
        </p>
        <MyInput myVal={name}/>
    </main>
}

const MyInput = template<{myVal: Ref<string>}>(({myVal}) =>
    <div class="fancy-ui">
        <input type="text" value={myVal}/>
    </div>
);

export default UserView;