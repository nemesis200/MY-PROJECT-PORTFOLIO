import my_photo from '../assets/my_photo.png'
import 'animate.css'
import './About.css'
type Props = {}
const About = (props: Props) => {
    return (
        <div
            style={{
                width: 'lg',
                height: '50.875rem',
                background:
                    'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(24,24,35,1) 35%)',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '40px',
            }}
        >
            <img
                className="My-photo"
                src={my_photo}
                alt=""
                style={{
                    width: '46.875rem',
                    height: '40.625rem',
                }}
            />
            <div
                className="About-me"
                style={{
                    zIndex: 10,
                    position: 'absolute',
                    right: '5.625rem',
                    top: '15.625rem',
                    width: '46.125rem',
                    height: '23rem',
                }}
            >
                <h1
                    style={{
                        fontSize: '70px',
                        color: 'white',
                    }}
                >
                    I’m Ivan Kuznichenko. A Front-End Deweloper{' '}
                    <span
                        style={{
                            color: 'rgba(255, 255, 255, 0.50)',
                        }}
                    >
                        based in Germany.
                    </span>
                </h1>

                <p
                    style={{
                        color: 'white',
                        fontSize: '18px',
                    }}
                >
                    I’m probably the most passionate designer you will ever get
                    to work with. If you have a great project that needs some
                    amazing skills, I’m your guy.
                </p>
            </div>
        </div>
    )
}
export default About
