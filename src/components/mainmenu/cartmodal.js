import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CartModal = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  if (!isOpen) return null;

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="fixed inset-0 bg-black-500 bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white-500 border-4 rounded-2xl w-2/2 p-6 relative">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-black-500 bg-yellow-500 border-2 rounded-full p-2 hover:text-gray-900"
        >
          <FaTimes size={24} />
        </button>
        
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        
        {cartItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center mb-4 pb-2 border-b">
            <div className="flex items-center">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-600">₹{item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="bg-pink-200 px-2 py-1 rounded-l"
              >
                -
              </button>
              <input 
                type="number" 
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(item.id, Math.max(1, parseInt(e.target.value)))}
                className="w-12 text-center border"
                min="1"
              />
              <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="bg-pink-200 px-2 py-1 rounded-r"
              >
                +
              </button>
              <button 
                onClick={() => onRemoveItem(item.id)}
                className="ml-2 text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
        
        <div className="flex justify-between mt-4">
          <span className="font-bold">Subtotal</span>
          <span className="font-bold">₹{calculateSubtotal()}</span>
        </div>
        
        <button 
          className="w-full bg-black-500 text-white-500 py-2 rounded-full mt-4 hover:bg-gray-800"
          onClick={() => {/* Proceed to checkout */}}
        >
          Continue to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartModal;