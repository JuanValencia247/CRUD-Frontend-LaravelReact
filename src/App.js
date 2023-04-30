
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/layout/Menu';
import Login from './components/view/login/Login';
import ListarTarea from './components/view/tareas/ListarTarea';
import VisualizarTarea from './components/view/tareas/VisualizarTarea';
import CrearUsuario from './components/view/usuarios/CrearUsuario';
import EditarUsuario from './components/view/usuarios/EditarUsuario';
import ListarUsuario from './components/view/usuarios/ListarUsuario';

function App() {
  return (
    <>
      <BrowserRouter>
      <Menu/>
        <Routes>
          <Route path='/' element={<ListarUsuario/>}/>
          <Route path='/crear' element={<CrearUsuario/>}/>
          <Route path='/listar' element={<ListarTarea/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/visualizar/:id' element={<VisualizarTarea/>}/>
          <Route path='/editar/:id' element={<EditarUsuario/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
