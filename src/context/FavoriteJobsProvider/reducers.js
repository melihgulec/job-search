import {ADD_LIST, REMOVE_FROM_LIST} from './FavoriteTypes';

export default function reducers(state, action) {
  switch (action.type) {
    case ADD_LIST:
      const newList = [...state.favoritesList, action.payload];
      return {...state, favoritesList: newList};

    case REMOVE_FROM_LIST:
      const removedList = state.favoritesList.filter(
        item => item.id !== action.payload.id,
      );
      return {...state, favoritesList: removedList};

    default:
      return {...state};
  }
}
