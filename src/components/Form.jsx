import React, { useState } from 'react';

export const Form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        telefono: '+52',
        email: '',
        estado: '', // Asegúrate de que el estado esté vacío por defecto
        seguroSocial: '',
    });

    const estados = [
        'Selecciona un Estado',
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Si el campo es teléfono, solo permitimos números después del prefijo +52
        if (name === 'telefono') {
            const validPhoneValue = value.replace(/[^0-9]/g, ''); // Solo permitimos números
            if (validPhoneValue === '') return;

            const newValue = validPhoneValue.length > 0 ? '+52' + validPhoneValue.slice(2) : '+52';

            setFormData((prevData) => ({
                ...prevData,
                [name]: newValue,
            }));
        }
        // Si el campo es seguroSocial, solo permitimos números y limitamos a 10 dígitos
        else if (name === 'seguroSocial') {
            const validSocialSecurityValue = value.replace(/[^0-9]/g, '').slice(0, 10);
            setFormData((prevData) => ({
                ...prevData,
                [name]: validSocialSecurityValue,
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

        // Validación de que se ha seleccionado un estado
        if (formData.estado === 'Selecciona un Estado') {
            alert('Por favor selecciona un estado.');
            return;
        }

        // Validación del número de teléfono
        if (formData.telefono.length <= 10) {
            alert('Por favor ingrese un número de teléfono válido.');
            return;
        }

        console.log('Datos del formulario:', formData);

        try {
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

    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <>
            <p className="container pt-4 pb-5 parrafo1">
                Ingresa tus datos y un asesor certificado se comunicará contigo para brindarte más información.
            </p>

            <form onSubmit={handleSubmit} className="container pt-5 pb-5 form">
                <img src="https://i.ibb.co/zfs0BtQ/CASA.png" alt="Casa" className="form-image" />

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
                    <select className="form-control" id="estado" name="estado" value={formData.estado} onChange={handleChange} required>
                        {estados.map((estado, index) => (
                            <option key={index} value={estado}>
                                {estado}
                            </option>
                        ))}
                    </select>
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
                        maxLength="10"
                    />
                </div>

                <button type="submit" className="btn btn-dark">
                    Enviar
                </button>

                <img src="https://i.ibb.co/wCvLWjs/puerto.png" alt="Puerto" className="form-image-2" />
            </form>
            <p className="container pt-5 pb-4 parrafo2">
                Mejoravit | utilizará sus datos personales aquí recabados para la prospección comercial, la promoción de los productos y/o servicios
                disponibles y/o que Usted solicite a través de esta página web. Asimismo mejoravit.com.mx podrá compartir sus datos con sociedades o
                empresas con las que mantenga relaciones comerciales o de negocios. Para mayor información acerca del tratamiento y de los derechos
                que puede hacer valer, usted puede acceder al las políticas de privacidad completo para Usuarios a través de este enlace. <br />
                <a href="#">Conoce más Aquí.</a>
            </p>
        </>
    );
};
