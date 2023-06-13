import React, { useEffect, useState, useRef, useCallback } from 'react'
import styled from 'styled-components'
import Text from '../../atoms/Text'
import Flex from '../../layouts/Flex'
/**
 * 正常系：
 * このコンポーネントにoptionsを配列で渡すとdropdownでリスト表示してくれる。
 * 選択するとそれがinputに表示され、選択したものがeventで帰ってくる。
 *
 * 異常系：
 * hasError:boolを渡すとエラーの色になる
 */

/**
 * 必要そうなもの
 * 1. 型 { list: Array, hasError: bool, placeholder: string, value: string(listのvalueに含まれるもの or null) }
 * 2. useStateでどのlistが選択されているか管理する。propsで初期化する。
 * 3. onChange時に2のuseStateのchange関数を使って代入する
 */

const DropdownRoot = styled.div`
  position: relative;
  height: 38px;
`

/**
 * @params: hasError: bool
 * 以下２つはstyled-componentを使うことで勝手に定義されている。
 * @params: onMouseDown: (props: MouseEvent?) => void
 * @params: onTouchEnd: (props: onTouchEnd?) => void
 */
const DropdownControl = styled.div<{ hasError?: boolean }>`
  position: relative;
  overflow: hidden;
  background-color: #ffffff;
  border: ${({ theme, hasError }) =>
    hasError
      ? `1px solid ${theme.colors.danger}`
      : `1px solid ${theme.colors.border}`};
  border-radius: 5px;
  box-sizing: border-box;
  cursor: default;
  outline: none;
  padding: 8px 52px 8px 12px;
`

const DropdownValue = styled.div`
  color: ${({ theme }) => theme.colors.text};
`
export interface DropdownItem {
  value: string | null
  label: string
}

interface DropdownItemProps {
  item: DropdownItem
}

const DropdownItem = (props: DropdownItemProps) => {
  const { item } = props
  return (
    <Flex alignItems="center">
      <Text margin={0} variant="small">
        {item.label ?? item.value}
      </Text>
    </Flex>
  )
}

const DropdownPlaceholder = styled.div`
  color: #757575;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  min-height: 20px;
  line-height: 20px;
`

// ドロップダウンの矢印の外観
const DropdownArrow = styled.div<{ isOpen?: boolean }>`
  border-color: ${({ isOpen }) =>
    isOpen
      ? 'transparent transparent #222222;'
      : '#222222 transparent transparent'};
  border-width: ${({ isOpen }) => (isOpen ? '0 5px 5px' : '5px 5px 0;')};
  border-style: solid;
  content: ' ';
  display: block;
  height: 0;
  margin-top: -ceil(2.5);
  position: absolute;
  right: 10px;
  top: 16px;
  width: 0;
`

const DropdownMenu = styled.div`
  background-color: #ffffff;
  border: ${({ theme }) => theme.colors.border};
  box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
    0px 8px 10px 1px rgb(0 0 0 / 10%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: -1px;
  max-height: 200px;
  overflow-y: auto;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1000;
`

const DropdownOption = styled.div`
  padding: 8px 12px 8px 12px;
  &:hover {
    background-color: #f9f9f9;
  }
`

interface DropdownProps {
  options: DropdownItem[]
  hasError?: boolean
  placeholder?: string
  value?: string
  name?: string
  onChange?: (selected?: DropdownItem) => void
}

const Dropdown = (props: DropdownProps) => {
  const { options, hasError, value, name, onChange } = props

  // useRefに入る値の型を定義している。なので例えばここにstringはダメそう
  const dropdownRef = useRef<HTMLDivElement>(null)

  // item関連
  const initialItem = options.find((i) => i.value === value)
  console.log(initialItem)
  const [selectedItem, setSelectedItem] = useState(initialItem)
  const handleSelectValue = (
    e: React.FormEvent<HTMLDivElement>,
    item: DropdownItem,
  ) => {
    e.stopPropagation()
    setSelectedItem(item)
    setIsOpenValue(false)
    // もしonChangeで何か関数が与えられていたら、その関数を発火してあげる。
    // 一回親が更新されて、それが伝搬して子コンポーネントが再描画されて結局は親したデータを持っていない感じなるのであればOK
    onChange && onChange(item)
  }

  // listを表示、非表示の状態管理
  const [isOpen, setIsOpenValue] = useState(false)
  // useStateでshowList的なのをかえる関数
  const handleMouseDown = (e: React.SyntheticEvent) => {
    setIsOpenValue(!isOpen)
    // setIsOpenValue((isOpen) => !isOpen)
    e.stopPropagation()
  }

  return (
    <DropdownRoot ref={dropdownRef}>
      <DropdownControl
        hasError={hasError}
        onMouseDown={handleMouseDown}
        onTouchEnd={handleMouseDown}
        data-testid="dropdown-control"
      >
        {selectedItem && (
          <DropdownValue>
            <DropdownItem item={selectedItem} />
          </DropdownValue>
        )}
        {/* 何も選択されてない時はプレースホルダーを表示 */}
        {!selectedItem && (
          <DropdownPlaceholder>{props?.placeholder}</DropdownPlaceholder>
        )}
        {/* ダミーinput */}
        <input
          type="hidden"
          name={name}
          value={selectedItem?.value ?? ''}
          onChange={() => onChange && onChange(selectedItem)}
        />
        <DropdownArrow isOpen={isOpen} />
      </DropdownControl>
      {/* ドロップダウンを表示 */}
      {isOpen && (
        <DropdownMenu>
          {props.options.map((item, idx) => (
            <DropdownOption
              key={idx}
              onMouseDown={(e) => handleSelectValue(e, item)}
              onClick={(e) => handleSelectValue(e, item)}
              data-testid="dropdown-option"
            >
              <DropdownItem item={item} />
            </DropdownOption>
          ))}
        </DropdownMenu>
      )}
    </DropdownRoot>
  )
}

export default Dropdown
