export default function LoginModal(props) {
  return (
    <>
      <h2>Log in</h2>
      <div>
        <form
          onSubmit={event => {
            alert("Sign up!")
            event.preventDefault()
          }}
        >
          <input id='email' type='email' placeholder='Email address' />
          <input id='password' type='password' placeholder='Password' />
          <button>Log in</button>
        </form>
      </div>
      <p>
        Do not have an account yet?{" "}
        <a href='javascript:;' onClick={() => props.showSignup()}>
          Sign up
        </a>
      </p>
    </>
  )
}
