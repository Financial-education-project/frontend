import './InputForm.css';

export default function InputForm(props) {

  return (
    <>
      <input type={props.typeInput} placeholder={props.placeholderInput} className='input-form' />
    </>
  )
}