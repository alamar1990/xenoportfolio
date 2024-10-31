import type { LocationQueryValue } from "#vue-router";

interface GetAllArtsProps {
  fields?: LocationQueryValue;
  limit?: number;
  offset?: number;
}

export const getAllArts = (
  queries: ComputedRef<GetAllArtsProps>,
  server = true,
) => {
  return useAPI<any>("/artworks", {
    query: queries,
    watch: [queries],
    server,
  });
};
