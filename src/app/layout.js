import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes';

// Styles
import '../styles/globals.css'
import '@radix-ui/themes/styles.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Wine Quiz',
  description: 'Test your wine knowledge.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme accentColor="crimson" grayColor="sand" radius="large" scaling="95%">
          {children}
        </Theme>
      </body>
    </html>
  )
}
