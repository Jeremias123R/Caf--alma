const productos = document.querySelectorAll(".menu-item");


productos.forEach(function(producto) {

    producto.addEventListener("click", function() {

        const descripcion =
            producto.querySelector(".menu-description");

        const simbolo =
            producto.querySelector(".toggle");


        productos.forEach(function(otroProducto) {

            if (otroProducto !== producto) {

                otroProducto
                    .querySelector(".menu-description")
                    .style.display = "none";

                otroProducto
                    .querySelector(".toggle")
                    .textContent = "+";

            }

        });


        if (descripcion.style.display === "block") {

            descripcion.style.display = "none";

            simbolo.textContent = "+";

        } else {

            descripcion.style.display = "block";

            simbolo.textContent = "−";

        }

    });

});