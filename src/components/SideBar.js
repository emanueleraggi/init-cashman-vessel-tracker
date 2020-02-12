import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import '../components/SideBar.css';
import { Link } from 'react-router-dom';

// import Marker from '../marker-icon/map-marker-icon.png';

import example from '../documents/sample.zip';
import example2 from '../documents/example1.pdf';

import img1 from '../images_vessels/main/Atchafalaya.PNG';
import img2 from '../images_vessels/main/AJFournier.PNG';
import img3 from '../images_vessels/main/FJBelesimo.PNG';
import img4 from '../images_vessels/main/DalePyatt.PNG';
import img5 from '../images_vessels/main/Wood1.PNG';
import img6 from '../images_vessels/main/Weeks551.PNG';
import img7 from '../images_vessels/main/W310Borinquen.PNG';
import img8 from '../images_vessels/main/BTD110_GD_Morgan.PNG';
import img9 from '../images_vessels/main/Weeks506.PNG';
import img10 from '../images_vessels/main/W300_EW_Ellefsen.PNG';
import img11 from '../images_vessels/main/W13_CR_McCaskill.PNG';
import img12 from '../images_vessels/main/W456_BE_Lindholm.PNG';
import img13 from '../images_vessels/main/W308_RS_Weeks.PNG';
import img14 from '../images_vessels/main/W450_RN_Weeks.PNG';
import img15 from '../images_vessels/main/W475_Magdalen.PNG';
import img16 from '../images_vessels/main/BTD100_Captain_Frank.PNG';
import img17 from '../images_vessels/main/W549.PNG';
import img18 from '../images_vessels/main/W302_Venture.PNG';
import img19 from '../images_vessels/main/Hurley.PNG';
import img20 from '../images_vessels/main/Dredge_Goetz.PNG';
import img21 from '../images_vessels/main/Essayons.PNG';
import img22 from '../images_vessels/main/Yaquina.PNG';
import img23 from '../images_vessels/main/Mcfarland.PNG';
import img24 from '../images_vessels/main/Dredge_Wheeler.PNG';
import img25 from '../images_vessels/main/Murden.PNG';
import img26 from '../images_vessels/main/Currituck.PNG';
import img27 from '../images_vessels/main/Linda_Laquay.PNG';
import img28 from '../images_vessels/main/John_C_Laquay.PNG';
import img29 from '../images_vessels/main/Waymon_L_Boyd.PNG';
import img30 from '../images_vessels/main/Virginia.PNG';
import img31 from '../images_vessels/main/Atlantic.PNG';
import img32 from '../images_vessels/main/Charleston.PNG';
import img33 from '../images_vessels/main/Pullen.PNG';
import img34 from '../images_vessels/main/Jekyll_Island.PNG';
import img35 from '../images_vessels/main/Hampton.PNG';
import img36 from '../images_vessels/main/Dredge428.PNG';
import img37 from '../images_vessels/main/Essex.PNG';
import img38 from '../images_vessels/main/Dredge_E_Stroud.PNG';
import img39 from '../images_vessels/main/Dredge32.PNG';
import img40 from '../images_vessels/main/MissouriH.PNG';
import img41 from '../images_vessels/main/Mike_Hooks.PNG';
import img42 from '../images_vessels/main/Peter_Dejong.PNG';
import img43 from '../images_vessels/main/Hampton_Roads_Dredge.PNG';
import img44 from '../images_vessels/main/Savannah_Dredge.PNG';
import img45 from '../images_vessels/main/Vulcan.PNG';
import img46 from '../images_vessels/main/Newport.PNG';
import img47 from '../images_vessels/main/Bayport.PNG';
import img48 from '../images_vessels/main/Wesport.PNG';
import img49 from '../images_vessels/main/Dredge_Njord.PNG';
import img50 from '../images_vessels/main/Hagar.PNG';
import img51 from '../images_vessels/main/Valhalla.PNG';
import img52 from '../images_vessels/main/Frank_Bechtolt.PNG';
import img53 from '../images_vessels/main/HR_Morris.PNG';
import img54 from '../images_vessels/main/Robert_M_White.PNG';
import img55 from '../images_vessels/main/Dredge_Einar.PNG';
import img56 from '../images_vessels/main/Glenn_Edwards.PNG';
import img57 from '../images_vessels/main/Ohio.PNG';
import img58 from '../images_vessels/main/Ellis_Island.PNG';
import img59 from '../images_vessels/main/Dredge_Texas.PNG';
import img60 from '../images_vessels/main/Terrapin_Island.PNG';
import img61 from '../images_vessels/main/Dredge_Illinois.PNG';
import img62 from '../images_vessels/main/Carolina.PNG';
import img63 from '../images_vessels/main/GL54.PNG';
import img64 from '../images_vessels/main/Sugar_Island.PNG';
import img65 from '../images_vessels/main/Padre_Island.PNG';
import img66 from '../images_vessels/main/Dredge55.PNG';
import img67 from '../images_vessels/main/Dredge_New_York.PNG';
import img68 from '../images_vessels/main/Liberty_Island.PNG';
import img69 from '../images_vessels/main/Alaska.PNG';
import img70 from '../images_vessels/main/Dodge_Island.PNG';
import img71 from '../images_vessels/main/Dredge53.PNG';
import img72 from '../images_vessels/main/Stuyvesant.PNG';
import img73 from '../images_vessels/main/Paula_Lee.PNG';
import img74 from '../images_vessels/main/Columbia.PNG';
import img75 from '../images_vessels/main/Michigan.PNG';
import img76 from '../images_vessels/main/JP_Boisseau.PNG';
import img77 from '../images_vessels/main/Delaware_Bay.PNG';
import img78 from '../images_vessels/main/Atlanic_Salvor.PNG';

