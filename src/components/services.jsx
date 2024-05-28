export const Services = ({parking, breakfast, wellness}) => {
    return (
        <div className="summary__services">
          <h3>Doplňkové služby</h3>
          <div className="summary__service">Parkování: {parking} Kč / noc</div>
          <div className="summary__service">Snídaně: {breakfast} Kč / noc</div>
          <div className="summary__service">Wellness: {wellness}</div>
          <div className="summary__service">
            Wifi: Zdarma na všech pokojích
          </div>
        </div>
    )
}