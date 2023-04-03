import AddPlanForm from '../AddPlanForm/AddPlanForm';
import s from './FormBlock.module.css';

const FormBlock = ({ formSubmit }) => {
  return (
    <div className={s.form__block}>
      <AddPlanForm formSubmit={formSubmit} />
    </div>
  );
};

export default FormBlock;
