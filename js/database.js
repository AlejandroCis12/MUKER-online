const productos = {
    1: {
        nombre: 'Closets y vestidores',
        descripcion: 'Diseños optimizados para maximizar el espacio de almacenamiento.',
        imagenes: [ 
           "Imagenes/Productos/Closets y Vestidores.jpg",
            "Imagenes/Productos/Closets y Vestidores1.jpg",
            "Imagenes/Productos/Closets y Vestidores2.jpg"
        ],
        caracteristicas: [
            "Hechos a medida según el espacio disponible.",
            "Materiales de alta calidad y acabados personalizados.",
            "Opciones de organización interna como cajones, estantes y barras para colgar ropa."
        ]
    },

    2: {
        nombre: 'Muebles de cocina',
        descripcion: 'Cocinas funcionales y estéticas adaptadas a tus necesidades.',
        imagenes: [
            "Imagenes/Productos/Muebles de cocina.jpg",
            "Imagenes/Productos/Muebles de cocina1.jpg",
            "Imagenes/Productos/Muebles de cocina2.jpg"
        ],
        caracteristicas: [
            "Diseños personalizados para optimizar el espacio y la funcionalidad.",
            "Materiales resistentes a la humedad y al desgaste.",
            "Opciones de almacenamiento inteligente como gavetas extraíbles y organizadores internos."
        ]
    },

    3: {
        nombre: 'Muebles de baño',
        descripcion: 'Muebles resistentes a la humedad con diseños modernos.',
        imagenes: [
            "Imagenes/Productos/Mueble de baño.jpg",
            "Imagenes/Productos/mueble de baño1.jpg",
            "Imagenes/Productos/Mueble de baño2.png"
        ],
        caracteristicas: [
            "Diseños personalizados para maximizar el espacio en baños pequeños.",
            "Materiales resistentes a la humedad y fáciles de limpiar.",
            "Opciones de almacenamiento como gabinetes, estantes y espejos con almacenamiento integrado."
        ]
    },
    
    4: {
        nombre: 'Repisas',
        descripcion: 'Soluciones creativas para organizar y exhibir tus libros y objetos.',
        imagenes: [
            "Imagenes/Productos/Repisa.jpg",
            "Imagenes/Productos/repisas1.png",
            "Imagenes/Productos/repisas2.png"
        ],

        caracteristicas: [
            "Diseños personalizados para adaptarse a cualquier espacio.",
            "Materiales duraderos y acabados elegantes.",
            "Opciones de instalación flexibles, desde repisas flotantes hasta estanterías modulares."
        ]
    },
    
    5: {
        nombre: 'Centro de TV',
        descripcion: 'Diseños modernos y funcionales para tu entretenimiento.',
        imagenes: [
            "Imagenes/Productos/centrotv.png",
            "Imagenes/Productos/centrotv1.png",
            "Imagenes/Productos/centrotv2.png"
        ],
        caracteristicas: [
            "Diseños personalizados para maximizar el espacio de almacenamiento.",
            "Materiales de alta calidad y acabados elegantes.",
            "Opciones de organización interna como estantes ajustables, cajones y barras para colgar ropa."
        ]
    },
    
    6: {
        nombre: 'Muebles de oficina',
        descripcion: 'Escritorios amplios, gabinetes con cajones inteligentes y estanterías modulares que optimizan el espacio sin sacrificar estilo.',
        imagenes: [
            "Imagenes/Productos/Escritorio.jpg",
            "Imagenes/Productos/oficina1.png",
            "Imagenes/Productos/oficina2.png"
        ],
        caracteristicas: [
            "Diseños ergonómicos para mejorar la comodidad y productividad.",
            "Materiales duraderos y acabados profesionales.",
            "Opciones de almacenamiento inteligente como gavetas, estantes y organizadores de cables."
        ]
    },
    
    7: {
        nombre: 'Pergolas',
        descripcion: 'Estructura resistente y estética, fabricada en madera tratada para exteriores. Ideal para sombrear terrazas, jardines o patios.',
        imagenes: [
            "Imagenes/Productos/pergola.jpg",
            "Imagenes/Productos/pergola1.jpg",
            "Imagenes/Productos/pergola2.jpg"
        ],
        caracteristicas: [
            "Diseños personalizados para adaptarse a cualquier espacio exterior.",
            "Materiales duraderos y resistentes a la intemperie.",
            "Opciones de techado como toldos retráctiles o cubiertas fijas."
        ]
    },
    
    8: {
        nombre: 'Accesorios.',
        descripcion: 'Productos únicos de venta directa para decorar y organizar tu espacio. Cajas de té, tablas de queso y más.',
        imagenes: [
            "Imagenes/Index/Accesorios.png"
        ],
        caracteristicas: [
            "Diseños exclusivos y artesanales.",
            "Materiales de alta calidad y acabados detallados.",
            "Variedad de productos para diferentes usos y estilos."
        ]
    }
}

