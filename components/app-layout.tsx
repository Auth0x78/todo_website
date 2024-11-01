'use client'

import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/components-theme-provider"

const inter = Inter({ subsets: ['latin'] })

export function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}