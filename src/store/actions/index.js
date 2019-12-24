export const CHANGE_GREETINGS = 'change_greetings'

export function changeGreetings (newGreeting) {
  return {
    type: CHANGE_GREETINGS,
    greeting: newGreeting
  }
}
