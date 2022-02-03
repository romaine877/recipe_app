export default function Footer() {
    return (
      <footer className="bg-gray-200 flex justify-center items-center h-24 p-10 ">
          <p className='text-center'>
          © {new Date().getFullYear()}, Built by Romaine Halstead with
          {` `}
          <a href="https://nextjs.org/">Next.js</a>
          {`, `}
          <a href="https://www.markdownguide.org/">Markdown</a>
          {` `}and
          <a href='https://tailwindcss.com/' className="ml-2">
            Tailwind CSS
          </a>
         
          </p>
          </footer>
    )
  }