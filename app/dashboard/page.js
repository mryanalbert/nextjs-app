'use client'

import getVoters from "@/lib/getVoters"
import { signOut, useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { useEffect, useState, use, cache } from "react"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

export default function Dasboard() {
  const { data: session, status } = useSession()  

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['voters'],
    queryFn: async () => {
      // return await axios.post('http://localhost/next/assets/action.php', {
      //   action: 'fetchVoters'
      // },
      // {
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded'
      //   }
      // })
      const res = await fetch(`http://localhost/next/assets/action.php?action=fetchVoters`)
      return await res.json()
    },
    refetchOnMount: false,
    refetchInterval: 100000
  })

  if (!session) {
    redirect('/signin')
  }

  if (isLoading && status == 'loading') return <h1>Loading...</h1>

  return <div>
    <p>Welcome {session?.user.name}</p>
    <button onClick={e => {
      e.preventDefault()
      signOut()
    }}>Logout</button>
    {data?.map((voter, i) => (
      <p key={`voter${i}`}>
        {voter.fname} {voter.lname}
        <Link href={`/user/${voter.studentid}`}>View</Link>
      </p>
    ))}
  </div>
}