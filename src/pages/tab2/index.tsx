import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.less'

export default class Tab2 extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    console.log('res===tab2');
    return (
      <View className='tab2'>
        <Text>tab2</Text>
      </View>
    )
  }
}
