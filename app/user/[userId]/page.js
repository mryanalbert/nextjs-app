const fetchVoter = async (userId) => {
  const res = await fetch(`http://localhost/next/assets/action.php?action=fetchVoter&studentid=${userId}`)

  if (!res.ok) return undefined

  return await res.json()
}

export default async function Voter({ params: { userId } }) {
  let voter = await fetchVoter(userId)

  return (
    <div>Voter {userId} {voter.fname} {voter.lname}</div>
  )
}