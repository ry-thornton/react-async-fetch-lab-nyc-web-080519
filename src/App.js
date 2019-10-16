import React from 'react'

class App extends React.Component {

    state = {

    }

    render() {
        return <h1> Something</h1>
    }



    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => console.log(data))
    }


}




export default App
