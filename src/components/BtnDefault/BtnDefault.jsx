import './BtnDefault.css';

export default function BtnDefault(props) {

  return (
    <>
      <button type="submit" className='btn-default'>{props.contentText}</button>
    </>
  )
}