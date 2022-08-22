import React, { useEffect, useState } from 'react'
import { Text, View } from '@tarojs/components'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh
} from '@tarojs/taro'
import { AtTabBar, AtInput, AtButton } from 'taro-ui'

const Index = () => {

  const [current, setCurrent] = useState(0)
  // 可以使用所有的 React Hooks
  useEffect(() => { }, [])

  // 对应 onReady
  useReady(() => { })

  // 对应 onShow
  useDidShow(() => { })

  // 对应 onHide
  useDidHide(() => { })

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Hooks】
  usePullDownRefresh(() => { })

  const handleClick = (event) => {
    setCurrent(event)
  }

  const handleChange = (event) => {
    console.log('res===event2', event);
  }

  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <AtInput
        name='value'
        title='标准五个字'
        type='text'
        placeholder='标准五个字'
        value={`${current}`}
        onChange={handleChange}
      />
      {/* 库的问题 */}
      <AtButton>aaa</AtButton>
      <AtTabBar
        fixed
        selectedColor="#ff0000"
        tabList={[
          { title: "发现", iconPrefixClass: "fa", iconType: "feed" },
          { title: "我的", iconPrefixClass: "fa", iconType: "music" }
        ]}
        onClick={handleClick}
        current={current}
      />
    </View>
  )
}

export default Index
