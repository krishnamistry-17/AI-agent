/** @format */

type Props = {
  heading: string;
  count: number | string;
  title: string;
};

export default function StatsCard({ heading, count, title }: Props) {
  return (
    <div className=" bg-card p-5 flex flex-col gap-2 rounded-lg shadow border border-page">
      <h3>{heading}</h3>
      <h2 className="text-3xl font-bold">{count}</h2>
      <p>{title}</p>
    </div>
  );
}
