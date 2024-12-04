import classes from "./Filters.module.css";

function Filters({ filters, setFilters }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const resetFilters = () => {
    setFilters({
      minFare: "",
      maxFare: "",
      startTime: "",
      endTime: "",
      minDistance: "",
      maxDistance: "",
    });
  };

  return (
    <div className={classes.filtersContainer}>
      <h2>Filters</h2>
      <div className={classes.filtersForm}>
        <input
          name="minFare"
          placeholder="Min Fare"
          onChange={handleChange}
          value={filters.minFare}
        />
        <input
          name="maxFare"
          placeholder="Max Fare"
          onChange={handleChange}
          value={filters.maxFare}
        />
        <input
          name="startTime"
          type="datetime-local"
          onChange={handleChange}
          value={filters.startTime}
        />
        <input
          name="endTime"
          type="datetime-local"
          onChange={handleChange}
          value={filters.endTime}
        />
        <input
          name="minDistance"
          placeholder="Min Distance"
          onChange={handleChange}
          value={filters.minDistance}
        />
        <input
          name="maxDistance"
          placeholder="Max Distance"
          onChange={handleChange}
          value={filters.maxDistance}
        />
      </div>
      <button onClick={resetFilters} className={classes.resetButton}>
        Reset Filters
      </button>
    </div>
  );
}

export default Filters;
