import './BtnOutline.css';

export default function BtnOutline(props) {

  return (
    <>
      <button className={`btn-outline ${props.btnPaddingOutline ? props.btnPaddingOutline : 'px-5'}`}>{props.contentText}</button>
    </>
  )
}