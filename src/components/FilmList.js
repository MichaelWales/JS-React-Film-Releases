import React, {Fragment} from 'react';
import FilmItem from './FilmItem.js';

const FilmList = (props) => {
  const filmNodes = props.films.map((film) => {
    return <FilmItem film = {film} key = {film.id} />
  })

  return(
    <Fragment>
      {filmNodes}
    </Fragment>
  )
}

export default FilmList;
