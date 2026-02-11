function OrderModal({ order, closeModal }) {
  if (!order) return null;

  const calculateTotal = () => {
    return order.items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );
  };

  return (
    <div className="model-overlay">
      <div className="modal">
        <h3>Invoice Details</h3>

        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Customer:</strong> {order.customerName}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Date:</strong> {order.date}</p>
        <p><strong>Status:</strong> {order.status}</p>

        <hr />

        <h4>Items</h4>

        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index}>
                <td>{item.product}</td>
                <td>{item.qty}</td>
                <td>${item.price}</td>
                <td>${item.qty * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4 style={{ marginTop: "20px" }}>
          Grand Total: ${calculateTotal().toFixed(2)}
        </h4>

        <button
          className="btn-cancel"
          style={{ marginTop: "15px" }}
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default OrderModal;
