import "./punchingpunchout.css";
import React from "react";
class PunchingPunchout extends React.Component {
  constructor(props) {
    super(props);
    const storedStatus = JSON.parse(localStorage.getItem("attendance")) || [];
    const storedStatus2 = JSON.parse(localStorage.getItem("attendance2")) || [];
    this.state = {
      userData: [
        { userName: "Dev", id: "0", status: storedStatus[0],status2: storedStatus2[0] || "" },
        { userName: "Rahul", id: "1", status: storedStatus[1],status2: storedStatus2[1] || "" },
        { userName: "Arjun", id: "2", status: storedStatus[2],status2: storedStatus2[2] || "" },
        { userName: "Aman", id: "3", status: storedStatus[3],status2: storedStatus2[3] || "" },
        { userName: "Ajay", id: "4", status: storedStatus[4],status2: storedStatus2[4] || "" },
        { userName: "Naman", id: "5", status: storedStatus[5],status2: storedStatus2[5] || "" },
        { userName: "Krish", id: "6", status: storedStatus[6],status2: storedStatus2[6] || "" },
        { userName: "Vishal", id: "7", status: storedStatus[7],status2: storedStatus2[7] || "" },
        { userName: "Rohit", id: "8", status: storedStatus[8],status2: storedStatus2[8] || "" },
        { userName: "Raghav", id: "9", status: storedStatus[9],status2: storedStatus2[9] || "" },
        { userName: "Manish", id: "10", status: storedStatus[10],status2: storedStatus2[10] || "" },
        { userName: "anurag", id: "11", status: storedStatus[11],status2: storedStatus2[11] || "" },
        { userName: "apoorva", id: "12", status: storedStatus[12],status2: storedStatus2[12] || "" },
        { userName: "apoorv", id: "13", status: storedStatus[13],status2: storedStatus2[13] || "" },
        { userName: "swapnil", id: "14", status: storedStatus[14],status2: storedStatus2[14] || "" },
        { userName: "sonu", id: "15", status: storedStatus[15],status2: storedStatus2[15] || "" },
      ],
      newDate:'',
      newDate2:''
    };
  }
  updateStatus = (id, status) => {
    let d = new Date()
    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes()+ ":" + d.getSeconds() + " "+ (d.getHours()<12?'AM':'PM');
    this.setState({newDate:datestring})    
    const updatedUserData = this.state.userData.map((user) => {
      if (user.id === id) {
        return { ...user, status };
      }
      return user;
    });
    this.setState({ userData: updatedUserData }, () => {
      let a = this.state.userData.map((user) => user.status);
      localStorage.setItem("attendance", JSON.stringify(a));
    });
  };

  updateStatus2 = (id, status2) => {
    let d = new Date()
    var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes()+ ":" + d.getSeconds() + " "+ (d.getHours()<12?'AM':'PM');
    this.setState({newDate2:datestring})   
    const updatedUserData = this.state.userData.map((user) => {
      if (user.id === id) {
        return { ...user, status2 };
      }
      return user;
    });
    this.setState({ userData: updatedUserData }, () => {
      let a = this.state.userData.map((user) => user.status2);
      localStorage.setItem("attendance2", JSON.stringify(a));
    });
  };

  render() {
    let a = this.state.userData.length - 1;
    return (
      <div className="container">
        <h1 style={{ margin: "20px" }} className="heading">
          Welcome To Punching Punchout Application 
        </h1>
        <p style={{ fontSize: "18px" }}>Total users = {a}</p>
        <div className="wrapper">
          {this.state.userData.map((user) => (
            <div className="single-container" key={user.id}>
              <button
                onClick={() => this.updateStatus(user.id, "presence "+this.state.newDate)}
                className="button-70"
              >
                presence
              </button>
              <button
                onClick={() => this.updateStatus2(user.id, "leave " +this.state.newDate2)}
                className="button-70 button-l"
              >
                leave
              </button>
              <span className="para">{user.userName}</span>
              <p className="para">{user.status}</p>
              <p className="para">{user.status2}</p>
            </div>
          ))}
        </div>
        <div>
          <button
            className="button-70"
            onClick={() => localStorage.clear()}
            style={{ textAlign: "center" }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}
export default PunchingPunchout;
