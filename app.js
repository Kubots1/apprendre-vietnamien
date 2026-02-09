/**
 * ═══════════════════════════════════════════════════════════
 * APPRENDRE LE VIETNAMIEN - APPLICATION PWA
 * ═══════════════════════════════════════════════════════════
 */

/**
 * --- CONFIGURATION & SAUVEGARDE ---
 */
const app = document.getElementById("app");
const moneyDisplay = document.getElementById("money");
const homeBtn = document.getElementById("homeBtn");

let user = JSON.parse(localStorage.getItem("vietGame_save")) || { 
    money: 0, 
    owned: ["alphabet"], 
    seen: [] 
};

let currentAudio = "";
let currentQuizTarget = null;
let currentLessonId = "";
let quizDirection = "fr-to-vi";

const quotes = [
    "Học đi đôi với hành ! (L'étude doit aller avec la pratique)",
    "Tu es sur la bonne voie, petit dragon !",
    "Savais-tu que le vietnamien a 6 tons différents ?",
    "Encore un effort et tu pourras commander un Phở !",
    "N'oublie pas : 'Mười lăm' (15) et pas 'Mười năm' (10 ans) !",
    "Cái khó ló cái khôn ! (La difficulté fait paraître l'intelligence)",
    "Chậm mà chắc ! (Lentement mais sûrement)",
    "Cố lên ! (Bon courage !)",
    "Dans le Sud, on dit 'Mắc' au lieu de 'Đắt' pour dire que c'est cher !",
    "Cậu est le frère de ta maman, et sa femme est Mợ !"
];

/**
 * --- DONNÉES INTÉGRALES ---
 */
