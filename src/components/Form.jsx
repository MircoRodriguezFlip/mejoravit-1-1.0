import React, { useState } from 'react';

export const Form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        telefono: '',
        seguroSocial: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
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

    return (
        <form onSubmit={handleSubmit} className="container mt-5 mb-5">
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">
                    Nombre:
                </label>
                <input type="text" className="form-control" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </div>

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
                />
            </div>

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
                    required
                />
            </div>
            <button type="submit" className="btn btn-dark">
                Enviar
            </button>
        </form>
    );
};
