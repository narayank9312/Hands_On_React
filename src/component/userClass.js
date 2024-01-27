import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/narayank9312");
    const Details = await data.json();
    console.log(Details);
    this.setState({
      userInfo: Details,
    });
  }
  componentWillUnmount() {
    console.log("component will unmount ");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img height={50} width={50} src={avatar_url} />
        <h2>name:{name}</h2>
        <h3>location: {location}</h3>
        <h4>contact: @nkjha0508</h4>
      </div>
    );
  }
}

export default UserClass;
