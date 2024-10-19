function drawGraph() {
    const input = document.getElementById('graph-input').value;
    const graphs = input.split('.').map(g => g.trim()); // Rozdzielanie grafów za pomocą kropki
    const graphContainer = document.getElementById('graph-container');
    graphContainer.innerHTML = '';

    graphs.forEach((graph, index) => {
        const edges = graph.split(';').map(e => e.trim().split(',').map(Number));
        const vertices = new Set(edges.flat());

        // Tworzenie kontenera dla każdego grafu
        const singleGraphContainer = document.createElement('div');
        singleGraphContainer.className = 'single-graph';
        singleGraphContainer.style.position = 'relative';
        singleGraphContainer.style.width = '800px';
        singleGraphContainer.style.height = '600px';
        singleGraphContainer.style.background = '#f0f0f0';
        singleGraphContainer.style.border = '1px solid #ccc';
        singleGraphContainer.style.marginBottom = '20px';
        graphContainer.appendChild(singleGraphContainer);

        // Wierzchołki rozmieszczamy na okręgu o środku w punkcie x:400 i y:300 (środek kontenera)
        const radius = 250;
        const center = { x: 400, y: 300 };
        const angleStep = 2 * Math.PI / vertices.size; // Tutaj ustawiamy jak dzielimy okręg w zależności od ilości wierzchołków - ustawiamy przeskok na kącie
        const vertexPositions = {};

        vertices.forEach((vertex, idx) => {
            const angle = idx * angleStep;
            const x = center.x + radius * Math.cos(angle) - 15; // -15 to adjust for vertex size
            const y = center.y + radius * Math.sin(angle) - 15; // -15 to adjust for vertex size
            vertexPositions[vertex] = { x, y };

            const vertexElement = document.createElement('div');
            vertexElement.className = 'vertex';
            vertexElement.style.left = `${x}px`;
            vertexElement.style.top = `${y}px`;
            vertexElement.textContent = vertex;
            singleGraphContainer.appendChild(vertexElement);
        });

        // Rysowanie krawędzi
        edges.forEach(([start, end]) => {
            if (!vertexPositions[start] || !vertexPositions[end]) {
                return; // Skip
            }
            const startX = vertexPositions[start].x + 15;
            const startY = vertexPositions[start].y + 15;
            const endX = vertexPositions[end].x + 15;
            const endY = vertexPositions[end].y + 15;
            const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
            const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;

            const edgeElement = document.createElement('div');
            edgeElement.className = 'edge';
            edgeElement.style.left = `${startX}px`;
            edgeElement.style.top = `${startY}px`;
            edgeElement.style.width = `${length}px`;
            edgeElement.style.height = `2px`;
            edgeElement.style.position = 'absolute';
            edgeElement.style.transform = `rotate(${angle}deg)`;
            edgeElement.style.transformOrigin = '0 0';
            edgeElement.style.backgroundColor = 'black';

            singleGraphContainer.appendChild(edgeElement);
        });
    });
}
