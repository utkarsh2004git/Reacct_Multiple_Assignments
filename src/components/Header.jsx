import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <header className="bg-blue-600 text-white p-4">
            <ul className='flex justify-center space-x-4'>
                <li>
                    <Link to={"/"} className="hover:underline text-white hover:text-gray-200">Home</Link>
                </li>
                <li>
                    <Link to={"/newsletter-signup"} className="hover:underline text-white hover:text-gray-200">NewsPaper</Link>
                </li>
                <li>
                    <Link to={"/feedback-form"} className="hover:underline text-white hover:text-gray-200">Feedback</Link>
                </li>
                <li>
                    <Link to={"/bug-report-tool"} className="hover:underline text-white hover:text-gray-200">Bug-Report</Link>
                </li>
                <li>
                    <Link to={"/contact-card-generator"} className="hover:underline text-white hover:text-gray-200">Contact-card</Link>
                </li>
                <li>
                    <Link to={"/simple-poll"} className="hover:underline text-white hover:text-gray-200">Simple-poll</Link>
                </li>
            </ul>
        </header>
    </div>
  )
}

export default Header