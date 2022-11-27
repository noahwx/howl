import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Auth() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      setLoading(true)
      const { error } = await supabase.auth.signInWithOtp({ email })
      if (error) throw error
      alert('Check your email for the login link!')
    } catch (error) {
      alert('Please enter a email address!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="form-container">
      <div className="form-widget" aria-live="polite">
        <h1 className="header">Howl</h1>
        <p className="description">Sign up via magic link with your email below</p>
        {loading ? (
          'Sending magic link...'
        ) : (
          <form onSubmit={handleLogin}>
            <input
              id="email"
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="button" aria-live="polite">
              Send magic link
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
