'use client'
import Image from 'next/image'
import Link from 'next/link'
import Button from './components/Button'
import Dashboard from './dashboard/page'
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { cache, use } from 'react'


export default function Home() {
  const { data: session, status } = useSession()

  if (session) {
    redirect('/dashboard')
  }

  if (status === 'loading') {
    return <h2>Loading...</h2>
  }

  return (
    <main>
      <Button />
      <Link href='/signin'>Sign In</Link>
    </main>
  )
}
