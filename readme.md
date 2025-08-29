## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

### 📅 Deadline For 60 marks: 29th August, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks

### 📅 Deadline For 30 marks: Any time after 29th August.

---

---
### এই  এসাইনমেন্টের ৬নং সেকশনের সমাধান-
Answer the following questions clearly:
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
> getElementById()- এর মাধ্যমে শুধু একটি এলিমেন্ট সিলেক্ট করা যায়, যদি কোন এলিমেন্টের আইডি id="fixed-msg" এভাবে দেওয়া হয় তবে সেই এলিমেন্ট এই মেথডের মাধ্যমে সিলেক্ট করা যায়। এটি এই ক্ষেত্রে কেবল একটি সিংগেল এলিমেন্ট রিটার্ন করবে।
> getElementsByClassName()- এর মাধ্যমে একাধিক এলিমেন্ট সিলেক্ট করা যায়,  একাধিক এলিমেন্টের ক্লাস class="msg-list" এভাবে দেওয়া হয় তবে সেই সকল এলিমেন্ট এই মেথডের মাধ্যমে সিলেক্ট করা যায়। এটি এই ক্ষেত্রে অ্যারে লাইক অবজেক্ট রিটার্ন করবে এবং যদি পুরো ডকুমেন্টের কোথাও এলিমেন্ট আপডেট হয় তবে এর রিটার্ন করা HTMLCollection এর তালিকাও আপডেট হয়ে যাবে।
>querySelector()- css সিলেক্টর আইডি বা ক্লাস দিয়ে মানে #fixed-msg বা .msg-list এভাবে যেকোন এলিমেন্টে এক্সেস করা যায়, তবে class দিয়ে সিলেক্ট করলে কেবল প্রথম এলিমেন্টটাই সিলেক্ট করবে, এটি কেবল একটি এলিমেন্ট রিটার্ন করবে।
>querySelectorAll()- css সিলেক্টর ক্লাস দিয়ে মানে .msg-list এভাবে সব এলিমেন্টে এক্সেস করা যায়, এটি NodeList রিটার্ন করে যেটি ডকুমেন্টের কোন আপডেট হলে মানে DOM এ কোন পরিবর্তন হলে তার রিটার্ন করা NodeList এ পরিবর্তন করবে না।
---
2. How do you **create and insert a new element into the DOM**?
> const newElement = document.createElement('tag name') দিয়ে এলিমেন্ট তৈরি করতে হয় এবং newElement.textContent দিয়ে সেটার কনটেন্ট দেওয়া কিংবা innerText দিয়েও দেওয়া যায় এরপরে classList.add('class name') দিয়ে ক্লাস নেম সেট করা যায়
> append, appendChild, prepend, before, after, insertBefore এগুলো দিয়ে ইনসার্ট করা যায়।
```sh
const newElement = document.createElement('div');
newElement.textContent = "Hello World!";
newElement.classList.add('my-class');
document.body.appendChild(newElement);
```
---
3. What is **Event Bubbling** and how does it work?
>যখন একটি এলিমেন্টে ইভেন্ট ঘটে (যেমন: ক্লিক), তখন ইভেন্টটি নিচ থেকে উপরের দিকে (টার্গেট → প্যারেন্ট → দাদা → ... → document) প্রোপাগেট করে।
```sh
<div onclick="alert('Div')">
  <button onclick="alert('Button')">ক্লিক করুন</button>
</div>
```
বাটনে ক্লিক করলে প্রথমে বাটনের ইভেন্ট হ্যান্ডলার ট্রিগার হবে, তারপর ডিভের হ্যান্ডলার। এইযে ইভেন্ট এভাবে পাস হচ্ছে এটাকেই বলে**Event Bubbling**

