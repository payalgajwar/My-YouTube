import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = () => {
  // const { videoCard, setvideoCard } = useState([]);

  // useEffect(fetchData(), []);

  // const fetchData = async () => {
  //   fetch("");
  //   const json = await data.json;
  // };

  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
