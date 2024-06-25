import { Link } from '../Link.jsx';

const i18n = {
    es: {title: "Sobre mí", 
        description: "Esto está escrito en español.",
        button: "Volver a la página principal"},
    en: {title: "About me", 
        description: "This is written in english.",
        button: "Return to home page"}
}

const useI18n = (lang) => {
    return i18n[lang] || i18n.en
}

export default function AboutPage({routeParams}){
    const i18n = useI18n(routeParams.lang ?? 'en')
    return(
    <>
      <h1> {i18n.title} </h1>
      <h3> {i18n.description} </h3>
      <div>
      <img src='https://media.licdn.com/dms/image/D4D03AQHLmG3juAaoAA/profile-displayphoto-shrink_400_400/0/1704160758674?e=1724889600&v=beta&t=dIvOL6R5jjuHUVtH-KyMugBCaKyEd7qVv0SMd2pXu7Q' alt='Foto de Guillermo' />
      </div>
      <Link to='/'> {i18n.button} </Link>
    </>
    )
  }