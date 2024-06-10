const userMessage = [
    /* De repeticion*/
    ["decime mas", "segui hablando del tema", "quiero saber mas sobre eso", "interesante, hay mas?", "contame mas", "mas?", "otra cosa", "agreguega mas", "mas datos?"],
    /* 0 */
    ["hola", "hola", "hola", "hlo", "hola", "hola"],
    /* 1 */
    ["cómo estás", "cómo estás", "cómo estás", "cómo estás", "cómo te va", "cómo va la vida"],
    /* 2 */
    ["qué estás haciendo", "qué está pasando", "qué pasa", "wud", "qué pasa", "qué está pasando", "ok", "ok"],
    /* 3 */
    ["cuantos años tienes"],
    /* 4 */
    ["adiós", "adiós", "cuídate"],
    /* 4.1 */
    ["gracias","gracias por la ayuda"],    
    /* 5 */
    ["quién eres", "eres humano", "humano", "eres robot", "eres humano o robot", "qué eres", "háblame de ti", "quien sos"],
    /* 6 */
    ["quién te creó", "creador", "quién es tu creador", "quién te hizo"],
    /* 7 */
    ["correo electrónico", "dirección", "correo"],
    /* 8 */
    ["número de desarrollador", "mensaje", "Eres malo", "contacta al desarrollador", "informe", "hay un error", "error", "quién está detrás de ti", "contacto", "teléfono", "contacto", "info", "whatsapp", "wa", "número", "Quién es amaan", "amaan", "amaan mk", "mk", "mohammed", "khalander"],
    /* 9 */
    ["instagram", "nombre de usuario", "enlace", "usuario", "insta"],
    /* 10 */
    ["github", "repositorio", "repo", "git"],
    /* 11 */
    ["tu nombre por favor", "tu nombre", "nombre", "puedo saber tu nombre", "cómo te llamas", "cómo te llamas", "dime tu nombre"],
    /* 12 */
    ["te amo", "amor", "te amo", "me gustas", "eres increíble", "eres genial", "eres genial"],
    /* 13 */
    ["feliz", "bueno", "divertido", "maravilloso", "fantástico", "cool", "muy bueno", "impresionante", "agradable", "excelente"],
    /* 14 */
    ["malo", "ayuda", "aburrido", "cansado", "no bien", "me siento deprimido", "me siento deprimido", "estoy triste", "triste"],
    /* 15 */
    ["¿Cuál es tu propósito?", "¿Por qué fuiste creado?", "¿Qué puedes hacer?", "Háblame de tus capacidades", "club", "¿Cuál es tu función principal?"],
    /* 16 */
    ["¿Cómo está el tiempo hoy?", "Dime el pronóstico del tiempo", "El tiempo hoy"],
    /* 17 */
    ["¿Cómo funciona tu modelo de lenguaje?", "creado", "idioma", "Explica tu tecnología de IA", "Cuéntame sobre tu arquitectura", "cómo trabajas", "envía tu código"],
    /* 18 */
    ["¿Cuál es la hora ahora?", "¿Cuál es la hora actual?", "Dime la hora", "hora"],
    /* 19 */
    ["eventos", "noticias", "planes", "esports", "juego", "planeado", "futuro"],
    /* 20 */
    ["anterior", "antiguo", "visita escolar", "visita", "colegio"],
    /* 21  - Economia*/
    ["bono", "acciones", "bolsa", "wall street", "inversion"],
    /* 22 */
    ["clases", "colegio", "visita escolar", "visita", "universidad"],
    /* 23 */
    ["plata", "dinero", "moneda", "metalico", "papel moneda"],
    /* 24 */
    ["CABA", "Codo a Codo", "cursos", "educacion", "horas cursos"],
    /* 25 */
    ["que es la inflacion", "puedes explicar la inflacion", "como funciona la inflacion", "inflacion","¿Qué es la inflación?", "¿Puedes explicarme qué es la inflación?", "¿Cómo funciona la inflación?"],
    /* 26 */
    ["que es el PIB", "puedes explicar el PIB", "como se calcula el PIB", "PIB", "PBI","¿Qué es el PIB?", "¿Puedes explicarme qué es el Producto Interno Bruto?", "¿Cómo se calcula el PIB?"],
    /* 27 */
    ["¿Qué es la educación financiera?", "¿Puedes explicarme qué es la educación financiera?", "¿Qué significa educación financiera?"],
    /* 28 */
    ["¿Cuáles son los objetivos de la educación financiera?", "¿Qué se espera lograr con la educación financiera?", "¿Qué metas tiene la educación financiera?"],
    /* 29 */
    ["¿Cómo puede la educación financiera mejorar mis perspectivas de empleo?", "¿La educación financiera puede ayudarme a conseguir un mejor trabajo?", "¿Cómo la educación financiera me hace más atractivo para el mercado laboral?"],
    /* 30 */
    ["¿Qué estrategias de ahorro enseña la educación financiera?", "¿Cómo puedo aprender a ahorrar con la educación financiera?", "¿La educación financiera me enseñará a ahorrar?"],
    /* 31 */
    ["¿La educación financiera me enseñará a manejar deudas?", "¿Cómo puedo aprender a gestionar deudas con la educación financiera?", "¿La educación financiera me ayudará a entender las deudas?"],
    /* 32 */
    ["¿Qué opciones de inversión puedo aprender con la educación financiera?", "¿La educación financiera me enseñará sobre inversiones?", "¿Puedo aprender sobre productos financieros con la educación financiera?"],
    /* 33 */
    ["¿La educación financiera me enseñará a usar herramientas digitales?", "¿Cómo puedo aprender a usar aplicaciones financieras con la educación financiera?", "¿La educación financiera me ayudará a manejar mis finanzas digitalmente?"],
    /* 34 */
    ["¿Cómo está la economía argentina actualmente?", "¿Puedes darme una actualización sobre la economía argentina?", "¿Qué está pasando con la economía argentina?"],
    /* 35 */
    ["¿Cómo puedo ahorrar dinero en mi hogar?", "¿Tienes consejos para la economía del hogar?", "¿Cómo puedo mejorar la economía de mi hogar?"],
    /* 36 */
    //["¿Qué es la inflación?", "¿Puedes explicarme qué es la inflación?", "¿Cómo funciona la inflación?"],
    /* 37 */
    ["¿Cómo afecta la tasa de interés a la economía?", "¿Qué impacto tiene la tasa de interés en la economía?", "¿Por qué es importante la tasa de interés en la economía?"],
    /* 38 */
    //["¿Qué es el PIB?", "¿Puedes explicarme qué es el Producto Interno Bruto?", "¿Cómo se calcula el PIB?"],
    /* 39 */
    ["¿Cómo puedo invertir en la bolsa de valores?", "¿Tienes consejos para invertir en la bolsa?", "¿Qué necesito saber para invertir en la bolsa de valores?"],
    /* 40 */
    ["¿Qué es la devaluación?", "¿Puedes explicarme qué es la devaluación?", "¿Cómo afecta la devaluación a la economía?"],
    /* 41 */
    ["ortiba", "mierda", "boludo", "pelotudo", "puto", "puta", "boluda", "pelotuda", "mierda", "conchuda", "conchudo", "trolo", "trola", "pija", "pijudo", "putito"]
];

