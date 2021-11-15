import PropTypes from 'prop-types';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contact/contacts-selectors';
import * as actions from '../../redux/contact/contacts-actions';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(actions.changeFilter(e.target.value))}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  // getFilter: PropTypes.func.isRequired,
  // value: PropTypes.string.isRequired,
};
