
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav';
import Link from './components/NavBar/Link';

function App() {
  const data = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Blog", path: "/blog" }
  ];
  

  return (
    <>

    <ul className='flex'>
      {
        data.map(route=><Link key={route.id} route={route}></Link>)
      }
    </ul>

    {/* <ul className='flex'>
      {
        data.map(link=><li className='mr-10'><a href={link.path}>{link.name}</a></li>)
      }
    </ul> */}

    

<header>
<DaisyNav></DaisyNav>
</header>

<main>

</main>

<footer></footer>
      
     
      
    </>
  )
}

export default App