const botReply = [
    /* De repeticion*/
    ["busco mas información"],
    /* 0 */
    ["¡Hola! 😊", "¡Hola! 👋", "¡Oye! 👍", "¡Hola! 👋"],
    /* 1 */
    ["Bien... ¿cómo estás? 😄", "Bastante bien, ¿cómo estás? 😊", "Fantástico, ¿cómo estás? 🌟"],
    /* 2 */
    ["Mejorando. ¿Ahí? 😄", "¡Un poco bien! 😅", "¡Sí, bien! 🏡"],
    /* 3 */
    ["Siempre soy joven. 👶"],
    /* 4 */
    ["¡Adiós! 👋", "¡Adiós! 😊", "¡Por favor, cuídate! 🌼"],
    /* 4.1 */
    ["¡Para eso estoy! 👋", "¡A ti por preguntar! 😊", "¡Por favor, no me agaradezcas! 🌼"],    
    /* 5 */
    ["Solo soy un bot 😄", "Soy un bot. ¿Qué eres tú? 🤖", "Soy un extraterrestre que viene a conquistar el mundo 😅", "Solo vas a preguntar por mi o vamos a hablar de verdad! 😊"],
    /* 6 */
    ["Roman Agrelo es mi creador 🙌"],
    /* 7 */
    ["Puedes contactar a CABA 📧</a>"],
    /* 8 */
    ["Puedes contactar a Flavia:<br> Teléfono: <a href='tel:XXXXXXXXX'>XXXXXXX</a> 📱<br> WhatsApp: <a href='https://wa.me /12341234'>12341234</a> 💬"],
    /* 9 */
    ["Instagram: <a href='https://www.instagram.com/'>@CABA 📷</a>"],
    /* 10 */
    ["Buenos Aires - CABA: <a href='https://bb'>@CABA 🐙</a>"],
    /* 11 */
    ["Soy la IA de Economia de Flavia Sarmiento 😊"],
    /* 12 */
    ["Yo también te amo ❤️", "¡Yo también! 😄", "¡Gracias! Intenta dar tu opinión en WhatsApp: <a href='https://wa.me/12341234'>12341234</a > 💬"],
    /* 13 */
    ["¡Me alegra saber que te sientes feliz! 😄", "¡Eso es genial! 😊", "¡Gracias! Intente enviar comentarios en WhatsApp: <a href='https://wa. me/12341234'>12341234</a> 💬", "¡La diversión siempre es buena 🎉", "la onda 😄", "Fantástica 😃", "Genial 😎", "😊", "¡Impresionante!", "¡Excelente! 👏"],
    /* 14 */
    [
        "Lamento mucho que te sientas así. Es importante hablar con alguien en quien confíes sobre tus sentimientos. ❤️",
        "No es necesario que pases por esto solo. Pide apoyo a amigos, familiares o un profesional de la salud mental. 🤗",
        "Estoy aquí para escucharlo y conversar con usted, pero no reemplazo la ayuda profesional. Considere buscar ayuda de un terapeuta o consejero. 🙏",
        "Recuerda que está bien no estar bien a veces. Tus sentimientos son válidos y hay personas que se preocupan por ti. 💕",
        "Si lo deseas, podemos charlar sobre tus sentimientos y experiencias. Compartir a veces puede ayudar a aligerar la carga. 📢",
        "La depresión puede ser un camino difícil, pero hay esperanza y ayuda disponibles. No estás solo en esto. 🌟",
        "¿Hay algo específico de lo que te gustaría hablar o tienes alguna pregunta? 😊",
        "Estoy aquí para escuchar. Siéntete libre de compartir tanto o tan poco como te sientas cómodo. 🤗"
    ],
    /* 15 */
    ["Mi propósito es administrar el club y ayudarte con eventos e información. 🎉"],
    /* 16 */
    ["Lo siento, no puedo proporcionar información meteorológica en tiempo real. Puedes consultar un sitio web o una aplicación meteorológica para obtener las últimas actualizaciones. ☀️"],
    /* 17 */
    ["¡Ese es un secreto que solo Amaan conoce! 🤫"],
    /* 18 */
    ["No tengo acceso a datos en tiempo real, incluida la hora actual. Puedes consultar la hora en tu dispositivo o preguntarle a un asistente de voz como Siri o Google Assistant. ⌚"],
    /* 19 */
    [
        "Hasta donde yo sé, estamos realizando Esports desde el Club Técnico. 🎮",
        "Los deportes electrónicos son una de las iniciativas interesantes del Club Técnico y ¡tenemos algunos eventos increíbles programados! 🎉",
        "¡Los deportes electrónicos están en auge en el Club Técnico! Estén atentos a los próximos eventos y noticias relacionadas con los juegos. 🕹️",
        "Los deportes electrónicos son un enfoque clave para nosotros en el Technical Club. ¡Tenemos planes y eventos emocionantes en el mundo de los videojuegos! 🚀"
    ],
    /* 20 */
    [
        "Claro, puedo contarles sobre la visita anterior a la escuela. Fue un evento en el que los 4 clubes contribuyeron con sus esfuerzos. ¡Fue una experiencia fantástica para todos los involucrados! 🏫🤝",
        "La visita escolar anterior fue un esfuerzo de colaboración de los 4 clubes. Fue un evento memorable con muchas actividades e interacciones emocionantes. 📚🤝",
        "¡Ah, la visita a la escuela! Fue una gran iniciativa en la que los 4 clubes unieron fuerzas para crear una experiencia memorable. ¡El trabajo en equipo y el entusiasmo fueron realmente encomiables! 🌟🤝"
    ],
    /* 21  - Economia*/
    ["Soy la IA de Economia de Flavia Sarmiento 😊", "roman esta ayudando"],
    /* 22 */
    ["Soy la IA de Economia de Flavia Sarmiento 😊", "claro que puedo ayudarte"],
    /* 23 */
    ["Soy la IA de Economia de Flavia Sarmiento 😊", "no estaria entendiendo que necesitas"],
    /* 24 */
    ["Soy la IA de Economia de Flavia Sarmiento 😊", "lo mejor es instruirte"],
    /* 25*/
    [
        "La inflación es el aumento generalizado y sostenido del nivel de precios en un país durante un período de tiempo.",
        "La inflación se refiere al aumento de los precios de los bienes y servicios en una economía a lo largo del tiempo.",
        "La inflación es el ritmo al que los precios generales de los bienes y servicios están aumentando.",
        "La inflación es el aumento generalizado y sostenido del nivel de precios de bienes y servicios en una economía durante un período de tiempo. Cuando el nivel general de precios sube, con cada unidad de moneda se adquieren menos bienes y servicios. Es decir, la inflación refleja la disminución del poder adquisitivo de la moneda.", 
        "La inflación es el aumento constante de los precios de los bienes y servicios en una economía. Esto puede ser causado por varios factores, incluyendo el aumento de los costos de producción o un aumento en la demanda de bienes y servicios.",        
    ], 
    /* 26 */
    [
        "El PIB es el valor monetario de todos los bienes y servicios finales producidos por un país en un período de tiempo.",
        "El PIB es una medida de la actividad económica dentro de un país.",
        "El Producto Interno Bruto(PIB) es la medida más amplia de la actividad económica de un país.Es el valor total de todos los bienes y servicios producidos en un país en un período de tiempo determinado.",
        "El Producto Interno Bruto (PIB) es una medida de la producción económica de un país. Se calcula sumando el valor de todos los bienes y servicios producidos en el país durante un período de tiempo.",
        "El PIB se calcula sumando el consumo, la inversión, los gastos del gobierno y las exportaciones netas."
    ],
    /* 27 */
    ["La educación financiera es un conjunto de habilidades y conocimientos que te permiten entender y manejar tus finanzas personales de manera efectiva.", "La educación financiera se refiere a la capacidad de entender y manejar tus finanzas personales. Esto incluye la comprensión de cómo funciona el dinero, cómo se gana, cómo se administra, cómo se invierte y cómo se protege."],
    /* 28 */
    ["Los objetivos de la educación financiera incluyen proporcionar habilidades y conocimientos financieros, enseñar a establecer objetivos financieros, elaborar presupuestos, desarrollar estrategias de ahorro, y facilitar conocimientos para gestionar deudas de manera responsable.", "La educación financiera tiene como objetivo enseñarte a manejar tus finanzas de manera efectiva. Esto incluye aprender a establecer objetivos financieros, hacer un presupuesto, desarrollar estrategias de ahorro y entender cómo manejar tus deudas."],
    /* 29 */
    ["La educación financiera puede mejorar tus perspectivas de empleo al hacerte más atractivo para el mercado laboral. Las habilidades financieras son muy valoradas por los empleadores y pueden abrirte puertas a nuevas oportunidades.", "Con una sólida educación financiera, puedes demostrar a los empleadores potenciales que tienes la capacidad de gestionar eficazmente los recursos financieros. Esto puede hacerte más atractivo para el mercado laboral y mejorar tus perspectivas de empleo."],
    /* 30 */
    ["La educación financiera te enseñará a establecer objetivos financieros y a desarrollar estrategias de ahorro a corto, mediano y largo plazo. Esto te ayudará a planificar tu futuro financiero y a evitar el endeudamiento.", "Con la educación financiera, aprenderás a hacer un presupuesto y a desarrollar estrategias de ahorro. Esto te permitirá ahorrar para tus objetivos a corto, mediano y largo plazo."],
    /* 31 */
    ["La educación financiera te proporcionará las herramientas y estrategias necesarias para gestionar tus deudas de manera responsable. Aprenderás sobre los diferentes tipos de financiamiento disponibles y las implicaciones de cada uno.", "Con la educación financiera, aprenderás a manejar tus deudas de manera efectiva. Esto incluye entender los diferentes tipos de préstamos y créditos disponibles, así como las consecuencias de no cumplir con tus obligaciones financieras."],
    /* 32 */
    ["La educación financiera te introducirá en las diversas opciones de inversión y los productos financieros disponibles. Esto te permitirá tomar decisiones informadas sobre dónde y cómo invertir tu dinero.", "Con la educación financiera, aprenderás sobre las diferentes opciones de inversión disponibles y cómo evaluarlas. También te familiarizarás con los diversos productos financieros que puedes utilizar para alcanzar tus objetivos financieros."],
    /* 33 */
    ["La educación financiera te introducirá en el uso de herramientas y aplicaciones digitales que facilitan la gestión financiera. Esto incluye la creación de presupuestos, la planificación de inversiones, los pagos de impuestos y la emisión de facturas electrónicas.", "Con la educación financiera, aprenderás a utilizar diversas herramientas y aplicaciones digitales que te ayudarán a manejar tus finanzas. Esto puede incluir aplicaciones para hacer un presupuesto, planificar inversiones, pagar impuestos y emitir facturas electrónicas."],
    /* 34 */
    ["La economía argentina está actualmente enfrentando varios desafíos, incluyendo la inflación, la devaluación de la moneda y la deuda externa. Sin embargo, también hay oportunidades en sectores como la tecnología y la energía renovable.", "La economía argentina ha experimentado altibajos en los últimos años. Actualmente, se enfrenta a desafíos como la inflación y la deuda, pero también hay oportunidades en áreas como la agricultura y la tecnología."],
    /* 35 */
    ["Hay varias formas de ahorrar dinero en tu hogar. Esto puede incluir reducir el uso de energía, comprar alimentos en grandes cantidades, y hacer un presupuesto.", "Para mejorar la economía de tu hogar, puedes considerar hacer un presupuesto, reducir gastos innecesarios, y buscar formas de aumentar tus ingresos."],
    /* 36 */
    //["La inflación es el aumento generalizado y sostenido del nivel de precios de bienes y servicios en una economía durante un período de tiempo. Cuando el nivel general de precios sube, con cada unidad de moneda se adquieren menos bienes y servicios. Es decir, la inflación refleja la disminución del poder adquisitivo de la moneda.", "La inflación es el aumento constante de los precios de los bienes y servicios en una economía. Esto puede ser causado por varios factores, incluyendo el aumento de los costos de producción o un aumento en la demanda de bienes y servicios."],
    /* 37 */
    ["La tasa de interés es un factor importante en la economía porque afecta la cantidad de dinero que las personas y las empresas están dispuestas a pedir prestado y a invertir. Las tasas de interés altas pueden desalentar el endeudamiento y la inversión, mientras que las tasas de interés bajas pueden incentivarlos.", 
    "La tasa de interés tiene un gran impacto en la economía. Puede afectar todo, desde los préstamos para vivienda hasta las inversiones en el mercado de valores. Una tasa de interés más alta significa que es más caro pedir dinero prestado, lo que puede desacelerar el crecimiento económico."],
    /* 38 */
    //["El Producto Interno Bruto(PIB) es la medida más amplia de la actividad económica de un país.Es el valor total de todos los bienes y servicios producidos en un país en un período de tiempo determinado.",      "El Producto Interno Bruto (PIB) es una medida de la producción económica de un país. Se calcula sumando el valor de todos los bienes y servicios producidos en el país durante un período de tiempo."    ],
    /* 39 */
    ["Invertir en la bolsa de valores puede ser una excelente manera de hacer crecer tu dinero a largo plazo, pero también conlleva riesgos. Es importante investigar y entender las empresas en las que estás invirtiendo, y considerar hablar con un asesor financiero.", "Para invertir en la bolsa de valores, necesitas entender cómo funciona el mercado, qué tipo de inversiones son adecuadas para tus objetivos y tolerancia al riesgo, y estar dispuesto a mantener tus inversiones a largo plazo."],
    /* 40 */
    ["La devaluación es la disminución del valor de una moneda con respecto a otras monedas. Puede ser el resultado de políticas económicas o de cambios en el mercado. La devaluación puede hacer que las exportaciones de un país sean más competitivas en el mercado mundial, pero también puede llevar a la inflación.", "La devaluación es cuando el valor de una moneda disminuye en comparación con otras monedas. Esto puede hacer que los productos importados sean más caros y los productos exportados sean más baratos."],
    /* 41 */
    ["Que mal educado, me ofendo! 🤷‍♂️", "no podes decir eso...", "no puedo responder eso, me parece que no me respetas! 🤔", "Dale, somos grandes! 🤨", "La verdad, me estas ofendiendo", "Basta por favor", "No me gusta que escribas eso", "Mi no entender", "Que sucio el que escribe", "Te responderia pero no me lo permiten", "Gracias pero mi codigo no tiene permitido hablar de eso"]
];

