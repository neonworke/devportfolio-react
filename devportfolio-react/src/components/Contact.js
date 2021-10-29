import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook, FaDiscord } from 'react-icons/fa';

export default function Contact() {
    return (
<div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0" id="getintouch">
  <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
    <div className="mt-8 overflow-hidden">
      <div className="grid">
        <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
          <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
            Get in touch
          </h1>
          <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
            Connect with me on
          </p>
            <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400 justify-between">
                                <FaLinkedin className="text-5xl" />
                                <FaGithub className="text-5xl" />
                                <FaFacebook className="text-5xl" />
                                <FaDiscord className="text-5xl" />
                                
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}
