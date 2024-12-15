function MyButton() {
    const count = $(0); // create new ref

    function handleClick() {
        count.val++; // update pointer value
    }

    return (
        <button onclick={handleClick}>
            Clicked {count} times
        </button>
    );
}

export default <main>
    Hey Stranger, feel free to press this button! It won't wipe your harddrive. I'll promise!
	<br/>
    <MyButton/>
</main>