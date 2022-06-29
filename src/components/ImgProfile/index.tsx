import "./style.scss";

type IImg = {
  avatar_url: string;
  name: string;
};

export function ImgProfile({ avatar_url, name }: IImg) {
  return <img src={avatar_url} alt={name} className="Image" />;
}
