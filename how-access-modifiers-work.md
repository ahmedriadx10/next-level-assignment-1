# how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP 


Access Modifiers public, private, protected, and readonly এর মধ্যে প্রথম তিনটি প্রপার্টি গুলোর ভিজিবিলিটি নিয়ে কাজ করে এবং readonly মিচুয়াবিলিটি নিয়ে কাজ করে । আমরা এক এক করে উদহারনের access modifiers মাধ্যমে দেখব কিভাবে কাজ করছে



## Public

আমরা Access Modifiers হিসেবে public ব্যাবহার করি তখন class এর প্রপার্টি গুলো class এর বাইরে থেকে আক্সেস করে যায়  অর্থাৎ সেই class থেকে যে ইন্সট্যান্স মেক করা হবে সে  public access modifiers দেয়া প্রপার্ট আক্সেস করতে পারবে আবার যখন সেই class কে ইনহেরিট করা হবে চাইল্ড class থেকে বার চাইল্ড class এর ইন্সট্যান্স সেটিকে আক্সেস করার পারমিট পায়

```bash
class User {
  constructor(
    public name: string,
    public age: number,
  ) {}
}
const user = new User("Riad", 20);
user.age // can access
user.name // can access

```



# private
private Access Modifiers টি খুবই স্ট্রিক্ট আক্সেস এর ব্যাপারে। private ব্যাবহার করা হলে আমরা class এর বাইরে থেকে কোন private প্রপার্টি অ্যাক্সেস করতে পারবেনা 

```bash
class Car {
  constructor(
    public name: string,
    private engineNumber: number,
  ) {}
}
const myCar = new Car ("Tesla", 2020525646);
myCar.engineNumber // can't access

```

প্যারেন্ট class থেকে চাইল্ড class এ যদি class ইনহেরিট করি আমরা চাইল্ড class এর ভেতর থেকেও private প্রপার্ট অ্যাক্সেস করতে পারবনা। আমরা private access modifiers ব্যাবহার করলে শুধুমাত্র যে class এ প্রপার্টি ডিক্লার করব সেই ক্লাস এর মধ্য ছাড়া অ্যাক্সেস করতে সম্ভব না
```bash
class Account {
  constructor(
    public ownerName: string,
    private pin: number,
  ) {}
  getAccountPin():number{
    return this.pin // can access inside own class
  }

}

class BkashAccount extends Account {
  getMyPin(): number {
    return this.pin; // can't access
  }
}

const myAccount = new BkashAccount("Riad", 2020);
```



# protected
protected access modifiers টি class এর বাইরে থেকে প্রপার্টি অ্যাক্সেস করা থেকে প্রটেক্ট করে private এর মতই এবং চাইল্ড কোন class ইনহেরিট হলে private এর মত প্রপার্টি অ্যাক্সেস সুধুমাত্র প্যারেন্ট class এর মধ্য সীমাবদ্ধ রাখেনা বরং চাইল্ড class ও সেই প্রপার্টি অ্যাক্সেস করতে পারে

```bash
class PersonalData {
  constructor(
    public name: string,
    protected nidNumber: number,
  ) {}
}

class Account extends PersonalData {
  getNidNumber(): number {
    return this.nidNumber; // can access inside the child inherited class
  }
}

```


# readonly 

class properties গুলোকে মিচুয়াবিলিটি প্রটেক্ট করে অর্থাৎ যখন readonly ইউজ করা হবে তখন সেটি মিউটেসন করা পসিবল না ।


আমরা নিচে উদহারন এ দেখেতে পাচ্চি যে public ব্যাবহার করে প্রপার্টি টি বাইরে থেকে অ্যাক্সেস করা গেলেও মিউটেশন করা যাবেনা 

```bash
class PersonalData {
  constructor(
    public readonly name: string,
    protected nidNumber: number,
  ) {}
}

const myData = new PersonalData("Riad", 2352356);

myData.name = "Riduwan"; // Error : Cannot assign to name because it is a read-only property.

```

এবার private, protected দেয়া প্রপার্টি গুলো মিউটেট করার চেষ্টা করা যাক 

```bash
class PersonalData {
  constructor(
    public readonly name: string,
    protected readonly nidNumber: number,
    private readonly accountNumber: number,
  ) {}

  changeNidNumber(newNumber: number) {
    this.nidNumber = newNumber; //Cannot assign to nidNumber because it is a read-only property.
  }

  updateAccountNumber(newNum: number) {
    this.accountNumber = newNum; // Same Error
  }
}

const myData = new PersonalData("Riad", 2352356);

```