---
4. What is **Event Delegation** in JavaScript? Why is it useful?
>ইভেন্ট ডেলিগেশন হলো একটি প্যারেন্ট এলিমেন্টে ইভেন্ট লিসেনার যোগ করে তার চাইল্ড এলিমেন্টগুলোর ইভেন্ট হ্যান্ডল করার পদ্ধতি। এটি ইভেন্ট বাবলিং-এর উপর ভিত্তি করে কাজ করে।
---
5. What is the difference between **preventDefault() and stopPropagation()** methods?
>preventDefault()	এলিমেন্টের ডিফল্ট behavior বন্ধ করে, ইভেন্ট প্রোপাগেশন বন্ধ করে না।	লিংক ক্লিক করলে পেজ রিলোড না করা। ব্রাউজারের ডিফল্ট অ্যাকশন থামায় (যেমন: লিঙ্কে গেলে ন্যাভিগেশন, form submit, checkbox টগল)।
> stopPropagation()	ইভেন্টের বাবলিং/ক্যাপচারিং বন্ধ করে, ডিফল্ট behavior বন্ধ করে না।	

---

---

## ✅ Main Requirements (50 Marks)

### 1. Navbar

- **Website name & logo** on the left as Figma
- **Heart icon, coin count (default-100), and Copy Count** on the right as Figma

---

### 2. Hero Section

- **Background Gradient** in the Whole Section
- **A Relevant Logo** at the top-center
- **Section Title** in the center
- **A Relevant Slogan** in the bottom Center

---

### 2. Main Section

This Section will have layout as figma

<table border=1 width="100%" cellpadding="50">
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td colspan=9 >Card Section</td>
    <td colspan=3>History Section</td>
 </tr>
</table>

### Emergency Hotline Section

- **Show Minimum 6 cards**. Each card will contain:
  - Icon or Image
  - Relevant Name
  - Relevant Name in English
  - Hotline number for calling
  - Category Badge
  - 💗 icon at left
  - **2 buttons** at the bottom: Copy and Call with icons as Figma

### History Section

- **A white Background** in the whole section
- **History Title with icon** at the top-left as Figma
- **Clear History Button** at the top-right as Figma

---

### 3. Responsiveness (5 Marks)

- Website should be fully **responsive for mobile devices** (implementation up to you)

---

## Functionalities

### 4. Heart Icons

- Clicking on the 💗 **heart icon** of any card will increase the count in the Navbar

---

### 5. Call Buttons

- On clicking a card's **Call Button**, following actions will happen:
  - Show an **alert** with a message including the service name and number
  - Each call will **cut 20 coins**. Reduce Coin after each click.
  - If coins are less than 20, show a relevant alert and terminate the process.
  - Add this service into the **Call History section** with:
    - Service name
    - Service number

---

### 5. Call History Section

- Show all called services with name & number. This will empty initially. when call button clicked it will filled dynamically.
- A **Clear History button** on the right
- Clicking this button will remove all data from call history

---

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

---

## 🧪 Challenges Part (10 Marks)

- On clicking the **Copy button**, show an alert and **increase the copy count** (3 Marks)

- Hotline number will be **copied on click** so it can be pasted anywhere (4 Marks)

💡Hint: You can ask for Help from `ChatGPT` Mamma . Just copy the below prompt , generate answer. use it with your own way.

```bash
I have a card with some text and a button inside it. I want that when a user clicks the button, some specific text from the card is copied to the clipboard using JavaScript. Please provide the code and explain it step by step.
```

- After clicking on the **Call button**, the **exact time of the call** will be shown in the Call History section (3 Marks)

💡Hint: Search Google with that below question

```bash
How to get current local time in js
```

---

## ⚙️ Technology Stack

- HTML
- CSS ( Vanilla , Tailwind CSS , DaisyUI , Others - wheatever you like )
- JavaScript ( Vanilla only. No Framework / Library Allowed )

---

## 📌 Rules

- ✅ Minimum **5 meaningful commits** required
- ❌ No Lorem Ipsum or dummy placeholder text. Use **relevant content only**

---

## 🔗 What to Submit

- 📂 **GitHub Repository**
- 🌐 **Live Link**

---

# Let's Code and Achieve your Dream 🎯
