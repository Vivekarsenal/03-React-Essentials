 export default function tabButton({children}){
    function handleClick(){
        console.log("Hello World!");
    }
    return (
        <li>
            <button onClick={handleClick}> {children} </button>
        </li>
    )
 }