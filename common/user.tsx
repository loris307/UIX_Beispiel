import { user } from '../backend/users.eternal.ts'

export default
	<main>
		<h1>Users</h1>
		<ul>
			{Array.from(user).map(user => <li>{user}</li>)}
		</ul>
	</main>;