import Container from '@mui/material/Container'
import Work from './Work'

type Props = {}

const WorkedInfo = (props: Props) => {
    return (
        <>
            <div
                style={{
                    height: '44.688rem',
                    backgroundColor: 'black',
                    paddingTop: '7.5rem',
                    paddingBottom: '9rem',
                }}
            >
                {' '}
                <Container
                    maxWidth="xl"
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                    }}
                >
                    <p
                        style={{
                            color: 'var(--Light-Grey, #8491A0)',
                            margin: '0px',
                            width: '100%',
                            height: 'min-content',
                        }}
                    >
                        work experience
                    </p>
                    <h2
                        style={{
                            color: 'white',
                            fontSize: '55px',
                            marginTop: '0px',
                            marginBottom: '2.5rem',
                        }}
                    >
                        Companies I have worked <br /> for in the past
                    </h2>
                    <div
                        style={{
                            width: '100%',
                            height: '16.938rem',
                            display: 'flex',
                            flexDirection: 'row',
                            gap: '60px',
                        }}
                    >
                        <Work
                            poz="01"
                            company="Google"
                            post="Interaction Designer"
                            duties="I currently am the lead designer on the interaction design team for Google Play."
                            color="#3CC74E"
                        />
                        <Work
                            poz="02"
                            company="Facebook"
                            post="Product Designer"
                            duties="I’ve worked on a wide variety of internal tools for facebook over the past 6 years."
                            color="#609BFF"
                        />
                        <Work
                            poz="03"
                            company="Dribbble"
                            post="Graphic Designer"
                            duties="I started my design career with Dribbble. I was  incharge of creating illustrations for the platform."
                            color="#E95D90"
                        />
                    </div>
                </Container>
            </div>
        </>
    )
}
export default WorkedInfo
