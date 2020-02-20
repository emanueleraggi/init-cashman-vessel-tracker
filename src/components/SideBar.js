import React from 'react';
import { Card, CardTitle, CardSubtitle, CardText, CardBody, CardImg } from 'reactstrap';
import '../components/SideBar.css';
import { Link } from 'react-router-dom';
import Client from '../Contentful';

import example2 from '../documents/example1.pdf';

class SpecsButton extends React.Component {
	render() {
		return <DownloadLink src={example2}> Project Specs</DownloadLink>;
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

	getFilteredShips = () => {
		if (!this.props.activeShip) {
			return this.state.ships;
		}

		return this.state.ships.filter((ship) => this.props.activeShip.name.toLowerCase() === ship.name.toLowerCase());
	};

	render() {
		return (
			<div className="map-sidebar">
				{this.props.activeShipTypes}
				<pre>
					{this.getFilteredShips().map((ship) => {
						console.log(ship);

						return (
							<Card className="mb-2">
								<CardImg />
								<CardBody>
									<div className="row">
										{/* <div className="column"> */}
										<img className="image-sizing-primary" src={ship.companylogo} alt="shipImage" />
									</div>
									<div>
										<img className="image-sizing-secondary" src={ship.images} alt="shipImage" />
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
										<SpecsButton />
										<Link to="/vessels/Atchafalaya" className="btn btn-primary">
											Go to vessel
										</Link>
									</div>
								</CardBody>
							</Card>
						);
					})}
				</pre>
			</div>
		);
	}
}

export default Sidebar;