const data = [
    {
        id: "alphabet", name: "Alphabet Simple", icon: "fa-font", price: 0,
        items: [
            {l:"A", w:"Con Cá", t:"Papa"}, {l:"Ă", w:"Ăn cơm", t:"A bref"}, {l:"Â", w:"Ân nhân", t:"Eu"},
            {l:"B", w:"Ba", t:"B"}, {l:"C", w:"Cá", t:"K"}, {l:"D", w:"Da", t:"Z/Y"},
            {l:"Đ", w:"Đi", t:"D claqué"}, {l:"E", w:"Em", t:"È"}, {l:"Ê", w:"Bê", t:"É"},
            {l:"G", w:"Gà", t:"G dur"}, {l:"H", w:"Hà", t:"H"}, {l:"I", w:"Đi", t:"I"},
            {l:"K", w:"Kẻ", t:"K"}, {l:"L", w:"Lá", t:"L"}, {l:"M", w:"Mẹ", t:"M"},
            {l:"N", w:"Nó", t:"N"}, {l:"O", w:"Bò", t:"O ouvert"}, {l:"Ô", w:"Cô", t:"O fermé"},
            {l:"Ơ", w:"Mơ", t:"Eu"}, {l:"P", w:"Pin", t:"P"}, {l:"Q", w:"Quả", t:"Kou"},
            {l:"R", w:"Rổ", t:"R roulé/Z"}, {l:"S", w:"Sả", t:"S/CH"}, {l:"T", w:"To", t:"T"},
            {l:"U", w:"Thu", t:"Ou"}, {l:"Ư", w:"Thư", t:"U"}, {l:"V", w:"Về", t:"V"},
            {l:"X", w:"Xe", t:"S"}, {l:"Y", w:"Yêu", t:"I long"}
        ]
    },
    {
        id: "consonnes", name: "Consonnes Complexes", icon: "fa-scroll", price: 100,
        items: [
            {l:"CH", w:"Cho", t:"TCH"}, {l:"KH", w:"Khó", t:"K expiré"}, {l:"PH", w:"Phở", t:"F"},
            {l:"NH", w:"Nhà", t:"GN"}, {l:"NG", w:"Nga", t:"NG"}, {l:"TR", w:"Trà", t:"TR"},
            {l:"GH", w:"Ghi", t:"G (devant i,e,ê)"}, {l:"GI", w:"Gì", t:"Z/Y"}, {l:"QU", w:"Quả", t:"KOU"},
            {l:"TH", w:"Thỏ", t:"T aspiré"}, {l:"NGH", w:"Nghe", t:"NG (devant i,e,ê)"}
        ]
    },
    {
        id: "tons", name: "Les 6 Tons", icon: "fa-music", price: 250,
        items: [
            {l:"A", w:"La", t:"Ton Neutre"}, {l:"À", w:"Là", t:"Ton Descendant"}, 
            {l:"Á", w:"Lá", t:"Ton Montant"}, {l:"Ả", w:"Lả", t:"Ton Interrogatif"}, 
            {l:"Ã", w:"Lã", t:"Ton Glottal"}, {l:"Ạ", w:"Lạ", t:"Ton Lourd"}
        ]
    },
    {
        id: "chiffres", name: "Nombres & Argent", icon: "fa-coins", price: 400,
        items: [
            {l:"0", w:"Không", t:"Zéro"}, {l:"1", w:"Một", t:"Un"}, {l:"2", w:"Hai", t:"Deux"},
            {l:"3", w:"Ba", t:"Trois"}, {l:"4", w:"Bốn", t:"Quatre"}, {l:"5", w:"Năm", t:"Cinq"},
            {l:"6", w:"Sáu", t:"Six"}, {l:"7", w:"Bảy", t:"Sept"}, {l:"8", w:"Tám", t:"Huit"},
            {l:"9", w:"Chín", t:"Neuf"}, {l:"10", w:"Mười", t:"Dix"}, {l:"26", w:"Hai mươi sáu", t:"Vingt-six"}
        ]
    },
    {
        id: "couleurs", name: "Les Couleurs", icon: "fa-palette", price: 300,
        items: [
            {l:"🔴", w:"Màu đỏ", t:"Rouge"}, {l:"🔵", w:"Màu xanh dương", t:"Bleu"}, 
            {l:"🟢", w:"Màu xanh lá", t:"Vert"}, {l:"🟡", w:"Màu vàng", t:"Jaune"},
            {l:"⚫", w:"Màu đen", t:"Noir"}, {l:"⚪", w:"Màu trắng", t:"Blanc"}
        ]
    },
    {
        id: "famille", name: "La Famille", icon: "fa-users", price: 350,
        items: [
            {l:"👴", w:"Ông ngoại", t:"Grand-père (Maternel)"}, {l:"👵", w:"Bà ngoại", t:"Grand-mère (Maternelle)"},
            {l:"👨", w:"Ba", t:"Papa (Sud)"}, {l:"👩", w:"Má", t:"Maman (Sud)"},
            {l:"👦", w:"Anh", t:"Grand frère"}, {l:"👧", w:"Chị", t:"Grande sœur"},
            {l:"👶", w:"Em", t:"Petit(e)"}, {l:"🤵", w:"Cậu", t:"Oncle (maternel)"},
            {l:"👰", w:"Mợ", t:"Femme de l'oncle"}, {l:"💍", w:"Vợ", t:"Femme (Épouse)"},
            {l:"🎩", w:"Chồng", t:"Mari (Époux)"}, {l:"💖", w:"Bạn gái", t:"Petite amie"},
            {l:"💙", w:"Bạn trai", t:"Petit ami"}
        ]
    },
    {
        id: "fruits", name: "Les Fruits", icon: "fa-apple-whole", price: 200,
        items: [
            {l:"🍎", w:"Táo", t:"Pomme"}, {l:"🍌", w:"Chuối", t:"Banane"}, 
            {l:"🍊", w:"Cam", t:"Orange"}, {l:"🥭", w:"Xoài", t:"Mangue"}, 
            {l:"🥑", w:"Bơ", t:"Avocat"}, {l:"🍓", w:"Dâu", t:"Fraise"}, 
            {l:"🍇", w:"Nho", t:"Raisin"}, {l:"🍍", w:"Thơm", t:"Ananas (Sud)"}, 
            {l:"🍉", w:"Dưa hấu", t:"Pastèque"}, {l:"🍋", w:"Chanh", t:"Citron"}
        ]
    },
    {
        id: "adjectifs", name: "Adjectifs (Sud)", icon: "fa-tags", price: 250,
        items: [
            {l:"🐘", w:"Lớn", t:"Grand"}, {l:"🖱️", w:"Nhỏ", t:"Petit"}, 
            {l:"🍱", w:"Nhiều", t:"Beaucoup"}, {l:"🍪", w:"Ít", t:"Peu"}, 
            {l:"📏", w:"Dài", t:"Long"}, {l:"📏", w:"Ngắn", t:"Court"}, 
            {l:"🏠", w:"Gần", t:"Près"}, {l:"🚀", w:"Xa", t:"Loin"}, 
            {l:"💎", w:"Mắc", t:"Cher (Sud)"}, {l:"🏷️", w:"Rẻ", t:"Pas cher"}, 
            {l:"👕", w:"Rộng", t:"Large"}, {l:"👔", w:"Chật", t:"Serré"}, 
            {l:"🦒", w:"Cao", t:"Haut"}, {l:"🐕", w:"Lùn", t:"Court/Petit"}, 
            {l:"❄️", w:"Lạnh", t:"Froid"}, {l:"🔥", w:"Nóng", t:"Chaud"}, 
            {l:"🍔", w:"Mập", t:"Gros (Sud)"}, {l:"🦴", w:"Ốm", t:"Mince (Sud)"}
        ]
    },
    {
        id: "presentation", name: "Se Présenter", icon: "fa-id-card", price: 500,
        items: [
            {l:"Je m'appelle Alexandre", w:"Con tên là Alexandre", t:"Nom"},
            {l:"J'ai 26 ans", w:"Con hai mươi sáu tuổi", t:"Âge"},
            {l:"Je suis Français", w:"Con là người Pháp", t:"Origine"},
            {l:"Ravi de vous rencontrer Grand-père", w:"Con rất vui được gặp ông ngoại", t:"Politesse"},
            {l:"Je suis du signe du Chat", w:"Con tuổi con mèo", t:"Signe"},
            {l:"J'habite en France", w:"Con sống ở Pháp", t:"Lieu"},
            {l:"J'aime manger du Phở", w:"Con thích ăn phở", t:"Goût"},
            {l:"Je parle un peu vietnamien", w:"Con nói tiếng Việt một chút", t:"Langue"},
            {l:"Je suis étudiant", w:"Con là sinh viên", t:"Métier"},
            {l:"Voici mon amie", w:"Đây là bạn của con", t:"Ami"},
            {l:"Je vous aime beaucoup", w:"Con yêu ông bà nhiều", t:"Affection"},
            {l:"Comment allez-vous ?", w:"Ông ngoại khỏe không?", t:"Question"}
        ]
    }
];

