import './BtnOutline.css';

export default function BtnOutline(props) {

  return (
    <>
    <div>
      <button className='btn-outline'>{props.contentText}</button>

    </div>
    </>
  )
}