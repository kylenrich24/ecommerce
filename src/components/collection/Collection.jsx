import React from "react";
import CollectionItem from "../collection-item/CollectionItem";

import "./Collection.scss";

const Collection = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItempProps }) => (
          <CollectionItem key={id} {...otherItempProps} />
        ))}
    </div>
  </div>
);

export default Collection;