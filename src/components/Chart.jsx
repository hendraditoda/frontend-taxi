import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import classes from "./Chart.module.css";

function Chart({ trips }) {
  const data = trips.map((trip, index) => ({
    name: `Trip ${index + 1}`,
    fare: trip.fare_amount,
  }));

  return (
    <div className={classes.chartContainer}>
      <h2>Fare Distribution</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="fare" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Chart;
