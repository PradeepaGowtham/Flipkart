import React, {useState,useEffect} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useParams,useNavigate } from "react-router";
import './addproduct.css';


export default function AddProduct() {
  
  const [form, setForm] = useState({
    imageUrl: "",
    name: "",
    description: "",
    seller: "",
    price: "",
  });

  const navigate = useNavigate();

  const {id} = useParams();
  
  useEffect(()=>{
    axios.get(`http://localhost:6000/productslist/${id}`)
   .then(res=>{
   setForm(res.data);
   }).catch((error)=>{
       console.log(error);
   })},[id]
   );

  function updateForm(value:any) {
    return setForm((prev) =>{
      return { ...prev, ...value };
    });
  }
  
    const handleSubmit = (event:any) => {
      event.preventDefault();
      
      const newProduct = {
        imageUrl: form.imageUrl,
        name: form.name,
        description: form.description,
        seller: form.seller,
        price: form.price,
      }

     if(!id){
      axios.post('http://localhost:6000/productslist/add',newProduct)
      .then(res => console.log(res.data))

    setForm( { imageUrl: "",name: "",description: "",seller: "",price: ""});
    navigate("/");
  }
  else
  {
    axios.put(`http://localhost:6000/productslist/${id}`,{ 
      imageUrl: form.imageUrl,
      name: form.name,
      description: form.description,
      seller: form.seller,
      price: form.price,})
    .then(res => console.log(res.data));
  }}
  return(
   
    <div className="form-wrapper">
    
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="imageUrl">
      <Form.Label>ImageUrl:</Form.Label>
      <Form.Control type="text" placeholder="Enter ImageUrl" name="imageUrl" value={form.imageUrl} 
      onChange={(e)=> updateForm({imageUrl:e.target.value})}/>
      </Form.Group>
      <br/>
      <Form.Group controlId="name">
      <Form.Label>Name:</Form.Label>
      <Form.Control type="text" placeholder="Enter Your Name" name="name" value={form.name} 
      onChange={(e)=> updateForm({name:e.target.value})}/>
      </Form.Group>
      <br/>
      <Form.Group controlId="description">
      <Form.Label>Description:</Form.Label>
      <Form.Control type="text" placeholder="Enter Description" name="description"  value={form.description} 
      onChange={(e)=> updateForm({description:e.target.value})}/>
      </Form.Group>
      <br/>
      <Form.Group controlId="seller">
      <Form.Label>Seller:</Form.Label>
      <Form.Control type="text" placeholder="Enter Seller Name" name="seller" value={form.seller} 
      onChange={(e)=> updateForm({seller:e.target.value})}/>
      </Form.Group>
      <br/>
      <Button className="btn" type="submit" value={id ? "Update" : "Submit"}>Add Product</Button>
    </Form>
    </div> 
 )}
