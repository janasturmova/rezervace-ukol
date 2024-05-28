export const Header = ({price, rating, room}) => {
    return (
        <div>
                <h2>Booking Summary</h2>
                <div className="summary__head">
                    <img
                        className="summary__photo"
                        src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=960"
                    />
                    <div className="summary__head-property">
                        <h3 className="summary__name">Hotel Lesní Zátiší</h3>
                        <div className="summary__address">Malohradské skály 347/21</div>
                        <div className="summary__city">Malohradská Ves</div>
                        <div className="summary__rating">Hodnocení: {rating}</div>
                    </div>
                    <div className="summary__head-room">
                        <h3 className="summary__name1">Pokoj {room}</h3>
                        <div className="summary__room-type">
                        Dvoulůžkový s dětskou přistýlkou
                        </div>
                        <div className="summary__room-price">{price} Kč / noc</div>
                    </div>
                </div>
        </div>
    );
};