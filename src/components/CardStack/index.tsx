import "./style.scss";

const ValueStack = [
  { id: 1, stack: "JavaScript" },
  { id: 2, stack: "TypeScript" },
  { id: 3, stack: "React" },
  { id: 4, stack: "Node" },
  { id: 5, stack: "Nest" },
  { id: 6, stack: "Docker" },
  { id: 7, stack: "HTML" },
  { id: 8, stack: "CSS" },
  { id: 9, stack: "SASS" },
  { id: 10, stack: "Styled" },
];

function Stack(props: any) {
  return (
    <div className="box-stack">
      <p className="content-stack">{props.text}</p>
    </div>
  );
}

export function CardStack() {
  return (
    <div className="box-card-stack">
      <h1 className="title-tecnologias">Tecnologias</h1>
      <div className="container-box-stack">
        {ValueStack.map((response) => {
          return <Stack text={response.stack} key={response.id} />;
        })}
      </div>
    </div>
  );
}
