import "./App.css";
import { useState } from "react";
export default function App() {
  // const name = ['Murali', 'Kritika', 'Niraj'];
  const user = [
    {
      name:"Niraj",
      pic:"https://scontent.fccu19-1.fna.fbcdn.net/v/t1.6435-9/207009725_2893820677538117_3600760441816467119_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=9LtOkTeUFksAX9_1AOR&_nc_oc=AQmydE_mb8cGX_63QIGEQPm82OdwNdrWtDe9sb6Nw2d703LcoBdFDHfE_hISjoxA3SY&_nc_ht=scontent.fccu19-1.fna&oh=00_AT9Cmce2c7Vax-sJrb1L-ALd3MIBpqgSpmELSgUyiSbjIQ&oe=629B6409"
    },
    {
      name:"Rayhan",
      pic:"https://brifly-media.s3.ap-south-1.amazonaws.com/s3fs-public/styles/large/public/article/2021-11/Sidharth%20Malhotra.png?itok=le350G9_"
      
    },
    {
      name:"Ayan",
      pic:"https://scontent.fccu19-1.fna.fbcdn.net/v/t1.6435-9/200724063_2888089481444570_1611803421100245424_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-6&_nc_sid=730e14&_nc_ohc=wuVtQvnm67YAX9dKwZV&_nc_ht=scontent.fccu19-1.fna&oh=00_AT_X8wmy13bSF4oUMKD5H-JNvfIZXdSZ5GnOv12Oredh-w&oe=62997E13"
    
    }
  ];
  return (
    <div className="App">
      {/* <MSg
        name="Niraj"
        pic="https://scontent.fccu19-1.fna.fbcdn.net/v/t1.6435-9/207009725_2893820677538117_3600760441816467119_n.jpg?stp=dst-jpg_p526x296&_nc_cat=110&ccb=1-6&_nc_sid=8bfeb9&_nc_ohc=9LtOkTeUFksAX9_1AOR&_nc_oc=AQmydE_mb8cGX_63QIGEQPm82OdwNdrWtDe9sb6Nw2d703LcoBdFDHfE_hISjoxA3SY&_nc_ht=scontent.fccu19-1.fna&oh=00_AT9Cmce2c7Vax-sJrb1L-ALd3MIBpqgSpmELSgUyiSbjIQ&oe=629B6409"
      />
      <MSg
        name="Rayhan"
        pic="https://brifly-media.s3.ap-south-1.amazonaws.com/s3fs-public/styles/large/public/article/2021-11/Sidharth%20Malhotra.png?itok=le350G9_"
      />
      <MSg
        name="Ayan"
        pic="https://scontent.fccu19-1.fna.fbcdn.net/v/t1.6435-9/200724063_2888089481444570_1611803421100245424_n.jpg?stp=dst-jpg_p526x296&_nc_cat=109&ccb=1-6&_nc_sid=730e14&_nc_ohc=wuVtQvnm67YAX9dKwZV&_nc_ht=scontent.fccu19-1.fna&oh=00_AT_X8wmy13bSF4oUMKD5H-JNvfIZXdSZ5GnOv12Oredh-w&oe=62997E13"
      /> */}

      {/* {name.map(nm => <Welcome name = {nm} /> )} */}
      {user.map(usr => <Msg name = {usr.name} pic = {usr.pic} />)}
      
    </div>
  );
}
//props - like arguments in function

//JSX  - javascript XML

//template syntax - {}
//component Msg - Component definition
// 1. first letter must be capital
// 2. return only one JSX element



//like button counter
// hook is function start with 
// useState
// state- current senario - current data
// const [state, setState] = useState(initialValue)
// setState - Inform React state is changed - re-render (updating)
function Counter(){
  // const like = 100;
  //array destructuring
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return(
    <div>
      <button className="btn-like" onClick={() => setLike(like + 1)}>👍 {like}</button>
      <button className="btn-dislike" onClick={() => setDisLike(disLike + 1) }>👎 {disLike}</button>
    </div>  
  );
}

function Msg(props) {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.name}😀❤😁🥳 </h1>;
      <img className="profile-pic" src={props.pic} alt={props.name} />
      <Counter />
    </div>
  );
}
