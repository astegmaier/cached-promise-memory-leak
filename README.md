# Cached Promises Memory Leak</h1>

This project contains a simple example of a very tricky memory leak. It is
a simplified version of something that is happening in a real production
app, with all non-essential parts stripped away. It may seem a bit weird,
but (trust me) in the real app, there are sensible reasons for wanting to
structure code this way.

For more details [see it running live](https://astegmaier.github.io/cached-promise-memory-leak/).

## Running Locally

1. Clone this repo by running `git clone https://github.com/astegmaier/cached-promise-memory-leak.git`
2. Change into the directory by running `cd cached-promise-memory-leak`
3. Ensure [nodejs](https://nodejs.org/en/) is installed.
4. Run `npx http-server` to start a local server. You can also install `http-server` globally by running `npm install -g http-server` and then running `http-server` directly.
5. Open `http://localhost:8080/` in your browser.
