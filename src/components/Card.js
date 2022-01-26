import kaite from '../images/katie-zaferes.png'
import star from '../images/star.png'

export default function Card() {
  return (
    // <div className='card'>
    //   <img className='card-photo' src={kaite} alt=''></img>
    //   <div className='card-review'>
    //     <img src={star} alt=''></img>
    //     <p>5.0 (6)</p>
    //     <li>USA</li>
    //   </div>
    //   <h3>Life lessons with Katie Zaferes</h3>
    //   <p><strong>From $136</strong> / person</p>
    // </div>

    <div className='card'>
      <img src={kaite} className='card-photo' alt=''/>
      <div className='card-review'>
        <img src={star} alt='' className='card-star'/>
        <span>5.0</span>
        <span className='gray'>(6) • </span>
        <span className='gray'>USA</span>
      </div>
      <p>Life lessons with Katie Zaferes</p>
      <p>From $136 / person</p>
    </div>
  )
}