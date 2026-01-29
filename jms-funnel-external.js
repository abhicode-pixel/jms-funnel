<!-- JMS HOSPITAL FUNNEL - VERSION 3.0 (TEXT ONLY - NO IMAGES) -->
<!-- Copy this entire code and paste in Wix Custom HTML element -->

<div id="jms-system">
    <!-- NOTIFICATION -->
    <div id="jms-notif" class="jms-notif jms-off">
        <div class="jms-live">LIVE</div>
        <p>15+ Appointments booked today.</p>
    </div>

    <!-- BOOKING POPUP -->
    <div id="jms-overlay" class="jms-overlay jms-off">
        <div class="jms-modal">
            <button class="jms-close" onclick="jmsClose()">&times;</button>
            <div class="jms-head">
                <div class="jms-text-logo">JMSH</div>
                <h2 style="color: #4a5568; font-size: 26px; margin: 0; font-weight: 700;">Book Your Consultation</h2>
                <p style="color: #718096; font-size: 14px; margin: 8px 0 0;">Expert Multi-Specialty Care</p>
            </div>
            <form id="jms-form" onsubmit="jmsSubmit(event)">
                <input type="hidden" name="access_key" value="ab6ee57d-c270-4376-afb7-8c6dfc568e89">
                <input type="hidden" name="subject" value="New Booking - JMS Hospital">
                <input type="hidden" name="from_name" value="JMS Hospital Funnel">
                <div class="jms-grid">
                    <div class="jms-field">
                        <label>FULL NAME</label>
                        <input type="text" name="name" required placeholder="Enter your full name">
                    </div>
                    <div class="jms-field">
                        <label>PHONE NUMBER</label>
                        <input type="tel" name="phone" required minlength="10" pattern="[0-9]{10,}"
                            placeholder="Enter mobile number">
                    </div>
                </div>
                <div class="jms-grid">
                    <div class="jms-field">
                        <label>DEPARTMENT / SPECIALTY</label>
                        <select name="specialty" required>
                            <option value="">Select Department</option>
                            <option value="Obstetrics & Gynaecology">Obstetrics & Gynaecology</option>
                            <option value="Fetal Medicine">Fetal Medicine</option>
                            <option value="Gastroenterology">Liver & Gastro Sciences</option>
                            <option value="Internal Medicine">Internal Medicine</option>
                            <option value="Pediatrics">Pediatrics & Neonatal Care</option>
                            <option value="Orthopedics">Orthopedics</option>
                            <option value="Urology">Urology</option>
                            <option value="Surgery">General & Laparoscopic Surgery</option>
                            <option value="Physiotherapy">Physiotherapy</option>
                        </select>
                    </div>
                    <div class="jms-field">
                        <label>PREFERRED DATE</label>
                        <input type="date" name="date">
                    </div>
                </div>
                <button type="submit" class="jms-submit">Confirm Appointment</button>
                <div id="jms-msg"></div>
            </form>
        </div>
    </div>

    <!-- PROFESSIONAL CHAT WIDGET -->
    <div id="jms-chat" class="jms-chat jms-minimized">
        <div class="jms-chat-header" onclick="jmsToggleChat()">
            <div class="jms-agent">
                <div class="jms-avatar">
                    <div class="jms-avatar-text">JMSH</div>
                    <span class="jms-online"></span>
                </div>
                <div class="jms-info">
                    <strong>JMS Care Assistant</strong>
                    <span>Online • Typically replies instantly</span>
                </div>
            </div>
            <button class="jms-close-chat" onclick="event.stopPropagation(); jmsCloseChat()">&times;</button>
        </div>
        <div id="jms-messages" class="jms-messages"></div>
        <div class="jms-chat-footer">
            <input type="text" id="jms-input" placeholder="Type your message..." disabled>
            <button id="jms-send" onclick="jmsSend()" disabled>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
            </button>
        </div>
    </div>

    <!-- EXIT QUIZ -->
    <div id="jms-exit" class="jms-overlay jms-off">
        <div class="jms-quiz">
            <button class="jms-close"
                onclick="document.getElementById('jms-exit').classList.add('jms-off'); document.body.classList.remove('jms-no-scroll')">&times;</button>
            <div id="jms-step1">
                <div class="jms-icon">🏥</div>
                <h3>Who are you booking for?</h3>
                <p>Help us personalize your experience.</p>
                <div class="jms-choices">
                    <button onclick="jmsNext(2,'Self')">Booking for Myself</button>
                    <button onclick="jmsNext(2,'Family')">Family Member</button>
                    <button onclick="jmsNext(2,'Other')">General Enquiry</button>
                </div>
            </div>
            <div id="jms-step2" style="display:none;">
                <div class="jms-icon">🩺</div>
                <h3>Primary Concern?</h3>
                <p>Select the area of consultation.</p>
                <div class="jms-choices">
                    <button onclick="jmsNext(3,'Women Health / Gynae')">Women's Health / Gynae</button>
                    <button onclick="jmsNext(3,'Gastro / Digestion')">Gastro / Digestion Issues</button>
                    <button onclick="jmsNext(3,'Child Care')">Child / Pediatric Care</button>
                    <button onclick="jmsNext(3,'Surgery')">Surgery Consultation</button>
                    <button onclick="jmsNext(3,'Other')">Other Specialties</button>
                </div>
            </div>
            <div id="jms-step3" style="display:none;">
                <div class="jms-icon">⚡</div>
                <h3>Consultation Urgency?</h3>
                <p>Select your priority.</p>
                <div class="jms-choices">
                    <button onclick="jmsNext(4,'Urgent')">Immediate / Urgent</button>
                    <button onclick="jmsNext(4,'Routine')">Routine Checkup</button>
                </div>
            </div>
            <div id="jms-final" style="display:none;">
                <div class="jms-icon">✅</div>
                <h3>Quick Connect</h3>
                <p>Enter details for priority assistance.</p>
                <form id="jms-exit-form" onsubmit="jmsExitSubmit(event)">
                    <input type="hidden" name="access_key" value="ab6ee57d-c270-4376-afb7-8c6dfc568e89">
                    <input type="hidden" name="subject" value="Exit Intent - JMS Hospital">
                    <input type="hidden" name="from_name" value="JMS Hospital Funnel">
                    <input type="hidden" name="quiz_data" id="jms-quiz-data">
                    <div class="jms-field">
                        <label>FULL NAME</label>
                        <input type="text" name="name" id="jms-exit-name" required placeholder="Your Name">
                    </div>
                    <div class="jms-field">
                        <label>MOBILE NUMBER</label>
                        <input type="tel" name="phone" id="jms-exit-phone" required minlength="10" pattern="[0-9]{10,}"
                            placeholder="Your Mobile">
                    </div>
                    <button type="submit" class="jms-submit">Confirm Interest</button>
                    <div id="jms-exit-msg"></div>
                </form>
            </div>
        </div>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    #jms-system {
        --primary: #7DC9B5;
        --primary-light: #9DDCC8;
        --dark: #2d3748;
        --gray: #718096;
        --bg: #f0fdf9;
        --border: #d1f4e8;
        font-family: 'Poppins', sans-serif !important;
    }

    #jms-system * {
        box-sizing: border-box !important;
        margin: 0;
        padding: 0;
    }

    .jms-off {
        display: none !important;
        opacity: 0 !important;
        pointer-events: none !important;
    }

    body.jms-no-scroll {
        overflow: hidden !important;
        position: fixed !important;
        width: 100% !important;
    }

    /* NOTIFICATION */
    .jms-notif {
        position: fixed !important;
        bottom: 30px !important;
        right: 30px !important;
        background: #fff !important;
        padding: 12px 24px !important;
        border-radius: 50px !important;
        box-shadow: 0 8px 25px rgba(125, 201, 181, 0.2) !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
        z-index: 999999 !important;
        border-left: 4px solid var(--primary) !important;
        animation: slideIn 0.5s !important;
    }

    .jms-live {
        background: var(--primary);
        color: #fff;
        font-size: 8px;
        font-weight: 800;
        padding: 2px 6px;
        border-radius: 4px;
    }

    .jms-notif p {
        font-size: 12px;
        color: var(--dark);
    }

    /* OVERLAY */
    .jms-overlay {
        position: fixed !important;
        inset: 0 !important;
        background: rgba(0, 0, 0, 0.6) !important;
        backdrop-filter: blur(8px) !important;
        z-index: 1000000 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        animation: fadeIn 0.3s !important;
        overflow-y: auto !important;
    }

    /* POPUP MODAL */
    .jms-modal {
        background: #fff !important;
        width: 95% !important;
        max-width: 520px !important;
        border-radius: 24px !important;
        padding: 40px !important;
        position: relative !important;
        box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25) !important;
        animation: popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
        margin: 20px !important;
    }

    .jms-close {
        position: absolute !important;
        top: 15px !important;
        right: 15px !important;
        width: 34px !important;
        height: 34px !important;
        border-radius: 50% !important;
        background: #f1f5f9 !important;
        border: none !important;
        cursor: pointer !important;
        color: var(--gray) !important;
        font-size: 22px !important;
        z-index: 10 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        transition: 0.2s !important;
        line-height: 1 !important;
    }

    .jms-close:hover {
        background: var(--primary) !important;
        color: #fff !important;
        transform: rotate(90deg) !important;
    }

    .jms-head {
        text-align: center;
        margin-bottom: 30px;
    }

    /* TEXT LOGO STYLING */
    .jms-text-logo {
        font-size: 48px !important;
        font-weight: 800 !important;
        color: #7DC9B5 !important;
        margin-bottom: 10px !important;
        text-align: center !important;
        letter-spacing: 4px !important;
        font-family: 'Poppins', sans-serif !important;
        display: block !important;
        text-transform: uppercase !important;
    }

    .jms-avatar-text {
        font-size: 14px !important;
        font-weight: 800 !important;
        color: #7DC9B5 !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        width: 100% !important;
        height: 100% !important;
        font-family: 'Poppins', sans-serif !important;
        text-transform: uppercase !important;
    }

    .jms-grid {
        display: grid !important;
        grid-template-columns: 1fr 1fr !important;
        gap: 15px !important;
        margin-bottom: 18px !important;
    }

    .jms-field {
        display: flex !important;
        flex-direction: column !important;
        text-align: left;
    }

    .jms-field label {
        display: block !important;
        font-size: 10px !important;
        font-weight: 700 !important;
        color: #4a5568 !important;
        text-transform: uppercase !important;
        margin-bottom: 8px !important;
        letter-spacing: 0.5px !important;
    }

    .jms-field input,
    .jms-field select {
        width: 100% !important;
        height: 48px !important;
        padding: 0 18px !important;
        border: 2px solid var(--border) !important;
        border-radius: 12px !important;
        font-size: 14px !important;
        background: var(--bg) !important;
        outline: none !important;
        transition: all 0.2s !important;
        font-family: 'Poppins', sans-serif !important;
        color: var(--dark) !important;
    }

    .jms-field input:focus,
    .jms-field select:focus {
        border-color: var(--primary) !important;
        background: #fff !important;
        box-shadow: 0 0 0 4px rgba(125, 201, 181, 0.15) !important;
    }

    .jms-submit {
        width: 100% !important;
        background: linear-gradient(135deg, var(--primary), var(--primary-light)) !important;
        color: #fff !important;
        border: none !important;
        padding: 16px !important;
        border-radius: 50px !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        margin-top: 10px !important;
        box-shadow: 0 8px 25px rgba(125, 201, 181, 0.4) !important;
        transition: 0.3s !important;
    }

    .jms-submit:hover {
        transform: translateY(-3px) !important;
        box-shadow: 0 12px 30px rgba(125, 201, 181, 0.5) !important;
    }

    /* CHAT WIDGET */
    .jms-chat {
        position: fixed !important;
        bottom: 20px !important;
        left: 20px !important;
        width: 380px !important;
        background: #fff !important;
        border-radius: 20px !important;
        z-index: 1000001 !important;
        box-shadow: 0 10px 40px rgba(125, 201, 181, 0.25) !important;
        overflow: hidden !important;
        display: flex !important;
        flex-direction: column !important;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }

    .jms-chat.jms-minimized {
        width: 70px !important;
        height: 70px !important;
        border-radius: 50% !important;
    }

    .jms-chat.jms-minimized .jms-info,
    .jms-chat.jms-minimized .jms-close-chat,
    .jms-chat.jms-minimized .jms-messages,
    .jms-chat.jms-minimized .jms-chat-footer {
        display: none !important;
    }

    .jms-chat.jms-minimized .jms-chat-header {
        padding: 0 !important;
        justify-content: center !important;
        cursor: pointer !important;
        width: 70px !important;
        height: 70px !important;
    }

    .jms-chat-header {
        background: linear-gradient(135deg, var(--primary), var(--primary-light)) !important;
        padding: 18px 20px !important;
        color: #fff !important;
        display: flex !important;
        justify-content: space-between !important;
        align-items: center !important;
    }

    .jms-agent {
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
    }

    .jms-avatar {
        position: relative !important;
        width: 44px !important;
        height: 44px !important;
        background: #fff !important;
        border-radius: 50% !important;
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
    }

    .jms-online {
        position: absolute !important;
        bottom: 2px !important;
        right: 2px !important;
        width: 10px !important;
        height: 10px !important;
        background: #10b981 !important;
        border: 2px solid #fff !important;
        border-radius: 50% !important;
    }

    .jms-messages {
        height: 300px !important;
        padding: 20px !important;
        overflow-y: auto !important;
        background: #fafafa !important;
        display: flex !important;
        flex-direction: column !important;
        gap: 12px !important;
    }

    .jms-msg {
        padding: 12px 16px !important;
        border-radius: 18px !important;
        font-size: 14px !important;
        max-width: 80% !important;
        line-height: 1.5 !important;
    }

    .jms-bot {
        background: #fff;
        border: 1px solid #eee;
        align-self: flex-start;
    }

    .jms-user {
        background: var(--primary);
        color: #fff;
        align-self: flex-end;
    }

    .jms-option {
        width: 100%;
        border: 2px solid var(--primary);
        color: var(--primary);
        background: #fff;
        padding: 10px;
        border-radius: 10px;
        margin-top: 5px;
        cursor: pointer;
        text-align: left;
        font-size: 13px;
        font-weight: 600;
    }

    .jms-chat-footer {
        padding: 10px !important;
        border-top: 1px solid #f0f0f0 !important;
        display: flex !important;
        gap: 10px !important;
    }

    .jms-chat-footer input {
        flex: 1 !important;
        border: 1px solid var(--border) !important;
        padding: 10px !important;
        border-radius: 20px !important;
        outline: none !important;
    }

    .jms-chat-footer button {
        width: 40px !important;
        height: 40px !important;
        background: var(--primary) !important;
        border: none !important;
        border-radius: 50% !important;
        color: #fff !important;
        cursor: pointer !important;
    }

    /* EXIT QUIZ */
    .jms-quiz {
        background: #fff !important;
        width: 95% !important;
        max-width: 400px !important;
        border-radius: 28px !important;
        padding: 30px !important;
        position: relative !important;
        text-align: center !important;
    }

    .jms-icon {
        font-size: 40px;
        margin-bottom: 10px;
    }

    .jms-choices {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .jms-choices button {
        padding: 12px;
        border: 1px solid var(--border);
        background: var(--bg);
        border-radius: 10px;
        cursor: pointer;
    }

    /* ANIMATIONS */
    @keyframes slideIn {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }

        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    @keyframes popIn {
        from {
            transform: scale(0.9);
            opacity: 0;
        }

        to {
            transform: scale(1);
            opacity: 1;
        }
    }

    @media (max-width: 768px) {
        .jms-chat {
            width: calc(100% - 40px);
            left: 20px;
        }

        .jms-modal {
            padding: 30px 20px;
        }

        .jms-grid {
            grid-template-columns: 1fr !important;
        }
    }
</style>

<script>
    const API = 'https://api.web3forms.com/submit';
    const COOKIE = 'jms_v3';
    function setC(n, v, d = 1) { const dt = new Date(); dt.setTime(dt.getTime() + (d * 24 * 60 * 60 * 1000)); document.cookie = n + "=" + v + ";expires=" + dt.toUTCString() + ";path=/"; }
    function getC(n) { var m = document.cookie.match(new RegExp('(^| )' + n + '=([^;]+)')); return m ? m[2] : null; }
    let phase = 0, chatStep = 0, chatData = {}, quizData = {};

    document.addEventListener("DOMContentLoaded", () => {
        setTimeout(() => {
            const n = document.getElementById('jms-notif');
            if (n) n.classList.remove('jms-off');
            setTimeout(() => { if (n) n.classList.add('jms-off'); }, 5500);
        }, 1500);
        if (!getC(COOKIE)) window.addEventListener('scroll', checkScroll);
    });

    function checkScroll() {
        if (phase > 0) return;
        const h = document.documentElement, b = document.body;
        const scroll = (h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight) * 100;
        if (scroll > 25) {
            phase = 1;
            document.getElementById('jms-overlay').classList.remove('jms-off');
            document.body.classList.add('jms-no-scroll');
            setC(COOKIE, '1');
        }
    }

    function jmsClose() {
        document.getElementById('jms-overlay').classList.add('jms-off');
        document.body.classList.remove('jms-no-scroll');
        if (phase === 1) { phase = 2; setTimeout(jmsToggleChat, 3000); }
    }

    async function postToWeb3(fd) {
        const r = await fetch(API, { method: 'POST', body: fd });
        return await r.json();
    }

    function jmsSubmit(e) {
        e.preventDefault();
        const btn = e.target.querySelector('button'), msg = document.getElementById('jms-msg');
        btn.innerText = 'Processing...'; btn.disabled = true;
        postToWeb3(new FormData(e.target)).then(res => {
            if (res.success) {
                msg.innerHTML = '<p style="color:green;margin-top:10px;">✅ Confirmed! We will call you soon.</p>';
                setTimeout(jmsClose, 2000);
            } else { msg.innerText = 'Error. Try again.'; btn.innerText = 'Confirm'; btn.disabled = false; }
        });
    }

    function jmsToggleChat() {
        const c = document.getElementById('jms-chat');
        if (c.classList.contains('jms-minimized')) {
            c.classList.remove('jms-minimized');
            if (chatStep === 0) {
                setTimeout(() => {
                    botMsg("Hello! Welcome to JMS Hospital. 🏥");
                    setTimeout(() => {
                        botMsg(`How can we help today?
                        <button class="jms-option" onclick="startChat('Gynae')">🤰 Gynae</button>
                        <button class="jms-option" onclick="startChat('Gastro')">🩺 Gastro</button>
                        <button class="jms-option" onclick="startChat('Pediatrics')">👶 Pediatrics</button>
                        <button class="jms-option" onclick="startChat('Other')">💊 Other</button>`);
                    }, 600);
                }, 300);
            }
        }
    }

    function jmsCloseChat() { document.getElementById('jms-chat').classList.add('jms-minimized'); }
    function botMsg(h) { const d = document.createElement('div'); d.className = 'jms-msg jms-bot'; d.innerHTML = h; document.getElementById('jms-messages').appendChild(d); document.getElementById('jms-messages').scrollTop = 9999; }
    function userMsg(t) { const d = document.createElement('div'); d.className = 'jms-msg jms-user'; d.innerText = t; document.getElementById('jms-messages').appendChild(d); document.getElementById('jms-messages').scrollTop = 9999; }

    function startChat(i) {
        userMsg(i); chatData.intent = i; chatStep = 1;
        setTimeout(() => {
            botMsg("May I know your Full Name?");
            document.getElementById('jms-input').disabled = false;
            document.getElementById('jms-send').disabled = false;
        }, 600);
    }

    function jmsSend() {
        const i = document.getElementById('jms-input'), v = i.value.trim();
        if (!v) return; userMsg(v); i.value = '';
        if (chatStep === 1) { chatData.name = v; chatStep = 2; setTimeout(() => botMsg("What is your Phone Number?"), 800); }
        else if (chatStep === 2) {
            chatData.phone = v; botMsg("Submitting...");
            const fd = new FormData();
            fd.append('access_key', 'ab6ee57d-c270-4376-afb7-8c6dfc568e89');
            fd.append('name', chatData.name); fd.append('phone', chatData.phone);
            fd.append('subject', 'Chat Lead');
            postToWeb3(fd).then(() => { botMsg("✅ Submitted! We will call you."); setTimeout(jmsCloseChat, 3000); });
        }
    }

    let exitShown = false;
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !exitShown && phase > 0) {
            exitShown = true;
            document.getElementById('jms-exit').classList.remove('jms-off');
        }
    });

    function jmsNext(s, v) {
        if (s === 2) quizData.who = v;
        if (s === 3) quizData.concern = v;
        if (s === 4) quizData.urgency = v;
        document.getElementById('jms-step1').style.display = 'none';
        document.getElementById('jms-step2').style.display = 'none';
        document.getElementById('jms-step3').style.display = 'none';
        document.getElementById('jms-final').style.display = 'none';
        if (s === 4) {
            document.getElementById('jms-final').style.display = 'block';
            document.getElementById('jms-quiz-data').value = JSON.stringify(quizData);
        } else document.getElementById('jms-step' + s).style.display = 'block';
    }

    function jmsExitSubmit(e) {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.innerText = 'Processing...';
        postToWeb3(new FormData(e.target)).then(() => {
            document.getElementById('jms-exit-msg').innerHTML = '<p style="color:green;">✅ Thanks!</p>';
            setTimeout(() => document.getElementById('jms-exit').classList.add('jms-off'), 2000);
        });
    }
</script>
