// Datos para español e inglés
const data = {
  es: {
    frases: [
      { quote: "El Señor es mi luz y mi salvación, ¿de quién temeré?", ref: "Salmos 27:1", image: "images/phrase1.webp" },
      { quote: "Todo lo puedo en Cristo que me fortalece.", ref: "Filipenses 4:13", image: "images/phrase2.webp" },
      { quote: "No temas, porque yo estoy contigo.", ref: "Isaías 41:10", image: "images/phrase3.webp" },
    ],
    consejos: [
      { title: "Para el estrés", steps: ["Respira y ora por 1 minuto.", "Recuerda una promesa bíblica.", "Actúa en lo que puedes controlar."] },
      { title: "Para la motivación", steps: ["Lee un versículo inspirador.", "Establece una meta pequeña.", "Agradece por lo logrado."] },
    ],
    reto: [
      { day: 1, verse: "Salmos 23:1", text: "El Señor es mi pastor, nada me faltará.", task: "Escribe 3 cosas por las que estás agradecido hoy." },
      { day: 2, verse: "Mateo 11:28", text: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.", task: "Toma 5 minutos para descansar en silencio y orar." },
      { day: 3, verse: "Jeremías 29:11", text: "Porque yo sé los planes que tengo para ustedes, dice el Señor.", task: "Reflexiona sobre una meta personal y cómo confiar en Dios para alcanzarla." },
      { day: 4, verse: "Proverbios 3:5-6", text: "Confía en el Señor con todo tu corazón.", task: "Lee un capítulo de la Biblia y anota un versículo que te impacte." },
      { day: 5, verse: "Salmos 46:10", text: "Estad quietos, y conoced que yo soy Dios.", task: "Dedica 10 minutos a meditar en este versículo." },
      { day: 6, verse: "Juan 16:33", text: "En el mundo tendréis aflicción, pero confiad, yo he vencido al mundo.", task: "Comparte una frase inspiradora con alguien." },
      { day: 7, verse: "Filipenses 4:13", text: "Todo lo puedo en Cristo que me fortalece.", task: "Escribe un plan para continuar tu crecimiento espiritual." },
      { day: 8, verse: "Salmos 34:18", text: "Cercano está el Señor a los quebrantados de corazón.", task: "Ora por alguien que esté pasando por un momento difícil." },
      { day: 9, verse: "Romanos 15:13", text: "El Dios de la esperanza os llene de todo gozo y paz.", task: "Haz una lista de 5 cosas que te dan esperanza." },
      { day: 10, verse: "Isaías 40:31", text: "Los que esperan en el Señor renovarán sus fuerzas.", task: "Haz una caminata corta y reflexiona sobre este versículo." },
      { day: 11, verse: "Efesios 3:20", text: "Dios puede hacer mucho más de lo que pedimos o pensamos.", task: "Escribe una oración pidiendo algo grande a Dios." },
      { day: 12, verse: "Salmos 119:105", text: "Lámpara es a mis pies tu palabra.", task: "Lee un salmo y subraya una frase que te inspire." },
      { day: 13, verse: "2 Corintios 5:7", text: "Por fe andamos, no por vista.", task: "Identifica una área donde necesitas confiar más en Dios." },
      { day: 14, verse: "Romanos 8:28", text: "Todas las cosas ayudan a bien a los que aman a Dios.", task: "Reflexiona sobre cómo un desafío pasado te fortaleció." },
    ],
    quizResults: {
      "estres-paz-confianza": { verse: "Filipenses 4:6-7", text: "No os afanéis por nada, sino sean conocidas vuestras peticiones delante de Dios.", message: "Encuentra paz en la oración y confía en que Dios guarda tu corazón." },
      "estres-paz-paciencia": { verse: "Salmos 46:10", text: "Estad quietos, y conoced que yo soy Dios.", message: "La paciencia te lleva a encontrar descanso en la presencia de Dios." },
      "estres-paz-gratitud": { verse: "1 Tesalonicenses 5:18", text: "Dad gracias en todo, porque esta es la voluntad de Dios.", message: "La gratitud transforma tu perspectiva y trae paz." },
      "estres-direccion-confianza": { verse: "Proverbios 3:5-6", text: "Confía en el Señor con todo tu corazón.", message: "Confía en Dios para guiarte en cada paso." },
      "estres-direccion-paciencia": { verse: "Salmos 37:7", text: "Guarda silencio ante el Señor, y espera en él.", message: "Espera con paciencia; Dios te mostrará el camino." },
      "estres-direccion-gratitud": { verse: "Salmos 32:8", text: "Te haré entender y te enseñaré el camino.", message: "Da gracias por la dirección divina que nunca falla." },
      "estres-fuerza-confianza": { verse: "Isaías 41:10", text: "No temas, porque yo estoy contigo.", message: "Tu fuerza viene de saber que Dios está a tu lado." },
      "estres-fuerza-paciencia": { verse: "Isaías 40:31", text: "Los que esperan en el Señor renovarán sus fuerzas.", message: "La paciencia te lleva a una fuerza renovada." },
      "estres-fuerza-gratitud": { verse: "Nehemías 8:10", text: "El gozo del Señor es vuestra fuerza.", message: "Encuentra fuerza en la gratitud y el gozo en Dios." },
      "duda-paz-confianza": { verse: "Juan 16:33", text: "En el mundo tendréis aflicción, pero confiad, yo he vencido al mundo.", message: "Confía en Jesús para encontrar paz en medio de las dudas." },
      "duda-paz-paciencia": { verse: "Salmos 27:14", text: "Espera en el Señor; esfuérzate, y aliéntese tu corazón; sí, espera en el Señor.", message: "La paciencia fortalece tu fe y disipa las dudas." },
      "duda-paz-gratitud": { verse: "Colosenses 3:15", text: "La paz de Dios gobierne en vuestros corazones.", message: "La gratitud te ayuda a recibir la paz que disipa las dudas." },
      "duda-direccion-confianza": { verse: "Jeremías 29:11", text: "Porque yo sé los planes que tengo para ustedes.", message: "Confía en los planes de Dios para superar tus dudas." },
      "duda-direccion-paciencia": { verse: "Habacuc 2:3", text: "Aunque la visión tarda en cumplirse, no se demorará.", message: "Espera con paciencia; Dios te dará claridad." },
      "duda-direccion-gratitud": { verse: "Salmos 119:105", text: "Lámpara es a mis pies tu palabra.", message: "Agradece por la guía de la Palabra de Dios." },
      "duda-fuerza-confianza": { verse: "2 Corintios 12:9", text: "Bástate mi gracia, porque mi poder se perfecciona en la debilidad.", message: "Confía en que la gracia de Dios es suficiente." },
      "duda-fuerza-paciencia": { verse: "Salmos 28:7", text: "El Señor es mi fuerza y mi escudo.", message: "Espera en Dios para encontrar fuerza frente a las dudas." },
      "duda-fuerza-gratitud": { verse: "Efesios 6:10", text: "Fortaleceos en el Señor y en el poder de su fuerza.", message: "Da gracias por la fortaleza que Dios te da." },
      "desmotivacion-paz-confianza": { verse: "Romanos 15:13", text: "El Dios de la esperanza os llene de todo gozo y paz.", message: "Confía en el Dios de la esperanza para renovar tu motivación." },
      "desmotivacion-paz-paciencia": { verse: "Salmos 27:14", text: "Espera en el Señor; esfuérzate, y aliéntese tu corazón.", message: "La paciencia te ayuda a recuperar la motivación en Dios." },
      "desmotivacion-paz-gratitud": { verse: "1 Tesalonicenses 5:18", text: "Dad gracias en todo.", message: "La gratitud renueva tu paz y motivación." },
      "desmotivacion-direccion-confianza": { verse: "Jeremías 29:11", text: "Porque yo sé los planes que tengo para ustedes.", message: "Confía en los planes de Dios para encontrar dirección y motivación." },
      "desmotivacion-direccion-paciencia": { verse: "Habacuc 2:3", text: "Aunque la visión tarda en cumplirse, no se demorará.", message: "Espera con paciencia; la dirección de Dios renovará tu motivación." },
      "desmotivacion-direccion-gratitud": { verse: "Salmos 119:105", text: "Lámpara es a mis pies tu palabra.", message: "Agradece por la guía que te motiva a avanzar." },
      "desmotivacion-fuerza-confianza": { verse: "Filipenses 4:13", text: "Todo lo puedo en Cristo que me fortalece.", message: "Confía en Cristo para recuperar tu fuerza y motivación." },
      "desmotivacion-fuerza-paciencia": { verse: "Isaías 40:31", text: "Los que esperan en el Señor renovarán sus fuerzas.", message: "La paciencia te lleva a una fuerza renovada contra la desmotivación." },
      "desmotivacion-fuerza-gratitud": { verse: "Nehemías 8:10", text: "El gozo del Señor es vuestra fuerza.", message: "La gratitud trae gozo y fuerza para superar la desmotivación." },
    },
    translations: {
      verseWidgetTitle: "Versículo del día",
      shareVerse: "Compartir",
      heroTitle: "Encuentra consuelo y fortaleza en las promesas de Dios",
      heroSubtitle: "Frases, consejos y retos diarios basados en la Biblia Reina Valera para tu vida.",
      ctaPrimary: "Recibir esperanza diaria",
      ctaSecondary: "Comenzar el reto",
      frasesTitle: "Frases y versículos",
      frasesLead: "Verdades bíblicas aplicadas en palabras simples, para jóvenes y adultos.",
      consejosTitle: "Consejos prácticos",
      consejosLead: "Pequeños pasos con gran impacto. Guías de 3 pasos para tu momento.",
      retoTitle: "Reto de 14 días de esperanza",
      retoLead: "Un versículo y una acción diaria para fortalecer tu fe.",
      retoReset: "Reiniciar reto",
      downloadReto: "Descargar reto",
      videosTitle: "Videos inspiradores",
      videosLead: "Mensajes cortos para tu día a día.",
      quizTitle: "Cuestionario personalizado",
      quizLead: "Responde 3 preguntas para recibir un versículo a tu medida.",
      quizQ1: "¿Cómo te sientes hoy?",
      quizQ2: "¿Qué necesitas hoy?",
      quizQ3: "¿Qué te gustaría mejorar?",
      quizNext: "Siguiente",
      quizSubmit: "Ver mi versículo",
      blogTitle: "Reflexiones",
      post1Title: "Cuando el silencio también habla",
      post1Excerpt: "En los momentos sin respuestas, Dios trabaja en lo profundo. Aprende a reconocer la paz que no depende de circunstancias.",
      post1Content1: "A veces, el silencio de Dios no es ausencia, sino una invitación a confiar más profundamente.",
      post1Content2: "Reflexiona en cómo los momentos de quietud han moldeado tu fe.",
      post1Content3: "Practica la paciencia y busca la paz en la oración diaria.",
      post2Title: "El tiempo perfecto",
      post2Excerpt: "No te compares: cada proceso tiene su ritmo. Persevera con fe y acción diaria.",
      post2Content1: "Dios tiene un plan perfecto para cada uno, incluso cuando no lo entendemos.",
      post2Content2: "Confía en que cada paso cuenta, aunque sea pequeño.",
      post2Content3: "Celebra tus avances y mantén la fe en el proceso.",
      readMore: "Leer más",
      resourcesTitle: "Recursos",
      res1: "Reto de 14 días de esperanza",
      res1Desc: "Acciones simples y versículos para cada día.",
      res2: "Oraciones guiadas",
      res2Desc: "Textos breves para tus momentos difíciles.",
      download: "Descargar",
      subscribeTitle: "Recibe esperanza en tu bandeja",
      subscribeLead: "Suscríbete y recibe un PDF gratuito con 10 versículos para tiempos difíciles.",
      emailLabel: "Correo electrónico",
      subscribeBtn: "Suscribirme",
      subscribeNote: "No spam. Solo mensajes breves y edificantes.",
      pushSubscribe: "Activar notificaciones push",
      contactTitle: "Contacto",
      nameLabel: "Nombre",
      messageLabel: "Mensaje",
      sendBtn: "Enviar",
      donate: "Apoya este ministerio",
    },
  },
  en: {
    frases: [
      { quote: "The Lord is my light and my salvation, whom shall I fear?", ref: "Psalms 27:1", image: "images/phrase1.webp" },
      { quote: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13", image: "images/phrase2.webp" },
      { quote: "Fear not, for I am with you.", ref: "Isaiah 41:10", image: "images/phrase3.webp" },
    ],
    consejos: [
      { title: "For stress", steps: ["Breathe and pray for 1 minute.", "Recall a biblical promise.", "Act on what you can control."] },
      { title: "For motivation", steps: ["Read an inspiring verse.", "Set a small goal.", "Give thanks for what you've achieved."] },
    ],
    reto: [
      { day: 1, verse: "Psalms 23:1", text: "The Lord is my shepherd, I shall not want.", task: "Write down 3 things you are grateful for today." },
      { day: 2, verse: "Matthew 11:28", text: "Come to me, all you who are weary and burdened, and I will give you rest.", task: "Take 5 minutes to rest quietly and pray." },
      { day: 3, verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord.", task: "Reflect on a personal goal and how to trust God to achieve it." },
      { day: 4, verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart.", task: "Read a Bible chapter and note a verse that inspires you." },
      { day: 5, verse: "Psalms 46:10", text: "Be still, and know that I am God.", task: "Spend 10 minutes meditating on this verse." },
      { day: 6, verse: "John 16:33", text: "In this world you will have trouble. But take heart! I have overcome the world.", task: "Share an inspiring phrase with someone." },
      { day: 7, verse: "Philippians 4:13", text: "I can do all things through Christ who strengthens me.", task: "Write a plan to continue your spiritual growth." },
      { day: 8, verse: "Psalms 34:18", text: "The Lord is close to the brokenhearted.", task: "Pray for someone going through a tough time." },
      { day: 9, verse: "Romans 15:13", text: "May the God of hope fill you with all joy and peace.", task: "Make a list of 5 things that give you hope." },
      { day: 10, verse: "Isaiah 40:31", text: "Those who hope in the Lord will renew their strength.", task: "Take a short walk and reflect on this verse." },
      { day: 11, verse: "Ephesians 3:20", text: "God is able to do immeasurably more than all we ask or imagine.", task: "Write a prayer asking God for something big." },
      { day: 12, verse: "Psalms 119:105", text: "Your word is a lamp to my feet.", task: "Read a psalm and highlight a phrase that inspires you." },
      { day: 13, verse: "2 Corinthians 5:7", text: "For we walk by faith, not by sight.", task: "Identify an area where you need to trust God more." },
      { day: 14, verse: "Romans 8:28", text: "All things work together for good to those who love God.", task: "Reflect on how a past challenge strengthened you." },
    ],
    quizResults: {
      "estres-paz-confianza": { verse: "Philippians 4:6-7", text: "Do not be anxious about anything, but in everything, by prayer and petition, let your requests be made known to God.", message: "Find peace in prayer and trust that God guards your heart." },
      "estres-paz-paciencia": { verse: "Psalms 46:10", text: "Be still, and know that I am God.", message: "Patience leads you to find rest in God's presence." },
      "estres-paz-gratitud": { verse: "1 Thessalonians 5:18", text: "Give thanks in all circumstances, for this is God's will.", message: "Gratitude transforms your perspective and brings peace." },
      "estres-direccion-confianza": { verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart.", message: "Trust God to guide you in every step." },
      "estres-direccion-paciencia": { verse: "Psalms 37:7", text: "Be still before the Lord and wait patiently for him.", message: "Wait patiently; God will show you the way." },
      "estres-direccion-gratitud": { verse: "Psalms 32:8", text: "I will instruct you and teach you in the way you should go.", message: "Give thanks for the divine guidance that never fails." },
      "estres-fuerza-confianza": { verse: "Isaiah 41:10", text: "Fear not, for I am with you.", message: "Your strength comes from knowing God is by your side." },
      "estres-fuerza-paciencia": { verse: "Isaiah 40:31", text: "Those who hope in the Lord will renew their strength.", message: "Patience leads to renewed strength." },
      "estres-fuerza-gratitud": { verse: "Nehemiah 8:10", text: "The joy of the Lord is your strength.", message: "Find strength in gratitude and joy in God." },
      "duda-paz-confianza": { verse: "John 16:33", text: "In this world you will have trouble. But take heart!", message: "Trust in Jesus to find peace amid doubts." },
      "duda-paz-paciencia": { verse: "Psalms 27:14", text: "Wait for the Lord; be strong and take heart and wait for the Lord.", message: "Patience strengthens your faith and dispels doubts." },
      "duda-paz-gratitud": { verse: "Colossians 3:15", text: "Let the peace of Christ rule in your hearts.", message: "Gratitude helps you receive peace that dispels doubts." },
      "duda-direccion-confianza": { verse: "Jeremiah 29:11", text: "For I know the plans I have for you.", message: "Trust in God's plans to overcome your doubts." },
      "duda-direccion-paciencia": { verse: "Habakkuk 2:3", text: "Though the vision tarries, it will not delay.", message: "Wait patiently; God will give you clarity." },
      "duda-direccion-gratitud": { verse: "Psalms 119:105", text: "Your word is a lamp to my feet.", message: "Give thanks for the guidance of God's Word." },
      "duda-fuerza-confianza": { verse: "2 Corinthians 12:9", text: "My grace is sufficient for you, for my power is made perfect in weakness.", message: "Trust that God's grace is sufficient." },
      "duda-fuerza-paciencia": { verse: "Psalms 28:7", text: "The Lord is my strength and my shield.", message: "Wait on God to find strength against doubts." },
      "duda-fuerza-gratitud": { verse: "Ephesians 6:10", text: "Be strong in the Lord and in his mighty power.", message: "Give thanks for the strength God provides." },
      "desmotivacion-paz-confianza": { verse: "Romans 15:13", text: "May the God of hope fill you with all joy and peace.", message: "Trust in the God of hope to renew your motivation." },
      "desmotivacion-paz-paciencia": { verse: "Psalms 27:14", text: "Wait for the Lord; be strong and take heart.", message: "Patience helps you regain motivation in God." },
      "desmotivacion-paz-gratitud": { verse: "1 Thessalonians 5:18", text: "Give thanks in all circumstances.", message: "Gratitude renews your peace and motivation." },
      "desmotivacion-direccion-confianza": { verse: "Jeremiah 29:11", text: "For I know the plans I have for you.", message: "Trust in God's plans to find direction and motivation." },
      "desmotivacion-direccion-paciencia": { verse: "Habakkuk 2:3", text: "Though the vision tarries, it will not delay.", message: "Wait patiently; God's direction will renew your motivation." },
      "desmotivacion-direccion-gratitud": { verse: "Psalms 119:105", text: "Your word is a lamp to my feet.", message: "Give thanks for the guidance that motivates you to move forward." },
      "desmotivacion-fuerza-confianza": { verse: "Philippians 4:13", text: "I can do all things through Christ who strengthens me.", message: "Trust in Christ to recover your strength and motivation." },
      "desmotivacion-fuerza-paciencia": { verse: "Isaiah 40:31", text: "Those who hope in the Lord will renew their strength.", message: "Patience leads to renewed strength against demotivation." },
      "desmotivacion-fuerza-gratitud": { verse: "Nehemiah 8:10", text: "The joy of the Lord is your strength.", message: "Gratitude brings joy and strength to overcome demotivation." },
    },
    translations: {
      verseWidgetTitle: "Verse of the Day",
      shareVerse: "Share",
      heroTitle: "Find comfort and strength in God's promises",
      heroSubtitle: "Phrases, tips, and daily challenges based on the Bible for your life.",
      ctaPrimary: "Receive daily hope",
      ctaSecondary: "Start the challenge",
      frasesTitle: "Phrases and Verses",
      frasesLead: "Biblical truths applied in simple words, for youth and adults.",
      consejosTitle: "Practical Tips",
      consejosLead: "Small steps with big impact. 3-step guides for your moment.",
      retoTitle: "14-Day Hope Challenge",
      retoLead: "A daily verse and action to strengthen your faith.",
      retoReset: "Reset challenge",
      downloadReto: "Download challenge",
      videosTitle: "Inspirational Videos",
      videosLead: "Short messages for your daily life.",
      quizTitle: "Personalized Quiz",
      quizLead: "Answer 3 questions to receive a verse tailored to you.",
      quizQ1: "How are you feeling today?",
      quizQ2: "What do you need today?",
      quizQ3: "What would you like to improve?",
      quizNext: "Next",
      quizSubmit: "See my verse",
      blogTitle: "Reflections",
      post1Title: "When silence speaks too",
      post1Excerpt: "In moments without answers, God works deeply. Learn to recognize peace that doesn't depend on circumstances.",
      post1Content1: "Sometimes, God's silence is not absence but an invitation to trust more deeply.",
      post1Content2: "Reflect on how moments of stillness have shaped your faith.",
      post1Content3: "Practice patience and seek peace in daily prayer.",
      post2Title: "The perfect timing",
      post2Excerpt: "Don't compare yourself: every process has its rhythm. Persevere with faith and daily action.",
      post2Content1: "God has a perfect plan for everyone, even when we don't understand it.",
      post2Content2: "Trust that every step counts, even if small.",
      post2Content3: "Celebrate your progress and keep faith in the process.",
      readMore: "Read more",
      resourcesTitle: "Resources",
      res1: "14-Day Hope Challenge",
      res1Desc: "Simple actions and verses for each day.",
      res2: "Guided Prayers",
      res2Desc: "Short texts for your difficult moments.",
      download: "Download",
      subscribeTitle: "Receive hope in your inbox",
      subscribeLead: "Subscribe and receive a free PDF with 10 verses for tough times.",
      emailLabel: "Email",
      subscribeBtn: "Subscribe",
      subscribeNote: "No spam. Only short, uplifting messages.",
      pushSubscribe: "Enable push notifications",
      contactTitle: "Contact",
      nameLabel: "Name",
      messageLabel: "Message",
      sendBtn: "Send",
      donate: "Support this ministry",
    },
  },
};

// Actualizar contenido según idioma
function updateLanguage(lang) {
  if (!data[lang] || !data[lang].translations) {
    console.error(`Idioma ${lang} no soportado o datos no disponibles`);
    return;
  }
  const translations = data[lang].translations;
  setTimeout(initCarousel, 100);
  
  // Actualizar elementos del DOM si existen
  const elements = {
    verseWidgetTitle: document.querySelector('#verseWidget h3'),
    heroTitle: document.querySelector('.hero-content h1'),
    heroSubtitle: document.querySelector('.hero-content p'),
    ctaPrimary: document.querySelector('.hero-cta .btn-primary'),
    ctaSecondary: document.querySelector('.hero-cta .btn-secondary'),
    frasesTitle: document.querySelector('#frases h2'),
    frasesLead: document.querySelector('#frases .section-lead'),
    consejosTitle: document.querySelector('#consejos h2'),
    consejosLead: document.querySelector('#consejos .section-lead'),
    retoTitle: document.querySelector('#reto h2'),
    retoLead: document.querySelector('#reto .section-lead'),
    videosTitle: document.querySelector('#videos h2'),
    quizTitle: document.querySelector('#quiz h2'),
    quizLead: document.querySelector('#quiz .section-lead'),
    blogTitle: document.querySelector('#blog h2'),
    resourcesTitle: document.querySelector('#resources h2'),
    subscribeTitle: document.querySelector('#subscribe h2'),
    subscribeLead: document.querySelector('#subscribe .section-lead'),
    contactTitle: document.querySelector('#contact h2'),
  };

  Object.keys(elements).forEach(key => {
    if (elements[key]) {
      elements[key].textContent = translations[key] || elements[key].textContent;
    }
  });

  // Actualizar frases
  const frasesContainer = document.querySelector('.carousel-inner');
  if (frasesContainer) {
    frasesContainer.innerHTML = data[lang].frases.map(phrase => `
      <div class="carousel-item">
        <img src="${phrase.image}" alt="${phrase.quote}" loading="lazy">
        <p class="quote">${phrase.quote}</p>
        <p class="ref">${phrase.ref}</p>
      </div>
    `).join('');
  }

  // Actualizar consejos
  const consejosContainer = document.querySelector('#consejos .grid');
  if (consejosContainer) {
    consejosContainer.innerHTML = data[lang].consejos.map(consejo => `
      <div class="card">
        <h3>${consejo.title}</h3>
        <ol>
          ${consejo.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
      </div>
    `).join('');
  }

  // Actualizar reto
  const retoContainer = document.querySelector('#reto .reto-content');
  if (retoContainer) {
    retoContainer.innerHTML = `
      <h3>${translations.retoTitle}</h3>
      <p>${translations.retoLead}</p>
      ${data[lang].reto.map(day => `
        <div class="step">
          <h4>Día ${day.day}</h4>
          <p><strong>${day.verse}</strong>: ${day.text}</p>
          <p>Tarea: ${day.task}</p>
        </div>
      `).join('')}
      <button class="btn btn-secondary">${translations.retoReset}</button>
      <a href="reto-14-dias.pdf" class="btn btn-primary" download>${translations.downloadReto}</a>
    `;
  }
}

// Carrusel
function initCarousel() {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    const inner = carousel.querySelector('.carousel-inner');
    const prevBtn = carousel.querySelector('.carousel-control.prev');
    const nextBtn = carousel.querySelector('.carousel-control.next');
    const items = inner.querySelectorAll('.carousel-item');
    
    if (items.length === 0) return;

    let currentIndex = 0;

    function updateCarousel() {
      inner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarousel();
      });
    }

    // Soporte táctil (opcional)
    let touchStartX = 0;
    inner.addEventListener('touchstart', e => {
      touchStartX = e.touches[0].clientX;
    });
    inner.addEventListener('touchend', e => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          currentIndex = (currentIndex + 1) % items.length;
        } else {
          currentIndex = (currentIndex - 1 + items.length) % items.length;
        }
        updateCarousel();
      }
    });
  });
}

