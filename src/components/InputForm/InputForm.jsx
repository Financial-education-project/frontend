import './InputForm.css';

export default function InputForm(props) {

  return (
    <>
      <div class="relative">
          <input type={props.typeInput} id="floating_filled" className="input peer" placeholder=" " />
          <label for="floating_filled" className="label">{props.PlaceHolder}</label>
      </div>
    </>
  )
}