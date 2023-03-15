import { Block } from '@components'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { HomeDappIcon } from '@assets'
import React, { FC } from 'react'
import { TouchableHighlight, Text } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from '@themes'

export const BottomBar: FC<BottomTabBarProps> = (props) => {
  const { bottom } = useSafeAreaInsets()
  const { colors } = useTheme()
  return (
    <Block marginBottom={bottom} row space="around" height={70}>
      {props.state.routes.map((item, index) => {
        const isFocused = props.state.index === index
        return (
          <TouchableHighlight
            key={index}
            onPress={() => {
              props.navigation.navigate(item.name)
            }}
          >
            <Block justifyCenter alignCenter>
              <HomeDappIcon
                color={isFocused ? colors.black : colors.gray}
              ></HomeDappIcon>
              <Text>{item.name.toLowerCase()}</Text>
            </Block>
          </TouchableHighlight>
        )
      })}
    </Block>
  )
}