import donjonImage from '../logos/donjon.jpg';
import dutraImage from '../logos/dutra.png';
import glddImage from '../logos/greatlakesdredgeanddock.png';
import mansonImage from '../logos/mansonconstruction.png';
import marinexImage from '../logos/marinex.png';
import mikehooksImage from '../logos/Mike-Hooks-Square.png';
import norfolkImage from '../logos/norfolk.jpg';
import orionImage from '../logos/ORN.jpg';
import usaceImage from '../logos/donjon.jpg';
import weeksImage from '../logos/weeksmarine.png';
import cashmanDredgingImage from '../logos/cashmandredging.png';

class AtchafalayaButton extends React.Component {
	render() {
		return <DownloadLink src={example}>Download Project Specs</DownloadLink>;
	}
}
class DownloadLink extends React.Component {
	render() {
		return (
			<form method="get" action={this.props.src}>
				<button type="submit" class="btn btn-primary mr-3">
					{this.props.children}
				</button>
			</form>
		);
	}
}

class AtchafalayaPreview extends React.Component {
	render() {
		return <DownloadLinkAtchafalayaPreview src={example2}>Preview</DownloadLinkAtchafalayaPreview>;
	}
}
class DownloadLinkAtchafalayaPreview extends React.Component {
	render() {
		return (
			<form method="get" action={this.props.src}>
				<button type="submit" class="btn btn-primary mr-3">
					{this.props.children}
				</button>
			</form>
		);
	}
}

