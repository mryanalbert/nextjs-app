export default async function getVoters() {
  const res = await fetch('http://localhost/next/assets/action.php')
  if (!res.ok) return undefined
  return res.json()
}