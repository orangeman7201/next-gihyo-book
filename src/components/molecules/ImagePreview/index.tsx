import React from 'react'
import styled from 'styled-components'
import { CloseIcon } from '../../atoms/IconButton'
import Box from '../../layouts/Box'
import Flex from '../../layouts/Flex'

interface ImagePreview {
  width?: string
  height?: string
  src?: string
  alt?: string
  onRemove?: (src: string) => void
}

const ImagePreviewContainer = styled(Box)`
  position: relative;
`

const CloseBox = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
`

const ImagePreview = (props: ImagePreview) => {
  const { height, width, src, alt, onRemove } = props

  const handleCloseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    onRemove && src && onRemove(src)

    return false
  }

  return (
    <>
      <ImagePreviewContainer height={height} width={width}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} height={height} width={width} />
        <CloseBox
          alignItems="center"
          justifyContent="center"
          onClick={handleCloseClick}
        >
          <CloseIcon size={24} color="white" />
        </CloseBox>
      </ImagePreviewContainer>
    </>
  )
}

export default ImagePreview
