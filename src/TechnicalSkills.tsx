import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LabelList,
} from "recharts";

interface TechnicalSkillsProps {
  skills: object[];
}
const TechnicalSkills: React.FC<TechnicalSkillsProps> = ({ skills }) => {
  return (
    <ResponsiveContainer width="100%" height={440}>
      <BarChart
        width={394}
        data={skills}
        layout="vertical"
        height={440}
        margin={{
          top: 5,
          right: 20,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis
          type="number"
          orientation="top"
          stroke="#285A64"
          tickCount={11}
          domain={[0, 10]}
          allowDataOverflow
        />
        <YAxis
          type="category"
          hide={true}
          dataKey="name"
          axisLine={false}
          tickLine={false}
          style={{ fill: "#285A64" }}
        />
        <Bar background dataKey="value" fill="#8884d8" barSize={26}>
          <LabelList
            dataKey="name"
            content={renderCustomizedLabel}
            position="insideRight"
            style={{ fill: "white" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

const renderCustomizedLabel = (props: any) => {
  const { x, y, width, height, value } = props;

  const fireOffset = false; // value.toString().length < 5;
  const offset = fireOffset ? -40 : 5;
  return (
    <text
      x={x + width - offset}
      y={y + height - 5}
      fill={fireOffset ? "#285A64" : "#fff"}
      textAnchor="end"
    >
      {value}
    </text>
  );
};

export default TechnicalSkills;