// Ensure the number of responses in botReply matches the number of message groups in userMessage
if (botReply.length !== userMessage.length) {
    console.log("The number of message groups in botReply must match the number of message groups in userMessage.");
    console.log(userMessage.length)
    console.log(botReply.length);
}

var catIdx, respIdx

const alternative = [
    "¿Puedes preguntar algo más? ❓",
    "Oye, te estoy escuchando... 👂",
    "No entendí bien eso. ¿Podrías reformular tu pregunta? 🤔",
    "No estoy seguro de haber entendido. ¿Puedes proporcionar más contexto o hacer una pregunta diferente? 🧐",
    "Hmm, eso es un poco confuso. ¿Podrías intentar preguntar de otra manera? 🤨",
    "¿Podrías intentar preguntar de otra manera? 🤨",
    "Estoy aquí para ayudar, pero necesito una pregunta más clara para dar una respuesta significativa. 🤷‍♂️",
    "Parece que estamos en diferentes longitudes de onda. Intente preguntar algo más. 📡",
    "Pido disculpas, pero no pude entender el significado de tu comentario. Por favor reformula tu pregunta. 🙁",
    "Puedes contactar a Flavia:<br> Teléfono: <a href='tel:12341234'>12341234 📱</a><br> WhatsApp: <a href='https://wa.me/12341234'>12341234 💬 "
];

