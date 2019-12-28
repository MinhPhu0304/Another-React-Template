export const CHANGE_GREETINGS = 'change_greetings'
export const NAVIGATE = 'navigate'

export function changeGreetings (newGreeting) {
  return {
    type: CHANGE_GREETINGS,
    greeting: newGreeting
  }
}

export function navigate (path) {
  return {
    type: NAVIGATE,
    payload: {
      path
    }
  }
}
