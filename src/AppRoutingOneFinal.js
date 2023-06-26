import React, {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from "react-router-dom";

import NotFound from "./pages/404/NotFound";
import Aboutpage from "./pages/about-faqs/Aboutpage";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import TaskPage from "./pages/tasks/TaskPage";
import TaskDetailPage from "./pages/tasks/TaskDetailPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import StatePage from "./pages/home/StatePage";

function AppRoutingOne() {

	let logged = localStorage.getItem('credentials');

	let taskList = [{
		id: 1, name: 'task1', description: 'Hola1'
	}, {id: 2, name: 'task2', description: 'Hola2'}]

	useEffect(() => {
		return () => {
			logged = localStorage.getItem('credentials');
			console.log('logged');
		};
	}, []);


	return (

		<Router>
			<div>
				<aside>
					<Link to="/">| Home |</Link>
					<Link to="/about">| ABOUT |</Link>
					<Link to="/faqs">| FAQS |</Link>
					<Link to="/faq">| HOLA |</Link>
					<Link to="/task/1">| TASK 1 |</Link>
					<Link to="/task/2">| TASK 2 |</Link>
					<Link to="/login">| LOGIN |</Link>
				</aside>
			</div>

			<main>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/online-state" element={<StatePage />} />
					<Route path="/about" element={<Aboutpage />} />
					<Route path="/faqs" element={<Aboutpage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/login" element={logged ? <HomePage /> :
						<Navigate to="/login" replace/>
					} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/profile"
						element={logged ? <ProfilePage /> :
								<Navigate to="/login" replace/>
						}
					/>
					<Route path="/tasks" element={<TaskPage />} />
					<Route exact path="/task/:id" element={(match) => <TaskDetailPage task={taskList[match.params.id-1]}/>}/>
				</Routes>
			</main>
		</Router>
	);
}

export default AppRoutingOne;
