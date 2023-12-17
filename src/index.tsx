import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

function App() {
    return (
        <div>
            <h1>Hello world</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                maxime laudantium consequuntur amet eaque molestiae itaque
                beatae aspernatur, repellat placeat. Ea ipsam saepe libero
                quaerat tempore delectus architecto. Sint, illum.
            </p>
        </div>
    )
}
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