const accesorios = {
    1: {
        nombre: 'Cajas de Té',
        descripcion: 'Hermosa caja de madera con divisores internos para organizar tus tés favoritos. Acabado natural que realza la veta de la madera. Medidas: 35x10x20 cms y 25x25x25 cms',
        imagenes: [ 
            "Imagenes/Productos/accesorios/cajate.jpg",
            "Imagenes/Productos/accesorios/cajate1.jpg"
        ]
    },

    2: {
        nombre: 'Tablas',
        descripcion: 'Descubre la elegancia natural de nuestras tablas: una fusión perfecta de diseño, funcionalidad y sabor.',
        imagenes: [ 
            "Imagenes/Productos/accesorios/Tablas para queso.png",
            "Imagenes/Productos/accesorios/tablas1.jpg",
            "Imagenes/Productos/accesorios/tablas2.jpg"
        ]
    },

    3: {
        nombre: 'Centro de mesa rústico',
        descripcion: 'Hermosos centros de mesa, ideales para dar un toque natural a tu living o comedor.',
        imagenes: [ 
            "Imagenes/Productos/accesorios/lazy susan.png",
            "Imagenes/Productos/accesorios/centro1.jpg",
            "Imagenes/Productos/accesorios/centro2.jpg"
        ]
    },

    4: {
        nombre: 'Banquitos',
        descripcion: 'Banquitos de madera que fusionan elegancia atemporal con funcionalidad. Diseños cuidadosamente elaborados para aportar calidez y estilo a cualquier espacio.',
        imagenes: [ 
            "Imagenes/Productos/accesorios/banquitos.png",
            "Imagenes/Productos/accesorios/banquitos1.jpg",
            "Imagenes/Productos/accesorios/banquitos2.jpg"
        ]
    },   

    5: {
        nombre: 'Botes de basura',
        descripcion: 'Botes de basura en madera con tapa hermética y diseño discreto. Ideal para integrarse en cocinas o baños con estilo natural y funcional.',
        imagenes: [ 
            "Imagenes/Productos/accesorios/bote.jpg",
            "Imagenes/Productos/accesorios/bote1.jpg",
            "Imagenes/Productos/accesorios/bote2.jpg"
        ]
    },   

    6: {
        nombre: 'Macetas',
        descripcion: 'Macetas de madera con forro interior resistente a la humedad. Perfectas para plantas de interior y para aportar calidez a cualquier rincón.',
        imagenes: [ 
            "Imagenes/Productos/accesorios/macetas.jpg",
            "Imagenes/Productos/accesorios/macetas1.jpg",
            "Imagenes/Productos/accesorios/macetas2.jpg"
        ]
    }, 

    7: {
        nombre: 'Porta huevos',
        descripcion: 'Porta huevos artesanal en madera, con compartimentos individuales para mantener el orden y frescura en tu cocina.',
        imagenes: [ 
            "Imagenes/Productos/accesorios/porta huevo.jpg",
            "Imagenes/Productos/accesorios/porta huevo1.jpg",
            "Imagenes/Productos/accesorios/porta huevo2.jpg"
        ]
    }, 

    8:{
        nombre: 'Percheros',
        descripcion: 'Percheros de madera con diseño funcional y estético. Ideales para mantener el orden en la entrada de tu hogar.',
        imagenes: [ 
            "Imagenes/Productos/accesorios/percheros.jpg",
            "Imagenes/Productos/accesorios/percheros1.jpg",
            "Imagenes/Productos/accesorios/percheros2.jpg"
        ]
    },

    9: {
        nombre: 'Soporte de velas',
        descripcion: 'Soporte de velas en madera maciza, con diseño minimalista que realza la luz cálida de cualquier vela. Ideal para ambientes relajantes o decoración de mesa.',
        imagenes: [ 
            "Imagenes/Productos/accesorios/soporte de velas.jpg",
            "Imagenes/Productos/accesorios/soporte de velas1.jpg",
            "Imagenes/Productos/accesorios/soporte de velas2.jpg"
        ]
    },
}