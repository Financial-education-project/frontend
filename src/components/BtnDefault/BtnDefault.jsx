import './BtnDefault.css';

export default function BtnDefault(props) {

  return (
    <>
      <button type="submit" className={`btn-default ${props.btnPaddingDefault ? props.btnPaddingDefault : 'px-5'}`}>{props.contentText}</button>
    </>
  )
}