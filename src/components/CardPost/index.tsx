import { ImgProfile } from "../ImgProfile";
import "./style.scss";

type IUserProfile = {
  avatar_url: string;
  name: string;
  subtitle: string;
  title: string;
  tag: [
    Tag?:string,
    Tag?:string,
    Tag?:string,
  ];
};

export function CardPost({
  name,
  avatar_url,
  subtitle,
  tag,
  title,
}: IUserProfile) {
  return (
    <div className="box-card-post">
      <div className="img-card-post">
        <ImgProfile avatar_url={avatar_url} name={name} />
      </div>
      <div className="container-card-post-text">
        <div className="box-text">
          <h1 className="title-text">
           {title}
          </h1>
          <p>2 anos atrás</p>
        </div>
        <div className="box-text">
          <h1 className="sub-text">
            {subtitle}
          </h1>
          <div className="container-tag">
            <h3>#react-native</h3>
            <h3>#react</h3>
            <h3>#Expo</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
