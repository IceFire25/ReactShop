function BasketItem(props) {
    const{id, name, price, quantity} = props;
    return (
        <ul className="collection">
            <li className="collection-item ">
                {name} x {quantity} = {price}
                <span class="secondary-content">
                    <i class="material-icons basket-delete">clear</i>
                </span>
            </li>
        </ul>
    );
}

export { BasketItem };