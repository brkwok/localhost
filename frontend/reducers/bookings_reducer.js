import { merge } from 'lodash';
import {
  RECEIVE_BOOKINGS,
  REMOVE_BOOKING
} from '../actions/booking_actions';

const BookingsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOOKINGS:
      return action.bookings || {};
    case REMOVE_BOOKING:
      const newState = merge({}, state);
      delete newState[action.bookingId];
      return newState;
    default:
      return state;
  }
};

export default BookingsReducer;