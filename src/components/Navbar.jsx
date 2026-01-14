import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid d-flex justify-content-between">
				<a className="navbar-brand" href="#"><img className="logoNavbar w-36 h-8" src="https://thesimpsonsapi.com/logo.webp"></img></a>
				<div class="btn-group">
					<button type="button" class="btn btn-warning dropdown-toggle me-3 " data-bs-toggle="dropdown" aria-expanded="false">
					<i class="fa-solid fa-circle-chevron-down"></i>
					</button>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#">Action</a></li>
						<li><a class="dropdown-item" href="#">Another action</a></li>
						<li><a class="dropdown-item" href="#">Something else here</a></li>
						<li><hr class="dropdown-divider" /></li>
						<li><a class="dropdown-item" href="#">Separated link</a></li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
