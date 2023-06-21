'use client'

import { useSession } from "next-auth/react"
import { redirect } from 'next/navigation'

const ClientProtectPage = () => {
  const { data: session } = useSession()

  if (!session) {
    redirect('/signin')
  }

  return <>
    <h1>protected page</h1>
    <h3>Welcome {session?.user?.name}</h3>
  </>
}

export default ClientProtectPage