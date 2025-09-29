import React, { useState, useEffect } from 'react';
import './App.css';

function TextCounter() {
  const [text, setText] = useState('');
  const charCount = text.length;
  const isOverLimit = charCount > 100;

  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Bài 1: Bộ đếm ký tự</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập văn bản..."
        style={{ width: '20%', padding: '1px' }}
      />
      <p>Số ký tự: {charCount}</p>
      {isOverLimit && <p style={{ color: 'red' }}>Vượt quá 100 ký tự!</p>}
    </div>
  );
}

function TrafficLight() {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) =>
        prev === 'red' ? 'green' : prev === 'green' ? 'yellow' : 'red'
      );
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setLight((prev) =>
      prev === 'red' ? 'green' : prev === 'green' ? 'yellow' : 'red'
    );
  };

  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Bài 2: Đèn giao thông</h2>
      <div style={{ 
        display: 'flex', 
        gap: '10px',
        flexDirection: 'column',
        alignItems: 'flex-start' }}>        
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: light === 'red' ? 'red' : '#ccc'
          }}
        />
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: light === 'yellow' ? 'yellow' : '#ccc'
          }}
        />
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: light === 'green' ? 'green' : '#ccc'
          }}
        />
      </div>
      <button onClick={handleClick} style={{ marginTop: '10px' }}>
        Chuyển đèn
      </button>
    </div>
  );
}

function TodoList() {
  const [task, setTask] = useState('');
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setList([...list, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Bài 3: Danh sách công việc</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button onClick={handleAdd}>Thêm</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => handleDelete(index)} >
              Xóa
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShoppingCart() {
  const products = [
    { id: 1, name: 'Sản phẩm A', price: 100 },
    { id: 2, name: 'Sản phẩm B', price: 200 },
    { id: 3, name: 'Sản phẩm C', price: 300 }
  ];

  const [cart, setCart] = useState([]);

  const handleAdd = (product) => {
    setCart([...cart, product]);
  };

  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Bài 4: Giỏ hàng</h2>
      <p>
        Giỏ hàng: {totalItems} sản phẩm, tổng tiền: {totalPrice}đ
      </p>
      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: '10px' }}>
          <strong>{product.name}</strong>
          <p>Giá: {product.price}đ</p>
          <button onClick={() => handleAdd(product)}>Thêm vào giỏ</button>
        </div>
      ))}
    </div>
  );
}

function RegistrationForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newErrors = {};
    if (!form.name) {alert('vui lòng điền đầy đủ thông tin')}
    if (!form.email) {alert('vui lòng điền đầy đủ thông tin')}
    if (!form.password) {alert('vui lòng điền đầy đủ thông tin')}

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <div>
      <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Bài 5: Form Đăng ký</h2>
      <input
        type="text"
        name="name"
        placeholder="Tên"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
      <br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      <br />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu"
        value={form.password}
        onChange={handleChange}
      />
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      <br />
      <button onClick={handleSubmit}>Đăng ký</button>

      {submitted && (
        <div style={{ marginTop: '10px' }}>
          <h3>Thông tin đã nhập:</h3>
          <p>Tên: {form.name}</p>
          <p>Email: {form.email}</p>
          <p>Mật khẩu: {form.password}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: '22px', fontWeight: 'bold' }}>Bài thực hành 01</h1>
      <ul>
        <li>Mục tiêu: Làm quen với ReactJS, biết cách tạo Project với CRA, sử dụng component, props, state</li>
        <li>Thời gian làm bài: 08h15 đến 11h45</li>
        <li>Sinh viên tạo repo trên Github, đặt tên là <strong>TH01_B24DCCC065</strong></li>
        <li>Push code lên GitHub và add thầy vào repo (GitHub: <em>thanhpq@ptit.edu.vn</em>)</li>
      </ul>

      <p />
      <TextCounter />
      <p />
      <TrafficLight />
      <p />
      <TodoList />
      <p />
      <ShoppingCart />
      <p />
      <RegistrationForm />
    </div>
  );
}

export default App;
