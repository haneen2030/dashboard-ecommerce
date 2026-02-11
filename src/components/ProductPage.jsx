import { productsData } from "../data/data";
import { useState } from "react";
import ProductModal from "./ProductModal";


function ProductPage() {


     const [products , setProducts] = useState(productsData);
     const [searchTerm, setSearchTerm] = useState("");

     
    
     const [formData, setFormData] = useState({
        name:"",
        catagory:"",
        price:"",
        specifications:"",
        stock:"",
        active:""
     });

     const [showForm , setShowForm] = useState(false);
     const [editingProduct , setEditingProduct] = useState(null);
     const handleSubmit = (e) => {
        e.preventDefault();
        if(editingProduct){
            setProducts(
                products.map((item) => item.id === editingProduct ? {
                    ...item,
                    name: formData.name,
                    catagory: formData.catagory,
                    price: formData.price,
                    specifications: formData.specifications,
                    stock: formData.stock,
                    active: formData.stock>0 ,


                } : item
            
            ) 

            )
        } else {
                const newProduct = {
                    id:products.length+1,
                    name: formData.name,
                    catagory: formData.catagory,
                    price: formData.price,
                    specifications: formData.specifications,
                    stock: formData.stock,
                    active: formData.stock>0,
                };
                setProducts([...products,newProduct])
            }
            closeForm();

     }



     const deleteProduct = (id) => {
        setProducts(products.filter((item) => item.id !== id))
     };

     const handleInputChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
     };

    const openAddForm = () => {
        setEditingProduct(null);
        setFormData({name:"" , catagory:"", price:"", specifications:"", stock:"",  active:"" })
        setShowForm(true)
    };

    const openEditForm = (product) => {
        setEditingProduct(product.id);
        setFormData({
            name: product.name,
            catagory: product.catagory,
            price: product.price,
            specifications: product.specifications,
            stock: product.stock,
            active: product.active, 
        });
        setShowForm(true);

    };

    const closeForm = () => {
        setEditingProduct(false)
        setFormData({name:"" , catagory:"", price:"", specifications:"", stock:"",  active:"" })
        setShowForm(false)
    };

    
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchTerm.toLowerCase())
);


   return(
        <div>

            <ProductModal  
            showForm = {showForm}
            editingProduct = {editingProduct}
            formData = {formData}
            handleInputChange = {handleInputChange}
            handleSubmit = {handleSubmit}
            closeForm = {closeForm}
            />

      
            <div className="page-header">
                <h2>Products Page</h2>
                <button onClick={openAddForm}className="btn-add"> Add prodcut +</button>
            </div>
            <div className="search-container">
  <input
    type="text"
    placeholder="Search products..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="search-input"
  />
</div>



            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>image</th>
                        <th>Catagory</th>
                        <th>Price</th>
                        <th>Specifications</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>Action</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                      {filteredProducts.map((item) => (

                        <tr key={item.id}>
                             <td>{item.id}</td>
                        <td> {item.name}</td>

                        <td>
                                <img 
                                src={item.Image}
                                alt={item.name}
                                style={{ width: "50px" , height: "50px", objectFit:"cover"}}
                                
                                />
                            </td>

                        <td> {item.catagory}</td>
                        <td> {item.price}</td>
                        <td>{item.specifications}</td>
                        <td> {item.stock}</td>
                        
                        <td> 
                            <span 
                                 className={item.active ? "badge active" : "badge inactive"} 
                            >
                                 {"  "}
                                 {item.active ? "Active" : "Out Of Stock"}
                            </span>
                            

                        </td>

                        
                        <td>
                            <button className="btn-edit" onClick={() => openEditForm(item)}>Edit</button>
                            <button className="btn-delete" onClick={()=>deleteProduct(item.id)}>Delete</button>
                        </td>                       
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>




    );

}

export default ProductPage;