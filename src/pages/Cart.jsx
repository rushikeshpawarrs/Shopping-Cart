import {useSelector} from 'react-redux';
import CartItem from '../components/CartItem';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Cart = () => {

  const {cart} = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return <div>
  {
    cart.length > 0 ? 
    (
      <div>
        <div>
          {
            cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex = {index} />;
            })
          }
          </div>
        <div>
            <div>
              <div>Your Card</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>
                Total Amount: ${totalAmount}
              </p>
              <button>Checkout</button>
            
            </div>
        </div>
      </div>
    ) 
    : 
    (
      <div>
        <h1>Cart is empty</h1>
        <Link to="/">
          <button>Shop Now</button>
        </Link>
      </div>
    )
  }
  </div>
}

export default Cart;
