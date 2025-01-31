function Filter({ value, filterContact }) {
  return (
    <div>
      <label htmlFor="filter">
        Find contacts by name
        <input
          type="text"
          name="filter"
          id="filter"
          value={value}
          onChange={filterContact}
        />
      </label>
    </div>
  );
}

export { Filter };
