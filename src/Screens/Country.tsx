import React, { useEffect, useState } from 'react';
import { Text, FlatList, View, StyleSheet, SafeAreaView, Button, TextInput } from 'react-native';
import { UniversityComponent } from '../Components/UniversityComponent';
import { getUniversities } from '../Api';

export const Country = ({ route }) => {
  const { name } = route.params;
  const [universitiesState, setUniversitiesState] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [text, setChangeText] = useState();
  
  useEffect(() => {
    // works only with enabled debugger
    getUniversities(name)
    .then(res => {
      if (res.statusText === 'OK') {
        setUniversitiesState(res.data)
        setUniversities(res.data);
      }
    })
    .catch(err => console.log(err));
  }, []);

  
  
  const renderItem = ({item}) => (
    <UniversityComponent name={item.name} link={item.web_pages[0]} />
  )

  const onPressSort = () => {
    const arrayToSort = [...universities];
    arrayToSort.sort((a, b) => {
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
    })
    setUniversities(arrayToSort);
  }

  const onChangeText = (text) => {
    setChangeText(text)
    const findedElems = universitiesState.filter(item => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    })
    setUniversities(findedElems);
  }

  return (
    <View>
      <Text style={styles.text}>
        List of {name} universities is here
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={'Search by name'}
      />
      <Button
        onPress={onPressSort}
        title="Sort by name"
        color="green"
      />
      <SafeAreaView style={styles.flatList}>
        <FlatList
          data={universities}
          renderItem={renderItem}
          keyExtractor={item => `${item.name}-${Number(new Date())}`}
          ListEmptyComponent={
            <Text style={styles.nothing}>Nothing found :(</Text>
          }
        />
      </SafeAreaView>
    
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 20,
  },
  flatList: {
    marginTop: 30,
    alignItems: 'center',
  },
  input: {
    marginTop: 8,
    height: 30,
    borderWidth: 1,
    width: 300,
    borderColor: 'blue',
    alignSelf: 'center',
    borderRadius: 8,
    color: 'black',
  },
  nothing: {
    alignSelf: 'center',
    fontSize: 30,
  }
});
