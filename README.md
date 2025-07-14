# 🧠 AI-Powered Support Ticket Classifier (Node.js + Express)

Automatically classify support tickets by **category** and **priority** using OpenAI GPT-based models — improving triage speed and response accuracy.

![Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Backend](https://img.shields.io/badge/backend-Express.js-orange)
![AI](https://img.shields.io/badge/AI-OpenAI_GPT--4-yellow)

---

## 🚀 Features

- 📬 Submit support tickets via REST API
- 🤖 Auto-classify tickets with OpenAI (or Hugging Face)
- 🗂️ Categories: Billing, Technical Issue, Feedback, General Inquiry
- 🔥 Priority levels: Low, Medium, High, Urgent
- 🧠 Modular AI service integration
- 📦 Background queue support with Bull + Redis (optional)
- 🌍 Deployable on Fly.io, Render, or Docker

---

## 🏗️ Tech Stack

| Layer        | Technology             |
|--------------|------------------------|
| Backend      | Node.js + Express      |
| AI Service   | OpenAI GPT-4 API       |
| DB           | SQLite / PostgreSQL    |
| Queue (opt)  | Bull + Redis           |
| Testing      | Jest + Supertest       |
| Deployment   | Docker, Render, Fly.io |

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/ai-ticket-classifier.git
cd ai-ticket-classifier
```
### 2. Install the dependencies
```bash
npm install
```
### 3. Start the node server
nmp run dev

### 4. Send a ticket creation request via POST
http://localhost:3000/api/tickets
{
  "title": "Can't log in to my account",
  "description": "I reset my password but it still doesn't work."
}

### 5. View tickets
GET http://localhost:3000/api/tickets

## Running Accessing User Interface of AI-Ticket-Classifier

### 1. Ensure that backend API to post tickets is running as per above steps

### 2. Enter UI folder
```bash
cd ai-ticket-ui
```
### 3. Install dependencies
```bash
npm install
```
### 4. Start the Vite Dev Server
   npm run dev

You shall see something like
VITE v4.x.x  ready in 300ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/

### 5. Open URL in browser
👉 http://localhost:5173
