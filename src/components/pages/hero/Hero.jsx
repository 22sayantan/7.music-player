import './hero.scss'
import Musics from './musics/Musics';

function Hero() {
    const music_type_title = ['trending now', 'top charts','new releases','editorial picks','trending podcasts','radio stations','Recommended Artist Stations'];

    function nameChange(elem){
      return(elem.replace(/ /g,'_'));
    }
  return (
    <>
      <section className="hero">
            {music_type_title.map((item)=>
                <div key={item} className={nameChange(item)}><h1>{item}</h1><Musics itemClassName={nameChange(item)}/></div>
            )}
      </section>
    </>
  )
}

export default Hero