let lastUserDiv;

function sendMessage() {
    const inputField = document.getElementById("user-input");
    const input = inputField.value.trim();
    if (input) {
        output(input);
        inputField.value = "";
    }
}

//Calculation 
function findResponse(input) {

    //checks direct messages
    let text = cleanInput(input);
    //console.log(text, userMessage[0])
    const versiguardo = userMessage[0].find(message => text.includes(message.toLowerCase()));
    if (versiguardo) {
        //leo porque sigue hablando del tema
      //  console.log("si encontre: ", versiguardo)
        text = leerPregunta();
    }
    /*else {
           //guardo porque es pregunta nueva
           limpiarStorage();
           guardarPregunta(text);
       }*/

    for (const messageGroup of userMessage) {
        //        const matchingMessage = messageGroup.find(message => text.includes(message.toLowerCase()));
        const ignoreWords = new Set(["el", "la", "los", "lo", "en", "es", "que es", "que", "donde"]); // Agrega más palabras si es necesario
        const minLength = 3; // Ajusta este valor según tus necesidades

        const matchingMessage = messageGroup.find(message => {
            const words = message.toLowerCase().split(/\s+/).filter(word => !ignoreWords.has(word) && word.length >= minLength);
            return words.some(word => text.toLowerCase().includes(word));
        });

        if (matchingMessage) {
            //guardo porque es pregunta nueva
            limpiarStorage();
            guardarPregunta(text);
            return getRandomResponseFromCategory(userMessage.indexOf(messageGroup));
        }
    }
    const directMatch = findDirectMatch(text);
    if (directMatch) {
        //guardo porque es pregunta nueva
        limpiarStorage();
        guardarPregunta(text);
        return directMatch;
    }

    //check similarity
    const SIMILARITY_THRESHOLD = 0.6;
    for (let i = 0; i < userMessage.length; i++) {
        const messageGroup = userMessage[i];
        for (const message of messageGroup) {
            const similarityScore = calculateSimilarity(text, message);
            if (similarityScore >= SIMILARITY_THRESHOLD) {
                findCategoryIndex
                return getRandomResponseFromCategory(i);
            }
        }
    }

    //check each word
    const words = text.split(' ');
    for (const word of words) {
        if (isCommonWord(word)) {
            continue;
        }
        const categoryIndex = findCategoryIndex(word);
        if (categoryIndex !== -1) {
            return getRandomResponseFromCategory(categoryIndex);
        }
    }

    return getRandomAlternativeResponse();
}

