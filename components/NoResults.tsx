import { MdOutlineVideocamOff } from 'react-icons/md'
import { BiCommentX } from 'react-icons/bi'

type NoResultsProps = {
  text: string
}

const NoResults = ({ text }: NoResultsProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <p className="text-8xl">
        {text === 'No comments yet' ? <BiCommentX /> : <MdOutlineVideocamOff />}
      </p>
      <p className="text-2xl text-center">{text}</p>
    </div>
  )
}

export default NoResults
