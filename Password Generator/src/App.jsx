import React, { useState } from 'react'
import generatePassword from './logic.js'

const App = () => {
  const [length, setLength] = useState("")
  const [generatedPassword, setGeneratedPassword] = useState('')

  const handleGeneratePassword = () => {
    const password = generatePassword(length)
    setGeneratedPassword(password)
  }

  const handleCopyToClipboard = () => {
    if (generatedPassword) {
      navigator.clipboard.writeText(generatedPassword)
      alert('Password copied to clipboard!')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🔐 Password Generator</h1>
          <p className="text-gray-600">Generate secure passwords instantly</p>
        </div>


        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Password Length
          </label>
          <input
            type="number"
            value={length}
            onChange={(e)=> setLength((e.target.value))}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition duration-200"
            placeholder="Enter password length"
          />
        </div>

        {/* Password Display Box */}
        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-3">Generated Password</label>
            <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-4 min-h-16 flex items-center justify-center"
            onClick={handleCopyToClipboard}
            >
              {generatedPassword ? (
                <p className="text-gray-800 text-lg font-mono break-all select-all">{generatedPassword}</p>
              ) : (
                <p className="text-gray-400 text-center">Your password will appear here</p>
              )}
            </div>
            <p className='text-sm pl-2' >Tap to copy</p>
        </div>

        <button
          onClick={handleGeneratePassword}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 shadow-lg"
        >
          Generate Password
        </button>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center">
            ✓ Secure • ✓ Random • ✓ Instant
          </p>
        </div>
      </div>
    </div>
  )
}

export default App