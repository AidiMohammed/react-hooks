import React,{useState} from 'react'

const AddProduct = (props) =>
{
    const [product,setProduct] = useState({
        name: "",
        price: 0,
        id: 4
    })

    const inputChange = e =>
    {
        setProduct({...product,[e.target.name]: e.target.value})
        console.log({...product,[e.target.name] : e.target.value});
        console.log("name : ",product.name,"paric: ",product.price);
    }

    const submit = e =>
    {
        e.preventDefault();
        console.log("submit form",product);
        props.onAddNewProduct(product)

        setProduct({
            name: "",
            id: 5,
            price: 0
        })
    }

    return (
        <div>
            <h3>Create new product</h3>

            <form onSubmit = {submit}>
                <div className="form-group">
                    <label></label>
                    <input value = {product.name} onChange = {inputChange} placeholder = "name of product" name = "name" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label></label>
                    <input value = {product.price} onChange = {inputChange} placeholder = "price of product" name = "price" type="text" className="form-control" />
                </div>
                <br />
                <button type ="submit" className="btn btn-block btn-primary">New Product</button>
            </form>
        </div>
    )
}

export default AddProduct 