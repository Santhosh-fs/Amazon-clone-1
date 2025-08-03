import { useParams } from "react-router-dom";

function product() {

  const {id}=useParams();

  return (
    <>
       <h2>{id}</h2>
      <h2>The Products Is Currently Not Available</h2>
    </>
  )
}

export default product