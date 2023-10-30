import { create } from "apisauce";

const api = create({
  baseURL: "https://newsapi.org/v2",
});

const apiKey = "?country=us&apiKey=3ccc0112db06432d8ba4e31a67327d8b";
const getTopHeadline = api.get("/top-headlines" + apiKey);
const getByCategory = (category) =>
  api.get(
    "/everything?q=" + category + "&apiKey=3ccc0112db06432d8ba4e31a67327d8b"
  );
export default {
  getTopHeadline,
  getByCategory,
};
