"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import TaskMode from "@/components/task/taskmode";

export default function Home() {
  const [data, setData] = useState(null);
  const [dataHistory, setDataHistory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8001/v1/tasks");
        setData(response.data);
        const responseHistory = await axios.get("http://localhost:8001/v1/tasks/history");
        setDataHistory(responseHistory.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <TaskMode mode={"On Going"} data={data} />
          <TaskMode mode={"History"} data={dataHistory} />
        </>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  );
}
