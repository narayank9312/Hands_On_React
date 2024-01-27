import { User } from "./User";
import UserClass from "./userClass";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is learning feact project</h2>
      <User name={"Narayan kumar Jha"} />
      <UserClass name={"Narayan kumar Jha"} location={" Darbhanga Bihar"} />
    </div>
  );
};

export default About;
