// Define la URL base de tu backend
const API_BASE_URL = 'http://your-backend-url.com/api';

export const generatePassword = async (): Promise<string> => {
  try {
    const response = await fetch(`${API_BASE_URL}/generate-password`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error al generar contraseña en el backend.');
    }

    const data = await response.json();
    if (data.password) {
      return data.password;
    } else {
      throw new Error('La respuesta del backend no contiene la contraseña.');
    }
  } catch (error) {
    console.error('Error en generatePassword service:', error);
    throw error; // Propaga el error para que la pantalla lo maneje
  }
};
