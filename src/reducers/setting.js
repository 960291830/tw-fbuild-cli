import { SETTING } from '../constants/ActionTypes'
const initialState = {
  settingInfo:"hahahaha"
};
const setting = (state = initialState, action) => {
  switch (action.type) {
    case `${SETTING.GET_INFO}_SUCCESS`:
      return {
        ...state,
        settingInfo: action.payload.title
      };
    default:
      return state
  }
};

export default setting