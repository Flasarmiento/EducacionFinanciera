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
        textoIntro = 'Tu salud financiera es sólida y demuestras un buen control sobre tus finanzas personales. Aquí están algunos puntos destacados:. Haz click <a href="#">aqui</a>';
        textoFin = 'Aunque ya estás en un gran camino, siempre hay margen para mejorar y optimizar. Te invitamos a unirte a nuestro Curso de Educación Financiera para: •	Refinar tus estrategias de inversión: Aprende sobre nuevas oportunidades y herramientas para maximizar tus rendimientos. •	Evaluación y ajuste de objetivos: Mantén tus metas financieras actualizadas y ajusta tu plan según tus necesidades ';
        sugerencias = [
            { title: 'Gestión eficiente del ahorro', content: 'Has logrado establecer un ahorro constante y tienes un fondo de emergencia..' },
            { title: 'Presupuesto bien definido', content: 'Mantienes un presupuesto equilibrado que te permite alcanzar tus metas financieras..' },
            { title: 'Manejo adecuado de deudas', content: 'Tus deudas están bajo control y utilizas el crédito de manera responsable.' }
        ];
    } else if (puntaje <= 25) {
        resultado = 'Buena salud financiera, pero con margen de mejora.';
        textoIntro = 'Tu salud financiera está en buen camino, pero hay áreas en las que podrías mejorar para alcanzar una mayor estabilidad y crecimiento. Aquí están algunos puntos clave. Haz click <a href="#">aqui</a>';
        textoFin = 'Para ayudarte a fortalecer estas áreas, te invitamos a unirte a nuestro Curso de Educación Financiera donde aprenderás a:
•	Establecer un plan de ahorro sólido: Descubre métodos efectivos para ahorrar de manera constante.
•	Crear un presupuesto robusto: Aprende a diseñar y adherirte a un presupuesto que funcione para ti.
•	Manejo avanzado de deudas: Conoce técnicas para reducir tus deudas más rápido y de manera más eficiente.
';
        sugerencias = [
            { title: 'Ahorro irregular', content: 'Aunque tienes la intención de ahorrar, no siempre lo logras de manera constante.' },
            { title: 'Presupuesto flexible', content: 'Mantienes un presupuesto, pero a veces es difícil seguirlo al pie de la letra.' },
            { title: 'Deudas manejables', content: 'Tienes algunas deudas bajo control, pero podrías beneficiarte de estrategias adicionales para reducirlas más rápidamente.' }
        ];
    } else {
        resultado = 'Necesitas mejorar tu salud financiera.';
        textoIntro = 'Es importante que tomes medidas para mejorar tu salud financiera. Tu salud financiera presenta algunas áreas críticas que requieren atención inmediata. Aquí están algunos puntos preocupantes:. Haz click <a href="#">aqui</a>';
        textoFin = 'No te preocupes, estamos aquí para ayudarte a mejorar y tomar el control de tus finanzas. Te invitamos a unirte a nuestro Curso de Educación Financiera, donde aprenderás a:
•	Iniciar y mantener un hábito de ahorro: Implementa estrategias prácticas para empezar a ahorrar de inmediato.
•	Crear y seguir un presupuesto efectivo: Establece un presupuesto que te permita gestionar tus gastos y aumentar tus ahorros.
•	Reducir y manejar tus deudas: Conoce técnicas para reducir tus deudas y evitar que crezcan.
';
        sugerencias = [
            { title: 'Falta de ahorro', content: 'No has logrado establecer un fondo de emergencia o ahorrar de manera regular.' },
            { title: 'Presupuesto inexistente o ineficaz', content: 'No tienes un presupuesto definido, lo que dificulta la gestión de tus finanzas.' },
            { title: 'Deudas crecientes', content: 'Tienes deudas considerables que no estás manejando de una forma óptima.' },
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
