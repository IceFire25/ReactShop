import { BasketItem } from "./BasketItem";

function BasketList(props) {
    const { order = [], handleBasketShow = Function.prototype } = props;
  return (
    <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        {order.length ? (
            order.map((item) => <BasketItem key={item.id} {...item}/>)
        ) : (
            <li className="collection-item ">Корзина пуста</li>
        )}
        <li className="collection-item active">Общая стоимость заказа</li>
        <i class="material-icons basket-clear" onClick={handleBasketShow}>
            clear
        </i>
    </ul>
  );
}

export { BasketList };