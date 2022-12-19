import { useSelector } from 'react-redux'

export default function About() {
  const profile = useSelector((state) => state.authReducer.profile)
  return <h1>Nama saya {profile?.name}</h1>
}
