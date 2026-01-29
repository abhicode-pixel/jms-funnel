// JMS Hospital Funnel - External JavaScript File (VERSION 3.0 - TEXT ONLY)
// IMPORTANT: Upload this file to GitHub to fix the image placeholder issue!

(function () {
    // Create container
    var container = document.createElement('div');
    container.id = 'jms-system';
    container.innerHTML = `
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
                        <input type="tel" name="phone" required minlength="10" pattern="[0-9]{10,}" placeholder="Enter mobile number">
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
                    <div class="jms-avatar-text" style="font-size:14px; font-weight:800; color:#7DC9B5; display:flex; align-items:center; justify-content:center; width:100%; height:100%; text-transform:uppercase;">JMSH</div>
                    <span class="jms-online" style="position:absolute; bottom:2px; right:2px; width:10px; height:10px; background:#10b981; border:2px solid #fff; border-radius:50%;"></span>
                </div>
                <div class="jms-info" style="margin-left:12px;">
                    <strong style="display:block; font-size:15px; font-weight:600;">JMS Care Assistant</strong>
                    <span style="font-size:11px; opacity:0.9;">Online • Typically replies instantly</span>
                </div>
            </div>
            <button class="jms-close-chat" onclick="event.stopPropagation(); jmsCloseChat()" style="background:rgba(255,255,255,0.2); border:none; color:#fff; font-size:24px; cursor:pointer; width:32px; height:32px; border-radius:50%;">&times;</button>
        </div>
        <div id="jms-messages" class="jms-messages" style="height:300px; padding:20px; overflow-y:auto; background:#fafafa; display:flex; flex-direction:column; gap:12px;"></div>
        <div class="jms-chat-footer" style="padding:10px; border-top:1px solid #f0f0f0; display:flex; gap:10px;">
            <input type="text" id="jms-input" placeholder="Type your message..." disabled style="flex:1; border:1px solid #d1f4e8; padding:10px; border-radius:20px; outline:none;">
            <button id="jms-send" onclick="jmsSend()" disabled style="width:40px; height:40px; background:#7DC9B5; border:none; border-radius:50%; color:#fff; cursor:pointer;">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
            </button>
        </div>
    </div>
    
    <!-- EXIT QUIZ -->
    <div id="jms-exit" class="jms-overlay jms-off">
        <div class="jms-quiz">
            <button class="jms-close" onclick="document.getElementById('jms-exit').classList.add('jms-off'); document.body.classList.remove('jms-no-scroll')">&times;</button>
            <div id="jms-step1">
                <div class="jms-icon">🏥</div>
                <h3>Who are you booking for?</h3>
                <div class="jms-choices">
                    <button onclick="jmsNext(2,'Self')">Booking for Myself</button>
                    <button onclick="jmsNext(2,'Family')">Family Member</button>
                    <button onclick="jmsNext(2,'Other')">General Enquiry</button>
                </div>
            </div>
            <div id="jms-step2" style="display:none;">
                <div class="jms-icon">🩺</div>
                <h3>Primary Concern?</h3>
                <div class="jms-choices">
                    <button onclick="jmsNext(3,'Women Health')">Women's Health</button>
                    <button onclick="jmsNext(3,'Gastro')">Gastro / Digestion</button>
                    <button onclick="jmsNext(3,'Child Care')">Child Care</button>
                    <button onclick="jmsNext(3,'Surgery')">Surgery</button>
                    <button onclick="jmsNext(3,'Other')">Other</button>
                </div>
            </div>
            <div id="jms-step3" style="display:none;">
                <div class="jms-icon">⚡</div>
                <h3>Consultation Urgency?</h3>
                <div class="jms-choices">
                    <button onclick="jmsNext(4,'Urgent')">Urgent</button>
                    <button onclick="jmsNext(4,'Routine')">Routine</button>
                </div>
            </div>
            <div id="jms-final" style="display:none;">
                <div class="jms-icon">✅</div>
                <h3>Quick Connect</h3>
                <p>Enter details for priority assistance.</p>
                <form id="jms-exit-form" onsubmit="jmsExitSubmit(event)">
                    <input type="hidden" name="access_key" value="ab6ee57d-c270-4376-afb7-8c6dfc568e89">
                    <input type="hidden" name="subject" value="Exit Intent - JMS Hospital">
                    <input type="hidden" name="quiz_data" id="jms-quiz-data">
                    <div class="jms-field">
                        <label>FULL NAME</label>
                        <input type="text" name="name" required placeholder="Your Name">
                    </div>
                    <div class="jms-field" style="margin-top:10px;">
                        <label>MOBILE NUMBER</label>
                        <input type="tel" name="phone" required minlength="10" placeholder="Your Mobile">
                    </div>
                    <button type="submit" class="jms-submit" style="margin-top:15px;">Confirm Interest</button>
                    <div id="jms-exit-msg"></div>
                </form>
            </div>
        </div>
    </div>
    `;

    document.body.appendChild(container);

    var style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        #jms-system{--primary:#7DC9B5;--primary-light:#9DDCC8;--dark:#2d3748;--gray:#718096;--bg:#f0fdf9;--border:#d1f4e8;font-family:'Poppins',sans-serif!important}#jms-system *{box-sizing:border-box!important; margin:0; padding:0;}.jms-off{display:none!important}.jms-no-scroll{overflow:hidden!important;position:fixed!important;width:100%!important}.jms-notif{position:fixed;bottom:30px;right:30px;background:#fff;padding:12px 24px;border-radius:50px;box-shadow:0 8px 25px rgba(125,201,181,.2);display:flex;align-items:center;gap:12px;z-index:999999;border-left:4px solid var(--primary);animation:jmsSlideIn .5s}.jms-live{background:var(--primary);color:#fff;font-size:8px;font-weight:800;padding:2px 6px;border-radius:4px}.jms-overlay{position:fixed;inset:0;background:rgba(0,0,0,.6);backdrop-filter:blur(8px);z-index:1000000;display:flex;align-items:center;justify-content:center;animation:jmsFadeIn .3s}.jms-modal{background:#fff;width:95%;max-width:520px;border-radius:24px;padding:40px;position:relative;box-shadow:0 30px 60px rgba(0,0,0,.25);animation:jmsPopIn .4s}.jms-close{position:absolute;top:15px;right:15px;width:34px;height:34px;border-radius:50%;background:#f1f5f9;border:none;cursor:pointer;color:var(--gray);font-size:22px;z-index:10;display:flex;align-items:center;justify-content:center}.jms-head{text-align:center;margin-bottom:30px}.jms-text-logo{font-size:48px!important;font-weight:800!important;color:#7DC9B5!important;margin-bottom:10px!important;text-align:center!important;letter-spacing:4px!important;display:block!important;text-transform:uppercase!important}.jms-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-bottom:18px}.jms-field{display:flex;flex-direction:column;text-align:left}.jms-field label{font-size:10px;font-weight:700;color:#4a5568;text-transform:uppercase;margin-bottom:8px}.jms-field input,.jms-field select{height:48px;padding:0 18px;border:2px solid var(--border);border-radius:12px;font-size:14px;background:var(--bg);outline:0}.jms-submit{width:100%;background:linear-gradient(135deg,var(--primary),var(--primary-light));color:#fff;border:none;padding:16px;border-radius:50px;font-size:16px;font-weight:600;cursor:pointer;box-shadow:0 8px 25px rgba(125,201,181,.4)}.jms-chat{position:fixed;bottom:20px;left:20px;width:380px;background:#fff;border-radius:20px;z-index:1000001;box-shadow:0 10px 40px rgba(125,201,181,.25);overflow:hidden;transition:all .3s}.jms-chat.jms-minimized{width:70px;height:70px;border-radius:50%}.jms-avatar{position:relative;width:44px;height:44px;background:#fff;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;border:1px solid #d1f4e8;}.jms-bot{background:#fff;border:1px solid #eee;align-self:flex-start}.jms-user{background:var(--primary);color:#fff;align-self:flex-end}.jms-option{width:100%;border:2px solid var(--primary);color:var(--primary);background:#fff;padding:10px;border-radius:10px;margin-top:5px;cursor:pointer;text-align:left;font-size:13px;font-weight:600}.jms-quiz{background:#fff;width:95%;max-width:400px;border-radius:28px;padding:30px;position:relative;text-align:center}.jms-choices button{width:100%;margin-top:8px;padding:12px;border:1px solid var(--border);background:var(--bg);border-radius:10px;cursor:pointer}.jms-icon{font-size:40px;margin-bottom:10px}@keyframes jmsSlideIn{from{transform:translateX(-100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes jmsFadeIn{from{opacity:0}to{opacity:1}}@keyframes jmsPopIn{from{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}@media (max-width:768px){.jms-chat{width:calc(100% - 40px);left:20px}.jms-modal{padding:30px 20px}.jms-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(style);

    window.API = 'https://api.web3forms.com/submit';
    window.COOKIE = 'jms_v4';
    window.setC = function (n, v, d) { d = d || 1; var dt = new Date(); dt.setTime(dt.getTime() + (d * 24 * 60 * 60 * 1000)); document.cookie = n + "=" + v + ";expires=" + dt.toUTCString() + ";path=/" };
    window.getC = function (n) { var m = document.cookie.match(new RegExp('(^| )' + n + '=([^;]+)')); return m ? m[2] : null };
    window.phase = 0; window.chatStep = 0; window.chatData = {}; window.quizData = {};

    document.addEventListener("DOMContentLoaded", function () {
        setTimeout(function () {
            var n = document.getElementById('jms-notif');
            if (n) n.classList.remove('jms-off');
            setTimeout(function () { if (n) n.classList.add('jms-off'); }, 5500);
        }, 1500);
        if (!getC(COOKIE)) window.addEventListener('scroll', window.checkScroll);
    });

    window.checkScroll = function () {
        if (window.phase > 0) return;
        var h = document.documentElement, b = document.body;
        var scroll = (h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight) * 100;
        if (scroll > 25) {
            window.phase = 1;
            document.getElementById('jms-overlay').classList.remove('jms-off');
            document.body.classList.add('jms-no-scroll');
            window.setC(COOKIE, '1');
        }
    };

    window.jmsClose = function () {
        document.getElementById('jms-overlay').classList.add('jms-off');
        document.body.classList.remove('jms-no-scroll');
        if (window.phase === 1) { window.phase = 2; setTimeout(window.jmsToggleChat, 3000); }
    };

    window.postToWeb3 = async function (fd) {
        var r = await fetch(window.API, { method: 'POST', body: fd });
        return await r.json();
    };

    window.jmsSubmit = function (e) {
        e.preventDefault();
        var btn = e.target.querySelector('button'), msg = document.getElementById('jms-msg');
        btn.innerText = 'Processing...'; btn.disabled = true;
        window.postToWeb3(new FormData(e.target)).then(function (res) {
            if (res.success) {
                msg.innerHTML = '<p style="color:green;margin-top:10px;">✅ Confirmed!</p>';
                setTimeout(window.jmsClose, 2000);
            } else { msg.innerText = 'Error. Try again.'; btn.innerText = 'Confirm'; btn.disabled = false; }
        });
    };

    window.jmsToggleChat = function () {
        var c = document.getElementById('jms-chat');
        if (c.classList.contains('jms-minimized')) {
            c.classList.remove('jms-minimized');
            if (window.chatStep === 0) {
                setTimeout(function () {
                    window.botMsg("Hello! Welcome to JMS Hospital. 🏥");
                    setTimeout(function () {
                        window.botMsg('How can we help today?<button class="jms-option" onclick="startChat(\'Gynae\')">🤰 Gynae</button><button class="jms-option" onclick="startChat(\'Gastro\')">🩺 Gastro</button><button class="jms-option" onclick="startChat(\'Pediatrics\')">👶 Pediatrics</button><button class="jms-option" onclick="startChat(\'Other\')">💊 Other</button>');
                    }, 600);
                }, 300);
            }
        }
    };

    window.jmsCloseChat = function () { document.getElementById('jms-chat').classList.add('jms-minimized'); };
    window.botMsg = function (h) { var d = document.createElement('div'); d.className = 'jms-msg jms-bot'; d.innerHTML = h; document.getElementById('jms-messages').appendChild(d); document.getElementById('jms-messages').scrollTop = 9999; };
    window.userMsg = function (t) { var d = document.createElement('div'); d.className = 'jms-msg jms-user'; d.innerText = t; document.getElementById('jms-messages').appendChild(d); document.getElementById('jms-messages').scrollTop = 9999; };

    window.startChat = function (i) {
        window.userMsg(i); window.chatData.intent = i; window.chatStep = 1;
        setTimeout(function () {
            window.botMsg("May I know your Full Name?");
            document.getElementById('jms-input').disabled = false;
            document.getElementById('jms-send').disabled = false;
        }, 600);
    };

    window.jmsSend = function () {
        var i = document.getElementById('jms-input'), v = i.value.trim();
        if (!v) return; window.userMsg(v); i.value = '';
        if (window.chatStep === 1) { window.chatData.name = v; window.chatStep = 2; setTimeout(function () { window.botMsg("What is your Phone Number?"); }, 800); }
        else if (window.chatStep === 2) {
            window.chatData.phone = v; window.botMsg("Submitting...");
            var fd = new FormData();
            fd.append('access_key', 'ab6ee57d-c270-4376-afb7-8c6dfc568e89');
            fd.append('name', window.chatData.name); fd.append('phone', window.chatData.phone);
            fd.append('subject', 'Chat Lead');
            window.postToWeb3(fd).then(function () { window.botMsg("✅ Submitted!"); setTimeout(window.jmsCloseChat, 3000); });
        }
    };

    var exitShown = false;
    document.addEventListener('mouseleave', function (e) {
        if (e.clientY < 0 && !exitShown && window.phase > 0) {
            exitShown = true;
            document.getElementById('jms-exit').classList.remove('jms-off');
            document.body.classList.add('jms-no-scroll');
        }
    });

    window.jmsNext = function (s, v) {
        if (s === 2) window.quizData.who = v;
        if (s === 3) window.quizData.concern = v;
        if (s === 4) window.quizData.urgency = v;
        document.getElementById('jms-step1').style.display = 'none';
        document.getElementById('jms-step2').style.display = 'none';
        document.getElementById('jms-step3').style.display = 'none';
        document.getElementById('jms-final').style.display = 'none';
        if (s === 4) {
            document.getElementById('jms-final').style.display = 'block';
            document.getElementById('jms-quiz-data').value = JSON.stringify(window.quizData);
        } else document.getElementById('jms-step' + s).style.display = 'block';
    };

    window.jmsExitSubmit = function (e) {
        e.preventDefault();
        var btn = e.target.querySelector('button');
        btn.innerText = 'Processing...';
        window.postToWeb3(new FormData(e.target)).then(function () {
            document.getElementById('jms-exit-msg').innerHTML = '<p style="color:green;">✅ Thanks!</p>';
            setTimeout(function () { document.getElementById('jms-exit').classList.add('jms-off'); document.body.classList.remove('jms-no-scroll'); }, 2000);
        });
    };
})();