/**
 * --- UTILITAIRES ---
 */
function save() { 
    localStorage.setItem("vietGame_save", JSON.stringify(user)); 
    moneyDisplay.innerText = user.money; 
}

function speak(txt) { 
    window.speechSynthesis.cancel(); 
    const u = new SpeechSynthesisUtterance(txt); 
    u.lang = 'vi-VN'; 
    window.speechSynthesis.speak(u); 
}

function removeAccents(str) {
    if(!str) return "";
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
}

function mascotQuote() {
    const msg = quotes[Math.floor(Math.random() * quotes.length)];
    const bubble = document.getElementById("mascot-msg");
    if(bubble) { 
        bubble.innerText = msg; 
        speak(msg); 
    }
}

/**
 * --- NAVIGATION ---
 */
function showHome() {
    homeBtn.style.display = "none";
    app.innerHTML = `
        <div class="welcome-section" style="text-align:center;">
            <div class="mascot-container">
                <div class="bubble-home" id="mascot-msg" onclick="mascotQuote()">Xin chào! Appuie sur moi pour un conseil.</div>
                <img src="assets/turtle.jpg" class="mascot-img" onclick="mascotQuote()" alt="Mascotte Tortue">
            </div>
        </div>
        <div class="main-menu-grid">
            <div class="menu-card btn-jouer" onclick="showLessons()"><i class="fas fa-play"></i> JOUER</div>
            <div class="menu-card btn-boutique" onclick="showStore()"><i class="fas fa-shopping-basket"></i> BOUTIQUE</div>
            <div class="menu-card btn-stats" onclick="showStats()"><i class="fas fa-chart-pie"></i> STATS</div>
            <div class="menu-card btn-regles" onclick="showRules()"><i class="fas fa-scroll"></i> RÈGLES</div>
        </div>`;
    save();
}

function showStore() {
    homeBtn.style.display = "flex";
    app.innerHTML = "<h2 style='text-align:center; color: var(--viet-red); margin-bottom: 20px;'>🛒 BOUTIQUE</h2>";
    data.forEach(item => {
        const isOwned = user.owned.includes(item.id);
        app.innerHTML += `
            <div class="store-item">
                <div>
                    <strong style="font-size: 1.1rem;">${item.name}</strong><br>
                    <small style="color: #666;">${item.items.length} éléments</small>
                </div>
                ${isOwned ? '<span style="color:var(--bamboo-green); font-weight:bold;">✅ ACQUIS</span>' : 
                `<button class="menu-card btn-jouer" style="padding:10px; height:auto; width:100px;" onclick="buyItem('${item.id}', ${item.price})">${item.price} 🪙</button>`}
            </div>`;
    });
}

