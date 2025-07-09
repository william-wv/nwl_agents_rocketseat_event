import { Navigate, useParams } from "react-router-dom"

export function Room() {
  
  const params = useParams()
  
  if(!params.roomId){
    return <Navigate replace to="/" />
  }


  return (
    <div>
      Room Details {JSON.stringify(params)}
    </div>
  )
}