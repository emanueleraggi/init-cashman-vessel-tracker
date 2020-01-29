import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, /*CardSubtitle,*/ Button } from 'reactstrap';

const Sidebar = () => (
	<div className="map-sidebar">
		<Card className="mb-1">
			<CardImg top width="100%" src="/assets/vessel1.png" alt="Atchafalaya" />
			<CardBody>
				<CardTitle>
					<h3>Atchafalaya</h3>
				</CardTitle>
				<CardText>
					<h6>Project Details</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
						mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Quisque rutrum.
					</p>
					Trailing Suction Hopper Dredge
				</CardText>
				<div class="btn-toolbar">
					<button type="button" id="btnSubmit" class="btn btn-primary mr-3">
						Download Project Specs
					</button>
					<button type="button" id="btnUpload" class="btn btn-primary mr-3">
						Upload Changes
					</button>
					<button type="button" id="btnMarker" class="btn btn-primary mr-3">
						...
					</button>
				</div>
				{/* <Button>Download Project Data</Button>
				<Button>Download Project Data</Button> */}
			</CardBody>
		</Card>
		<Card className="mb-1">
			<CardImg top width="50%" src="/assets/vessel1.png" alt="Bayport" />
			<CardBody>
				<CardTitle>
					<h3>Bayport</h3>
				</CardTitle>
				<CardText>
					<h6>Project Details</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
						mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Quisque rutrum.
					</p>
					Trailing Suction Hopper Dredge
				</CardText>
				<Button>Download Project Data</Button>
			</CardBody>
		</Card>
		<Card>
			<CardImg top width="50%" src="/assets/vessel1.png" alt="Newport" />
			<CardBody>
				<CardTitle>
					<h3>Newport</h3>
				</CardTitle>
				<CardText>
					<h6>Project Details</h6>
					<p>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
						Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
						mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Quisque rutrum.
					</p>
					Trailing Suction Hopper Dredge
				</CardText>
				<Button>Download Project Data</Button>
			</CardBody>
		</Card>
	</div>
);

export default Sidebar;
