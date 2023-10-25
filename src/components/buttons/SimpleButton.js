const SimpleButton = ({ colorStart, colorHover, ...rest }) => {
  return (
    <button
      {...rest}
      className={`p-2 px-4 bg-${colorStart} rounded-xl shadow-sm hover:bg-${colorHover} duration-500`}
    >
      Button
    </button>
  )
}

export default SimpleButton
