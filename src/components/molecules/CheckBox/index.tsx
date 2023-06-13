import React, { useRef, useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { CheckBoxOutlineBlankIcon, CheckBoxIcon } from '../../atoms/IconButton'
import Text from '../../atoms/Text'
import Flex from '../../layouts/Flex'

// InputHTMLAttributes: inputに指定できるオプションを型にしたやつ。そして引数にどんなものがinputに入るかの型を指定できる？
// 以下ではInputHTMLAttributeにlabelの指定ができるようになったイメージかな
export interface CheckBoxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  label?: string
}

const CheckBoxElement = styled.input`
  display: none;
`

const Label = styled.label`
  cursor: pointer;
  margin-left: 6px;
  user-select: none;
`

const CheckBox = (props: CheckBoxProps) => {
  const { id, label, onChange, checked, ...rest } = props
  const ref = useRef<HTMLInputElement>(null)
  const [isChecked, setIsChecked] = useState(checked)
  // 多分自分の親に情報を渡す or 何らかのメソッドを発火する
  const onClick = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      ref.current?.click()
      setIsChecked((isChecked) => !isChecked)
    },
    [ref, setIsChecked],
  )

  useEffect(() => {
    setIsChecked(checked ?? false)
  }, [checked])

  return (
    <>
      <CheckBoxElement
        {...rest}
        ref={ref}
        type="checkbox"
        checked={isChecked}
        readOnly={!onChange}
        onChange={onChange}
      />
      <Flex alignItems="center">
        {checked ?? isChecked ? (
          <CheckBoxIcon size={20} onClick={onClick} />
        ) : (
          <CheckBoxOutlineBlankIcon size={20} onClick={onClick} />
        )}
        {label && label.length > 0 && (
          <Label htmlFor={id} onClick={onClick}>
            <Text>{label}</Text>
          </Label>
        )}
      </Flex>
    </>
  )
}

export default CheckBox
