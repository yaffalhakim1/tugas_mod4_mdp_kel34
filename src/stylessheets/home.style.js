import { StyleSheet } from 'react-native'

export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#0F4C75',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerImage: {
    height: 120,
    width: 100,
  },
  headerTXT: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  itemListContainerGanjil: {
    height: 100,
    backgroundColor: '#3282B8',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemListContainerGenap: {
    height: 100,
    backgroundColor: '#BBE1FA',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListGarisGanjil: {
    backgroundColor: '#BBE1FA',
    width: 5,
    height: '80%',
  },
  itemListGarisGenap: {
    backgroundColor: '#3282B8',
    width: 5,
    height: '80%',
  },
  itemListTXTGanjil: {
    color: '#fff',
    marginVertical: 2,
    fontWeight: 'bold',
    fontSize: 17,
  },
  itemListTXTGenap: {
    color: '#1B262C',
    marginVertical: 2,
    fontWeight: 'bold',
    fontSize: 17,
  },
})
