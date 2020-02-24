import React from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg, Button } from 'reactstrap';
import '../components/SideBar.css';
import { Link } from 'react-router-dom';
import Client from '../Contentful';

// import example2 from '../documents/example1.pdf';

// class SpecsButton extends React.Component {
// 	render() {
// 		return <DownloadLink> Project Specs</DownloadLink>;
// 	}
// }
// class DownloadLink extends React.Component {
// 	render() {
// 		return (
// 			<form method="get" action={this.props.src}>
// 				<button type="submit" class="btn btn-primary mr-3">
// 					{this.props.children}
// 				</button>
// 			</form>
// 		);
// 	}
// }

class Sidebar extends React.Component {
	state = {
		ships: []
	};

	async componentDidMount() {
		let response = await Client.getEntries({
			content_type: 'cashmanCards'
		});
		const ships = response.items.map((item) => {
			const { name, slug, type, company, description, images, companylogo } = item.fields;
			return {
				name,
				slug,
				type,
				company,
				description,
				images,
				companylogo
			};
		});

		this.setState({
			ships
		});
	}

	// shouldComponentUpdate() {
	// 	console.log(this.props.markedShip);
	// }

	getFilteredShips = () => {
		if (!this.props.activeShip) {
			return this.state.ships;
		}
		// only ship that appear at the top
		let targetShip = this.state.ships.filter(
			(ship) => this.props.activeShip.name.toLowerCase() === ship.name.toLowerCase()
		);
		// all ships
		let otherShipsArray = this.state.ships.filter(
			(ship) => this.props.activeShip.name.toLowerCase() !== ship.name.toLowerCase()
		);
		return targetShip.concat(otherShipsArray);
	};

	render() {
		return (
			<div className="map-sidebar">
				{this.props.activeShipTypes}
				<pre>
					{this.getFilteredShips().map((ship) => (
						<Card className="mb-2">
							<CardImg />
							<CardBody>
								<div className="row">
									{/* <div className="column"> */}
									<img
										className="image-sizing-primary"
										src={ship.companylogo.fields.file.url}
										alt="shipImage"
									/>
								</div>
								<div>
									<img
										className="image-sizing-secondary"
										src={ship.images.fields.file.url}
										alt="shipImage"
									/>
								</div>
								<CardTitle>
									<h3 className="thick">{ship.name}</h3>
								</CardTitle>
								<CardSubtitle>{ship.type}</CardSubtitle>
								<CardText>
									<br />
									<h6>Project Details</h6>
									<p>For a description of the project view the specification included</p>
								</CardText>
								<div class="btn-toolbar">
									<Button className="btn btn-primary mr-3">Go to Specs</Button>
									<Link className="btn btn-primary">Go to vessels</Link>
								</div>
							</CardBody>
						</Card>
					))}
				</pre>
			</div>
		);
	}
}

export default Sidebar;
