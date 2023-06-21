import axios from "axios"

const fetchVoter = async (userId) => {
  const res = await axios.post('http://localhost/next/assets/action.php', {
    action: 'fetchVoter',
    studentid: userId
  },
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  return res
}

export default async function Voter({ params: { userId } }) {
  let voter = await fetchVoter(userId)
  voter = voter.data
  return (
    <div>Voter {userId} {voter.fname} {voter.lname}</div>
  )
}