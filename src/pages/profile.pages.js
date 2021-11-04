import React, { useState, useEffect } from 'react'
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native'
import { ProfileStyle } from '../stylessheets/profile.style'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faSafari } from '@fortawesome/free-brands-svg-icons'

function ProfilePages() {
  const [data, setData] = useState('')
  const [count, setCount] = useState(0)
  const username =
    count % 3 === 0 ? 'Zulfaabam' : count % 3 === 1 ? 'strijunk' : 'arieljns'
  const max = username.length

  useEffect(() => {
    async function fetchData() {
      const request = await axios
        .get(`https://api.github.com/users/${username}`)
        .then((res) => setData(res.data))
        .catch((e) => Alert.alert('Gagal!', e))
      return
      request
    }
    fetchData()
  }, [count])

  const next = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <View style={ProfileStyle.container}>
      <View style={ProfileStyle.headerContainer}>
        <Image
          source={{
            uri: data.avatar_url,
          }}
          style={ProfileStyle.headerImage}
        />
        <Text style={ProfileStyle.headerTXT}>
          {data.name === null ? 'Full name' : data.name}
        </Text>
        <Text
          style={ProfileStyle.headerTXTDesc}
        >{`Username: ${data.login}`}</Text>
        <Text style={ProfileStyle.headerTXTDesc}>
          {data.bio === null ? '-' : data.bio}
        </Text>
        <Text style={ProfileStyle.headerTXTDesc}>
          <FontAwesomeIcon icon={faMapMarkerAlt} color="white" />
          {` ${data.location === null ? 'location unknown' : data.location}`}
        </Text>
        <Text style={ProfileStyle.headerTXTDesc}>
          <FontAwesomeIcon icon={faSafari} color="white" />
          {` ${data.blog === '' ? 'no blog' : data.blog}`}
        </Text>
        <Text
          style={ProfileStyle.headerTXTDesc}
        >{`Repositories: ${data.public_repos}`}</Text>
        <Text
          style={ProfileStyle.headerTXTDesc}
        >{`Followers: ${data.followers} | Following: ${data.following}`}</Text>
      </View>
      <TouchableOpacity
        style={ProfileStyle.bodyTouchable}
        onPress={() => next()}
      >
        <Text style={ProfileStyle.bodyTXT}>NEXT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProfilePages
