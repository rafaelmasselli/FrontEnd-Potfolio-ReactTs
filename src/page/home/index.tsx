import axios from "axios";
import { useState } from "react";

import "./style.scss";

import { CardProfile } from "../../components/CardProfile";
import { CardSocialNetwork } from "../../components/CardSocialNetwork";
import { CardStack } from "../../components/CardStack";
import { MyProjects } from "../../components/MyProjects";

type IUser = {
  id: string;
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  repos_url: string;
};

export function Home() {
  const [User, SetUser] = useState<IUser[]>([]);

  axios
    .get("https://api.github.com/users/rafaelmasselli")
    .then((res) => {
      SetUser(res.data);
    })
    .catch(() => {});

  return (
    <div className="container">
      <div className="container-right">
        <CardProfile
          name={User.name}
          avatar_url={User.avatar_url}
          bio={User.bio}
          login={User.login}
          key={User.id}
        />
        <CardSocialNetwork />
        <CardStack />
      </div>
      <div className="container-left">
        <MyProjects repos_url={User.repos_url} name={User.name} avatar_url={User.avatar_url} />
      </div>
    </div>
  );
}
