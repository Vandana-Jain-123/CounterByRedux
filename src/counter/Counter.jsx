// import {  } from "../redux/actionType";
import { incrementCountBy1, decrementCountBy1, addTodo } from "../redux/actionType";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Box} from "@chakra-ui/react"
const Counter = () => {
    let url = `https://jsonplaceholder.typicode.com/todos`
    const data = useSelector((state) => state)
    console.log(data.count, "data")
    const dispatch = useDispatch()

    const fetchData = (url) => {
        fetch(url)
            .then((res) => {
                return res.json()
            }).then((result) => {
                dispatch(addTodo(result))
                return result
            }).catch((err) => {
                console.log(err, "error")
            })
    }

    return (
        <>

            <button onClick={()=>fetchData(url)}>Submit</button>
            <div style={{backgroundColor:"lightgreen", fontSize:30, width:400, height:400, margin:"auto", textAlign:"center" }}>
                <button  style={{ backgroundColor:"red", color:"white", marginTop:200 ,padding:10, border:"none"}} onClick={() => dispatch(incrementCountBy1(1))}>increment</button>
                {data.count}
                <button style={{ backgroundColor: "green", color: "white", marginTop: 200, padding: 10, border: "none" }} onClick={() => dispatch(decrementCountBy1(1))} >decrement</button>
            </div>
            
        </>
    )
}

export default Counter;