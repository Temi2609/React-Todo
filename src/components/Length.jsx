
const Length =(props)=>{
    const checker = ()=>{
        if (props.length < 10){
           return ("Text to short")
          }else{
            return("Text to Long")
          }
    }


    return(
        <>
        <p>: {props.length}</p>
        </>
    )
}

export default Length;

