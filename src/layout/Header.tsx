import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Logo_1 from '../assets/Logo_1.png'

type Props = {}
const Header = (props: Props) => {
    return (
        <AppBar
            position="static"
            sx={{
                background:
                    'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(24,24,35,1) 35%)',
                height: '5.5rem',
            }}
        >
            <Container maxWidth="xl">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                            flexGrow: 1,
                            height: '3.938rem',
                        }}
                    >
                        <img
                            src={Logo_1}
                            alt=""
                            style={{
                                height: '3.938rem',
                            }}
                        />
                    </Typography>
                    <Button
                        color="inherit"
                        sx={{
                            paddingLeft: '24px',
                            paddingRight: '24px',
                            fontSize: '16px',
                            height: '5.5rem',
                            '&:hover': {
                                backgroundColor: 'var(--Purple, #5221E6)',
                            },
                        }}
                    >
                        Experience
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            paddingLeft: '24px',
                            paddingRight: '24px',
                            fontSize: '16px',
                            height: '5.5rem',
                            '&:hover': {
                                backgroundColor: 'var(--Purple, #5221E6)',
                                bocShadow: 4,
                            },
                        }}
                    >
                        Work
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            paddingLeft: '24px',
                            paddingRight: '24px',
                            fontSize: '16px',
                            height: '5.5rem',
                            '&:hover': {
                                backgroundColor: 'var(--Purple, #5221E6)',
                                bocShadow: 4,
                            },
                        }}
                    >
                        My Project
                    </Button>
                    <Button
                        color="inherit"
                        sx={{
                            paddingLeft: '24px',
                            paddingRight: '24px',
                            fontSize: '16px',
                            height: '5.5rem',
                            '&:hover': {
                                backgroundColor: 'var(--Purple, #5221E6)',
                                bocShadow: 4,
                            },
                        }}
                    >
                        Contact
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
