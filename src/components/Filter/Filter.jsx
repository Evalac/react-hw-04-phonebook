import css from './Filter.module.css';

function Filter({ value, filterContact }) {
  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel} htmlFor="filter">
        Find contacts by name
        <input
          className={css.filterInput}
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
