import photoGrid from '../images/photo-grid.png';

export default function Hero(){
  return(
    <section className='hero-main'>
      <img className='hero-photo-grid'src={photoGrid} alt=''/>
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
    </section>
  )
}
