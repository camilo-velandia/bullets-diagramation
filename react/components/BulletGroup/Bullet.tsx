import React from 'react';
import {Link} from 'vtex.render-runtime';
import {LinkProps} from './BulletTypes';
import {useCssHandles} from 'vtex.css-handles';

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({src, titleBullet, link}:Props) => {

  const CSS_HNDLES=["bullet_item","bullet_item--title","bullet_item--image","bullet_item--link"]
  const handles = useCssHandles(CSS_HNDLES)

  return (
    <div className={handles.bullet_item}>
      <Link to={link.url} className={handles["bullet_item--link"]}>
        <img src={src} alt={titleBullet} className={handles["bullet_item--image"]} />
        <p className={handles["bullet_item--title"]}>{titleBullet}</p>
      </Link>
    </div>
  );
};

Bullet.schema ={
  title: "Bullet",
  type: "object",
  properties: {
    src:{
      title:"Imagen de bullet",
      type:"string",
      widget:{
        "ui:widget": "image-uploader"
      }
    }
  }
}

export default Bullet;