function buyItem(id, price) {
    if(user.money >= price) { 
        user.money -= price; 
        user.owned.push(id); 
        save(); 
        showStore(); 
        // Feedback visuel
        alert("✅ Cours acheté avec succès !");
    } else { 
        alert("❌ Pas assez de pièces ! Continue à apprendre pour en gagner."); 
    }
}

function showStats() {
    homeBtn.style.display = "flex";
    const total = data.reduce((acc, curr) => acc + curr.items.length, 0);
    const progress = Math.round((user.seen.length / total) * 100);
    app.innerHTML = `
        <div class="stats-container">
            <h2>📊 Ta Maîtrise</h2>
            <p style="font-size: 1.2rem; margin: 15px 0;">
                <strong>${user.seen.length}</strong> / ${total} sons découverts
            </p>
            <div class="progress-bar">
                <div class="progress-fill" style="width:${progress}%"></div>
            </div>
            <p style="text-align:right; font-weight: bold; color: var(--bamboo-green);">${progress}% terminé</p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #eee;">
                <h3 style="color: var(--viet-red);">💰 Économie</h3>
                <p style="font-size: 1.1rem;">Total de pièces : <strong>${user.money}</strong> 🪙</p>
                <p style="font-size: 1.1rem;">Cours possédés : <strong>${user.owned.length}</strong>/${data.length}</p>
            </div>
        </div>`;
}

function showRules() {
    homeBtn.style.display = "flex";
    app.innerHTML = `
        <div class="rules-paper">
            <h2>📜 Comment jouer ?</h2>
            <div style="line-height: 2; margin-top: 20px;">
                <p><strong>🎯 Objectif :</strong> Apprendre le vietnamien en s'amusant !</p>
                
                <h3 style="color: var(--viet-red); margin-top: 25px;">💡 Règles :</h3>
                <p>1️⃣ Clique sur une tuile pour découvrir un mot (+10 🪙)</p>
                <p>2️⃣ Écoute la prononciation en appuyant sur le bouton son 🔊</p>
                <p>3️⃣ Réponds au quiz pour gagner +50 🪙</p>
                <p>4️⃣ Le quiz alterne entre FR→VN et VN→FR !</p>
                
                <h3 style="color: var(--bamboo-green); margin-top: 25px;">🏪 Boutique :</h3>
                <p>• Utilise tes pièces pour acheter de nouveaux cours</p>
                <p>• Chaque cours contient du vocabulaire unique</p>
                
                <h3 style="color: var(--money-green); margin-top: 25px;">🐢 Astuce :</h3>
                <p>Clique sur Maître Tortue pour des conseils et citations motivantes !</p>
            </div>
        </div>`;
}

function showLessons() {
    homeBtn.style.display = "flex";
    app.innerHTML = "<h3 style='text-align:center; color: var(--viet-red); margin-bottom: 20px;'>📚 CHOISIS TA LEÇON</h3>";
    
    let hasLessons = false;
    data.forEach((lesson, i) => {
        if(user.owned.includes(lesson.id)) {
            hasLessons = true;
            app.innerHTML += `
                <div class="menu-card btn-money" style="margin-bottom:15px; padding:20px; display:flex; justify-content:space-between; align-items:center;" onclick="startLesson(${i})">
                    <span><i class="fas ${lesson.icon}"></i> ${lesson.name}</span>
                    <i class="fas fa-chevron-right"></i>
                </div>`;
        }
    });
    
    if(!hasLessons) {
        app.innerHTML += `
            <div class="rules-paper">
                <p style="text-align:center; font-size:1.1rem;">
                    Tu n'as pas encore de leçons !<br>
                    Va dans la <strong>BOUTIQUE</strong> pour en acheter 🛒
                </p>
            </div>`;
    }
}

/**
 * --- CŒUR DU JEU ---
 */
