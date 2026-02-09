# MediCare+ - Modern Healthcare Website UI

A responsive, high-performance healthcare website frontend built with **React**, **Vite**, and **Tailwind CSS**. This project features a clean, professional user interface designed for hospitals, clinics, and medical practitioners.

## 🚀 Features

* **Responsive Design:** Fully adapts to mobile, tablet, and desktop screens.
* **Modern UI/UX:** Clean aesthetics using Tailwind CSS with a professional color palette (Medical Blue & Green).
* **Smooth Animations:** Sections fade, slide, and zoom in on scroll using AOS (Animate On Scroll).
* **Interactive Components:**
    * **Navbar:** Sticky navigation with mobile menu toggle.
    * **Hero Section:** High-conversion design with Call-to-Actions (CTAs).
    * **Services:** Hover effects and modal popups for detailed service info.
    * **Doctors:** Profile cards with social links and direct booking integration.
    * **Appointment Form:** User-friendly form layout.
    * **Back to Top:** Smart floating button for easy navigation.
* **Fast Performance:** Powered by Vite for lightning-fast development and production builds.

## 🛠️ Tech Stack

* **Framework:** [React](https://react.dev/) (v18+)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v3)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Animations:** [AOS](https://michalsnik.github.io/aos/) (Animate On Scroll)

## 📦 Installation

Follow these steps to set up the project locally.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/health-care-site.git](https://github.com/your-username/health-care-site.git)
    cd health-care-site
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the application.

## 📂 Project Structure

```text
src/
├── assets/            # Static images and assets
├── components/        # Reusable UI components
│   ├── Appointment.jsx
│   ├── BackToTop.jsx
│   ├── Doctors.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── Services.jsx
├── App.jsx            # Main application component
├── index.css          # Tailwind directives & global styles
└── main.jsx           # Entry point