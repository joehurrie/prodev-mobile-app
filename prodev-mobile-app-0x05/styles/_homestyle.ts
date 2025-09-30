import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  searchGroup: {
    marginBottom: 20,
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    columnGap: 10,
  },

  searchControlGroup: {
    flex: 1,
  },

  searchFormText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#7B7B7B",
    marginBottom: 8,
  },

  searchControl: {
    borderWidth: 1,
    borderColor: "#E9E9E9",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
  },

  searchButton: {
    backgroundColor: "#34967C",
    padding: 12,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 20,
    paddingHorizontal: 10,
    paddingVertical: 12,
  },

  filterContainer: {
    width: 72,
    height: 72,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },

  listingContainer: {
    marginTop: 20,
    paddingBottom: 80,
  },

  paginationContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },

  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
