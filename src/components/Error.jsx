const Error = ({children}) => {
  return (
    <div className="bg-red-800 text-center text-white p-4 mb-5 uppercase font-bold rounded-md">
        <p>{children}</p>
    </div>
  )
}

export default Error