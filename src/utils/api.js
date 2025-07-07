export const fetchIPInfo = async (ip = "") => {
  const API_KEY = import.meta.env.VITE_IPIFY_API_KEY;
  const baseUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
  const url = ip ? `${baseUrl}&ipAddress=${ip}` : baseUrl;

  const response = await fetch(url);
  if (!response.ok) throw new Error("Failed to fetch IP info");
  return await response.json();
};