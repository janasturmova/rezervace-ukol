import { Cancel } from "./cancel";
import { Detail } from "./details";
import { Header } from "./header";
import { Services } from "./services";


export const BookingSummary = () => {
    return (
      <div className="summary">
        <Header price={1800} rating={4.55} room={2}/>
        <Detail number="459787-745" arrival="13.6.2024" departure="17.6.2024"
        person={2} child={2} boarding="žádné" price={7200}/>
        <Services parking={200} breakfast={150} wellness="zdarma"/>
        <Cancel/>
      </div>
    );
  };