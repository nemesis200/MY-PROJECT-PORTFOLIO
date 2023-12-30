import Header from './Header'
import About from './About'
import CssBaseline from '@mui/material/CssBaseline'
import WorkedInfo from './WorkedInfo'
import Skillset from './Skillset'

type Props = {}
const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <About />
            <WorkedInfo />
            <Skillset />
        </>
    )
}
export default App
