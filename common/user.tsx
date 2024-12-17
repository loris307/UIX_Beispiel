import { user } from '../backend/users.eternal.ts'

export default
	<main>
		<h1>Users</h1>
		<ul>
			{user.map(user => <li>{user}</li>)}
		</ul>
	</main>;