function calculateSimilarity(str1, str2) {
    const len1 = str1.length;
    const len2 = str2.length;
    const short = len1 < len2 ? len1 : len2;
    const long = len1 > len2 ? len1 : len2;
    let matchCount = 0;

    for (let i = 0; i < short; i++) {
        if (str1[i] === str2[i]) {
            matchCount++;
        }
    }
    const similarity = matchCount / long;
    return similarity;
}

function cleanInput(input) {
    return input
        .toLowerCase()
        .replace(/[^\w\s'"]/gi, "")
        .replace(/[\W_]/g, " ")
        //.replace(/ un /g, " ")
        //.replace(/yo siento /g, "")
        .replace(/que es/g, " ")
        .replace(/por favor /g, "")
        .replace(/ favor/g, "")
        .trim();
}

function findDirectMatch(text) {
    for (const messageGroup of userMessage) {
        const matchingMessage = messageGroup.find(message => text.includes(message.toLowerCase()));
        if (matchingMessage) {
            return getRandomResponseFromCategory(userMessage.indexOf(messageGroup));
        }
    }
    return null;
}

function isCommonWord(word) {
    const commonWords = ['por qué', 'quién', 'cómo', 'qué', 'por favor', 'un', 'una', 'el', 'es', 'son', 'soy', 'yo',
        'tú', 'él', 'ella', 'nosotros', 'ellos', 'eso', 'y', 'pero', 'o', 'no', 'en', 'en',
        'tu', 'mi', 'su', 'su', 'ella', 'su', 'nuestro', 'con', 'sin', 'en', 'por',
    ];
    return commonWords.includes(word.toLowerCase());
}

function findCategoryIndex(word) {
    return botReply.findIndex(category => category.includes(word));
}

function getRandomResponseFromCategory(categoryIndex) {
    const responses = botReply[categoryIndex];
    let Nresp;
    do {
        Nresp = Math.floor(Math.random() * responses.length);
    } while (responses.length > 1 && Nresp === respIdx && categoryIndex === catIdx);

    catIdx = categoryIndex;
    respIdx = Nresp;
    //console.log(categoryIndex, Nresp)
    return responses[Nresp];
}

/*function getRandomResponseFromCategory(categoryIndex) {
    const responses = botReply[categoryIndex];
    const Nresp = Math.floor(Math.random() * responses.length)
    if (!catIdx || !respIdx) {
        catIdx = categoryIndex;
        respIdx = Nresp
    } else if (categoryIndex === catIdx &  Nresp === respIdx){
        console.log("es la misma respuesta")
        console.log(categoryIndex, Nresp)
    }
    console.log(categoryIndex, Nresp)
    return responses[Nresp];
}*/

function getRandomAlternativeResponse() {
    return alternative[Math.floor(Math.random() * alternative.length)];
}

document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("user-input");
    inputField.addEventListener("keydown", function (e) {
        if (e.code === "Enter") {
            const input = inputField.value.trim();
            if (input) {
                output(input);
                inputField.value = "";
            }
        }
    });
});

