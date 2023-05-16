function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype} = props;
    return (
        <div className="cart  light-green darken-2 white-text lighten-2" onClick={handleBasketShow}>
            <i class="material-icons">shopping_basket</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}
export { Cart };