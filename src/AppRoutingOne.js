import logo from './logo.svg';
import './App.css';
import TaskListComponent from "./components/container/task_list";
import ContactListComponent from "./components/container/contact_list";
import Ejemplo1 from "./hooks/ejemplo1";
import Ejemplo2 from "./hooks/ejemplo2";
import MiComponenteConContexto from "./hooks/ejemplo3";
import Ejemplo4 from "./hooks/ejemplo4";
import {GreetingStyled} from "./components/pure/greetingStyled";
import EJERCICIO1 from "./components/pure/EJERCICIO1";
import Father from "./components/container/father";
import Ejercicio012 from "./components/pure/Ejercicio10_11_12";
import loginFormik from "./components/pure/forms/loginFormik";
import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/registerFormik";

function App() {
  return (
    <div className="App">
				{/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

          <ContactListComponent>

          </ContactListComponent>
					<Ejemplo2>

					</Ejemplo2>
					<MiComponenteConContexto>
							Mi componente con contexto
					</MiComponenteConContexto>
					<Ejemplo4 nombre={"Martin"}>
							<h3>
									{/*Todo lo que hay aquí dentro se va a tratar como props.children
									Contenido de props.children
							</h3>
					</Ejemplo4>
					<GreetingStyled name="Martin">
					</GreetingStyled>

      </header>

		<ContactListComponent>
			Componente de listado de Contactos
		</ContactListComponent>
		<OptionalRender>

		</OptionalRender>

		<TaskListComponent>
		</TaskListComponent>
		<LoginFormik>

		</LoginFormik>*/}
		<RegisterFormik>

		</RegisterFormik>


    </div>
  );
}

export default App;
