import { AiOutlineFolder, AiOutlineStar } from "react-icons/ai";
import { BiGitBranch } from "react-icons/bi";

import "./style.scss";

type ICard = {
  name: string;
  description: string;
  url: string;

  language: string;
};

export function CardProject({ description, language, name }: ICard) {
  return (
    <div className="box-card-project">
      <div className="container-title-project">
        <AiOutlineFolder size={20} />
        <h1 className="title-project">{name}</h1>
      </div>
      <p className="text-project">
        {description == null ? "Sem descrição" : description}
      </p>
      <div className="container-states-info">
        <div className="container-states">
          <div className="states">
            <AiOutlineStar size={20} />
            <p>100</p>
          </div>
          <div className="states">
            <BiGitBranch size={20} />
            <p>100</p>
          </div>
        </div>
        <div className="container-language">
          <div className={"ball-cor-" + language}></div>
          <span> {language}</span>
        </div>
      </div>
    </div>
  );
}
