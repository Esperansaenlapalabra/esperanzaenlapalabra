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
      { day: 4, verse: "Proverbios 3:5-6", text: "Confía en el Señor con todo tu corazón.", task: "Lee un capítulo de la Biblia y anota un versículo que te hagas." },
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
      "duda-paz-confianza": { verse: "Juan 16:33", text: "En el mundo tendréis aflicción, pero confiad.", message: "Confía en Jesús para encontrar paz en medio de las dudas." },
      "duda-paz-paciencia": { verse: "Salmos 27:14", text: "Espera en el Señor; esfuérzate, y aliéntese tu corazón.", message: "La paciencia fortalece tu fe y disipa las dudas." },
      "duda-paz-gratitud": { verse: "Colosenses 3:15", text: "La paz de Dios gobierne en vuestros corazones.", message: "La gratitud te ayuda a recibir la paz que disipa las dudas." },
      "duda-direccion-confianza": { verse: "Jeremías 29:11", text: "Porque yo sé los planes que tengo para ustedes.", message: "Confía en los planes de Dios para superar tus dudas." },
      "duda-direccion-paciencia": { verse: "Habacuc 2:3", text: "Aunque la visión tarda en cumplirse, no se demorará.", message: "Espera con paciencia; Dios te dará claridad." },
      "duda-direccion-gratitud": { verse: "Salmos 119:105", text: "Lámpara es a mis pies tu palabra.", message: "Agradece por la guía de la Palabra de Dios." },
      "duda-fuerza-confianza": { verse: "2 Corintios 12:9", text: "Bástate mi gracia, porque mi poder se perfecciona en la debilidad.", message: "Confía en que la gracia de Dios es suficiente." },
      "duda-fuerza-paciencia": { verse: "Salmos 28:7", text: "El Señor es mi fuerza y mi escudo.", message: "Espera en Dios para encontrar fuerza frente a las dudas." },
      "duda-fuerza-gratitud": { verse: "Efesios 6:10", text: "Fortaleceos en el Señor y en el poder de su fuerza.", message: "Da gracias por la fortaleza que Dios te da." },
      "desmotivacion-paz-confianza": { verse: "Romanos 15:13", text: "El Dios de la esperanza os llene de todo gozo y paz.", message: "Confía en el Dios de la esperanza para renovar tu ánimo." },
      "desmotivacion-paz-paciencia": { verse: "Salmos 42:11", text: "Espera en Dios, porque aún he de alabarle.", message: "La paciencia te lleva a encontrar gozo en Dios." },
      "desmotivacion-paz-gratitud": { verse: "Salmos 118:24", text: "Este es el día que hizo el Señor; nos gozaremos.", message: "La gratitud renueva tu alegría cada día." },
      "desmotivacion-direccion-confianza": { verse: "Salmos 32:8", text: "Te haré entender y te enseñaré el camino.", message: "Confía en la dirección de Dios para encontrar propósito." },
      "desmotivacion-direccion-paciencia": { verse: "Eclesiastés 3:11", text: "Todo lo hizo hermoso en su tiempo.", message: "Espera en el tiempo perfecto de Dios." },
      "desmotivacion-direccion-gratitud": { verse: "Salmos 16:11", text: "Me mostrarás la senda de la vida.", message: "Agradece por el propósito que Dios tiene para ti." },
      "desmotivacion-fuerza-confianza": { verse: "Filipenses 4:13", text: "Todo lo puedo en Cristo que me fortalece.", message: "Confía en Cristo para encontrar fuerza." },
      "desmotivacion-fuerza-paciencia": { verse: "Isaías 40:29", text: "El da esfuerzo al cansado.", message: "Espera en Dios para recibir nueva fuerza." },
      "desmotivacion-fuerza-gratitud": { verse: "1 Crónicas 16:34", text: "Dad gracias al Señor, porque es bueno.", message: "La gratitud te conecta con la fuerza de Dios." },
    ],
    videosDestacados: [
      { id: "7561072055391702283", platform: "tiktok", thumbnail: "images/video1-thumb.webp", title: "Reflexión diaria" },
      { id: "PL-iNGxI8MjHowNRx80gT9VZivHtF69wM7", platform: "youtube", thumbnail: "images/video2-thumb.webp", title: "Fe para jóvenes" },
    ],
    translations: {
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
      videosTitle: "Videos",
      videosLead: "Mensajes breves para renovar tu ánimo.",
      moreVideos: "Ver más videos",
      moreTiktok: "Ver más en TikTok",
      featuredVideos: "Videos destacados",
      quizTitle: "Encuentra tu versículo de fortaleza",
      quizLead: "Responde 3 preguntas y descubre un versículo bíblico para tu momento actual.",
      quizQ1: "¿Qué sientes más en este momento?",
      quizQ2: "¿Qué necesitas hoy?",
      quizQ3: "¿Qué te gustaría mejorar?",
      quizNext: "Siguiente",
      quizSubmit: "Ver mi versículo",
      verseWidgetTitle: "Versículo del día",
      shareVerse: "Compartir",
      blogTitle: "Reflexiones",
      post1Title: "Cuando el silencio también habla",
      post1Excerpt: "En los momentos sin respuestas, Dios trabaja en lo profundo. Aprende a reconocer la paz que no depende de circunstancias.",
      post1Content1: "En la vida, hay momentos en los que parece que Dios guarda silencio. Las oraciones no reciben respuesta inmediata, y la incertidumbre puede sentirse abrumadora. Pero, ¿y si ese silencio no es vacío? La Biblia nos recuerda en Habacuc 2:3 que “aunque la visión tarda en cumplirse, no se demorará”. Dios está obrando, incluso cuando no lo vemos.",
      post1Content2: "El silencio de Dios es una invitación a confiar. Cuando no hay palabras claras, nuestra fe se fortalece al esperar con paciencia. Practica la gratitud diaria: escribe tres cosas por las que estás agradecido, y recuerda que la paz de Dios “que sobrepasa todo entendimiento” (Filipenses 4:7) está contigo.",
      post1Content3: "Aquí tienes un pequeño ejercicio: dedica 5 minutos al día a meditar en un versículo que hagas tuyo. Por ejemplo, Salmos 46:10: “Estad quietos, y conoced que yo soy Dios”. Este hábito puede transformar tu perspectiva y ayudarte a encontrar esperanza en el silencio.",
      post2Title: "El tiempo perfecto",
      post2Excerpt: "No te compares: cada proceso tiene su ritmo. Persevera con fe y acción diaria.",
      post2Content1: "Vivimos en una sociedad que glorifica la rapidez, pero Dios tiene un tiempo perfecto para cada uno. Eclesiastés 3:1 nos dice: “Todo tiene su tiempo, y todo lo que se quiere debajo del cielo tiene su hora”. Compararte con otros solo roba tu paz.",
      post2Content2: "Para caminar en el tiempo de Dios, establece metas pequeñas y alcanzables. Por ejemplo, dedica 10 minutos diarios a la oración o a leer la Biblia. Estas acciones, aunque parezcan pequeñas, acumulan un impacto poderoso con el tiempo.",
      post2Content3: "Un ejercicio práctico: escribe una meta para esta semana y divídela en tres pasos. Por ejemplo, si quieres mejorar tu relación con Dios, tus pasos podrían ser: orar cada mañana, leer un capítulo de la Biblia, y reflexionar sobre un versículo. Confía en que Dios guía tus pasos.",
      readMore: "Leer más",
      resourcesTitle: "Recursos",
      res1: "Reto de 14 días de esperanza",
      res1Desc: "Acciones simples y versículos para cada día.",
      res2: "Oraciones guiadas",
      res2Desc: "Textos breves para tus momentos difíciles.",
      download: "Comenzar",
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
    }
  },
  en: {
    frases: [
      { quote: "The Lord is my light and my salvation, whom shall I fear?", ref: "Psalms 27:1", image: "images/phrase1.webp" },
      { quote: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13", image: "images/phrase2.webp" },
      { quote: "Do not fear, for I am with you.", ref: "Isaiah 41:10", image: "images/phrase3.webp" },
    ],
    consejos: [
      { title: "For stress", steps: ["Breathe and pray for 1 minute.", "Remember a biblical promise.", "Act on what you can control."] },
      { title: "For motivation", steps: ["Read an inspiring verse.", "Set a small goal.", "Give thanks for what's achieved."] },
    ],
    reto: [
      { day: 1, verse: "Psalm 23:1", text: "The Lord is my shepherd, I shall not want.", task: "Write down 3 things you're grateful for today." },
      { day: 2, verse: "Matthew 11:28", text: "Come to me, all who labor and are heavy laden, and I will give you rest.", task: "Take 5 minutes to rest quietly and pray." },
      { day: 3, verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord.", task: "Reflect on a personal goal and how to trust God to achieve it." },
      { day: 4, verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart.", task: "Read a Bible chapter and note a verse that resonates." },
      { day: 5, verse: "Psalm 46:10", text: "Be still, and know that I am God.", task: "Spend 10 minutes meditating on this verse." },
      { day: 6, verse: "John 16:33", text: "In the world you will have tribulation. But take heart; I have overcome the world.", task: "Share an inspiring quote with someone." },
      { day: 7, verse: "Philippians 4:13", text: "I can do all things through Christ who strengthens me.", task: "Write a plan to continue your spiritual growth." },
      { day: 8, verse: "Psalm 34:18", text: "The Lord is near to the brokenhearted.", task: "Pray for someone going through a tough time." },
      { day: 9, verse: "Romans 15:13", text: "May the God of hope fill you with all joy and peace.", task: "List 5 things that give you hope." },
      { day: 10, verse: "Isaiah 40:31", text: "Those who hope in the Lord will renew their strength.", task: "Take a short walk and reflect on this verse." },
      { day: 11, verse: "Ephesians 3:20", text: "God is able to do far more than we ask or think.", task: "Write a prayer asking God for something big." },
      { day: 12, verse: "Psalm 119:105", text: "Your word is a lamp to my feet.", task: "Read a Psalm and highlight a phrase that inspires you." },
      { day: 13, verse: "2 Corinthians 5:7", text: "We walk by faith, not by sight.", task: "Identify an area where you need to trust God more." },
      { day: 14, verse: "Romans 8:28", text: "All things work together for good to those who love God.", task: "Reflect on how a past challenge strengthened you." },
    ],
    quizResults: {
      "estres-paz-confianza": { verse: "Philippians 4:6-7", text: "Do not be anxious about anything, but in everything by prayer.", message: "Find peace through prayer and trust that God guards your heart." },
      "estres-paz-paciencia": { verse: "Psalm 46:10", text: "Be still, and know that I am God.", message: "Patience leads you to rest in God's presence." },
      "estres-paz-gratitud": { verse: "1 Thessalonians 5:18", text: "Give thanks in all circumstances.", message: "Gratitude transforms your perspective and brings peace." },
      "estres-direccion-confianza": { verse: "Proverbs 3:5-6", text: "Trust in the Lord with all your heart.", message: "Trust God to guide your every step." },
      "estres-direccion-paciencia": { verse: "Psalm 37:7", text: "Be still before the Lord and wait patiently for him.", message: "Wait patiently; God will show you the way." },
      "estres-direccion-gratitud": { verse: "Psalm 32:8", text: "I will instruct you and teach you in the way you should go.", message: "Give thanks for God's unfailing guidance." },
      "estres-fuerza-confianza": { verse: "Isaiah 41:10", text: "Fear not, for I am with you.", message: "Your strength comes from knowing God is by your side." },
      "estres-fuerza-paciencia": { verse: "Isaiah 40:31", text: "Those who hope in the Lord will renew their strength.", message: "Patience leads to renewed strength." },
      "estres-fuerza-gratitud": { verse: "Nehemiah 8:10", text: "The joy of the Lord is your strength.", message: "Find strength in gratitude and joy in God." },
      "duda-paz-confianza": { verse: "John 16:33", text: "In the world you will have tribulation, but take heart.", message: "Trust in Jesus to find peace amidst doubts." },
      "duda-paz-paciencia": { verse: "Psalm 27:14", text: "Wait for the Lord; be strong and take heart.", message: "Patience strengthens your faith and dispels doubts." },
      "duda-paz-gratitud": { verse: "Colossians 3:15", text: "Let the peace of Christ rule in your hearts.", message: "Gratitude helps you receive peace that overcomes doubts." },
      "duda-direccion-confianza": { verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord.", message: "Trust in God's plans to overcome your doubts." },
      "duda-direccion-paciencia": { verse: "Habakkuk 2:3", text: "Though the vision tarries, it will not delay.", message: "Wait patiently; God will bring clarity." },
      "duda-direccion-gratitud": { verse: "Psalm 119:105", text: "Your word is a lamp to my feet.", message: "Give thanks for the guidance of God's Word." },
      "duda-fuerza-confianza": { verse: "2 Corinthians 12:9", text: "My grace is sufficient for you.", message: "Trust that God's grace is enough." },
      "duda-fuerza-paciencia": { verse: "Psalm 28:7", text: "The Lord is my strength and my shield.", message: "Wait on God to find strength against doubts." },
      "duda-fuerza-gratitud": { verse: "Ephesians 6:10", text: "Be strong in the Lord and in his mighty power.", message: "Give thanks for the strength God provides." },
      "desmotivacion-paz-confianza": { verse: "Romans 15:13", text: "May the God of hope fill you with all joy and peace.", message: "Trust in the God of hope to renew your spirit." },
      "desmotivacion-paz-paciencia": { verse: "Psalm 42:11", text: "Hope in God, for I shall again praise him.", message: "Patience leads you to find joy in God." },
      "desmotivacion-paz-gratitud": { verse: "Psalm 118:24", text: "This is the day the Lord has made; let us rejoice.", message: "Gratitude renews your joy every day." },
      "desmotivacion-direccion-confianza": { verse: "Psalm 32:8", text: "I will instruct you and teach you in the way you should go.", message: "Trust in God's direction to find purpose." },
      "desmotivacion-direccion-paciencia": { verse: "Ecclesiastes 3:11", text: "He has made everything beautiful in its time.", message: "Wait for God's perfect timing." },
      "desmotivacion-direccion-gratitud": { verse: "Psalm 16:11", text: "You make known to me the path of life.", message: "Give thanks for the purpose God has for you." },
      "desmotivacion-fuerza-confianza": { verse: "Philippians 4:13", text: "I can do all things through Christ who strengthens me.", message: "Trust in Christ to find strength." },
      "desmotivacion-fuerza-paciencia": { verse: "Isaiah 40:29", text: "He gives strength to the weary.", message: "Wait on God to receive new strength." },
      "desmotivacion-fuerza-gratitud": { verse: "1 Chronicles 16:34", text: "Give thanks to the Lord, for he is good.", message: "Gratitude connects you with God's strength." },
    ],
    videosDestacados: [
      { id: "7561072055391702283", platform: "tiktok", thumbnail: "images/video1-thumb.webp", title: "Daily reflection" },
      { id: "PL-iNGxI8MjHowNRx80gT9VZivHtF69wM7", platform: "youtube", thumbnail: "images/video2-thumb.webp", title: "Faith for youth" },
    ],
    translations: {
      heroTitle: "Find comfort and strength in God's promises",
      heroSubtitle: "Phrases, advice, and daily challenges based on the Reina Valera Bible for your life.",
      ctaPrimary: "Receive daily hope",
      ctaSecondary: "Start the challenge",
      frasesTitle: "Phrases and verses",
      frasesLead: "Biblical truths applied in simple words, for youth and adults.",
      consejosTitle: "Practical advice",
      consejosLead: "Small steps with great impact. 3-step guides for your moment.",
      retoTitle: "14-day hope challenge",
      retoLead: "A daily verse and action to strengthen your faith.",
      retoReset: "Reset challenge",
      downloadReto: "Download challenge",
      videosTitle: "Videos",
      videosLead: "Short messages to renew your spirit.",
      moreVideos: "Watch more videos",
      moreTiktok: "See more on TikTok",
      featuredVideos: "Featured videos",
      quizTitle: "Find your verse of strength",
      quizLead: "Answer 3 questions to discover a Bible verse for your current moment.",
      quizQ1: "What do you feel most right now?",
      quizQ2: "What do you need today?",
      quizQ3: "What would you like to improve?",
      quizNext: "Next",
      quizSubmit: "See my verse",
      verseWidgetTitle: "Verse of the day",
      shareVerse: "Share",
      blogTitle: "Reflections",
      post1Title: "When silence also speaks",
      post1Excerpt: "In moments without answers, God works deep within. Learn to recognize peace that doesn't depend on circumstances.",
      post1Content1: "In life, there are moments when it seems God is silent. Prayers go unanswered immediately, and uncertainty can feel overwhelming. But what if that silence isn't empty? The Bible reminds us in Habakkuk 2:3 that “though the vision tarries, it will not delay.” God is working, even when we can't see it.",
      post1Content2: "God's silence is an invitation to trust. When clear words are absent, our faith grows stronger through patient waiting. Practice daily gratitude: write down three things you're thankful for, and remember that God's peace “which surpasses all understanding” (Philippians 4:7) is with you.",
      post1Content3: "Here's a small exercise: spend 5 minutes a day meditating on a verse that resonates with you. For example, Psalm 46:10: “Be still, and know that I am God.” This habit can transform your perspective and help you find hope in silence.",
      post2Title: "The perfect time",
      post2Excerpt: "Don't compare yourself: each process has its rhythm. Persevere with faith and daily action.",
      post2Content1: "We live in a society that glorifies speed, but God has a perfect time for everyone. Ecclesiastes 3:1 tells us: “To everything there is a season, and a time for every purpose under heaven.” Comparing yourself to others only steals your peace.",
      post2Content2: "To walk in God's timing, set small, achievable goals. For example, dedicate 10 minutes daily to prayer or Bible reading. These actions, though small, build a powerful impact over time.",
      post2Content3: "A practical exercise: write a goal for this week and break it into three steps. For example, if you want to grow closer to God, your steps could be: pray every morning, read a Bible chapter, and reflect on a verse. Trust that God guides your steps.",
      readMore: "Read more",
      resourcesTitle: "Resources",
      res1: "14-day hope challenge",
      res1Desc: "Simple actions and verses for each day.",
      res2: "Guided prayers",
      res2Desc: "Short texts for your difficult moments.",
      download: "Start",
      subscribeTitle: "Receive hope in your inbox",
      subscribeLead: "Subscribe and receive a free PDF with 10 verses for tough times.",
      emailLabel: "Email",
      subscribeBtn: "Subscribe",
      subscribeNote: "No spam. Only short and uplifting messages.",
      pushSubscribe: "Enable push notifications",
      contactTitle: "Contact",
      nameLabel: "Name",
      messageLabel: "Message",
      sendBtn: "Send",
      donate: "Support this ministry",
    }
  }
};

// Establecer og:url dinámicamente
document.querySelector('meta[property="og:url"]').setAttribute('content', window.location.origin);

// Actualizar idioma
function updateLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = data[lang].translations[key] || el.textContent;
  });
  if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    mostrarFraseDestacada(lang);
    populateFrases(lang);
    populateConsejos(lang);
    mostrarReto(lang);
    populateVideoGallery(lang);
    mostrarVersiculoDiario(lang);
    setupQuiz(lang);
  }
}

