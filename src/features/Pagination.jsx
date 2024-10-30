import { useContext } from "react"
import { AppContext } from "./AppContext"

const Pagination = () => {
  const { currentPage, setCurrentPage, totalPost, postsPerPage } = useContext(AppContext)

  const prevTwoBtn = Array.from({ length: 2 }, (_, index) => currentPage - 1 - index).filter((value) => value > 0).reverse()
  const nextTwoBtn = Array.from({ length: 3 }, (_, index) => currentPage + index).filter((value) => value < Math.ceil(totalPost / postsPerPage))
  const prevNextBtn = [...prevTwoBtn, ...nextTwoBtn]

  return (
    <div className="py-5 ">
      <button
        disabled={currentPage == 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className='px-3 py-2 border border-neutral-500 hover:scale-95 bg-black text-white mr-2'>{"<"}</button>

      {prevNextBtn.map((value, index) => (
        <button
          className={`${currentPage == value ? 'bg-white text-black' : 'bg-black text-white'} px-3 py-2 border border-neutral-500 hover:scale-95 mr-2`}
          key={index} onClick={() => setCurrentPage(value)}>{value}</button>
      ))}
      <button
        disabled={currentPage == Math.ceil(totalPost / postsPerPage)}
        onClick={() => setCurrentPage(currentPage + 1)}
        className='px-3 py-2 border border-neutral-500 hover:scale-95 bg-black text-white'>{">"}</button>
    </div>
  )
}

export default Pagination