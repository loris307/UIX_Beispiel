import { sendMessage } from "backend/messages.ts";

const message = sendMessage('Abonniert sofort Loris Galler auf Youtube!')

export default
	<main>
		<h1>WIR SENDEN INS BACKEND!</h1>

		<p>
			{message}
		</p>
	</main>;