type Props = {
    image: string
    skill: string
    skillAbout: string
}
const SkillsetInfo = ({ image, skill, skillAbout }: Props) => {
    return (
        <div
            style={{
                width: '26rem',
                height: '12.5rem',
            }}
        >
            <img
                src={image}
                alt=""
                style={{
                    height: '2rem',
                    width: '2rem',
                }}
            />
            <h3
                style={{
                    color: 'white',
                }}
            >
                {skill}
            </h3>
            <p
                style={{
                    color: '#8491A0',
                }}
            >
                {skillAbout}
            </p>
        </div>
    )
}
export default SkillsetInfo