// Modal para publicaciones
document.querySelectorAll('.post-card').forEach(card => {
  card.addEventListener('click', () => {
    const postId = card.getAttribute('data-post-id');
    const lang = document.getElementById('langSwitcher')?.value || 'es';
    const postData = data[lang]?.translations || {};
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('role', 'dialog');
    modal.innerHTML = `
      <div class="modal-content">
        <h1>${postData[`${postId}Title`] || 'Post'}</h1>
        <img src="images/${postId}.webp" alt="${postData[`${postId}Title`] || 'Post'}" class="post-img" loading="lazy">
        <p>${postData[`${postId}Excerpt`] || ''}</p>
        <div class="post-content">
          <p>${postData[`${postId}Content1`] || ''}</p>
          <p>${postData[`${postId}Content2`] || ''}</p>
          <p>${postData[`${postId}Content3`] || ''}</p>
        </div>
        <button class="btn btn-outline" onclick="this.parentElement.parentElement.remove()">Cerrar</button>
      </div>
    `;
    document.body.appendChild(modal);
  });
});

// Botón flotante de acción
const shareFab = document.getElementById('shareFab');
if (shareFab) {
  shareFab.addEventListener('click', () => {
    const texto = data[document.getElementById('langSwitcher')?.value || 'es'].translations.heroTitle;
    if (navigator.share) {
      navigator.share({ title: 'Esperanza en la Palabra', text: texto, url: window.location.href })
        .catch(err => console.error('Error al compartir:', err));
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(texto + ' ' + window.location.href)}`, '_blank');
    }
  });
}

// Animaciones al hacer scroll
function handleScroll() {
  console.log('handleScroll llamado');
  const sections = document.querySelectorAll('.section, .hero');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll);

// Formularios con Formspree
const subscribeForm = document.getElementById('subscribeForm');
if (subscribeForm) {
  subscribeForm.addEventListener('submit', async e => {
    e.preventDefault();
    const formMessage = document.getElementById('formMessage');
    if (!formMessage) return;
    try {
      const response = await fetch('https://formspree.io/f/xwpwelyp', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) {
        formMessage.textContent = data[document.getElementById('langSwitcher')?.value || 'es'].translations.subscribeSuccess || '¡Suscripción exitosa! Revisa tu correo para el PDF.';
        formMessage.classList.add('success');
        formMessage.style.display = 'block';
        e.target.reset();
        setTimeout(() => formMessage.style.display = 'none', 5000);
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (err) {
      console.error('Error en suscripción:', err);
      formMessage.textContent = data[document.getElementById('langSwitcher')?.value || 'es'].translations.subscribeError || 'Error al suscribir. Intenta de nuevo.';
      formMessage.classList.add('error');
      formMessage.style.display = 'block';
      setTimeout(() => formMessage.style.display = 'none', 5000);
    }
  });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const formMessage = document.getElementById('contactFormMessage');
    if (!formMessage) return;
    try {
      const response = await fetch('https://formspree.io/f/xwpwelyp', {
        method: 'POST',
        body: new FormData(e.target),
        headers: { 'Accept': 'application/json' },
      });
      if (response.ok) {
        formMessage.textContent = data[document.getElementById('langSwitcher')?.value || 'es'].translations.contactSuccess || '¡Mensaje enviado! Gracias por contactarnos.';
        formMessage.classList.add('success');
        formMessage.style.display = 'block';
        e.target.reset();
        setTimeout(() => formMessage.style.display = 'none', 5000);
      } else {
        throw new Error('Error en el servidor');
      }
    } catch (err) {
      console.error('Error en contacto:', err);
      formMessage.textContent = data[document.getElementById('langSwitcher')?.value || 'es'].translations.contactError || 'Error al enviar. Intenta de nuevo.';
      formMessage.classList.add('error');
      formMessage.style.display = 'block';
      setTimeout(() => formMessage.style.display = 'none', 5000);
    }
  });
}

// Año en footer
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Cambiador de idioma
const langSwitcher = document.getElementById('langSwitcher');
if (langSwitcher) {
  langSwitcher.addEventListener('change', e => {
    updateLanguage(e.target.value);
  });
}

// Cambiador de tema
const themeSwitcher = document.getElementById('themeSwitcher');
if (themeSwitcher) {
  themeSwitcher.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const icon = themeSwitcher.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');
    }
  });
}

// Menú hamburguesa
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const menu = document.querySelector('.menu');
    if (menu) {
      menu.classList.toggle('active');
    }
  });
}

// Modo lectura
const readingMode = document.getElementById('readingMode');
if (readingMode) {
  readingMode.addEventListener('click', () => {
    document.body.classList.toggle('reading-mode');
  });
}

// Registro del Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('Service Worker registrado:', reg))
    .catch(err => console.error('Error al registrar Service Worker:', err));
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
  updateLanguage('es');
  initCarousel()
});
  document.body.classList.toggle('reading-mode');
});

// Inicializar

updateLanguage('es');
