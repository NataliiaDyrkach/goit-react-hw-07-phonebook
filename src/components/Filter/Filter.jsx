import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFieldFilter = event =>
    dispatch(setFilter(event.currentTarget.value));

  return (
    <>
      <h2 className={css.text}>Contacts</h2>
      <p className={css.text}>Find contacts by name</p>
      <label className={css.label}>
        <input
          className={css.input}
          name='filter'
          type="text"
          value={filter}
          onChange={changeFieldFilter}
        />
      </label>
    </>
  );
}


export default Filter;
