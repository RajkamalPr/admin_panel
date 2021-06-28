import './Navigationbar.css'

const Navigationbar = () => {
  return (
    <nav className='navigation'>
      <div className='logo'>
        <h1>RK</h1>
      </div>
      <ul className='nav'>
        {/* <li className='navItem'>Home</li>
        <li className='navItem'>About</li> */}
        <li className='navItem'>
          <a href='#'>Logout</a>
        </li>
      </ul>
    </nav>
  )
}
export default Navigationbar
