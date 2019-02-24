const Person=(props)=>(
    <div>
            <p>Name: {props.name}</p>
            <p>Roll No.: {props.roll}</p>
            <p>Address: {props.address}</p>
            <p>Mobile No.: {props.mobile}</p><br/><br/>   
        </div>   
         
)
class ReactApp extends React.Component{
     friends=[
          {
              name:"Bhuwan Giri",
              roll:2,
              address:"Gwarko,Ktm",
              mobile:9861234566
            },
            {
                name:"Surya Ghising",
                roll:31,
                address:"Jorpati,Ktm",
                mobile:9812131415
              },{
                name:"Elisha Bista",
                roll:8,
                address:"Maitidevi,Ktm",
                mobile:9861234566
              },{
                name:"Suman Sapkota",
                roll:30,
                address:"Asan,Ktm",
                mobile:9861234566
              },{
                name:"Lata Paudel",
                roll:12,
                address:"Gaurighar,Ktm",
                mobile:9861234566
              },{
                name:"Kaushal Guragain",
                roll:16,
                address:"Kalopul,Ktm",
                mobile:9861234566
              },{
                name:"Keshar Paudel",
                roll:35,
                address:"Kalopul,Ktm",
                mobile:9861744256
              },{
                name:"Prabin Mainali",
                roll:23,
                address:"Sundarijal,Ktm",
                mobile:9808967543
              }
      ]
    render(){
        return(
            <div className="basic">
            <h3>Details of my Friends</h3>
            {
                this.friends.map(friend=>
                <Person name={friend.name}
                    roll={friend.roll}
                    address={friend.address}
                    mobile={friend.mobile}/>)
            }

            </div>

        )
    }
}
ReactDOM.render(<ReactApp />, document.getElementById('reactApp'));
