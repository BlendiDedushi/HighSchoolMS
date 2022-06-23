import { Link } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/login.css";

function NavbarNxenes() {
  return (
    <div>
    <div class="nav">
    <input type="checkbox"/>
    <span></span>
    <span></span>
    <div class="menu">
          <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
                <Link to="/">Log out</Link>
              </nav>
            </li>
           
            <li className="nav-item- m-1">
              <nav className="btn btn-light btn-outline-primary">
                <Link to="/profesori">
                Profesori</span>
                </Link>
              </nav>
            </li>
            <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/libri">
              Libri</span>
              </Link>
            </nav>
          </li>
          
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/nxenesi">
              Nxenesi</span>
              </Link>
            </nav>
          </li>
         
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/vleresimi">
              Vleresimi</span>
              </Link>
            </nav>
          </li>
          
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/autobusat">
              Autobusat</span>
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/syllabusi">
              Syllabusi</span>
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/njoftim">
              Njoftim</span>
              </Link>
            </nav>
          </li>
          <li className="nav-item- m-1">
            <nav className="btn btn-light btn-outline-primary">
              <Link to="/testi">
              Testi</span>
              </Link>
            </nav>
          </li>
          
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavbarNxenes;