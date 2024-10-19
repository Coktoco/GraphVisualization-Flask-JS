Graph Visualization Program

This project is a simple web application designed to generate graph visualizations based on user-input data. The graph consists of evenly distributed vertices on a circular layout, with edges connecting them. The project leverages JavaScript for graph generation, CSS for styling, and Flask as the server backend.

*Project is only available in Polish*

Features

	•	Generates undirected graphs, where the thickness of the edges doubles when two vertices are mutually connected.
	•	Vertices are positioned based on mathematical calculations for even distribution on a circle.
	•	Aesthetic approach allowing edges to cross each other, enhancing the artistic nature of the graph.
	•	Uses a minimalist tech stack: JavaScript for logic, CSS for styling, Flask for server-side logic, and Bootstrap for additional UI styling.

Graph Positioning Algorithm

	•	Vertices are placed on a circle with a fixed radius and center.
	•	The angle for each vertex is calculated using 360∘/n where n is the number of vertices.
	•	Vertex coordinates are computed using:
	•	x = x(center) + r * cos(angle)
	•	y = y(center) + r * sin(angle)
	•	Edge lengths are calculated using Euclidean distance, and the angle of inclination is determined using the arctangent formula.

Tech Stack

	•	Flask: For server-side routing and templates.
	•	JavaScript: Core logic for graph generation.
	•	CSS: Styling for visual elements.
	•	Bootstrap: Additional styling for a responsive and clean UI.

Screenshots:

<img width="304" alt="image" src="https://github.com/user-attachments/assets/8f30028b-647e-4634-ac23-5f59da543a62">

<img width="304" alt="image" src="https://github.com/user-attachments/assets/5b3a1024-f372-423e-8c7a-804636f04080">
