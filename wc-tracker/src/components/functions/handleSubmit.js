function handleSubmit(Event, username) {
    Event.preventDefault()
    console.log(username)
    alert('Thank you for registering! ' + username)
}

export {handleSubmit};