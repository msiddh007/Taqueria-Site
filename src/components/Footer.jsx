import React from 'react'

export default function Footer({ text }) {
  return (
    <footer className="bg-secondary text-gray-300 mt-16">
      <div className="section py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">{text}</p>
        <a href="#" className="text-sm hover:text-primary">Back to top ↑</a>
      </div>
    </footer>
  )
}
