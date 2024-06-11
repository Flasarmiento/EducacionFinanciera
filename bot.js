const userMessage = [
    /* 0 */
    ["hola", "hola", "hola", "hlo", "hola", "hola"],
    /* 1 */
    ["¿Cómo puedo inscribirme en el programa de educación financiera?"],
    /* 2 */
    ["¿Qué requisitos necesito cumplir para acceder al programa?"],
    /* 3 */
    ["¿Cuánto cuesta participar en el programa?"],
    /* 4 */
    ["¿Cuánto tiempo tengo para completar el curso?"],
    /* 5 */
    ["¿Qué tipo de certificación obtendré al finalizar el curso?"],
    /* 6 */
    ["¿El curso está disponible en otros idiomas?"],
    /* 7 */
    ["¿Puedo acceder al curso desde cualquier dispositivo?"],
    /* 8 */
    ["¿Hay algún soporte técnico disponible si tengo problemas con la plataforma?"],
    /* 9 */
    ["¿Qué sucede si no puedo terminar una lección en una sola sesión?"],
    /* 10 */
    ["¿Cómo se estructuran los módulos del curso?"],
    /* 11 */
    ["¿Qué tipos de actividades incluye el curso?"],
    /* 12 */
    ["¿Qué herramientas necesito para completar el curso?"],
    /* 13 */
    ["¿Puedo interactuar con otros participantes del curso?"],
    /* 14 */
    ["¿Los materiales del curso están disponibles para descarga?"],
    /* 15 */
    ["¿Puedo repetir los módulos si no comprendo algo?"],
    /* 16 */
    ["¿Cómo se evalúa el progreso en el curso?"],
    /* 17 */
    ["¿Las evaluaciones son obligatorias?"],
    /* 18 */
    ["¿Qué pasa si no paso una evaluación?"],
    /* 19 */
    ["¿Cómo recibo mi certificado después de completar el curso?"],
    /* 20 */
    ["¿Puedo utilizar el certificado para mejorar mis oportunidades laborales?"],
    /* 21 */
    ["¿Qué pasa si olvido mi contraseña para acceder a la plataforma?"],
    /* 22 */
    ["¿Cómo puedo comunicarme con los instructores del curso?"],
    /* 23 */
    ["¿El curso incluye algún tipo de mentoría personalizada?"],
    /* 24 */
    ["¿Los contenidos del curso se actualizan regularmente?"],
    /* 25 */
    ["¿Hay algún material recomendado adicional que deba revisar?"],
    /* 26 */
    ["¿Puedo compartir mi cuenta con otra persona?"],
    /* 27 */
    ["¿Qué debo hacer si encuentro un error en el contenido del curso?"],
    /* 28 */
    ["¿El curso es compatible con todas las navegadores web?"],
    /* 29 */
    ["¿Qué habilidades o conocimientos previos necesito para comenzar el curso?"],
    /* 30 */
    ["¿Puedo acceder al curso sin conexión a internet?"],
    /* 31 */
    ["¿Qué beneficios puedo obtener al mejorar mis habilidades financieras a través de este programa?"],
    /* 32 */
    ["¿Qué temas específicos cubre el módulo de Emprendedurismo?"],
    /* 33 */
    ["¿Qué tipo de apoyo puedo recibir si tengo dificultades para entender algún concepto del curso?"],
    /* 34 */
    ["¿Cómo puedo aplicar los conocimientos adquiridos en el curso a mi vida cotidiana?"],
    /* 35 */
    ["¿Qué diferencia a este programa de otros cursos de educación financiera disponibles en línea?"],
    /* 36 */
    ["¿Cuál es la duración estimada del programa completo desde el inicio hasta obtener el certificado?"],
    /* 37 */
    ["¿Hay alguna restricción de edad para participar en el programa?"],
    /* 38 */
    ["¿Cómo puedo compartir mi experiencia en el curso con otras personas interesadas en mejorar sus habilidades financieras?"],
    /* 39 */
    ["¿Hay oportunidades de networking o colaboración con otros participantes del curso?"],
    /* 40 */
    ["¿Qué recursos adicionales puedo encontrar en la plataforma educativa además de los módulos del curso?"],
    /* 41 */
    ["¿Puedo acceder al contenido del curso en cualquier momento del día?"],
    /* 42 */
    ["¿Puedo recibir asesoramiento personalizado sobre mi situación financiera específica?"],
    /* 43 */
    ["¿El programa incluye información sobre impuestos y cómo gestionarlos?"],
    /* 44 */
    ["¿Puedo acceder al curso desde cualquier lugar del mundo?"],
    /* 45 */
    ["¿El certificado de finalización del curso está reconocido oficialmente por alguna institución educativa o entidad gubernamental?"],
    /* 46 */
    ["¿Qué tan rigurosas son las evaluaciones del curso?"],
    /* 47 */
    ["¿Hay alguna opción de tutoría individual disponible si necesito ayuda adicional?"],
    /* 48 */
    ["¿Qué nivel de interacción puedo esperar con los instructores del curso?"],
    /* 49 */
    ["¿El programa incluye ejercicios prácticos para aplicar los conceptos aprendidos?"],
    /* 50 */
    ["¿Qué pasa si no puedo completar el curso dentro del plazo que había planeado?"]
]

