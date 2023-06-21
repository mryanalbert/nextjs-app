'use client'

import { useState } from "react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export default function Queryclientprovider({ children }) {
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 10000 } } })
  )

  return (
    <QueryClientProvider client={client}>
      {children}
    </QueryClientProvider>
  )
}