import sony6 from "../assets/img/sony6.jpg"
import ACER9 from "../assets/img/ACER9.jpg"
import LEV7 from "../assets/img/LEV7.jpg"
import LOG10 from "../assets/img/LOG10.jpg"
import SAN8 from "../assets/img/SAN8.jpg"
import LAP1 from "../assets/img/LAP1.jpg"
import LOG2 from "../assets/img/LOG2.jpg"
import KEy3 from "../assets/img/KEy3.jpg"
import IPAD4 from "../assets/img/IPAD4.jpg"
import Mate5 from "../assets/img/Mate5.jpg"
import Le11 from "../assets/img/Le11.jpg"
import hp12 from "../assets/img/hp12.jpg"
import Mo13 from "../assets/img/Mo13.jpg"

export const productsData = [
  {
    id: 1,
    name: "HP Laptop",
    catagory: "Computers & Tablets",
    price: "2500 SAR",
    specifications:"Intel Core i7  ",
    stock: "10000",
    active: true,
    Image:LAP1
    
  },
  {
    id: 2,
    name: "Logitch Mouse",
    catagory: "Computer Supplies",
    price: "180 SAR",
    specifications:"Wireless ",
    stock: "8500",
    active: true,
    Image:LOG2
   
  },
  {
    id: 3,
    name: "Apple Tablet Keyboard",
    catagory: "Computer Supplies",
    price: "150 SAR",
    specifications:"Wired",
    stock: "5000",
    active: true,
    Image:KEy3
    
  },
  {
    id: 4,
    name: "Apple Ipad",
    catagory: "Computers & Tablets",
    price: "1200 SAR",
    specifications:"512 GB ",
    stock: "1200",
    active: true,
    Image:IPAD4
  },
  {
    id: 5,
    name: "HUAWEI MateBook Laptop",
    catagory: "Computers & Tablets",
    price: "2200 SAR",
    specifications:"Intel Core i5 ",
    stock: "4000",
    active: true,
    Image:Mate5
  },
  {
    id: 6,
    name: "Sony Headphones",
    catagory: "Computer Supplies",
    price: "300 SAR",
    specifications:"Wireless",
    stock: "3500",
    active: true,
    Image:sony6
  },
  {
    id: 7,
    name: "Lenovo Tablet ",
    catagory: "Computers & Tablets",
    price: "1000 SAR",
    specifications:" 128 GB",
    stock: "2000",
    active: true,
    Image:LEV7
  },
  {
    id: 8,
    name: "SanDisk USB Flash Drive",
    catagory: "Computer Supplies",
    price: "20 SAR",
    specifications:"32GB",
    stock: "1500",
    active: true,
    Image:SAN8
  },
  {
    id: 9,
    name: "Acer Laptop",
    catagory: "Computers & Tablets",
    price: "2000 SAR",
    specifications:"Intel Core i5",
    stock: "2500",
    active: false,
    Image:ACER9
  },
  {
    id: 10,
    name: "Logitech Keyboard",
    catagory: "Computer Supplies",
    price: "300 SAR",
    specifications:"Wired",
    stock: "3000",
    active: false,
    Image:LOG10
  },
   {
    id: 11,
    name: "Lenovo ThinkPad Laptop",
    catagory: "Computers & Tablets",
    price: "2800 SAR",
    specifications: "Intel Core i7",
    stock: "3000",
    active: true,
    Image:Le11
},

 {

  id: 12,
  name: "HP All-in-One Printer",
  catagory: "Computer Supplies",
  price: "650 SAR",
  specifications: "Wireless ",
  stock: "1800",
  active: true,
  Image:hp12
},
{
  id: 13,
  name: "Dell Monitor",
  catagory: "Computer Supplies",
  price: "900 SAR",
  specifications: "27 inch",
  stock: "2000",
  active: false,
  Image:Mo13
},



];





export const OrdersData = [
  {
    id: "order1",
    customerName: "Mohammed Saleh",
    email:"moh@gmail.com",
    date:"2026-01-02",
    status:"completed",
    items: [
        {product:  "Dell Monitor", qty: 1, price: 900},
        {product: "HP All-in-One Printer", qty: 1, price: 650},
    ]
  },
{
    id: "order2",
    customerName: "Norah Mohammed",
    email:"norah@gmail.com",
    date:"2026-02-02",
    status:"completed",
    items: [
        {product:  "Dell Monitor", qty: 1, price: 900},
        {product: "HP All-in-One Printer", qty: 1, price: 650},
    ]
  },

  {
    id: "order3",
    customerName: "Sara yusef",
    email:"sa@gmail.com",
    date:"2026-02-10",
    status:"pending",
    items: [
        {product:  "Dell Monitor", qty: 1, price: 900},
        {product: "HP All-in-One Printer", qty: 1, price: 650},
    ]
  },
 {
    id: "order4",
    customerName: "Lama Khaled",
    email:"lama@gmail.com",
    date:"2025-12-10",
    status:"canceled",
    items: [
        {product:  "Dell Monitor", qty: 1, price: 900},
        {product: "HP All-in-One Printer", qty: 1, price: 650},
    ]
  },
  {
  id: "order5",
  customerName: "Sara Ahmed",
  email: "sara@gmail.com",
  date: "2026-02-12",
  status: "completed",
  items: [
    { product: "HP Laptop", qty: 1, price: 2500 },
    { product: "Sony Headphones", qty: 2, price: 300 }
  ]
},
{
  id: "order6",
  customerName: "Khaled Omar",
  email: "khaled@gmail.com",
  date: "2026-02-14",
  status: "pending",
  items: [
    { product: "Lenovo ThinkPad Laptop", qty: 1, price: 2800 },
    { product: "SanDisk USB Flash Drive", qty: 3, price: 20 }
  ]
},
{
  id: "order7",
  customerName: "Rania Ali",
  email: "rania@gmail.com",
  date: "2026-02-15",
  status: "canceled",
  items: [
    { product: "Acer Laptop", qty: 1, price: 2000 },
    { product: "Logitech Keyboard", qty: 1, price: 300 }
  ]
}

];


export const UsersData = [
    {
    id: 1,
    name: "Haneen Yusef",
    email: "hanen@gmail.com",
    role: "Admin",
    joinedDate: "2026-01-15",
    status: "active"
  },
  {
    id: 2,
    name: "Mohammed Saleh",
    email: "moh@gmail.com",
    role: "Customer",
    joinedDate: "2025-11-10",
    status: "active"
  },
  {
    id: 3,
    name: "Norah Mohammed",
    email: "norah@gmail.com",
    role: "Customer",
    joinedDate: "2025-12-01",
    status: "active"
  },
 
  {
    id: 4,
    name: "Lama Khaled",
    email: "lama@gmail.com",
    role: "Customer",
    joinedDate: "2025-09-05",
    status: "active"
  }
];
