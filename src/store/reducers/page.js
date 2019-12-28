import { NAVIGATE } from 'store/actions'

export function page (state, { type, payload }) {
  switch (type) {
    case NAVIGATE: 
      return {
        ...state,
        history: payload
      }
    default:
      return { ...state }
  }
}
