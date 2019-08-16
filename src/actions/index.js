export const actionTypes = {
  SELECT_CLIENT: "SELECT_CLIENT",
  SEARCH_CLIENT: "SEARCH_CLIENT"
};

export const selectClient = clientInfo => ({
  type: actionTypes.SELECT_CLIENT,
  selected: clientInfo
});

export const searchClient = searchInfo => ({
  type: actionTypes.SEARCH_CLIENT,
  searchInfo: searchInfo
});
