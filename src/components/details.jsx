export const Detail = ({number, arrival, departure, person, child, boarding, price}) => {
    return (
        <div className="summary__detail">
          <h3>Detail rezervace</h3>
          <div className="summary__number">Číslo: {number}</div>
          <div className="summary__dates">Pobyt: {arrival} - {departure}</div>
          <div className="summary__guests">Hosté: {person} dospělí, počet dětí: {child} </div>
          <div className="summary__services">Stravovávní: {boarding}</div>
          <div className="summary__room-total">Cena celkem: {price} Kč</div>
          <div className="summary__check-in">Check-in: {arrival} do 18:00</div>
          <div className="summary__check-out">
            Check-out: {departure} do 10:00
          </div>
        </div>
    )
}