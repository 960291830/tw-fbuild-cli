import {SETTING} from '../constants/ActionTypes'

const actions = {

  getInfo: function() {
    return {
      type: SETTING.GET_INFO,
      payload: {
        request: {
          method: "get",
          url: "/posts/1",
        }
      }
    }
  }
}

export default actions