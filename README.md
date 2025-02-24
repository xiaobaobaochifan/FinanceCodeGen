# Finance Code Generator

This repository contains a **Finance Code Generator** designed to help users (department of a university/division of a company) generate structured cost codes based on various criteria. The system allows users to input an **activity description**, select criteria, and generate a **structured finance code**.  

The tool supports three types of activities:  
1. **Standard Activity** (Requires full criteria selection)  
2. **Special Activity 1** (Directly assigns a fixed part code)  
3. **Special Activity 2** (Assigns a fixed part and nominal code)  


## 📌 Features
✔ Dynamic form with conditional field visibility  
✔ Automatic finance code generation  
✔ Simple UI for easy interaction  
✔ JavaScript-based logic for real-time updates  
✔ Easy to modify for your own project


## 🛠 How to Use

### **1️⃣ Standard Activity**
Use this mode if your activity requires a full finance code with all criteria:
1. **Enter an Activity Description** in the text box.
2. **Select "No"** under *"Is this a special activity?"*
3. **Choose values** for:
   - Criterion 1
   - Criterion 2
   - Criterion 3
   - Criterion 4
   - Criterion 5
   - Criterion 6
4. Click **"Generate Code"** to see the generated finance code.

**Example Output:**
```plaintext
Generated Code: 1.2.1.2.1.2
Activity: Research Project Setup
```

### **2️⃣ Special Activity 1**
Use this mode if a **fixed part code** is directly assigned:
1. **Enter an Activity Description**.
2. **Select "Special Activity 1"** under *"Is this a special activity?"*
3. **Choose a Fixed Part Code**.
4. Click **"Generate Code"**.

**Example Output:**
```plaintext
Generated Code: EventA
Activity: Administrative Expense
```


### **3️⃣ Special Activity 2**
Use this mode if the finance code requires both **a fixed part and a nominal code**:
1. **Enter an Activity Description**.
2. **Select "Special Activity 2"** under *"Is this a special activity?"*
3. **Choose a Fixed Part Code**.
4. **Choose a Criterion 6 (Nominal Code)**.
5. Click **"Generate Code"**.

**Example Output:**
```plaintext
Generated Code: EventB.2
Activity: IT Maintenance
```

## 💻 Setup & Running Locally

1. **Clone this repository**:
   ```sh
   git clone https://github.com/xiaobaobaochifan/FinanceCodeGen.git
   cd FinanceCodeGen
2. **Open index.html in your browser**.

## 📜 License

This project is licensed under the MIT License. Feel free to modify and use it.