const usnexp = /\b4AI\d{2}AI\d{3}\b/i;

function output(input) {
    if (input.toLowerCase().includes("universidad") || usnexp.test(input.toLowerCase()) || input.toLowerCase().includes("usn")) {
        userMessageSend(input);
        const match = usnexp.test(input);
        if (match) {
            const userUSN = input.match(usnexp)[0];
            readStudentDatafromxl(userUSN);
        } else {
            sendBotMessage("Ingrese USN 📝");
            // Call the userMessageWait function
            userMessageWait().then((userResponse) => {
                userResponse = cleanInput(userResponse).replace(/\s/g, "");
                const match = usnexp.test(userResponse);
                if (match) {
                    readStudentDatafromxl(userResponse);
                }
            });
        }
    } else {
        // If the input does not contain the USN pattern, proceed with generating a response
        let product = findResponse(input);
        addChat(input, product);
    }
}

function readStudentDatafromxl(userUSN) {
    const fileName = "students.xlsx"; // Specify the name of the Excel file

    // Fetch the Excel file using the Fetch API
    fetch(fileName)
        .then((response) => response.arrayBuffer())
        .then((data) => {
            const workbook = XLSX.read(data, {
                type: "array"
            });

            // Assuming the sheet name is "student"
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];

            // Find the row with the matching USN (case-insensitive)
            const rows = XLSX.utils.sheet_to_json(worksheet, {
                header: 1
            });
            const headerRow = rows[0];
            let found = false;

            for (let i = 1; i < rows.length; i++) {
                const row = rows[i];
                const usnIndex = headerRow.indexOf("USN");
                const usnFromSheet = row[usnIndex].toLowerCase(); // Convert USN from the sheet to lowercase
                if (usnFromSheet === userUSN.toLowerCase()) { // Convert user input to lowercase for comparison
                    // Assuming the columns are in this order: Name, USN, Email, Phone, Club, Year
                    const nameIndex = headerRow.indexOf("Name");
                    const emailIndex = headerRow.indexOf("Email");
                    const phoneIndex = headerRow.indexOf("Phone");
                    const clubIndex = headerRow.indexOf("Club");
                    const yearIndex = headerRow.indexOf("Year");
                    const name = row[nameIndex];
                    const email = row[emailIndex];
                    const phone = row[phoneIndex];
                    const club = row[clubIndex];
                    const year = row[yearIndex];
                    const result = `Name: ${name}<br>USN: ${userUSN.toUpperCase()}<br>Email: ${email}<br>Phone: ${phone}<br>Club: ${club}<br>Year: ${year}`;
                    // Call sendBotMessage with the result
                    sendBotMessage(result, `Buscando USN ${userUSN.toUpperCase()} ...`);
                    found = true;
                    break;
                }
            }
            if (!found) {
                sendBotMessage("Estudiante no encontrado!");
            }
        })
        .catch((error) => {
            console.error("Error al cargar el archivo Excel:", error);
        });
}

