// JMS Hospital Funnel - External JavaScript File
// Host this file and load it via the compact loader

(function() {
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
                <img src="https://static.wixstatic.com/media/26414e_12895ca3fb76444f9d9301b295d1c89b~mv2.png" alt="JMS Hospital">
                <h2>Book Your Consultation</h2>
                <p>Expert Multi-Specialty Care in Shalimar Bagh, Delhi</p>
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
                    <img src="https://static.wixstatic.com/media/26414e_12895ca3fb76444f9d9301b295d1c89b~mv2.png" alt="JMS Hospital">
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
            <button class="jms-close" onclick="document.getElementById('jms-exit').classList.add('jms-off'); document.body.classList.remove('jms-no-scroll')">&times;</button>
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
                        <input type="tel" name="phone" id="jms-exit-phone" required minlength="10" pattern="[0-9]{10,}" placeholder="Your Mobile">
                    </div>
                    <button type="submit" class="jms-submit">Confirm Interest</button>
                    <div id="jms-exit-msg"></div>
                </form>
            </div>
        </div>
    </div>
    `;
    
    // Add to body
    document.body.appendChild(container);
    
    // Add styles
    var style = document.createElement('style');
    style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        #jms-system{--primary:#7DC9B5;--primary-light:#9DDCC8;--dark:#2d3748;--gray:#718096;--bg:#f0fdf9;--border:#d1f4e8;font-family:'Poppins',sans-serif!important}#jms-system *{box-sizing:border-box!important}.jms-off{display:none!important;opacity:0!important;pointer-events:none!important}body.jms-no-scroll{overflow:hidden!important;position:fixed!important;width:100%!important}.jms-notif{position:fixed!important;bottom:30px!important;right:30px!important;background:#fff!important;padding:12px 24px!important;border-radius:50px!important;box-shadow:0 8px 25px rgba(125,201,181,.2)!important;display:flex!important;align-items:center!important;gap:12px!important;z-index:999999!important;border-left:4px solid var(--primary)!important;animation:slideIn .5s!important}.jms-live{background:var(--primary);color:#fff;font-size:8px;font-weight:800;padding:2px 6px;border-radius:4px}.jms-notif p{margin:0;font-size:12px;color:var(--dark)}.jms-overlay{position:fixed!important;inset:0!important;background:rgba(0,0,0,.6)!important;backdrop-filter:blur(8px)!important;z-index:1000000!important;display:flex!important;align-items:center!important;justify-content:center!important;animation:fadeIn .3s!important;overflow-y:auto!important}.jms-modal{background:#fff!important;width:95%!important;max-width:520px!important;border-radius:24px!important;padding:40px!important;position:relative!important;box-shadow:0 30px 60px rgba(0,0,0,.25)!important;animation:popIn .4s cubic-bezier(.175,.885,.32,1.275)!important;margin:20px!important}.jms-close{position:absolute!important;top:15px!important;right:15px!important;width:34px!important;height:34px!important;border-radius:50%!important;background:#f1f5f9!important;border:none!important;cursor:pointer!important;color:var(--gray)!important;font-size:22px!important;z-index:10!important;display:flex!important;align-items:center!important;justify-content:center!important;transition:.2s!important;line-height:1!important}.jms-close:hover{background:var(--primary)!important;color:#fff!important;transform:rotate(90deg)!important}.jms-head{text-align:center;margin-bottom:30px}.jms-head img{height:70px;margin-bottom:15px;object-fit:contain}.jms-head h2{margin:0;color:var(--primary);font-size:26px;font-weight:700}.jms-head p{margin:8px 0 0;color:var(--gray);font-size:14px}.jms-grid{display:grid!important;grid-template-columns:1fr 1fr!important;gap:15px!important;margin-bottom:18px!important}.jms-field{display:flex!important;flex-direction:column!important}.jms-field label{display:block!important;font-size:10px!important;font-weight:700!important;color:#4a5568!important;text-transform:uppercase!important;margin-bottom:8px!important;letter-spacing:.5px!important}.jms-field input,.jms-field select{width:100%!important;height:48px!important;padding:14px 18px!important;border:2px solid var(--border)!important;border-radius:12px!important;font-size:14px!important;background:var(--bg)!important;outline:0!important;transition:all .2s!important;font-family:'Poppins',sans-serif!important;color:var(--dark)!important;line-height:normal!important}.jms-field input:focus,.jms-field select:focus{border-color:var(--primary)!important;background:#fff!important;box-shadow:0 0 0 4px rgba(125,201,181,.15)!important}.jms-submit{width:100%!important;background:linear-gradient(135deg,var(--primary),var(--primary-light))!important;color:#fff!important;border:none!important;padding:16px!important;border-radius:50px!important;font-size:16px!important;font-weight:600!important;cursor:pointer!important;margin-top:10px!important;box-shadow:0 8px 25px rgba(125,201,181,.4)!important;transition:.3s!important}.jms-submit:hover{transform:translateY(-3px)!important;box-shadow:0 12px 30px rgba(125,201,181,.5)!important}.jms-chat{position:fixed!important;bottom:20px!important;left:20px!important;width:380px!important;background:#fff!important;border-radius:20px!important;z-index:1000001!important;box-shadow:0 10px 40px rgba(125,201,181,.25)!important;overflow:hidden!important;display:flex!important;flex-direction:column!important;transition:all .3s cubic-bezier(.4,0,.2,1)!important}.jms-chat.jms-minimized{width:70px!important;height:70px!important;border-radius:50%!important}.jms-chat.jms-minimized .jms-close-chat,.jms-chat.jms-minimized .jms-info,.jms-chat.jms-minimized .jms-messages,.jms-chat.jms-minimized .jms-chat-footer{display:none!important}.jms-chat.jms-minimized .jms-chat-header{padding:0!important;justify-content:center!important;cursor:pointer!important;border-radius:50%!important;width:70px!important;height:70px!important}.jms-chat.jms-minimized .jms-agent{justify-content:center!important}.jms-chat-header{background:linear-gradient(135deg,var(--primary),var(--primary-light))!important;padding:18px 20px!important;color:#fff!important;display:flex!important;justify-content:space-between!important;align-items:center!important;cursor:pointer!important;position:relative!important}.jms-agent{display:flex!important;align-items:center!important;gap:12px!important}.jms-avatar{position:relative!important;width:44px!important;height:44px!important;background:#fff!important;border-radius:50%!important;padding:4px!important;box-shadow:0 2px 8px rgba(0,0,0,.1)!important}.jms-avatar img{width:100%!important;height:100%!important;border-radius:50%!important;object-fit:contain!important}.jms-online{position:absolute!important;bottom:2px!important;right:2px!important;width:12px!important;height:12px!important;background:#10b981!important;border:2px solid #fff!important;border-radius:50%!important;animation:pulse 2s infinite!important}.jms-info{flex:1!important}.jms-info strong{display:block!important;font-size:15px!important;font-weight:600!important;margin-bottom:2px!important}.jms-info span{font-size:11px!important;opacity:.9!important}.jms-close-chat{background:rgba(255,255,255,.2)!important;border:none!important;color:#fff!important;font-size:24px!important;cursor:pointer!important;width:32px!important;height:32px!important;display:flex!important;align-items:center!important;justify-content:center!important;line-height:1!important;padding:0!important;transition:.2s!important;border-radius:50%!important}.jms-close-chat:hover{background:rgba(255,255,255,.3)!important;transform:rotate(90deg)!important}.jms-messages{height:300px!important;padding:20px!important;overflow-y:auto!important;background:#fafafa!important;display:flex!important;flex-direction:column!important;gap:12px!important}.jms-msg{padding:12px 16px!important;border-radius:18px!important;font-size:14px!important;max-width:80%!important;line-height:1.5!important;animation:fadeUp .3s!important}.jms-bot{background:#fff!important;border:1px solid #eee!important;align-self:flex-start!important;box-shadow:0 1px 2px rgba(0,0,0,.05)!important}.jms-user{background:linear-gradient(135deg,var(--primary),var(--primary-light))!important;color:#fff!important;align-self:flex-end!important}.jms-option{display:block!important;width:100%!important;border:2px solid var(--primary)!important;color:var(--primary)!important;background:#fff!important;padding:12px 16px!important;border-radius:12px!important;margin-top:8px!important;cursor:pointer!important;text-align:left!important;font-size:13px!important;font-weight:600!important;transition:.2s!important}.jms-option:hover{background:var(--primary)!important;color:#fff!important;transform:translateX(4px)!important}.jms-chat-footer{padding:16px!important;background:#fff!important;border-top:1px solid #f0f0f0!important;display:flex!important;gap:10px!important;align-items:center!important}.jms-chat-footer input{flex:1!important;border:2px solid var(--border)!important;padding:12px 16px!important;background:var(--bg)!important;border-radius:25px!important;font-size:14px!important;outline:0!important;transition:.2s!important}.jms-chat-footer input:focus{border-color:var(--primary)!important;background:#fff!important}.jms-chat-footer button{width:44px!important;height:44px!important;background:linear-gradient(135deg,var(--primary),var(--primary-light))!important;border:none!important;border-radius:50%!important;color:#fff!important;cursor:pointer!important;display:flex!important;align-items:center!important;justify-content:center!important;transition:.2s!important;box-shadow:0 4px 12px rgba(125,201,181,.4)!important}.jms-chat-footer button:hover{transform:scale(1.05)!important;box-shadow:0 6px 16px rgba(125,201,181,.5)!important}.jms-quiz{background:#fff!important;width:95%!important;max-width:450px!important;border-radius:28px!important;padding:40px!important;position:relative!important;text-align:center!important;box-shadow:0 30px 60px rgba(0,0,0,.25)!important;margin:20px!important}.jms-icon{font-size:40px;margin-bottom:15px}.jms-quiz h3{margin:0 0 8px;font-size:22px;color:var(--dark)}.jms-quiz p{margin:0 0 20px;color:var(--gray);font-size:14px}.jms-choices{display:flex;flex-direction:column;gap:10px}.jms-choices button{width:100%;padding:14px;border:2px solid var(--border);background:var(--bg);border-radius:14px;color:#4a5568;font-size:14px;font-weight:600;cursor:pointer;transition:.2s}.jms-choices button:hover{border-color:var(--primary);background:#fff;color:var(--primary);transform:translateY(-2px)}@keyframes slideIn{from{transform:translateX(-100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeUp{from{transform:translateY(15px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes popIn{from{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:.5}}@media (max-width:768px){.jms-notif{display:none!important}.jms-modal,.jms-quiz{padding:30px 25px!important}.jms-grid{grid-template-columns:1fr!important}.jms-chat{width:calc(100% - 40px)!important;left:20px!important;right:20px!important}.jms-chat.jms-minimized{width:60px!important;height:60px!important;left:auto!important}}
    `;
    document.head.appendChild(style);
    
    // Add script functions
    window.API = 'https://api.web3forms.com/submit';
    window.COOKIE = 'jms_v1';
    window.setC = function(n,v,d){d=d||1;var dt=new Date();dt.setTime(dt.getTime()+(d*24*60*60*1000));document.cookie=n+"="+v+";expires="+dt.toUTCString()+";path=/"};
    window.getC = function(n){var m=document.cookie.match(new RegExp('(^| )'+n+'=([^;]+)'));return m?m[2]:null};
    window.phase = 0;
    window.chatStep = 0;
    window.chatData = {};
    window.quizData = {};
    
    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(function() {
            document.getElementById('jms-notif').classList.remove('jms-off');
            setTimeout(function() { document.getElementById('jms-notif').classList.add('jms-off'); }, 5500);
        }, 1500);
        if (!getC(COOKIE)) {
            window.addEventListener('scroll', checkScroll);
        }
    });
    
    window.checkScroll = function() {
        var notif = document.getElementById('jms-notif');
        if (notif && !notif.classList.contains('jms-off')) {
            notif.classList.add('jms-off');
        }
        if (phase > 0) return;
        var h = document.documentElement, b = document.body;
        var scroll = (h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight) * 100;
        if (scroll > 25) {
            phase = 1;
            document.getElementById('jms-overlay').classList.remove('jms-off');
            document.body.classList.add('jms-no-scroll');
            setC(COOKIE, '1');
        }
    };
    
    window.jmsClose = function() {
        document.getElementById('jms-overlay').classList.add('jms-off');
        document.body.classList.remove('jms-no-scroll');
        if (phase === 1) {
            phase = 2;
            setTimeout(function() { jmsToggleChat(); }, 3000);
        }
    };
    
    window.postToWeb3 = async function(formData) {
        var response = await fetch(API, { method: 'POST', body: formData });
        return await response.json();
    };
    
    window.jmsSubmit = function(e) {
        e.preventDefault();
        var btn = e.target.querySelector('button');
        var msg = document.getElementById('jms-msg');
        btn.innerText = 'Processing...'; btn.disabled = true;
        postToWeb3(new FormData(e.target)).then(function(res) {
            if (res.success) {
                msg.innerHTML = '<div style="color:green;margin-top:10px;text-align:center;font-size:13px;">✅ Confirmed! We will call you soon.</div>';
                setTimeout(jmsClose, 2000);
            } else {
                msg.innerText = 'Error. Try again.'; btn.innerText = 'Confirm Appointment'; btn.disabled = false;
            }
        }).catch(function() {
            msg.innerText = 'Error. Try again.'; btn.innerText = 'Confirm Appointment'; btn.disabled = false;
        });
    };
    
    window.jmsToggleChat = function() {
        var chat = document.getElementById('jms-chat');
        if (chat.classList.contains('jms-minimized')) {
            chat.classList.remove('jms-minimized');
            if (chatStep === 0) {
                setTimeout(function() {
                    botMsg("Hello! Welcome to JMS Hospital. 🏥");
                    setTimeout(function() {
                        botMsg('How can we help you today?<button class="jms-option" onclick="startChat(\'Gynae / Women Health\')">🤰 Gynae / Women\'s Health</button><button class="jms-option" onclick="startChat(\'Gastro / Liver\')">🩺 Gastro / Liver Issues</button><button class="jms-option" onclick="startChat(\'Pediatrics\')">👶 Pediatrics / Child Care</button><button class="jms-option" onclick="startChat(\'Surgery\')">🏥 Surgery Consultation</button><button class="jms-option" onclick="startChat(\'Other\')">💊 Other Specialty</button>');
                    }, 600);
                }, 300);
            }
        }
    };
    
    window.jmsCloseChat = function() {
        document.getElementById('jms-chat').classList.add('jms-minimized');
    };
    
    window.botMsg = function(html) {
        var d = document.createElement('div'); d.className = 'jms-msg jms-bot';
        d.innerHTML = html; document.getElementById('jms-messages').appendChild(d);
        document.getElementById('jms-messages').scrollTop = 9999;
    };
    
    window.userMsg = function(txt) {
        var d = document.createElement('div'); d.className = 'jms-msg jms-user';
        d.innerText = txt; document.getElementById('jms-messages').appendChild(d);
        document.getElementById('jms-messages').scrollTop = 9999;
    };
    
    window.startChat = function(intent) {
        userMsg(intent);
        chatData.intent = intent;
        chatStep = 1;
        setTimeout(function() {
            botMsg("May I know your Full Name?");
            document.getElementById('jms-input').disabled = false;
            document.getElementById('jms-send').disabled = false;
            document.getElementById('jms-input').focus();
        }, 600);
    };
    
    window.jmsSend = function() {
        var inp = document.getElementById('jms-input');
        var val = inp.value.trim();
        if (!val) return;
        userMsg(val);
        inp.value = '';
        
        if (chatStep === 1) {
            chatData.name = val;
            chatStep = 2;
            setTimeout(function() { botMsg("Thank you, " + val + ". What is your Phone Number?"); }, 800);
        } else if (chatStep === 2) {
            if (val.length < 10) {
                setTimeout(function() { botMsg("Please enter a valid 10-digit mobile number."); }, 600);
                return;
            }
            chatData.phone = val;
            chatStep = 3;
            setTimeout(function() {
                botMsg("Processing your request...");
                var fd = new FormData();
                fd.append('access_key', 'ab6ee57d-c270-4376-afb7-8c6dfc568e89');
                fd.append('subject', 'Chat Lead - JMS Hospital');
                fd.append('from_name', 'JMS Hospital Funnel');
                fd.append('name', chatData.name);
                fd.append('phone', chatData.phone);
                fd.append('specialty', chatData.intent);
                fd.append('message', 'Generated via chatbot');
                
                postToWeb3(fd).then(function(res) {
                    if (res.success) {
                        botMsg("✅ Request Submitted! Our team will call you shortly.");
                        setTimeout(function() { jmsCloseChat(); }, 3000);
                    } else {
                        botMsg("❌ Error submitting. Please try again.");
                    }
                }).catch(function() {
                    botMsg("❌ Network error. Please try again.");
                });
            }, 1000);
        }
    };
    
    var exitShown = false;
    document.addEventListener('mouseleave', function(e) {
        if (e.clientY < 0 && !exitShown && phase > 0) {
            exitShown = true;
            document.getElementById('jms-exit').classList.remove('jms-off');
            document.body.classList.add('jms-no-scroll');
        }
    });
    
    window.jmsNext = function(step, val) {
        if (step === 2) quizData.who = val;
        if (step === 3) quizData.concern = val;
        if (step === 4) quizData.urgency = val;
        
        document.getElementById('jms-step1').style.display = 'none';
        document.getElementById('jms-step2').style.display = 'none';
        document.getElementById('jms-step3').style.display = 'none';
        document.getElementById('jms-final').style.display = 'none';
        
        if (step === 4) {
            document.getElementById('jms-final').style.display = 'block';
            document.getElementById('jms-quiz-data').value = JSON.stringify(quizData);
        } else {
            document.getElementById('jms-step' + step).style.display = 'block';
        }
    };
    
    window.jmsExitSubmit = function(e) {
        e.preventDefault();
        var btn = e.target.querySelector('button');
        var msg = document.getElementById('jms-exit-msg');
        btn.innerText = 'Processing...'; btn.disabled = true;
        
        postToWeb3(new FormData(e.target)).then(function(res) {
            if (res.success) {
                msg.innerHTML = '<div style="color:green;margin-top:10px;text-align:center;font-size:13px;">✅ Thank you! We will contact you shortly.</div>';
                setTimeout(function() {
                    document.getElementById('jms-exit').classList.add('jms-off');
                    document.body.classList.remove('jms-no-scroll');
                }, 2500);
            } else {
                msg.innerText = 'Error. Try again.'; btn.innerText = 'Confirm Interest'; btn.disabled = false;
            }
        }).catch(function() {
            msg.innerText = 'Error. Try again.'; btn.innerText = 'Confirm Interest'; btn.disabled = false;
        });
    };
})();

