import React from 'react';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
	return (
		<div className="single">
			<div className="content">
				<img
					src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
					alt=""
				/>
				<div className="user">
					<img
						src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
					<div className="info">
						<span>John</span>
						<p>Posted 2 days ago</p>
					</div>
					<div className="edit">
						<Link to={`/write?edit=2`}>
							<img src={Edit} alt="" />
						</Link>
						<img src={Delete} alt="" />
					</div>
				</div>
				<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere
					urna nec tincidunt praesent semper feugiat nibh. Vulputate odio ut
					enim blandit. Sit amet consectetur adipiscing elit ut aliquam. Eget
					lorem dolor sed viverra ipsum nunc aliquet. Integer quis auctor elit
					sed vulputate mi sit amet mauris. Id interdum velit laoreet id. Diam
					volutpat commodo sed egestas egestas fringilla phasellus faucibus
          <br/>
          <br/>
					scelerisque. Fames ac turpis egestas sed tempus urna et. Tellus rutrum
					tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Libero
					volutpat sed cras ornare arcu dui. Sed risus ultricies tristique
					nulla. Pretium fusce id velit ut. Congue eu consequat ac felis donec
					et odio pellentesque diam. Neque volutpat ac tincidunt vitae semper
					quis lectus. Nulla porttitor massa id neque aliquam vestibulum morbi
					blandit cursus. Enim ut sem viverra aliquet eget. Imperdiet nulla
					malesuada pellentesque elit eget. Purus viverra accumsan in nisl nisi
					scelerisque eu ultrices. Diam volutpat commodo sed egestas egestas
					fringilla phasellus faucibus. Enim diam vulputate ut pharetra. Eget
					lorem dolor sed viverra. Turpis tincidunt id aliquet risus feugiat in
					ante metus. Gravida dictum fusce ut placerat orci nulla pellentesque
					dignissim enim. Vitae justo eget magna fermentum iaculis eu non diam.
          <br/>
          <br/>
					Mauris commodo quis imperdiet massa tincidunt. Nulla pharetra diam sit
					amet nisl suscipit adipiscing bibendum est. Nam libero justo laoreet
					sit. In est ante in nibh mauris cursus mattis. Aliquam nulla facilisi
					cras fermentum. Velit laoreet id donec ultrices tincidunt arcu non
					sodales neque. Non enim praesent elementum facilisis. In massa tempor
					nec feugiat nisl pretium. Sed egestas egestas fringilla phasellus
					faucibus scelerisque eleifend donec pretium. Ultricies mi eget mauris
					pharetra et. Velit aliquet sagittis id consectetur purus. Id semper
					risus in hendrerit. Risus viverra adipiscing at in tellus. Vulputate
					ut pharetra sit amet aliquam id diam maecenas ultricies. Bibendum enim
					facilisis gravida neque convallis. Facilisis sed odio morbi quis
					commodo odio aenean sed adipiscing. Eleifend mi in nulla posuere
					sollicitudin aliquam. Porttitor lacus luctus accumsan tortor.
					Habitasse platea dictumst quisque sagittis purus. Varius morbi enim
					nunc faucibus a pellentesque. Pulvinar sapien et ligula ullamcorper
					malesuada proin libero nunc consequat. Duis at consectetur lorem donec
					massa sapien faucibus et molestie.
				</p>
			</div>
			<Menu />
		</div>
	);
};

export default Single;
