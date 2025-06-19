import React from 'react'
import { cn } from '../../../utils/style/cn'
import Pentagon, { type PentagonPropsType } from '../../../ui/svg/Pentagon'

type PentagonImageProps = {
  src?: string
  containerClassName?: string
  pentagonProps?: PentagonPropsType
  imageClassName?: string
  children?: React.ReactNode
}
const PentagonImage: React.FC<PentagonImageProps> = ({ src, containerClassName, pentagonProps, imageClassName, children }) => {
  return (
    <div
      className={cn(
        'relative',
        'flex items-center justify-center w-full',
        containerClassName
      )}
    >
      <Pentagon {...pentagonProps} />
      <img
        src={src}
        className={cn(
          'object-cover',
          'mask-center mask-contain mask-no-repeat mask-[url(pentagon.svg)]',
          'absolute',
          imageClassName
        )}
      />
      {children}
    </div>
  )
}

export default PentagonImage