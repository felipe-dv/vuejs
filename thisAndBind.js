const person = {
    greeting: 'Good morning!',
    talk() {
        console.log(this.greeting)
    }
}

person.talk()
const talk = person.talk
talk() // conflict between functional paradigms and OO

const talkFromPerson = person.talk.bind(person)
talkFromPerson()