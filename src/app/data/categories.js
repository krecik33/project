export const categoriesDataApiUrl = "/api/categories";
export const getCategories = async () => {
  const res = await fetch(categoriesDataApiUrl);
  if (res.ok) return await res.json();
};
