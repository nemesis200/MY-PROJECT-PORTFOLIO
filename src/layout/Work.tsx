import './Work.css'

type Props = {
    poz: string
    company: string
    post: string
    duties: string
    color: string
}
const Work = ({ poz, company, post, duties, color }: Props) => {
    return (
        <div className="comtainer">
            <h2
                style={{
                    width: 'min-content',
                    color: '#8491A0',
                    fontSize: '117px',
                    margin: '0px',
                }}
            >
                {poz}
            </h2>
            <p className="aboutWork">
                <span
                    style={{
                        color: `${color}`,
                    }}
                >
                    {company}
                </span>
                , {post}
            </p>
            <p className="eleseAbout">{duties}</p>
        </div>
    )
}
export default Work
