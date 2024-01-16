export const FactComponent = ({ factData }) => {
  return (
    <>
      <h1>{factData.factTitle}</h1>
      <div>{factData.UserId}</div>
      <div>{factData.fact}</div>
    </>
  );
};
