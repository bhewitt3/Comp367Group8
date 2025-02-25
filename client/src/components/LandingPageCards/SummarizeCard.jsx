import React from 'react'

const SummarizeCard = () => {
  return (
    <div className="flex-1 min-h-[370px] max-h-[370px] border-2 border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 flex flex-col">
      <h1 className="text-2xl ml-3 mt-3 border-b-2 w-2/3 font-bold">Summarize With Ease</h1>
      <div className="relative w-3/5 border-2 border-b-0 border-gray-300 dark:border-gray-600 rounded-t-lg bg-white dark:bg-gray-900 mx-auto mt-3 px-4 pt-4 flex flex-col flex-1">
        <div className="h-5 bg-gray-300 dark:bg-gray-800 w-1/2 rounded"></div>
        <div className="bg-gray-200 dark:bg-gray-700 rounded mt-4 flex-1"></div>
        <div className="absolute border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 sm:top-16 sm:-left-20 top-16 -left-16">
          <h1 className="p-2">Upload a PDF</h1>
        </div>
        <div className="absolute border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-900 sm:top-40 sm:-right-16 top-40 -right-16 ">
          <h1 className="p-2">Save your summaries</h1>
        </div>
      </div>
    </div>
  )
}

export default SummarizeCard