function startLesson(idx) {
    const lesson = data[idx];
    currentLessonId = lesson.id;
    app.innerHTML = `
        <div class="game-layout">
            <div class="main-panel">
                <div class="card" style="padding:10px; background:var(--viet-red); color:white; border-radius:15px; margin-bottom:10px;">
                    <h4 style="margin:0;"><i class="fas ${lesson.icon}"></i> ${lesson.name}</h4>
                </div>
                <div class="alphabet-grid" id="grid"></div>
                <div id="details" class="details-box" style="visibility: hidden;">
                    <h1 id="det-l" style="margin:0; font-size:1.8rem; color:var(--viet-red)"></h1>
                    <div style="flex:1; margin: 0 15px;">
                        <h3 id="det-w" style="margin:0; font-size:1.1rem;"></h3>
                        <p id="det-t" style="margin:2px 0; font-size: 0.8rem; color:#666;"></p>
                    </div>
                    <button class="menu-card btn-jouer" onclick="speak(currentAudio)" style="width:50px; height:50px; border-radius:50%;"><i class="fas fa-volume-up"></i></button>
                </div>
                <div id="quiz-area" class="stats-container" style="border:3px dashed var(--money-green); padding:15px; margin-top:15px; text-align:center;">
                    <h4 style="margin:0;">🎯 DÉFI</h4>
                    <p id="quiz-instruction" style="font-size:0.8rem; color:#666;"></p>
                    <p><strong id="quiz-q" style="font-size:1.8rem; color:var(--money-green);">--</strong></p>
                    <input type="text" id="quiz-input" placeholder="..." style="width:100%; padding:12px; text-align:center; border-radius:10px; border:2px solid var(--wood); font-size:1.1rem;">
                    <div id="quiz-feedback" style="margin-top:10px; font-weight:bold; min-height:1.5em; font-size:1.1rem;"></div>
                    <button id="quiz-btn" class="menu-card btn-money" style="width:100%; margin-top:5px; padding:12px;" onclick="checkAnswer()">VÉRIFIER</button>
                </div>
            </div>
            <div class="side-panel">
                <div class="mascot-container">
                    <div class="bubble-home" id="mascot-msg">Học đi! (Apprends !)</div>
                    <img src="assets/turtle.jpg" class="mascot-img" onclick="mascotQuote()" alt="Maître Tortue">
                    <p style="font-family:'Patrick Hand'; font-size:1.5rem; font-weight:bold; margin-top: 10px;">Maître Tortue</p>
                </div>
            </div>
        </div>`;

    const grid = document.getElementById("grid");
    lesson.items.forEach(item => {
        const t = document.createElement("button"); 
        t.className = "tile"; 
        t.innerText = item.l.length > 3 ? "👁️" : item.l;
        t.onclick = () => {
            const key = lesson.id + "_" + item.w;
            if(!user.seen.includes(key)) { 
                user.seen.push(key); 
                user.money += 10; 
                save(); 
            }
            document.getElementById("details").style.visibility = "visible";
            document.getElementById("det-l").innerText = item.l;
            document.getElementById("det-w").innerText = item.w;
            document.getElementById("det-t").innerText = item.t;
            currentAudio = item.w; 
            speak(item.w);
        };
        grid.appendChild(t);
    });
    newQuizQuestion();
}

/**
 * --- QUIZ ALTERNÉ ---
 */
function newQuizQuestion() {
    const list = data.find(d => d.id === currentLessonId).items;
    currentQuizTarget = list[Math.floor(Math.random() * list.length)];
    quizDirection = (Math.random() > 0.5) ? "fr-to-vi" : "vi-to-fr";
    
    const instr = document.getElementById("quiz-instruction");
    const question = document.getElementById("quiz-q");
    
    if(quizDirection === "fr-to-vi") {
        instr.innerText = "Traduire en VIETNAMIEN :";
        question.innerText = currentQuizTarget.l;
    } else {
        instr.innerText = "Traduire en FRANÇAIS :";
        question.innerText = currentQuizTarget.w;
    }
    document.getElementById("quiz-input").value = "";
    document.getElementById("quiz-feedback").innerText = "";
    const btn = document.getElementById("quiz-btn");
    if(btn) btn.disabled = false;
}

function checkAnswer() {
    const input = removeAccents(document.getElementById("quiz-input").value.toLowerCase().trim());
    const targetVi = removeAccents(currentQuizTarget.w.toLowerCase().trim());
    const targetFr = removeAccents(currentQuizTarget.l.toLowerCase().trim());
    const feedback = document.getElementById("quiz-feedback");
    
    const isCorrect = (quizDirection === "fr-to-vi") ? (input === targetVi) : (input === targetFr);

    if(isCorrect) {
        feedback.style.color = "green"; 
        feedback.innerText = "✅ CORRECT !";
        user.money += 50;
        save();
    } else {
        feedback.style.color = "red";
        feedback.innerText = `❌ FAUX : C'était "${quizDirection === "fr-to-vi" ? currentQuizTarget.w : currentQuizTarget.l}"`;
    }
    
    setTimeout(newQuizQuestion, 2500);
}

/**
 * --- INITIALISATION ---
 */
document.addEventListener('DOMContentLoaded', () => {
    showHome();
});

// Initialisation immédiate au cas où DOMContentLoaded est déjà passé
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showHome);
} else {
    showHome();
}