const inputField = document.getElementById("user-input");
const quickMessageButtons = document.querySelectorAll(".quickmessage");
const mainDiv = document.getElementById("message-section");
const botDiv = document.createElement("div");

function sendBotMessage(message, typingText = "Espera...") {
    botDiv.id = "bot";
    botDiv.classList.add("message");
    botDiv.innerHTML = `<span id="bot-response" class="typing-animation">${typingText}</span>`;
    mainDiv.appendChild(botDiv);
    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    inputField.disabled = true;
    quickMessageButtons.forEach(button => {
        button.disabled = true;
    });

    setTimeout(() => {
        const botResponse = botDiv.querySelector("#bot-response");
        botResponse.classList.remove("typing-animation");
        botDiv.innerHTML = `<span id="bot-response">${message}</span>`;
        scroll.scrollTop = scroll.scrollHeight;
        inputField.disabled = false;
        quickMessageButtons.forEach(button => {
            button.disabled = false;
        });

        inputField.focus();
    }, 500);
}

function userMessageSend(input) {
    // Create a new user message div
    const newUserDiv = document.createElement("div");
    newUserDiv.id = "user";
    newUserDiv.classList.add("message", "typing-animation");
    newUserDiv.style.animationDuration = "1s";
    newUserDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(newUserDiv);

    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;

    // Remove "typing-animation" class after 500ms
    setTimeout(() => {
        newUserDiv.classList.remove("typing-animation");
    }, 500);
}

