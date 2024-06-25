import { Link } from '../Link.jsx';

export default function NotFoundPage(){
    return(
    <>
      <h1> Not Found! </h1>
      <p> Something went wrong... </p>
      <div>
      <img src='https://miro.medium.com/v2/da:true/resize:fit:1200/0*ZjYSm_q36J4KChdn' alt='Página no encotrada. Everything is fine...' />
      </div>
      <Link to='/'> Go back to Home page! </Link>
    </>
    )
  }