import './music.scss'
import Adipurush from '../../../../assets/Adipurush_poster.jpeg'

function Musics({itemClassName}) {
    const trending_now = ['adipurush','Mere ram','naseeb se','tere vaaste','pool party','bolo na'];

    const top_charts = ['hindi:india superhits','weekly top songs','romantic top 40','hindi 90s','trending today'];

    const new_releases = ['adipurush','issa vibe','kisi ka bhai kisi ka jaan','8 A.M metro','the kerala story']

    const editorial_picks = ['punjab se bollywood','non-stop party mix','chill maaro','jhakaas remakes','best of romance']

    const trending_podcasts = ['dhadkane meri sun','tumne kisi se kabhi pyar kiya','sunday suspense bangla','the ranveer show','akbar birbal stories']
    
    const radio_stations = ['bhajan sangeet','remix dhamaal']

    const Recommended_Artist_Stations = ['arijit singh','shreya ghosal']


    function getclassName(elem){
        return(
            eval(elem)
            // console.log(elem)
          )}

  return (
    <>
        <section className="music">
            {getclassName(itemClassName).map((e)=>
              <div className={e} key={e}>
                <img src={Adipurush} alt="" />
                <p>{e}</p>
                <p>singer name</p>
              </div>
            )}
        </section> 
    </>
  )
}

export default Musics
