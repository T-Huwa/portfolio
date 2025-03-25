import { GithubOutlined, LinkedinOutlined, MailOutlined, TwitterOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Thom Huwa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-cyan-400" aria-label="GitHub">
              <GithubOutlined className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400" aria-label="LinkedIn">
              <LinkedinOutlined className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400" aria-label="Twitter">
              <TwitterOutlined className="h-5 w-5" />
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-cyan-400" aria-label="Email">
              <MailOutlined className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

