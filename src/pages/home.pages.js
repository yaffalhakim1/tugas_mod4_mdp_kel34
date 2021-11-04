import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { HomeStyle } from '../stylessheets/home.style'

function HomePages() {
  const data = [
    {
      id: 1,
      nama: 'Zulfa Fatah Akbar Ahmad',
      nim: '21120119130038',
      kelompok: '34',
    },
    {
      id: 2,
      nama: `Syekh Seif' Izzul Khaq`,
      nim: '21120119130080',
      kelompok: '34',
    },
    {
      id: 3,
      nama: 'Ariel Jones Dekock',
      nim: '21120111940148',
      kelompok: '34',
    },
  ]

  const ListItemNama = (dataPassing) => {
    return (
      <View
        style={
          dataPassing.dataNama.id % 2 === 1
            ? HomeStyle.itemListContainerGanjil
            : HomeStyle.itemListContainerGenap
        }
      >
        <View>
          <View
            style={
              dataPassing.dataNama.id % 2 === 1
                ? HomeStyle.itemListGarisGanjil
                : HomeStyle.itemListGarisGenap
            }
          />
        </View>
        <View style={HomeStyle.itemListContent}>
          <Text
            style={
              dataPassing.dataNama.id % 2 === 1
                ? HomeStyle.itemListTXTGanjil
                : HomeStyle.itemListTXTGenap
            }
          >
            {'Nama : ' + dataPassing.dataNama.nama}
          </Text>
          <Text
            style={
              dataPassing.dataNama.id % 2 === 1
                ? HomeStyle.itemListTXTGanjil
                : HomeStyle.itemListTXTGenap
            }
          >
            {'NIM : ' + dataPassing.dataNama.nim}
          </Text>
          <Text
            style={
              dataPassing.dataNama.id % 2 === 1
                ? HomeStyle.itemListTXTGanjil
                : HomeStyle.itemListTXTGenap
            }
          >
            {'Kelompok : ' + dataPassing.dataNama.kelompok}
          </Text>
        </View>
      </View>
    )
  }

  return (
    <View style={HomeStyle.container}>
      <View style={HomeStyle.headerContainer}>
        <Image
          source={{
            uri: 'https://bit.ly/39BPh9p',
          }}
          style={HomeStyle.headerImage}
        />
        <Text style={HomeStyle.headerTXT}>
          PRAKTIKUM MDP MODUL 4 KELOMPOK 34
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({ item }) => <ListItemNama dataNama={item} />}
        keyExtractor={(item) => item.id}
        style={HomeStyle.flatlist}
      />
    </View>
  )
}

export default HomePages
