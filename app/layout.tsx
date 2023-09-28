import './globals.css'
import { Nunito } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from './Components/Navbar/Navbar'
import ClientOnly from './Components/ClientOnly'
import RegisterModal from './Components/Modals/RegisterModal'
import ToasterProvider from './Providers/ToasterProvider'



const font = Nunito({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider/>
          <RegisterModal />
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
