const List = ({ children }) => {
  return (
    <div className="p-2 grid grid-cols-5 sm:grid-cols-10 md:grid-cols-12 lg:grid-cols-15 xl:grid-cols-20 gap-x-4 gap-y-8 ">
      {children}
    </div>
  )
}

export default List
