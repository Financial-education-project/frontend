import './InputForm.css';

export default function InputForm(props) {

  return (
    <>
      <div class="relative">
          <input type={props.typeInput} id={props.idInput} className="input peer" placeholder=" " />
          <label for={props.idInput} className="label">{props.PlaceHolder}</label>
      </div>
    </>
  )
}