const Sidebar = () => (
	<div className="map-sidebar">
		<Card className="mb-2">
			<CardImg />
			<CardBody>
				<div className="row">
					{/* <div className="column"> */}
					<img className="image-sizing-primary" src={cashmanDredgingImage} alt="Atchafalaya" />
				</div>
				<div>
					<img className="image-sizing-secondary" src={img1} alt="Atchafalaya" />
				</div>
				{/* </div> */}
				<br />
				<CardTitle>
					<h3>Atchafalaya</h3>
				</CardTitle>
				<CardSubtitle>Trailing Suction Hopper Dredge</CardSubtitle>
				<CardText>
					<br />
					<h6>Project Details</h6>
					<p>
						Atchafalaya vessel is working oin..............Lorem ipsum dolor sit amet, consectetuer
						adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
						magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,
						pellentesque eu, pretium quis, sem. Quisque rutrum.
					</p>
				</CardText>
				{/* <div className="row"> */}
				<div class="btn-toolbar">
					<AtchafalayaButton />
					<Link to="/vessels/Atchafalaya" className="btn-primary">
						Go to vessel
					</Link>
					<AtchafalayaPreview />
				</div>
				{/* </div> */}
			</CardBody>
		</Card>

		<Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={cashmanDredgingImage} alt="AJ Fournier" />
                    </div>
                    <div>
                        <img lassName="image-sizing-secondary" src={img2} alt="AJ Fournier" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>AJ Fournier</h3>
                </CardTitle>
                <CardSubtitle>Excavator</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        AJ Fournier vessel is working on 
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={cashmanDredgingImage} alt="FJ Belesimo" />
                    </div>
                    <div>
                        <img className="image-sizing-secondary" src={img3} alt="FJ Belesimo" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>FJ Belesimo</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        FJ Belesimo vessel is working on
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={cashmanDredgingImage} alt="Dale Pyatt" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img4} alt="Dale Pyatt" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dale Pyatt</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dale Pyatt vessel is working on
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={cashmanDredgingImage} alt="Wood1" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img5} alt="Wood1" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Wood1</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Wood1 vessel is working on
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="Weeks551" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img6} alt="Weeks551" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Weeks551</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Weeks551 vessel is working on
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="W310Borinquen" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img7} alt="W310Borinquen" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>W310Borinquen</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        W310Borinquen vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="BTD110 GD Morgan" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img8} alt="BTD110 GD Morgan" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>BTD110 GD Morgan</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        BTD110 GD Morgan vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="Weeks506" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img9} alt="Weeks506" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Weeks506</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Weeks506 vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="W300 EW Ellefsen" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img10} alt="W300 EW Ellefsen" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>W300 EW Ellefsen</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        W300 EW Ellefsen vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="W13 CR McCaskill" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img11} alt="W13 CR McCaskill" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>W13 CR McCaskill</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        W13 CR McCaskill vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="W456 BE Lindholm" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img12} alt="W456 BE Lindholm" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>W456 BE Lindholm</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        W456 BE Lindholm vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="W308 RS Weeks" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img13} alt="W308 RS Weeks" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>W308 RS Weeks</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        W308 RS Weeks vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="W450 RN Weeks" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img14} alt="W450 RN Weeks" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>W450 RN Weeks</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        W450 RN Weeks vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="W475 Magdalen" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img15} alt="W475 Magdalen" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>W475 Magdalen</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        W475 Magdalen vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="BTD100 Captain Frank" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img16} alt="BTD100 Captain Frank" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>BTD100 Captain Frank</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        BTD100 Captain Frank vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="W549" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img17} alt="W549" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>W549</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        W549 vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={weeksImage} alt="W302 Venture" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img18} alt="W302 Venture" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>W302 Venture</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        W302 Venture vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={usaceImage} alt="Hurley" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img19} alt="Hurley" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Hurley</h3>
                </CardTitle>
                <CardSubtitle>Dustpan Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Hurley vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={usaceImage} alt="Dredge Goetz" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img20} alt="Dredge Goetz" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge Goetz</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge Goetz vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={usaceImage} alt="Essayons" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img21} alt="Essayons" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Essayons</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Essayons vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={usaceImage} alt="Yaquina" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img22} alt="Yaquina" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Yaquina</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Yaquina vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={usaceImage} alt="Mcfarland" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img23} alt="Mcfarland" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Mcfarland</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Mcfarland vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={usaceImage} alt="Dredge Wheeler" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img24} alt="Dredge Wheeler" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge Wheeler</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge Wheeler vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={usaceImage} alt="Murden" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img25} alt="Murden" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Murden</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Murden vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={usaceImage} alt="Currituck" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img26} alt="Currituck" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Currituck</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Currituck vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={orionImage} alt="Linda Laquay" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img27} alt="Linda Laquay" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Linda Laquay</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Linda Laquay vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={orionImage} alt="John C Laquay" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img28} alt="John C Laquay" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>John C Laquay</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        John C Laquay vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={orionImage} alt="Waymon L Boyd" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img29} alt="Waymon L Boyd" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Waymon L Boyd</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Waymon L Boyd vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={norfolkImage} alt="Virginia" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img30} alt="Virginia" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Virginia</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Virginia vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={norfolkImage} alt="Atlantic" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img31} alt="Atlantic" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Atlantic</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Atlantic vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={norfolkImage} alt="Charleston" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img32} alt="Charleston" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Charleston</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Charleston vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={norfolkImage} alt="Pullen" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img33} alt="Pullen" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Pullen</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Pullen vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={norfolkImage} alt="Jekyll Island" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img34} alt="Jekyll Island" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Jekyll Island</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Jekyll Island vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={norfolkImage} alt="Hampton" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img35} alt="Hampton" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Hampton</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Hampton vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={norfolkImage} alt="Dredge428" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img36} alt="Dredge428" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge428</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge428 vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={norfolkImage} alt="Essex" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img37} alt="Essex" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Essex</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Essex vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mikehooksImage} alt="Dredge E Stroud" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img38} alt="Dredge E Stroud" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge E Stroud</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge E Stroud vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mikehooksImage} alt="Dredge32" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img39} alt="Dredge32" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge32</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge32 vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mikehooksImage} alt="MissouriH" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img40} alt="MissouriH" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>MissouriH</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        MissouriH vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mikehooksImage} alt="Mike Hooks" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img41} alt="Mike Hooks" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Mike Hooks</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Mike Hooks vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={marinexImage} alt="Peter Dejong" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img42} alt="Peter Dejong" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Peter Dejong</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Peter Dejong vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={marinexImage} alt="Hampton Roads Dredge" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img43} alt="Hampton Roads Dredge" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Hampton Roads Dredge</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Hampton Roads Dredge vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={marinexImage} alt="Savannah Dredge" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img44} alt="Savannah Dredge" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Savannah Dredge</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Savannah Dredge vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Vulcan" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img45} alt="Vulcan" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Vulcan</h3>
                </CardTitle>
                <CardSubtitle>Crane</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Vulcan vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Newport" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img46} alt="Newport" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Newport</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Newport vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Bayport" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img47} alt="Bayport" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Bayport</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Bayport vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Westport" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img48} alt="Westport" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Westport</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Westport vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Dredge Njord" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img49} alt="Dredge Njord" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge Njord</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge Njord vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Hagar" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img50} alt="Hagar" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Hagar</h3>
                </CardTitle>
                <CardSubtitle>Crane</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Hagar vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Valhalla" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img51} alt="Valhalla" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Valhalla</h3>
                </CardTitle>
                <CardSubtitle>Crewboat</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Valhalla vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Frank Bechtolt" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img52} alt="Frank Bechtolt" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Frank Bechtolt</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Frank Bechtolt vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="HR Morris" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img53} alt="HR Morris" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>HR Morrist</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        HR Morris vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Robert M White" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img54} alt="Robert M White" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Robert M White</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Robert M White vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Dredge Einar" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img55} alt="Dredge Einar" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge Einar</h3>
                </CardTitle>
                <CardSubtitle>Crane</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge Einar vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={mansonImage} alt="Glenn Edwards" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img56} alt="Glenn Edwards" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Glenn Edwards</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Glenn Edwards vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Ohio" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img57} alt="Ohio" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Ohio</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Ohio vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Ellis Island" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img58} alt="Ellis Island" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Ellis Island</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Ellis Island vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Dredge Texas" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img59} alt="Dredge Texas" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge Texas</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge Texas vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Terrapin Island" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img60} alt="Terrapin Island" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Terrapin Island</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Terrapin Island vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Dredge Illinois" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img61} alt="Dredge Illinois" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge Illinois</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge Illinois vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Carolina" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img62} alt="Carolina" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Carolina</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Carolina vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="GL54" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img63} alt="GL54" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>GL54</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        GL54 vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Sugar Island" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img64} alt="Sugar Island" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Sugar Island</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Sugar Island vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Padre Island" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img65} alt="Padre Island" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Padre Island</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Padre Island vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Dredge55" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img66} alt="Dredge55" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge55</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge55 vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Dredge New York" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img67} alt="Dredge New York" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge New York</h3>
                </CardTitle>
                <CardSubtitle>Excavator</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge New York vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Liberty Island" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img68} alt="Liberty Island" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Liberty Island</h3>
                </CardTitle>
                <CardSubtitle>Hopper</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Liberty Island vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Alaska" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img69} alt="Alaska" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Alaska</h3>
                </CardTitle>
                <CardSubtitle>Cutter Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Alaska vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Dodge Island" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img70} alt="Dodge Island" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dodge Island</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dodge Island vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={glddImage} alt="Dredge53" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img71} alt="Dredge53" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Dredge53</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Dredge53 vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={dutraImage} alt="Stuyvesant" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img72} alt="Stuyvesant" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Stuyvesant</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Stuyvesant vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={dutraImage} alt="Paula Lee" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img73} alt="Paula Lee" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Paula Lee</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Paula Lee vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={dutraImage} alt="Columbia" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img74} alt="Columbia" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Columbia</h3>
                </CardTitle>
                <CardSubtitle>Hopper Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Columbia vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={donjonImage} alt="Michigan" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img75} alt="Michigan" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Michigan</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Michigan vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={donjonImage} alt="JP Boisseau" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img76} alt="JP Boisseau" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>JP Boisseau</h3>
                </CardTitle>
                <CardSubtitle>Excavator</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        JP Boisseau vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={donjonImage} alt="Delaware Bay" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img77} alt="Delaware Bay" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Delaware Bay</h3>
                </CardTitle>
                <CardSubtitle>Bucket Dredge</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Delaware Bay vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>
         
         
        <Card className="mb-2">
            <CardImg />
            <CardBody>
                <div className="row">
                    {/* <div className="column"> */}
                        <img className="image-sizing-primary" src={donjonImage} alt="Atlantic Salvor" />
                    </div>
                    <div className="column">
                        <img className="image-sizing-secondary" src={img78} alt="Atlantic Salvor" />
                    </div>
                {/* </div> */}
                <br />
                <CardTitle>
                    <h3>Atlantic Salvor</h3>
                </CardTitle>
                <CardSubtitle>Tug</CardSubtitle>
                <CardText>
                    <br />
                    <h6>Project Details</h6>
                    <p>
                        Atlantic Salvor vessel is working on.
                    </p>
                </CardText>
                <div class="btn-toolbar">
                    <button type="button" id="btnSubmit" class="btn btn-primary mr-3">
                        Download Project Specs
                    </button>
                </div>
            </CardBody>
        </Card>

		
	</div>
);

export default Sidebar;
