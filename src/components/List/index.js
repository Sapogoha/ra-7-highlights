import React from 'react';
import PropTypes from 'prop-types';

import Video from '../Video';
import Article from '../Article';

import withWrapper from '../withWraper';

function List({ list }) {
  const WrappedVideo = withWrapper(Video);
  const WrappedArticle = withWrapper(Article);

  return list.map((item) => {
    switch (item.type) {
      case 'video':
        return <WrappedVideo key={item.url} {...item} />;

      case 'article':
        return <WrappedArticle key={item.title} {...item} />;

      default:
        return null;
    }
  });
}

List.propTypes = {
  list: PropTypes.array.isRequired,
};

export default List;
