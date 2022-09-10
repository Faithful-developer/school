import './assets/styles/stylesheet.scss'
import {
    BrowserRouter,
    Routes,
    Route, Navigate,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";

const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route
                        path='/home'
                        element={<Navigate to="/" replace />}
                    />
                    <Route exact path='*' element={<ErrorPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
