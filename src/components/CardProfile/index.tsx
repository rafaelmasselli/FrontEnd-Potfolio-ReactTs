import { ImgProfile } from "../ImgProfile";
import "./style.scss";

type IUserProfile = {
  avatar_url: string;
  name: string;
  bio: string;
};

export function CardProfile({ avatar_url, name, bio }: IUserProfile) {
  return (
    <div className="Box-profile">
      <ImgProfile avatar_url={avatar_url} name={name} />
      <h1 className="title-name">{name}</h1>
      <p className="text-stack">{bio}</p>
    </div>
  );
}
