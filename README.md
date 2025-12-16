Live Demo click here 
# 🌿 Smart Greenhouse Monitoring & Control System  
### Using ESP8266, ESP32-CAM, Web Dashboard & Plant live Feed

## 📌 Project Overview

The **Smart Greenhouse Monitoring and Control System** is an IoT-based solution designed to automate and monitor greenhouse environments.  
It uses **ESP8266** for sensor data acquisition and device control.
**ESP32-CAM** for plant image capture and live streaming,
**web-based dashboard** for real-time monitoring, manual/auto control.

## 🎯 Objectives

- Monitor environmental parameters in real time  
- Automatically control greenhouse devices  
- Provide remote access via a web dashboard  
- Capture plant images using ESP32-CAM  
- Plant live feed 

## 🧩 System Architecture

Sensors → ESP8266 → Node.js Server → Web Dashboard (Vercel)
↑
ESP32-CAM

## 🔧 Hardware Components

- ESP8266 (NodeMCU)
- ESP32-CAM
- DHT11 (Temperature & Humidity)
- Soil Moisture Sensor
- LDR (Light Sensor)
- MQ135 (Air Quality Sensor)
- I2C LCD (16x2)
- Relay Module
- Fan, Water Pump, Light, Humidifier
- Power Supply

## 💻 Software & Technologies Used

- **Embedded C / Arduino IDE**
- **HTML, CSS, JavaScript**
- **Node.js + Express**
- **ESP8266WiFi & HTTPClient**
- **ESP32 Camera Library**
- **Vercel (Frontend Hosting)**

## 🌐 Web Dashboard Features

- Real-time sensor monitoring
- Manual & Auto mode switching
- Device ON/OFF control
- ESP32-CAM live video stream
- Image capture from camera
- Day / Night mode
- Responsive UI (Mobile & Desktop)

## ⚙️ Operating Modes

### 🔹 Auto Mode
- Fan ON if temperature > threshold
- Pump ON if soil moisture is low
- Light ON in dark conditions
- Humidifier ON if humidity is low

### 🔹 Manual Mode
- User can control devices from the dashboard

## 🚀 Deployment

### Frontend
- Hosted on **Vercel**
- Static files (HTML, CSS, JS)

### Backend
- Node.js server running locally or on cloud
- Handles ESP8266 & ESP32-CAM communication

## 📂 Project Folder Structure


---

## 🔧 Hardware Components

- ESP8266 (NodeMCU)
- ESP32-CAM
- DHT11 (Temperature & Humidity)
- Soil Moisture Sensor
- LDR (Light Sensor)
- MQ135 (Air Quality Sensor)
- I2C LCD (16x2)
- Relay Module
- Fan, Water Pump, Light, Humidifier
- Power Supply

---

## 💻 Software & Technologies Used

- **Embedded C / Arduino IDE**
- **HTML, CSS, JavaScript**
- **Node.js + Express**
- **ESP8266WiFi & HTTPClient**
- **ESP32 Camera Library**
- **TensorFlow.js (AI – Plant Disease Detection)**
- **Vercel (Frontend Hosting)**

---

## 🌐 Web Dashboard Features

- Real-time sensor monitoring
- Manual & Auto mode switching
- Device ON/OFF control
- ESP32-CAM live video stream
- Image capture from camera
- AI-based plant disease detection
- Day / Night mode
- Responsive UI (Mobile & Desktop)

---

## ⚙️ Operating Modes

### 🔹 Auto Mode
- Fan ON if temperature > threshold
- Pump ON if soil moisture is low
- Light ON in dark conditions
- Humidifier ON if humidity is low

### 🔹 Manual Mode
- User can control devices from the dashboard

---

## 🧠 AI Plant Disease Detection

- Leaf images captured from ESP32-CAM
- Images analyzed on the dashboard
- AI model predicts possible plant diseases
- Helps in early detection and prevention

---

## 🚀 Deployment

### Frontend
- Hosted on **Vercel**
- Static files (HTML, CSS, JS)

### Backend
- Node.js server running locally or on cloud
- Handles ESP8266 & ESP32-CAM communication

---

## 📂 Project Folder Structure


---

## 🔧 Hardware Components

- ESP8266 (NodeMCU)
- ESP32-CAM
- DHT11 (Temperature & Humidity)
- Soil Moisture Sensor
- LDR (Light Sensor)
- MQ135 (Air Quality Sensor)
- I2C LCD (16x2)
- Relay Module
- Fan, Water Pump, Light, Humidifier
- Power Supply

---

## 💻 Software & Technologies Used

- **Embedded C / Arduino IDE**
- **HTML, CSS, JavaScript**
- **Node.js + Express**
- **ESP8266WiFi & HTTPClient**
- **ESP32 Camera Library**
- **TensorFlow.js (AI – Plant Disease Detection)**
- **Vercel (Frontend Hosting)**

---

## 🌐 Web Dashboard Features

- Real-time sensor monitoring
- Manual & Auto mode switching
- Device ON/OFF control
- ESP32-CAM live video stream
- Image capture from camera
- AI-based plant disease detection
- Day / Night mode
- Responsive UI (Mobile & Desktop)

---

## ⚙️ Operating Modes

### 🔹 Auto Mode
- Fan ON if temperature > threshold
- Pump ON if soil moisture is low
- Light ON in dark conditions
- Humidifier ON if humidity is low

### 🔹 Manual Mode
- User can control devices from the dashboard

---

## 🧠 AI Plant Disease Detection

- Leaf images captured from ESP32-CAM
- Images analyzed on the dashboard
- AI model predicts possible plant diseases
- Helps in early detection and prevention

---

## 🚀 Deployment

### Frontend
- Hosted on **Vercel**
- Static files (HTML, CSS, JS)

### Backend
- Node.js server running locally or on cloud
- Handles ESP8266 & ESP32-CAM communication

---

## 📂 Project Folder Structure

smart-greenhouse
├── public
│ ├── index.html
│ ├── styles.css
│ ├── script.js
│ └── images
│ ├── Day.png
│ └── Dark.png
├── server.js
├── package.json
├── ESP8266
│ └── esp8266_greenhouse.ino
└── ESP32_CAM
└── esp32_cam.ino

## 🔒 Advantages

- Low-cost automation
- Remote monitoring & control
- Energy efficient
- Scalable and future-ready
- Reduces manual effort
- Improves plant health & yield

## 🔮 Future Enhancements

- Cloud database integration
- Mobile app support
- Advanced AI disease models
- Alerts via SMS / Email
- Voice control
- Multi-greenhouse support

## 👨‍💻 Developed By

**Jeeva**  
Electronics and Communication Engineering  
Smart Greenhouse Project 🌱