// Carrusel de frases destacadas
let currentSlide = 0;
function mostrarFraseDestacada(lang) {
  const carouselInner = document.getElementById('carouselInner');
  if (!carouselInner) return;
  carouselInner.innerHTML = '';
  data[lang].frases.forEach(frase => {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    item.innerHTML = `
      <h3>Frase del Día</h3>
      <img src="${frase.image}" alt="${frase.quote}" class="imagen-destacada" loading="lazy">
      <p class="quote">"${frase.quote}"</p>
      <span class="ref">${frase.ref}</span>
      <button class="btn btn-share" onclick="compartirFrase('${frase.quote}', '${frase.ref}')">Compartir</button>
    `;
    carouselInner.appendChild(item);
  });
  updateCarousel();
  document.querySelector('.carousel-control.prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + data[lang].frases.length) % data[lang].frases.length;
    updateCarousel();
  });
  document.querySelector('.carousel-control.next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % data[lang].frases.length;
    updateCarousel();
  });
  setInterval(() => {
    currentSlide = (currentSlide + 1) % data[lang].frases.length;
    updateCarousel();
  }, 10000);
}

function updateCarousel() {
  const carouselInner = document.getElementById('carouselInner');
  carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Generar tarjetas de frases
function populateFrases(lang) {
  const grid = document.getElementById('frasesGrid');
  if (!grid) return;
  grid.innerHTML = '';
  data[lang].frases.forEach(frase => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
      <img src="${frase.image}" alt="${frase.quote}" class="card-img" loading="lazy">
      <p class="quote">"${frase.quote}"</p>
      <span class="ref">${frase.ref}</span>
      <button class="btn btn-share" onclick="compartirFrase('${frase.quote}', '${frase.ref}')">Compartir</button>
    `;
    grid.appendChild(card);
  });
}

// Compartir frases
function compartirFrase(quote, ref) {
  const texto = `${quote} (${ref}) - Esperanza en la Palabra`;
  if (navigator.share) {
    navigator.share({ title: 'Frase Inspiradora', text: texto, url: window.location.href });
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, '_blank');
  }
}

// Generar consejos
function populateConsejos(lang) {
  const grid = document.getElementById('consejosGrid');
  if (!grid) return;
  grid.innerHTML = '';
  data[lang].consejos.forEach(consejo => {
    const step = document.createElement('div');
    step.classList.add('step');
    step.innerHTML = `
      <h3>${consejo.title}</h3>
      <ol>
        ${consejo.steps.map(s => `<li>${s}</li>`).join('')}
      </ol>
    `;
    grid.appendChild(step);
  });
}

// Reto de 14 días
function mostrarReto(lang) {
  const retoContent = document.getElementById('retoContent');
  const progressFill = document.getElementById('progressFill');
  if (!retoContent || !progressFill) return;
  const today = new Date();
  const startDate = localStorage.getItem('retoStartDate');
  let currentDay = 1;
  if (startDate) {
    const daysPassed = Math.floor((today - new Date(startDate)) / (1000 * 60 * 60 * 24)) + 1;
    currentDay = daysPassed <= 14 ? daysPassed : 14;
  } else {
    localStorage.setItem('retoStartDate', today.toISOString());
  }
  const reto = data[lang].reto[currentDay - 1];
  retoContent.innerHTML = `
    <h3>Día ${reto.day}</h3>
    <p><strong>${reto.verse}</strong>: "${reto.text}"</p>
    <p><strong>Tarea:</strong> ${reto.task}</p>
  `;
  progressFill.style.width = `${(currentDay / 14) * 100}%`;
  if (currentDay === 14) {
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 500);
  }
  document.getElementById('retoReset').addEventListener('click', () => {
    localStorage.removeItem('retoStartDate');
    mostrarReto(lang);
  });
}

// Galería de videos destacados
function populateVideoGallery(lang) {
  const gallery = document.getElementById('videoGallery');
  if (!gallery) return;
  gallery.innerHTML = '';
  data[lang].videosDestacados.forEach(video => {
    const thumb = document.createElement('div');
    thumb.classList.add('video-thumb');
    thumb.innerHTML = `
      <img src="${video.thumbnail}" alt="${video.title}" loading="lazy">
      <i class="fas fa-play-circle play-icon"></i>
    `;
    thumb.addEventListener('click', () => {
      const modal = document.createElement('div');
      modal.classList.add('modal');
      modal.innerHTML = `
        <div class="modal-content">
          <h3>${video.title}</h3>
          ${video.platform === 'tiktok' ? `
            <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@esperanzaenlapalabra/video/${video.id}" data-video-id="${video.id}">
              <section><a target="_blank" href="https://www.tiktok.com/@esperanzaenlapalabra?refer=creator_embed">@esperanzaenlapalabra</a></section>
            </blockquote>
            <script async src="https://www.tiktok.com/embed.js"></script>
          ` : `
            <iframe width="100%" height="auto" src="https://www.youtube.com/embed/videoseries?list=${video.id}" title="${video.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen loading="lazy"></iframe>
          `}
          <button class="btn btn-outline" onclick="this.parentElement.parentElement.remove()">Cerrar</button>
        </div>
      `;
      document.body.appendChild(modal);
    });
    gallery.appendChild(thumb);
  });
}

// Versículo diario
function mostrarVersiculoDiario(lang) {
  const verseWidget = document.getElementById('dailyVerse');
  if (!verseWidget) return;
  const today = new Date().toDateString();
  let verseIndex = localStorage.getItem('verseIndex');
  if (!verseIndex || localStorage.getItem('verseDate') !== today) {
    verseIndex = Math.floor(Math.random() * data[lang].frases.length);
    localStorage.setItem('verseIndex', verseIndex);
    localStorage.setItem('verseDate', today);
  }
  const verse = data[lang].frases[verseIndex];
  verseWidget.innerHTML = `
    <p class="quote">"${verse.quote}"</p>
    <span class="ref">${verse.ref}</span>
  `;
  document.getElementById('shareVerse').addEventListener('click', () => {
    compartirFrase(verse.quote, verse.ref);
  });
}

// Cuestionario interactivo
function setupQuiz(lang) {
  const quizForm = document.getElementById('quizForm');
  const nextButton = document.getElementById('nextQuestion');
  const submitButton = document.getElementById('submitQuiz');
  const questions = [document.getElementById('question1'), document.getElementById('question2'), document.getElementById('question3')];
  let currentQuestion = 0;
  let answers = {};

  nextButton.addEventListener('click', () => {
    const currentInputs = questions[currentQuestion].querySelectorAll('input:checked');
    if (currentInputs.length === 0) {
      alert('Por favor, selecciona una opción.');
      return;
    }
    answers[`q${currentQuestion + 1}`] = currentInputs[0].value;
    questions[currentQuestion].style.display = 'none';
    currentQuestion++;
    if (currentQuestion < questions.length) {
      questions[currentQuestion].style.display = 'block';
    }
    if (currentQuestion === questions.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'block';
    }
  });

  quizForm.addEventListener('submit', e => {
    e.preventDefault();
    const currentInputs = questions[currentQuestion].querySelectorAll('input:checked');
    if (currentInputs.length === 0) {
      alert('Por favor, selecciona una opción.');
      return;
    }
    answers[`q${currentQuestion + 1}`] = currentInputs[0].value;
    const resultKey = `${answers.q1}-${answers.q2}-${answers.q3}`;
    const result = data[lang].quizResults[resultKey];
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <h3>Tu versículo de fortaleza</h3>
        <p><strong>${result.verse}</strong>: "${result.text}"</p>
        <p>${result.message}</p>
        <button class="btn btn-share" onclick="compartirFrase('${result.text}', '${result.verse}')">Compartir</button>
        <button class="btn btn-outline" onclick="this.parentElement.parentElement.remove()">Cerrar</button>
      </div>
    `;
    document.body.appendChild(modal);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    quizForm.reset();
    questions.forEach(q => q.style.display = 'none');
    questions[0].style.display = 'block';
    nextButton.style.display = 'block';
    submitButton.style.display = 'none';
    currentQuestion = 0;
    answers = {};
  });
}

