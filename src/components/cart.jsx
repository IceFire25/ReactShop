function Cart(props) {
    const { quantity = 0, handleBasketShow = Function.prototype} = props;
    return (
        <div className="cart  light-green white-text lighten-2" onClick={handleBasketShow}>
            <i class="material-icons">shopping_cart</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    );
}
export { Cart };