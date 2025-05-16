
import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-6">
      <header className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl font-bold text-blue-800">James T. Perry</h1>
        <p className="text-xl text-blue-600 mt-2 font-medium">
          Built with Purpose: Leadership. Governance. Growth.
        </p>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          I’m a nonprofit leader guiding organizations toward transformative growth.
          Learn more about my background, and explore my collection of articles on leadership,
          governance, and the nonprofit sector.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800">
            About Me
          </button>
          <button className="bg-blue-700 text-white px-5 py-2 rounded hover:bg-blue-800">
            Read My Articles
          </button>
        </div>
      </header>

      <section className="max-w-3xl mx-auto mt-12 border-t pt-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-2">Latest Article</h2>
        <h3 className="text-xl font-medium text-gray-900">
          Strengthening Board Engagement in Small Nonprofits
        </h3>
        <p className="text-sm text-gray-500">April 12, 2024</p>
      </section>
    </div>
  );
}
