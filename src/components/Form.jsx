import React, { useState } from 'react';

export const Form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        telefono: '+52', // Inicializamos con el prefijo
        email: '',
        estado: '',
        seguroSocial: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Si el campo es teléfono, solo permitimos números después del prefijo +52
        if (name === 'telefono') {
            // Comprobamos si el valor tiene solo números y si empieza con +52
            const validPhoneValue = value.replace(/[^0-9]/g, ''); // Solo permitimos números
            if (validPhoneValue === '') return; // Si no hay números, no hacemos nada

            // Aseguramos que siempre empiece con +52
            const newValue = validPhoneValue.length > 0 ? '+52' + validPhoneValue.slice(2) : '+52';

            setFormData((prevData) => ({
                ...prevData,
                [name]: newValue,
            }));
        } else if (name === 'seguroSocial') {
            // Aplicamos la máscara para el NSS (XXX-XX-XXXX)
            const cleanedValue = value.replace(/[^0-9]/g, ''); // Eliminar caracteres no numéricos

            // Formateamos el valor con los guiones
            const formattedValue =
                cleanedValue.slice(0, 3) +
                (cleanedValue.length > 3 ? '-' : '') +
                cleanedValue.slice(3, 5) +
                (cleanedValue.length > 5 ? '-' : '') +
                cleanedValue.slice(5, 9);

            setFormData((prevData) => ({
                ...prevData,
                [name]: formattedValue,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validación del número de teléfono: que tenga al menos un número después del +52
        if (formData.telefono.length <= 10) {
            alert('Por favor ingrese un número de teléfono válido.');
            return;
        }

        console.log('Datos del formulario:', formData);

        try {
            // Enviar los datos al backend
            const response = await fetch('http://localhost:5000/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log('Respuesta del backend:', data);

            if (response.ok) {
                alert('Datos enviados correctamente');
            } else {
                alert('Hubo un error al enviar los datos');
            }
        } catch (error) {
            console.error('Error al enviar los datos:', error);
            alert('Error al enviar los datos');
        }
    };

    // Obtener la fecha actual en formato yyyy-mm-dd
    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <form onSubmit={handleSubmit} className="container mt-5 mb-5">
            {/* NOMBRE */}
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                    Nombre:
                </label>
                <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>

            {/* APELLIDO */}
            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">
                    Apellido:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* FECHA DE NACIMIENTO */}
            <div className="mb-3">
                <label htmlFor="fechaNacimiento" className="form-label">
                    Fecha de Nacimiento:
                </label>
                <input
                    type="date"
                    className="form-control"
                    id="fechaNacimiento"
                    name="fechaNacimiento"
                    value={formData.fechaNacimiento}
                    onChange={handleChange}
                    required
                    max={currentDate}
                />
            </div>

            {/* TELEFONO */}
            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">
                    Teléfono:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    maxLength="13"
                />
            </div>

            {/* EMAIL */}
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Correo Electrónico:
                </label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            {/* ESTADO */}
            <div className="mb-3">
                <label htmlFor="estado" className="form-label">
                    Estado donde vives:
                </label>
                <input type="text" className="form-control" id="estado" name="estado" value={formData.estado} onChange={handleChange} required />
            </div>

            {/* NSS */}
            <div className="mb-3">
                <label htmlFor="seguroSocial" className="form-label">
                    Número de Seguro Social:
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="seguroSocial"
                    name="seguroSocial"
                    value={formData.seguroSocial}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-dark">
                Enviar
            </button>
        </form>
    );
};
