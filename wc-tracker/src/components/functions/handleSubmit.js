function handleSubmit(event, username) {
    event.preventDefault()
    console.log('Hit!' + username)
    alert('Thank you for registering! ' + username)
}

export {handleSubmit};