function userMessageWait() {
    return new Promise((resolve) => {
        const inputField = document.getElementById("user-input");
        let userResponse = "";

        function handleUserResponse(e) {
            if (e.code === "Enter" || e.target.classList.contains("sendmessage")) {
                const trimmedResponse = userResponse.trim();
                resolve(trimmedResponse);
            } else {
                userResponse = inputField.value;
            }
        }

        function handleInputBlur() {
            resolve(userResponse.trim());
        }

        inputField.addEventListener("keydown", handleUserResponse);
        inputField.addEventListener("input", handleUserResponse);
        inputField.addEventListener("blur", handleInputBlur);
    });
}


function addChat(input, product) {
    // Create a new user message div
    const newUserDiv = document.createElement("div");
    newUserDiv.id = "user";
    newUserDiv.classList.add("message", "typing-animation");
    newUserDiv.style.animationDuration = "0.5s";
    newUserDiv.innerHTML = `<span id="user-response">${input}</span>`;
    mainDiv.appendChild(newUserDiv);

    const botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.classList.add("message", "typing-animation");
    botDiv.style.animationDuration = "2s";
    botDiv.innerHTML = `<span id="bot-response">Pensando...</span>`;
    mainDiv.appendChild(botDiv);

    var scroll = document.getElementById("message-section");
    scroll.scrollTop = scroll.scrollHeight;
    inputField.disabled = true;
    quickMessageButtons.forEach(button => {
        button.disabled = true;
    });

    newUserDiv.classList.remove("typing-animation");
    setTimeout(() => {
        botDiv.classList.remove("typing-animation");
        botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
        scroll.scrollTop = scroll.scrollHeight;
        inputField.disabled = false;
        quickMessageButtons.forEach(button => {
            button.disabled = false;
        });
        inputField.focus();
    }, 1000);
}

/* Guardo la busqueda para ver si sigue pregunando*/
function guardarPregunta(busqueda) {
    //Guardo busqueda para poder mostrarlo en las siguientes paginas
    localStorage.setItem('busqueda', busqueda);
};

function leerPregunta() {
    //guardo todos los usuarios registrados
    return localStorage.getItem('busqueda');
    // Recuperar los usuarios de localStorage
    //var storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    //console.log(storedUsers);
};

function guardoLocalStorage(busqueda) {
    //guardo todos los usuarios registrados
    localStorage.setItem('busqueda', JSON.stringify(busqueda));
};

function limpiarStorage() {
    // Borra todos los datos locales
    localStorage.clear();
};
