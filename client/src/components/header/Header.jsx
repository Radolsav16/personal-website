import { Link } from "react-router-dom"
export default function Header(){
    return(
    <>
    <nav>
        <div className="left">
          <Link to="/">Radoslav Todorov</Link>
        </div>

        <div className="right">
          <Link to="https://github.com/Radolsav16" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" />
            <span>Github</span>
          </Link>
        </div>
      </nav>
      </>
      )
}