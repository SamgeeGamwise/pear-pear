import DarkModeToggle from '../components/DarkModeToggle'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <DarkModeToggle />
        <div className="text-black dark:text-white bg-white dark:bg-gray-dark">{children}</div>
      </body>
    </html>
  )
}
