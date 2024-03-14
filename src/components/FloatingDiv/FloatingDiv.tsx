
import './FloatingDiv.css'

interface Props {
  img: string;
  text1: string;
  text2:string;
}
const FloatinDiv = ({img, text1, text2}:Props) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
