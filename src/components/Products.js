import React,{useState} from 'react'
import AddProduct from "./AddProduct"

function Products() 
{
    const [listproducts,setListProducts] = useState([
        {id: 1, name: "Iphone", price: 1200},
        {id: 2, name: "Samsung", price: 1100},
        {id: 3, name: "Huawei", price: 1000},
    ])

    const addNewProduct = (product) =>
    {
        console.log("Add new Product to list",product)
        setListProducts([...listproducts,product])
    }

    return (
        <div>
            <AddProduct onAddNewProduct = {addNewProduct}/>
            <hr />

            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {listproducts.map(item =>(
                    <tr key = {item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                    </tr>
                ))}                   
                </tbody>
            </table>
        </div>
    )
}

export default Products
