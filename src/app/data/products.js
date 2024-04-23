export const ProductsApiUrl = "api/products";

export const getProducts = async () => {
  const res = await fetch(ProductsApiUrl);
  if (res.ok) return await res.json();
};
