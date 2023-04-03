import s from './AddPlanForm.module.css';

const AddPlanForm = ({ formSubmit }) => {
  return (
    <form className={s.form} onSubmit={formSubmit}>
      <div className={s.day__importance__block}>
        <select className={s.day__form} name='day' required>
          <option value=''>Choose a day</option>
          <option value='0'>Monday</option>
          <option value='1'>Tuesday</option>
          <option value='2'>Wednesday</option>
          <option value='3'>Thursday</option>
          <option value='4'>Friday</option>
          <option value='5'>Saturday</option>
          <option value='6'>Sunday</option>
        </select>
        <select className={s.importance__form} name='importance' required>
          <option value=''>Select importance</option>
          <option value='0'>important</option>
          <option value='1'>not important</option>
        </select>
      </div>
      <div className={s.description__button__block}>
        <input
          className={s.description__input}
          type='text'
          placeholder='Description'
          name='description'
          required
        ></input>
        <button type='submit' className={s.submit__btn}>
          Add
        </button>
      </div>
    </form>
  );
};
export default AddPlanForm;
