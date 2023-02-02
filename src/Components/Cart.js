const Title = "Short-Term Goals";
const drmsg= "DR switch";
const nouvmsg = " Nouver acquisition";
const pricecres = 50;
const pricedr = 10;
const pricenouv= 7;
function Cart(){
    return <div><ul>
      <li>{Title} : {pricecres}B</li>
      <li>{drmsg}:{pricedr}B</li>
      <li>{nouvmsg}:{pricenouv}B</li> 
      Total is : {(pricecres + pricedr + pricenouv)}B
      {/*{titremin + wc + pricecres + "B and " + drmsg + wc + pricedr +"B and" + nouvmsg +wc + pricenouv + "B," + " Total is " + ( pricecres + pricedr + pricenouv )+ "B"}*/}
    </ul>
    </div>
  }
  export default Cart;