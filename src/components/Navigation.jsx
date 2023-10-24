import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className=" flex items-center " >
      <ul className=" flex flex-row space-x-3 text-xl text-[rgb(139,41,46)]  " >
        <li>
          <Link  to="/">Cúpulas</Link>
        </li>
        <li>
          <Link to="/about">Rosas sueltas</Link>
        </li>
        <li>
          <Link to="/shop">Contacto</Link>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
