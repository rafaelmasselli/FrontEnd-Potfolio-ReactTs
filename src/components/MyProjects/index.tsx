import axios from "axios";
import { useState } from "react";
import { CardPost } from "../CardPost";
import { CardProject } from "../CardProject";
import "./style.scss";

type IRepository = {
  id: string;
  name: string;
  description: string;
  url: string;
  topics: [];
  language: string;
  has_pages: string;
};

type IUrl = {
  repos_url: string;
  avatar_url: string;
  name: string;
};

type IProps = {
  title: string;
  OpenPost: () => void;
  OpenBoolean: boolean;
};

function OpenDiv({ OpenPost, OpenBoolean, title }: IProps) {
  return (
    <div className="box-projects" onClick={OpenPost}>
      <h1 className="title-myProjects">{title}</h1>
      <p className="text-myProjects">{OpenBoolean ? "Voltar" : "Veja todos"}</p>
    </div>
  );
}

export function MyProjects({ repos_url, avatar_url, name }: IUrl) {
  const [openProjects, setOpenProjects] = useState(false);
  const [openPost, setOpenPosts] = useState(false);
  const [repository, setRepository] = useState<IRepository[]>([]);

  axios
    .get(repos_url)
    .then((res) => {
      setRepository(res.data);
    })
    .catch(() => {});

  function HandleOpenProjects() {
    if (openProjects == true) {
      setOpenProjects(false);
    } else {
      setOpenProjects(true);
    }
  }
  function HandleOpenPost() {
    if (openPost == true) {
      setOpenPosts(false);
    } else {
      setOpenPosts(true);
    }
  }

  return (
    <div className="container-myProjects">
      <OpenDiv
        title={"My projects"}
        OpenPost={HandleOpenProjects}
        OpenBoolean={openProjects}
      />
      {openProjects ? (
        repository.map((res) => {
          return (
            <CardProject
              description={res.description}
              language={res.language}
              name={res.name}
              url={res.url}
              key={res.id}
            />
          );
        })
      ) : (
        <>
          <CardProject
            description="Projeto que simula uma plataforma de eventos"
            language="TypeScript"
            name="FrontEnd-EventPlatform-ReactTS"
            url="https://github.com/rafaelmasselli/FrontEnd-EventPlatform-ReactTS"
            key="312037163189-2631-2"
          />
          <CardProject
            description="Letmeask é um chat interativo "
            language="TypeScript"
            name="FrontEnd-Letmeask-ReactTs"
            url="https://github.com/rafaelmasselli/FrontEnd-Letmeask-ReactTs"
            key="312037163189-2631-2-dadasda"
          />
        </>
      )}
      <OpenDiv
        title={"Recent Posts"}
        OpenPost={HandleOpenPost}
        OpenBoolean={openPost}
      />
      {openPost ? (
        <CardPost
          avatar_url={avatar_url}
          name={name}
          title="Não a publicações"
          subtitle="Vazia"
          tag={["sem tags", "sem tags", "sem tags"]}
        />
      ) : (
        <CardPost
          avatar_url={avatar_url}
          name={name}
          title=" Erro adb devices no Genymotion e Android Studio (React Native)"
          subtitle="Erro adb devices no Genymotion e Android Studio (React Native)"
          tag={["   react-native", "react", "expo"]}
        />
      )}
    </div>
  );
}
