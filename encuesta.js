let indicePreguntaActual = 0;
let respuestas = [];  // Aquí se guardarán las respuestas del usuario

function mostrarPregunta(indice) {
    let pregunta = preguntas[indice];
    let html = `<div class="card">
        <div class="card-body">
            <h5 class="card-title text-center">${pregunta.pregunta}</h5><br>`;
    pregunta.opciones.forEach((opcion, indiceOpcion) => {
        html += `<button type="button" class="btn btn-primary mb-2" onclick="seleccionarOpcion(${indice}, ${indiceOpcion})">${opcion.texto}</button><br>`;
    });
    html += `</div></div>`;
    document.getElementById('preguntas').innerHTML = html;
}

function seleccionarOpcion(indicePregunta, indiceOpcion) {
    // Almacena la opción seleccionada en la variable respuestas
    respuestas[indicePregunta] = preguntas[indicePregunta].opciones[indiceOpcion].valor;

    // Muestra la siguiente pregunta
    indicePreguntaActual++;
    if (indicePreguntaActual < preguntas.length) {
        mostrarPregunta(indicePreguntaActual);
    } else {
        // Aquí puedes manejar el final de la encuesta
        calcularResultado();
    }
}

function calcularResultado() {
    let puntaje = 0;
    for (let i = 0; i < respuestas.length; i++) {
        puntaje += parseInt(respuestas[i]);
    }

    let resultado = '';
    let textoIntro = '';
    let sugerencias = [];
    if (puntaje <= 15) {
        resultado = '¡Excelente salud financiera!';
        textoIntro = 'Tienes una salud financiera envidiable, sigue así y considera estas recomendaciones para mantener y mejorar aún más tu situación financiera. Realiza nuestro curso de educación financiera. Haz click <a href="#">aqui</a>';
        sugerencias = [
            { title: 'Continúa con tus buenos hábitos', content: 'Seguir manteniendo un presupuesto y ahorrar consistentemente te ayudará a mantener tu excelente salud financiera.' },
            { title: 'Considera invertir para maximizar tus ahorros', content: 'Diversificar tus inversiones y buscar nuevas oportunidades puede ayudarte a aumentar tus ahorros.' },
            { title: 'Mantén tu fondo de emergencia actualizado', content: 'Asegúrate de que tu fondo de emergencia esté siempre listo para cubrir cualquier imprevisto.' }
        ];
    } else if (puntaje <= 25) {
        resultado = 'Buena salud financiera, pero con margen de mejora.';
        textoIntro = 'Tienes una buena salud financiera, pero siempre hay espacio para mejorar. Aquí tienes algunas recomendaciones que te pueden ayudar a optimizar tu situación financiera. Realiza nuestro curso de educación financiera. Haz click <a href="#">aqui</a>';
        sugerencias = [
            { title: 'Revisa tus gastos y ajusta tu presupuesto', content: 'Revisar periódicamente tus gastos y ajustar tu presupuesto puede ayudarte a identificar áreas de mejora.' },
            { title: 'Aumenta tu ahorro mensual', content: 'Intentar ahorrar un poco más cada mes puede tener un gran impacto a largo plazo.' },
            { title: 'Fortalece tu fondo de emergencia', content: 'Asegúrate de tener suficiente dinero en tu fondo de emergencia para cubrir al menos 3-6 meses de gastos.' }
        ];
    } else {
        resultado = 'Necesitas mejorar tu salud financiera.';
        textoIntro = 'Es importante que tomes medidas para mejorar tu salud financiera. A continuación, algunas recomendaciones que pueden ayudarte a empezar. Realiza nuestro curso de educación financiera. Haz click <a href="#">aqui</a>';
        sugerencias = [
            { title: 'Crea un presupuesto y síguelo', content: 'Un presupuesto te ayudará a controlar tus gastos y a evitar gastos innecesarios.' },
            { title: 'Reduce gastos innecesarios', content: 'Identifica y elimina los gastos que no son esenciales para mejorar tu salud financiera.' },
            { title: 'Empieza un fondo de emergencia', content: 'Comienza a ahorrar para un fondo de emergencia para estar preparado para cualquier imprevisto.' },
            { title: 'Busca asesoramiento financiero', content: 'Un asesor financiero puede ayudarte a planificar mejor tus finanzas y a alcanzar tus objetivos.' }
        ];
    }

    document.getElementById('resultado').innerText = resultado;
    const sugerenciasContainer = document.getElementById('sugerencias');
    sugerenciasContainer.innerHTML = `<p>${textoIntro}</p>`;
    sugerencias.forEach(sugerencia => {
        const suggestionDiv = document.createElement('div');
        suggestionDiv.className = 'suggestion';
        suggestionDiv.innerHTML = `<strong>${sugerencia.title}</strong><p>${sugerencia.content}</p>`;
        sugerenciasContainer.appendChild(suggestionDiv);
    });
    sugerenciasContainer.style.display = 'block';
}

// Muestra la primera pregunta al cargar la página
mostrarPregunta(indicePreguntaActual);