const botReply = [
    /* 0 */
    ["¡Hola! 😊", "¡Hola! 👋", "¡Oye! 👍", "¡Hola! 👋"],
    /* 1 */
    ["Puedes inscribirte a través de nuestra plataforma educativa online. Solo necesitas registrarte con tu correo electrónico y completar el formulario de inscripción."],
    /* 2 */
    ["Ser mayor de 18 años y tener acceso a internet. No se requieren conocimientos previos en finanzas."],
    /* 3 */
    ["El programa es completamente gratuito."],
    /* 4 */
    ["Tienes un acceso ilimitado a los contenidos del curso, por lo que puedes completarlo a tu propio ritmo."],
    /* 5 */
    ["Al finalizar el curso, recibirás un certificado de educación financiera digital emitido por nuestra institución."],
    /* 6 */
    ["Actualmente, el curso está disponible solo en español."],
    /* 7 */
    ["Sí, el curso es accesible desde computadoras, tabletas y teléfonos móviles."],
    /* 8 */
    ["Sí, ofrecemos soporte técnico a través de chat en vivo y correo electrónico."],
    /* 9 */
    ["Puedes guardar tu progreso y continuar donde lo dejaste en cualquier momento."],
    /* 10 */
    ["El curso está dividido en seis módulos, cada uno centrado en un aspecto específico de la educación financiera."],
    /* 11 */
    ["Incluye videos, lecturas, cuestionarios, simulaciones interactivas y estudios de caso."],
    /* 12 */
    ["Necesitarás acceso a una computadora o dispositivo móvil con internet, y herramientas básicas como Google Sheets y plataformas de simulación financiera online."],
    /* 13 */
    ["Sí, hay foros y grupos de discusión donde puedes interactuar con otros estudiantes."],
    /* 14 */
    ["Sí, muchos de los recursos, como guías y plantillas, están disponibles para descargar."],
    /* 15 */
    ["Sí, puedes revisar los módulos tantas veces como sea necesario."],
    /* 16 */
    ["A través de cuestionarios al final de cada módulo y evaluaciones prácticas como estudios de caso y simulaciones."],
    /* 17 */
    ["Sí, completar las evaluaciones es necesario para obtener el certificado de finalización."],
    /* 18 */
    ["Puedes volver a tomar las evaluaciones hasta que obtengas una calificación aprobatoria."],
    /* 19 */
    ["El certificado se genera automáticamente y puedes descargarlo desde la plataforma una vez que completes todos los módulos y evaluaciones."],
    /* 20 */
    ["Sí, el certificado demuestra que tienes conocimientos en educación financiera, lo cual puede ser valioso para empleadores."],
    /* 21 */
    ["Puedes restablecer tu contraseña a través de la opción \"Olvidé mi contraseña\" en la página de inicio de sesión."],
    /* 22 */
    ["Puedes enviar preguntas a los instructores a través de los foros de discusión o por correo electrónico."],
    /* 23 */
    ["Actualmente, no ofrecemos mentoría personalizada, pero los foros y grupos de discusión son monitoreados por expertos que pueden responder a tus preguntas."],
    /* 24 */
    ["Sí, nos aseguramos de que los contenidos sean actuales y relevantes, y se actualizan periódicamente."],
    /* 25 */
    ["Sí, hay una lista de lecturas y recursos adicionales recomendados que se proporciona al inicio del curso."],
    /* 26 */
    ["No, cada cuenta es personal e intransferible."],
    /* 27 */
    ["Puedes reportar cualquier error a través del sistema de soporte técnico o el foro de discusión."],
    /* 28 */
    ["El curso es compatible con la mayoría de los navegadores modernos como Chrome, Firefox, Safari y Edge."],
    /* 29 */
    ["No necesitas habilidades o conocimientos previos en finanzas. El curso está diseñado para principiantes."],
    /* 30 */
    ["No, necesitas una conexión a internet para acceder a los contenidos del curso y participar en las actividades interactivas."],
    /* 31 */
    ["Mejorarás tu capacidad para administrar tu dinero, lo que puede conducir a una mayor estabilidad financiera y mejores oportunidades laborales."],
    /* 32 */
    ["El módulo de Emprendedurismo cubre temas como identificación de oportunidades de negocio, desarrollo de planes de negocios, estrategias de marketing y fuentes de financiamiento para emprendedores."],
    /* 33 */
    ["Puedes acceder a foros de discusión donde puedes hacer preguntas y recibir ayuda de instructores y otros estudiantes."],
    /* 34 */
    ["El curso proporciona herramientas y estrategias prácticas que puedes aplicar a tu situación financiera personal o profesional."],
    /* 35 */
    ["Nuestro programa se enfoca en proporcionar una formación integral que abarca desde conceptos básicos hasta estrategias avanzadas, con actividades interactivas y recursos actualizados."],
    /* 36 */
    ["La duración del programa depende del ritmo de cada participante, pero en promedio, se estima que tomará varias semanas completarlo."],
    /* 37 */
    ["Sí, el programa está diseñado para jóvenes y adultos mayores de 18 años."],
    /* 38 */
    ["Puedes compartir tu experiencia a través de redes sociales, recomendando el programa a amigos y familiares, o escribiendo una reseña en línea."],
    /* 39 */
    ["Sí, puedes conectarte con otros participantes a través de los foros de discusión y grupos de estudio."],
    /* 40 */
    ["Además de los módulos del curso, encontrarás guías, herramientas, artículos, y videos complementarios para ampliar tus conocimientos."],
    /* 41 */
    ["Sí, la plataforma educativa está disponible las 24 horas del día, los 7 días de la semana, para que puedas acceder en el momento que más te convenga."],
    /* 42 */
    ["No ofrecemos asesoramiento financiero personalizado como parte del curso, pero te proporcionamos las herramientas y conocimientos necesarios para tomar decisiones financieras informadas."],
    /* 43 */
    ["Sí, algunos módulos abordan temas relacionados con impuestos y cómo gestionarlos correctamente."],
    /* 44 */
    ["Sí, siempre y cuando tengas acceso a internet, puedes acceder al curso desde cualquier ubicación."],
    /* 45 */
    ["El certificado es emitido por nuestra institución y puede ser utilizado como evidencia de finalización del curso en tu historial educativo o profesional."],
    /* 46 */
    ["Las evaluaciones están diseñadas para evaluar tu comprensión de los temas cubiertos en cada módulo y son una parte importante del proceso de aprendizaje."],
    /* 47 */
    ["No ofrecemos tutorías individuales, pero puedes recibir apoyo a través de los foros de discusión y otros recursos disponibles en la plataforma."],
    /* 48 */
    ["Los instructores están disponibles para responder preguntas y participar en discusiones en los foros de discusión, pero la interacción puede variar según el volumen de participantes y la disponibilidad del instructor."],
    /* 49 */
    ["Sí, el curso incluye actividades prácticas como estudios de caso, simulaciones y ejercicios de planificación financiera para reforzar los conceptos aprendidos."],
    /* 50 */
    ["No hay ningún problema. Puedes tomar tanto tiempo como necesites para completar el curso, ya que tienes acceso ilimitado a los materiales y recursos."]
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
