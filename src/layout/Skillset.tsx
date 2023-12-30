import { Container } from '@mui/material'
import './Skillset.css'
import SkillsetInfo from './SkillsetInfo'
type Props = {}
const Skillset = (props: Props) => {
    return (
        <>
            <Container
                maxWidth="xl"
                sx={{
                    height: '41.5rem',
                    backgroundColor: 'black',
                    display: 'flex',
                    gap: '24px',
                    alignItems: 'center',
                }}
            >
                <div className="row">
                    <div className="generalSkillset">
                        <h2>Skillset</h2>
                        <p>
                            With skills in over 4 different fields of design, I
                            am the perfect person to hire when it comes to a
                            full fledged project. Whatever your needs are, I can
                            pretty much take on any challenge.
                        </p>
                    </div>
                    <div className="about-my-skils">
                        <SkillsetInfo
                            image="./images/Html.png"
                            skill="HTML"
                            skillAbout="Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
                        />
                        <SkillsetInfo
                            image="./images/Css.png"
                            skill="CSS"
                            skillAbout="Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
                        />
                        <SkillsetInfo
                            image="./images/Js.png"
                            skill="JavaScript"
                            skillAbout="Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
                        />
                        <SkillsetInfo
                            image="./images/React.png"
                            skill="React"
                            skillAbout="Working at Facebook has taught me a lot about how to understand users, solve problems and build great products."
                        />
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Skillset
