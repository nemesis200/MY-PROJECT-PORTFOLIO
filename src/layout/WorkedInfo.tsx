import Container from '@mui/material/Container'

type Props = {}
const WorkedInfo = (props: Props) => {
    return (
        <>
            <div
                style={{
                    height: '44.688rem',
                    backgroundColor: 'black',
                }}
            >
                {' '}
                <Container
                    maxWidth="xl"
                    sx={{
                        display: 'flex',
                    }}
                >
                    <p
                        style={{
                            color: 'var(--Light-Grey, #8491A0)',
                        }}
                    >
                        work experience
                    </p>
                </Container>
            </div>
        </>
    )
}
export default WorkedInfo
