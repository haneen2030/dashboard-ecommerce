
function ProductModal (
    {
    showForm,
    editingProduct,
    formData,
    handleInputChange,
    handleSubmit,
    closeForm
}
)
{
    return(
        <>
              {showForm && ( 
        <div className="model-overlay"> 
            
             <div className="modal">

               <h3>{editingProduct ? "Edit Product" : "Add Product"}</h3>
              
               <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Name </label>
                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                    <label>Catagory </label>
                    <input type="text" name="catagory" value={formData.catagory} onChange={handleInputChange} required/>
                </div>
                 <div className="form-group">
                    <label>Price </label>
                    <input type="text" name="price" value={formData.price} onChange={handleInputChange} required/>
                </div>
                 <div className="form-group">
                    <label>Specifications </label>
                    <input type="text" name="specifications" value={formData.specifications} onChange={handleInputChange} required/>
                </div>
                <div className="form-group">
                    <label>Stock </label>
                    <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} required/>
                </div>
                 <div className="form-group">
                    <label>Status </label>
                    <select  name="active" value={formData.active} onChange={handleInputChange} required>
                    <option value="" > Select status</option>
                    <option value={true}>Active</option>
                    <option value={false}>Out Of Stock</option>
                    </select>
                    <div className="form">
                <button type="submit" className="btn-add">{editingProduct ? "Update" : "Add"}</button>
                <button type="button" className="btn-cancel" onClick={closeForm}>Cancel</button>
             </div>
                    
                </div>
                
               </form>

             </div>
             

            </div>  
        )}
        </>
    )
}

export default ProductModal