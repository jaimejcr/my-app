import React from "react";
import { IconShoppingCart } from "@tabler/icons-react";

function Cesta() {
  return (
    <div className=" flex flex-row " >
      <IconShoppingCart size={20} />
      <p>{}€</p>
    </div>
  );
}
export default Cesta;
