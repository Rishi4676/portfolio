
// Small interactive behaviours: theme toggle, burger menu and project modal

const themeToggle = document.getElementById('themeToggle');
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const projectModal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const year = document.getElementById('year');

// Year
if(year) year.textContent = new Date().getFullYear();

// Theme toggle (persist in localStorage)
document.documentElement.classList.remove('light');
if(localStorage.getItem('theme') === 'light') document.documentElement.classList.add('light');

themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  const nowLight = document.documentElement.classList.contains('light');
  localStorage.setItem('theme', nowLight ? 'light' : 'dark');
  themeToggle.textContent = nowLight ? '☀️' : '🌙';
});

// Burger for small screens
burger.addEventListener('click', () => {
  if(nav.style.display === 'flex'){
    nav.style.display = '';
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.gap = '0.6rem';
  }
});

// Project modal content
function openProjectModal(id){
  projectModal.setAttribute('aria-hidden','false');
  if(id === 1){
    modalBody.innerHTML = `
      <h3>Face Recognition Attendance System</h3>
      <p>An automated attendance solution using face recognition. Key features:\n- Real-time face capture from camera\n- Face encoding and matching\n- Flask-based API to store attendance records\n- Optionally export CSV or integrate with school MIS</p>
      <p><strong>Tech:</strong> Python, OpenCV, face_recognition, NumPy, Flask</p>
    `;
  } else if(id === 2){
    modalBody.innerHTML = `
      <h3>AI Chatbot for Ticket Booking</h3>
      <p>A conversational bot that helps users search and book tickets. Key features:\n- Natural language understanding for intents\n- Session management for booking flow\n- Integration with external booking APIs\n- Simple admin panel to view bookings</p>
      <p><strong>Tech:</strong> Dialogflow / Rasa, Node.js or Flask, REST APIs</p>
    `;
  }
}

function closeProjectModal(){
  projectModal.setAttribute('aria-hidden','true');
  modalBody.innerHTML = '';
}

// Close modal when clicking outside
projectModal.addEventListener('click', (e)=>{
  if(e.target === projectModal) closeProjectModal();
});

// Download resume — placeholder behaviour (replace the link with your resume file path)
const downloadResume = document.getElementById('downloadResume');
if(downloadResume){
  downloadResume.addEventListener('click', (e)=>{
    e.preventDefault();
    // If you have a resume file, set window.location.href = '/files/Rishigesh_Resume.pdf'
    alert('To enable resume download: place a PDF named Rishigesh_Resume.pdf next to your site and update the download link in index.html.');
  });
}
