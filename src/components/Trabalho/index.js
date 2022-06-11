const Trabalho =({num1, num2}) => {
    let result = (num1+num2)*(num1+num2) 
    return (
        <div>
            <button onClick={console.log(result)}>CLIQUE AQUI</button>
        </div>
    )
}

export default Trabalho;