// Modal para artículos
document.querySelectorAll('.read-more').forEach(button => {
  button.addEventListener('click', () => {
    const postId = button.parentElement.getAttribute('data-post-id');
    const lang = document.getElementById('langSwitcher').value;
    const postData = data[lang].translations;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <div class="modal-content">
        <h1>${postData[`${postId}Title`]}</h1>
        <img src="images/${postId}.webp" alt="${postData[`${postId}Title`]}" class="post-img" loading="lazy">
        <p>${postData[`${postId}Excerpt`]}</p>
        <div class="post-content">
          <p>${postData[`${postId}Content1`]}</p>
          <p>${postData[`${postId}Content2`]}</p>
          <p>${postData[`${postId}Content3`]}</p>
        </div>
        <button class="btn btn-outline" onclick="this.parentElement.parentElement.remove()">Cerrar</button>
      </div>
    `;
    document.body.appendChild(modal);
  });
});

// Botón flotante de acción
document.getElementById('shareFab').addEventListener('click', () => {
  const texto = 'Descubre consuelo y fortaleza en Esperanza en la Palabra: frases, consejos y retos cristianos.';
  if (navigator.share) {
    navigator.share({ title: 'Esperanza en la Palabra', text: texto, url: window.location.href });
  } else {
    window.open(`https://wa.me/?text=${encodeURIComponent(texto + ' ' + window.location.href)}`, '_blank');
  }
});

// Animaciones al hacer scroll
function handleScroll() {
  const sections = document.querySelectorAll('.section, .hero');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', handleScroll);
handleScroll();

// Formularios con Formspree
document.getElementById('subscribeForm').addEventListener('submit', async e => {
  e.preventDefault();
  const formMessage = document.getElementById('formMessage');
  try {
    const response = await fetch('https://formspree.io/f/tu-form-id', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      formMessage.textContent = '¡Suscripción exitosa! Revisa tu correo para el PDF.';
      formMessage.classList.add('success');
      formMessage.style.display = 'block';
      e.target.reset();
      setTimeout(() => formMessage.style.display = 'none', 5000);
    } else {
      throw new Error('Error en el servidor');
    }
  } catch (err) {
    formMessage.textContent = 'Error al suscribir. Intenta de nuevo.';
    formMessage.classList.add('error');
    formMessage.style.display = 'block';
    setTimeout(() => formMessage.style.display = 'none', 5000);
  }
});

document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();
  const formMessage = document.getElementById('contactFormMessage');
  try {
    const response = await fetch('https://formspree.io/f/tu-form-id', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      formMessage.textContent = '¡Mensaje enviado! Gracias por contactarnos.';
      formMessage.classList.add('success');
      formMessage.style.display = 'block';
      e.target.reset();
      setTimeout(() => formMessage.style.display = 'none', 5000);
    } else {
      throw new Error('Error en el servidor');
    }
  } catch (err) {
    formMessage.textContent = 'Error al enviar. Intenta de nuevo.';
    formMessage.classList.add('error');
    formMessage.style.display = 'block';
    setTimeout(() => formMessage.style.display = 'none', 5000);
  }
});

// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Cambiador de idioma
document.getElementById('langSwitcher').addEventListener('change', e => {
  updateLanguage(e.target.value);
});

// Cambiador de tema
document.getElementById('themeSwitcher').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = document.querySelector('#themeSwitcher i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});

// Menú hamburguesa
document.getElementById('menuToggle').addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
});

// Modo lectura
document.getElementById('readingMode').addEventListener('click', () => {
  document.body.classList.toggle('reading-mode');
});

// Inicializar
updateLanguage('es');