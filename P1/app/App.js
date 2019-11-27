import React from 'react';
import './App.css';
import ImageSlider from './components/imageSlider/imageSlider'
import FS from './components/firstSection/firstSection'
import RS from './components/regularSection/regularSection'

class App extends React.Component {
  render(){
  return (
    <div>
      <header>
        <nav id="navbar" className="AppHeader">
          <div className="WarkaLogo">
            <img src="http://www.warkawater.org/wp-content/uploads/2017/08/warkawaterlogomenublack-1.png"/>
          </div>
          <div className="pageSearch">
            <img src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/67-512.png"/>
          </div>
          <div className="navMenu">
            <div className="NavItem">OUR WORK</div>
            <div className="NavItem">PROJECTS</div>
            <div className="NavItem">MORE</div>
            <div className="NavItem">DONATE</div>
          </div>
        </nav>
      </header>
      <ImageSlider></ImageSlider>
      <FS></FS>
      <RS title="THE STORY" 
      img="http://www.warkawater.org/wp-content/uploads/2017/06/WW_WS_Home_170718_TheStory_1200x600.jpg" 
      data='"Visiting small isolated communities up on the high plateau in the North East region of Ethiopia, I witnessed this dramatic reality: the lack of potable water. The villagers live in a beautiful natural environment but often without running water, electricity, toilets. To help improve this drastic situation, I made it our mission to find solutions and help these people”, said Arturo Vittori.'
      ></RS>
      <RS title="PROJECTS" 
      img="http://www.warkawater.org/wp-content/uploads/2017/07/WW_WS_3_Home_170718_Projects_1200x600.jpg" 
      data='Warka Tower was the first project we began with working with some of these isolated communities. Early on we realized that above the lack of potable water there were other important issues to be solved, so additional projects such as WSolar, WGarden, WSanitation, WDrone, WHouse, WFilter & Distribution, and Culture a Porter have evolved and are well into development.'
      ></RS>
      <RS title="THE NAME" 
      img="http://www.warkawater.org/wp-content/uploads/2017/10/WW_IM_RF_WarkaTree_120523_3840x2160_LR.jpg" 
      data='The name of the project ‘Warka’ comes from the Warka Tree, which is a giant, wild fig tree native to Ethiopia. Like the tree, the Warka Tower serves as important cornerstone for the local community, becoming part of the local culture and ecosystem by providing its fruits, shade and offering a gathering place.'
      ></RS>
      <RS title="WARKA TOWER" 
      img="http://www.warkawater.org/wp-content/uploads/2017/06/WW_WS_4_Home_170718_WarkaTower_1200.png" 
      data='Warka Tower is a vertical structure designed to collect and harvest potable water from the air, providing an alternative water source for rural populations that face challenges accessing drinkable water. The canopy creates a shaded social space where the community can gather for education and public meetings.'
      ></RS>
      <RS title="WARKA HOUSE" 
      img="http://www.warkawater.org/wp-content/uploads/2019/09/WW_WS_6_Home_190909_WarkaHouse2.0_1200x600-1.jpg" 
      data='Warka House is an alternative sustainable shelter that is inspired by African vernacular houses. By improving on drawbacks while keeping important cultural features, a better, modern house can be constructed, one that maintains the ancient local traditions of working with bamboo and other natural materials, while offering a higher standard of hygiene and comfort for the villagers of such rural communities.'
      ></RS>
      <RS title="WARKA SOLAR" 
      img="http://www.warkawater.org/wp-content/uploads/2017/06/WW_IM_AR_170912_1200x600-11.jpg" 
      data='Warka Tower can also integrate an energy module, the WSolar, to generate electrical energy from sunlight serving as a charging station, allowing villagers to power mobile phones, tablets, and laptop computers, while offering an illuminated place to study and socialize after the sun sets.'
      ></RS>
      <RS title="WARKA GARDEN" 
      img="http://www.warkawater.org/wp-content/uploads/2017/06/WW_IM_PH_V1.7_150904_Bomarzo_EdibleGarden_SAM_0006_1200x600_AV.jpg" 
      data='This modular edible garden can serve the food needs of one to three families using only a part of the water collected by the Tower. WGarden features an integrated gravitational irrigation system designed for efficiency and precision.'
      ></RS>
      <RS title="WARKA SANITATION" 
      img="http://www.warkawater.org/wp-content/uploads/2018/03/WarkaToilet_1200x600_LR-1.jpg" 
      data='Issues of sanitation and hygiene still remain one of the main concerns for developing countries. Designed to assist in this widespread need and as a tool for hygiene education. WSanitation is a composting toilets which operate without the need for flushing water and energy, the composting materials is used as fertilizer for the WGarden.'
      ></RS>
      <RS title="WARKA DRONE" 
      img="http://www.warkawater.org/wp-content/uploads/2017/06/WW_WS_5_Home_170718_WarkaDrone_1200x600.png" 
      data='Lack of modern transportation infrastructure leaves many remote communities extremely isolated. Located across inaccessible highlands, they are very difficult to reach and the delivery of supplies is slow and expensive. Warka Drone is intended to facilitate the transportation of potable water from the Warka Tower across extended communities and also transport medical or other emergency supplies.'
      ></RS>
      <RS title="CULTURE A PORTER" 
      img="http://www.warkawater.org/wp-content/uploads/2017/06/WW_IM_AR_170225_IMG_3208_1200x600_LR-1.jpg" 
      data='Warka Water Inc. in collaboration with Culture a Porter aims to empower the local economy of the isolated communities where Warka Tower is integrated, promoting their handicrafts by creating inedited products made locally under the Warka canopy for an international market. "We bring forgotten and unknown cultural identity to the world”, said Arturo Vittori.'
      ></RS>
      <RS title="GLOBAL SCALE" 
      img="http://www.warkawater.org/wp-content/uploads/2017/07/WW_WS_7_Home_170718_GlobalScale.png" 
      data='After the installation of the first Warka Tower pilot in Ethiopia in early 2015, we rapidly realised that similar issues were unfortunately present in other communities in different geographical areas. Currently we are undertaking the first steps to bring help to different isolated communities in places such as Haiti, Togo, Colombia, Brasil, India, Sumba and Cameroon, among others.'
      ></RS>
      <RS title="OUR PARTNERS" 
      img="http://www.warkawater.org/wp-content/uploads/2019/10/Our-Partners.jpg" 
      data='We are fortunate to work with partners who share our passion and vision. Our partners are true collaborators who bring expertise, compassion and results as we work together to end the water crisis. There are several ways we can partner to help us both achieve our goals. We understand that supporting Warka Water is a reflection of your values and commitment to philanthropy.'
      ></RS>
      <footer>
        <div className="donateF">
          <a href="http://www.warkawater.org/donate/">DONATE</a>
        </div>
        <div className="bottomMenu">
          <a >☰</a>
        </div>
      </footer>
    </div>
  );}
}

export default App;
