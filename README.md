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
