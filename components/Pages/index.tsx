import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles
  


  return (
    <div style={{ direction : "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={"SHIRAZ WEATHER : "} style={{ minHeight: 200 , margin: 10, width: "calc(100% - 20px)"}}>
      
      <br-xxx/>
       
      <div style={{ width :"100%", height:50, backgroundColor:"#8FA9A6" , borderRadius:50, textAlign:"center"
      }}>
      <br-x/>
      <br-xx/>
      <br-xx/>


       FeelsLikeC:{props.f}°
       
      </div>
      <br-xxx/>

      <div style={{ width :"100%", height:50, backgroundColor:"#8FA9A6",borderRadius:50, textAlign:"center"
      }}>
      <br-x/>
      <br-xx/>
      <br-xx/>

       Humidity:{props.h}% RH
       
      </div>
      <br-xxx/>

      <div style={{ width : "100%", height:50, backgroundColor:"#8FA9A6",borderRadius:50, textAlign:"center"
      }}>
      <br-x/>
      <br-xx/>
      <br-xx/>

      Pressure:{props.p}
       
      </div>

      <br-xxx/>


      <div style={{ width :"100%", height:50, backgroundColor:"#8FA9A6",borderRadius:50, textAlign:"center"
      }}>
      <br-x/>
      <br-xx/>
      <br-xx/>


      uvIndex:{props.uv}
       
      </div>
      <br-xx/>

      <center style={{fontSize:11}}>
       تهیه شده توسط گروه کپلر 
      </center>

      </Window>
    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

    let json = await (await fetch("https://irmapserver.ir/research/api/weather/")).json()

    let FeelsC = json.current_condition[0].FeelsLikeC
    
    let hdt =json.current_condition[0].humidity

    let feshaar =json.current_condition[0].pressure

    let uv =json.current_condition[0].uvIndex



  return {
    props: {
      data: global.QSON.stringify({
        f:FeelsC,
        h:hdt,
        p:feshaar,
        uv: uv ,
        session,
        // nlangs,
      })
    },
  }
}