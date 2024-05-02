$(document).ready(function() {
    // Asociar evento click a cada enlace que abre la modal
    $('[data-bs-toggle="modal"]').on('click', function() {
        var projectId = $(this).data('id'); // Obtener el ID del proyecto
        loadProjectData(projectId); // Función para cargar los datos
    });

    function loadProjectData(id) {
        $.getJSON('assets/data/projects.json', function(data) {
            var project = data.find(p => p.id === id); // Buscar el proyecto por ID
            if (project) {
                // Actualizar el contenido de la modal
                $('.modal .blog-title').text(project.title);
                $('.modal .portfolio-modal-table-text span').text(project.technologies.join(", "));
                $('.modal .h1-modal-paragraph').html('<p>' + project.description + '</p>');
                // Suponiendo que hayas una imagen en tu modal:
                $('.modal .h1-modal-img img').attr('src', 'assets/img/work/portfolio-modal-img-' + id + '.jpg');
            }
        });
    }
});

const d = document

d.addEventListener("DOMContentLoaded", () => {
    const projectsSection = d.getElementById("projects"),
        projectCard

    if (projectsSection) {
        d.addEventListener("click", e => {

        })
    }
})