import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="text-center py-16 w-full">
      <h3 className="text-2xl font-semibold mb-2">Page not found</h3>
      <Link to="/" className="text-orange-600 underline">Back to home</Link>
    </div>
  )
}
export default NotFound;