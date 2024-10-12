import one from "../assets/Screenshot 2024-10-06 201131.png";
import two from "../assets/Screenshot 2024-10-06 201245.png";
import three from "../assets/Screenshot 2024-10-06 201308.png";
import four from "../assets/Screenshot 2024-10-06 201319.png";
import five from "../assets/Screenshot 2024-10-06 201442.png";

const LeaderBoard2 = () => {
  const data = Array.from({ length: 1 }, () => {
    return {
      id: Math.floor(Math.random() * 100),
      title: `Score ${Math.floor(Math.random() * 1000)}`,
      score: Math.round(Math.random() * 1000),
    };
  });
  const data2 = Array.from({ length: 1 }, () => {
    return {
      id2: Math.floor(Math.random() * 100),
      title2: `Score ${Math.floor(Math.random() * 1000)}`,
      score2: Math.round(Math.random() * 1000),
    };
  });
  const data3 = Array.from({ length: 1 }, () => {
    return {
      id3: Math.floor(Math.random() * 100),
      title3: `Score ${Math.floor(Math.random() * 1000)}`,
      score3: Math.round(Math.random() * 1000),
    };
  });
  const data4 = Array.from({ length: 1 }, () => {
    return {
      id4: Math.floor(Math.random() * 100),
      title4: `Score ${Math.floor(Math.random() * 1000)}`,
      score4: Math.round(Math.random() * 1000),
    };
  });
  const data5 = Array.from({ length: 1 }, () => {
    return {
      id5: Math.floor(Math.random() * 100),
      title5: `Score ${Math.floor(Math.random() * 1000)}`,
      score5: Math.round(Math.random() * 1000),
    };
  });
  const pic = [
    {
      id: 1,
      img1: (
        <img src={one} alt="" className="w-[40px] h-[30px] rounded-md mt-2" />
      ),
      red: <div className="w-[20px] h-[10px] rounded-md bg-red-500" />,
      // blue: <div className="w-[30px] h-[10px] rounded-md bg-blue-500" />,
      green: <div className="w-[20px] h-[10px] rounded-md bg-green-500" />,
      per: "Failed",
      // newPoint: "Score",
      time: "Speed",
    },
    {
      id: 2,
      img2: <img src={two} alt="" className="w-[40px] h-[30px] rounded-md" />,
      red2: <div className="w-[20px] h-[10px] rounded-md bg-red-500" />,
      // blue2: <div className="w-[30px] h-[10px] rounded-md bg-blue-500" />,
      green2: <div className="w-[20px] h-[10px] rounded-md bg-green-500" />,
      per2: "Failed",
      // newPoint2: "Score",
      time2: "Speed",
    },
    {
      id: 3,
      img3: <img src={three} alt="" className="w-[40px] h-[30px] rounded-md" />,
      red3: <div className="w-[20px] h-[10px] rounded-md bg-red-500" />,
      // blue3: <div className="w-[30px] h-[10px] rounded-md bg-blue-500" />,
      green3: <div className="w-[20px] h-[10px] rounded-md bg-green-500" />,
      per3: "Failed",
      // newPoint3: "Score",
      time3: "Speed",
    },
    {
      id: 4,
      img4: <img src={four} alt="" className="w-[40px] h-[30px] rounded-md" />,
      red4: <div className="w-[20px] h-[10px] rounded-md bg-red-500" />,
      // blue4: <div className="w-[30px] h-[10px] rounded-md bg-blue-500" />,
      green4: <div className="w-[20px] h-[10px] rounded-md bg-green-500" />,
      per4: "Failed",
      // newPoint4: "Score",
      time4: "Speed",
    },
    {
      id: 5,
      img5: <img src={five} alt="" className="w-[40px] h-[30px] rounded-md" />,
      red5: <div className="w-[20px] h-[10px] rounded-md bg-red-500" />,
      // blue5: <div className="w-[30px] h-[10px] rounded-md bg-blue-500" />,
      green5: <div className="w-[20px] h-[10px] rounded-md bg-green-500" />,
      per5: "Failed",
      // newPoint5: "Score",
      time5: "Speed",
    },
  ];

  // <div className="m-5 px-5 pb-2 bg-slate-100 h-[700px] w-800px] flex items-center justify-center">

  console.log((500 / 1000) * 280);
  return (
    <div>
      <div className="flex items-end justify-around h-[10%] gap-2 w-[100%] ">
        {data?.map((el) => (
          <div>
            <p className="text-[14px]"> {el.title}</p>
            <div
              key={el.id}
              className={` bg-red-300 rounded-md w-[50px]`}
              style={{ height: `${(el.score / 1000) * 40}px` }}
            />
            <p className="text-[10px]"></p>
          </div>
        ))}
        {data2?.map((el) => (
          <div>
            <p className="text-[14px]"> {el.title2}</p>
            <div
              key={el.id2}
              className={` bg-pink-400 rounded-md w-[50px]`}
              style={{ height: `${(el.score2 / 1000) * 40}px` }}
            />
          </div>
        ))}
        {data3?.map((el) => (
          <div>
            <p className="text-[14px]"> {el.title3}</p>
            <div
              key={el.id3}
              className={` bg-blue-400 rounded-md w-[50px]`}
              style={{ height: `${(el.score3 / 1000) * 40}px` }}
            />
            <p className="text-[10px]"></p>
          </div>
        ))}
        {data4?.map((el) => (
          <div>
            <p className="text-[14px]"> {el.title4}</p>
            <div
              key={el.id4}
              className={` bg-green-400 rounded-md w-[50px]`}
              style={{ height: `${(el.score4 / 1000) * 40}px` }}
            />
            <p className="text-[10px]"></p>
          </div>
        ))}
        {data5?.map((el) => (
          <div>
            <p className="text-[14px]"> {el.title5}</p>
            <div
              key={el.id5}
              className={` bg-yellow-400 rounded-md w-[50px]`}
              style={{ height: `${(el.score5 / 1000) * 40}px` }}
            />
            <p className="text-[10px]"></p>
          </div>
        ))}
      </div>
      <div className=" flex w-[100%] justify-center items-center         mt-[20px] s">
        {pic?.map((p) => (
          <div
            className=" w-[100%] h-[40%] flex justify-center items-center
            "
          >
            <div className="flex  items-center justify-center w-[100%] h-[100%]">
              <div>
                {" "}
                {p.img1}{" "}
                <div className="flex flex-col gap-2 justify-start mt-1 ">
                  <p className="flex items-center justify-center gap-1">
                    <p className="text-[10px]"> {p.per}</p> {p.red}
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    {/* {p.newPoint} */}
                    {/* // {p.blue} */}
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <p className="text-[10px]"> {p.time}</p> {p.green}
                  </p>
                </div>
              </div>
              <div>
                {" "}
                {p.img2}{" "}
                <div className="flex flex-col gap-2 justify-start mt-1">
                  <p className="flex items-center justify-center gap-1">
                    <p className="text-[10px]"> {p.per2} </p>
                    {p.red2}
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    {/* {p.newPoint2} {p.blue2} */}
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <p className="text-[10px]"> {p.time2} </p>
                    {p.green2}
                  </p>
                </div>
              </div>
              <div>
                {" "}
                {p.img3}
                <div className="flex flex-col gap-2 justify-start mt-1">
                  <p className="flex items-center justify-center gap-1">
                    <p className="text-[10px]"> {p.per3}</p> {p.red3}
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    {/* {p.newPoint3} {p.blue3} */}
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <p className="text-[10px]"> {p.time3}</p> {p.green3}
                  </p>
                </div>
              </div>
              <div>
                {" "}
                {p.img4}
                <div className="flex flex-col gap-2 justify-start mt-1">
                  <p className="flex items-center justify-center gap-1">
                    <p className="text-[10px]"> {p.per4}</p> {p.red4}
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    {/* {p.newPoint4} */}
                    {/* {p.blue4} */}
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <p className="text-[10px]"> {p.time4} </p>
                    {p.green4}
                  </p>
                </div>
              </div>
              <div>
                {" "}
                {p.img5}
                <div className="flex flex-col gap-1 justify-start mt-1">
                  <p className="flex items-center justify-center gap-1">
                    <p className="text-[10px]"> {p.per5}</p> {p.red5}
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    {/* {p.newPoint5} {p.blue5} */}
                  </p>
                  <p className="flex items-center justify-center gap-1">
                    <p className="text-[10px]"> {p.time5}</p> {p.green5}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderBoard2;
