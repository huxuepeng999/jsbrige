import React, { useEffect, useRef } from 'react'
import { View, Text, Button } from '@tarojs/components'
import {
  useReady,
  useDidShow,
  useDidHide,
  usePullDownRefresh,
  useLoad
} from '@tarojs/taro'
import { AtNavBar } from 'taro-ui'
import { globalProps, nativeApi, unNativeApi, webApi } from './jsbrige'


function Index() {

  useLoad(() => {
    console.log('res===useLoad');
  })


  // 可以使用所有的 React Hooks
  useEffect(() => {
    console.log('res===useEffect', window);
    if (navigator.userAgent.indexOf('Android') > -1) {
      globalProps.isIos = false
    } else {
      globalProps.isIos = true
    }
    console.log("res===ios", globalProps.isIos);
    webApi('webMethod1', () => {
      console.log('res===webMethod1');
    })
    webApi('webMethod2', () => {
      console.log('res===webMethod2');
      return 'webMethod2'
    })
  }, [])

  // 对应 onReady
  useReady(() => { })

  // 对应 onShow
  useDidShow(() => { })

  // 对应 onHide
  useDidHide(() => { })

  // Taro 对所有小程序页面生命周期都实现了对应的自定义 React Hooks 进行支持
  // 详情可查阅：【Hooks】
  usePullDownRefresh(() => { })

  const btnClick = () => {
    const json = {
      name: 'name1',
      param: {
        p1: 'p1',
        p2: 'p2',
      },
    }
    nativeApi.common(json.name, json.param).then(() => {
      console.log('res===then1');
    }).catch(() => {
      console.log('res===catch1');
    })

    const json2 = {
      name: 'name2',
      param: {
        p1: 'p1',
        p2: 'p2',
      },
    }
    nativeApi.common(json2.name, json2.param).then(() => {
      console.log('res===json2 then');
    }).catch(() => {
      console.log('res===json2 catch');
    })
  }

  const handleClick = () => {

  }

  return (
    <View className='tab1'>
      <AtNavBar
        onClickRgIconSt={handleClick}
        onClickRgIconNd={handleClick}
        onClickLeftIcon={handleClick}
        color='#000'
        title='NavBar 导航栏示例'
        leftText='返回'
        rightFirstIconType='bullet-list'
        rightSecondIconType='user'
      />
      <Text>tab1</Text>
      <Button onClick={btnClick}>aaa</Button>
    </View>
  )
}

export default Index


