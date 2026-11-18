import { useState, useEffect } from 'react';
import type { OpenMeteoResponse } from '../types/DashboardTypes';

const CITY_COORDS: Record<string, { latitude: number; longitude: number }> = {
  guayaquil: { latitude: -2.1962, longitude: -79.8862 },
  quito: { latitude: -0.1807, longitude: -78.4678 },
  manta: { latitude: -0.9677, longitude: -80.7089 },
  cuenca: { latitude: -2.9001, longitude: -79.0059 },
};

interface UseFetchDataResult {
  data: OpenMeteoResponse | null;
  loading: boolean;
  error: string | null;
}

export default function useFetchData(
  selectedOption: string | null
): UseFetchDataResult {
  const [data, setData] = useState<OpenMeteoResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedOption) {
      setLoading(false);
      return;
    }

    const coords = CITY_COORDS[selectedOption] ?? CITY_COORDS.guayaquil;

    const API_URL =
      `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}` +
      `&longitude=${coords.longitude}` +
      `&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m` +
      `&hourly=temperature_2m,wind_speed_10m` +
      `&forecast_days=1&timezone=America%2FGuayaquil`;

    const obtenerDatos = async () => {
      setLoading(true);
      setError(null);
      try {
        const respuesta = await fetch(API_URL);
        if (!respuesta.ok) {
          throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const json: OpenMeteoResponse = await respuesta.json();
        setData(json);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Error al obtener los datos'
        );
      } finally {
        setLoading(false);
      }
    };

    obtenerDatos();
  }, [selectedOption]);

  return { data, loading, error };
}
