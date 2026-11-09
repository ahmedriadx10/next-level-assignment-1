# What are the core differences between type aliases and interface in TypeScript


টাইপস্ক্রিপ্টে type aliases এবং interface ব্যবহার করে আমরা আমাদের টাইপ ডিক্লারেশনগুলোকে পুনঃব্যবহারযোগ্য করে তুলি।  type alias অন কাইন্ড অফ ভেরিএবল এর মত,এর মধ্যে আমরা বিভিন্ন টাইপ ডিক্লেয়ার করে রাখতে পারি । টাইপস্ক্রিপ্টের সব টাইপ ডেফিনেশন type alias মধ্যে রেখে ব্যাবহার করা যায় । অপরদিকে interface সাধারণত অবজেক্ট এর টাইপ ডিক্লেয়ার এর জন্য ব্যাবহার হয়।


 type aliases এবং interface এর মধ্যে কিছু কোর ডিফারেন্স দেখা যাকঃ 

####  Union and Literal Type 

```bash
type DataType = string | number
type Status= 'pending' | 'resolved' | 'rejected'

interface Power= string | number  // syntax error দিবে
 interface Status= 'pending' | 'resolved' | 'rejected'
```

#### Duplicate Declartion
আমরা যদি এক নামে একাধিক বার টাইপ ডিক্লার করি তাহলে আমাদের এরর দিবে কিন্তু যদি interface এক নামে একধিকবার ডিক্লেয়ার করি তাহলে একসাথে মার্জ করে দিবে

```
type Food={
  name:string,
  quantity:number
}

type Food={
  price:number
}   // Duplicate Indentifier Error
```

এখানে দুটি মার্জ হয়ে যাবে

```
interface Product {
  name:string,
  quantity:number
}

interface Product{
  price:string
}
```



#### Extension in type aliases and interface

extends কি ওয়ার্ড এর মাধ্যমে আমরা একটি interface থেকে আরেকটি interface এ ইনহ্যারিটেশনের মাধ্যমে প্রপার্টি extend করতে পারি
```bash
interface Engine{
  id:number,
  model:number
}

interface CarEngine extends Engine{
carName:string,
coolingSystem:string

}  
```

Intersection ব্যাবহার করে type aliases extend 

```bash
type Food={name:string}
type Biriyani=Food & {price:number}
```

আবার চাইলে type aliases এর মধ্যে Intersection ব্যাবহার করে interface এর প্রপার্টি টাইপ করে নিয়ে আসতে পারি

```bash
interface Fruit{
name:string
}

type Mango=Fruit & {price:number} // 

```

Intersection ব্যাবহার করেও interface extend কে করা যায়

```bash
interface Order {
  id: number;
}

interface Product {
  productName: string;
  price: number;
}

const order1: Order & Product = {
  id: 135,
  price: 2500,
  productName: "Gaming Mouse K7",
} // এখানে

```

উপরে আমরা type aliases এবং interface এর মধ্য কিছু কোর ডিফারেন্স দেখলাম।আমরা বুঝলাম interface এর কিছু ফিচার আমরা সরাসরি type aliases এ ব্যাবহার করতে পারিনা আবার type aliases এর কিছু ফিচার সরাসরি ব্যাবহার করতে পারিনা এবং কিছু ফিচার উভয়ের জন্য কাজ করে। type aliases এর ফলে TypeScript এর এডভান্স ফিচার যেমন Union ,Literal Type , Tuple ইত্যাদি সরাসরি ভেরিয়েবল বা প্যারামিটার টাইপ হিসেবে ব্যাবহার করতে পারি কিন্তু interface এ্র সেগুলো প্রপার্টি টাইপ হিসেবে ব্যাবহার করতে হয় । 



# When should you choose one over the other?

interface যেহেতু অবজেক্ট এর সাথে কানেক্টড আমাদের উচিত যেসব জায়গাতে অবজেক্ট এর টাইপ ডিক্লেয়ার এর দরকার পড়বে সেসব জায়গায় interface এর ব্যাবহার করা যেমনঃ API বা Date Model এর ক্ষেত্রে । আর type aliases ব্যাবহার করতে পারি  Primitve,Union,Literal type with union , intersection , tuple type declaration or function type declaration ইত্যাদি এর জন্য । 