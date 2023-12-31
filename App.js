import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import FlipCard from 'react-native-flip-card';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { initialCards } from './cardsData';

const STORAGE_KEY = 'favoriteCards';

const Card = React.memo(({ card, flipCard, toggleFavorite }) => (
  <FlipCard
    style={{ width: 300, height: 400, marginTop: 20 }}
    friction={6}
    perspective={1000}
    flipHorizontal={true}
    flipVertical={false}>
    {/* Card Front */}
    <View
      style={{
        width: 300,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderRadius: 10,
        flexDirection: 'column', // Changed from 'row' to 'column'
        paddingHorizontal: 10,
      }}>
      <Text style={{ color: 'white', fontSize: 20 }}>{card.word}</Text>
      <Text style={{ color: 'white', fontSize: 12 }}>ID: {card.id}</Text>
    </View>
    {/* Card Back */}
    <View
      style={{
        width: 300,
        height: 400,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        borderRadius: 10,
        flexDirection: 'column', // Changed from 'row' to 'column'
        paddingHorizontal: 10,
      }}>
      <Text style={{ color: 'white', fontSize: 16 }}>{card.definition}</Text>
      {/* Favorite icon */}
      <TouchableOpacity onPress={() => toggleFavorite(card.id)}>
        <FontAwesome
          name={card.favorite ? 'star' : 'star-o'}
          size={30}
          color={card.favorite ? 'yellow' : 'white'}
          style={{ marginTop: 100 }} // Added marginTop
        />
      </TouchableOpacity>
    </View>
  </FlipCard>
));

const AllCardsScreen = ({ cards, flipCard, toggleFavorite }) => (
  <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {cards.map((card) => (
      <Card
        key={card.id}
        card={card}
        flipCard={flipCard}
        toggleFavorite={toggleFavorite}
      />
    ))}
  </ScrollView>
);

const FavoriteCardsScreen = ({ favoriteCards, flipCard, toggleFavorite }) => (
  <ScrollView
    contentContainerStyle={{
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    {favoriteCards.map((card) => (
      <Card
        key={card.id}
        card={card}
        flipCard={flipCard}
        toggleFavorite={toggleFavorite}
      />
    ))}
  </ScrollView>
);

const Tab = createBottomTabNavigator();

const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [flipped, setFlipped] = useState([]);

  useEffect(() => {
    // Load favorite cards from AsyncStorage
    const loadFavoriteCards = async () => {
      try {
        const storedFavoriteCards = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedFavoriteCards) {
          const parsedFavoriteCards = JSON.parse(storedFavoriteCards);
          setCards((prevCards) =>
            prevCards.map((card) => ({
              ...card,
              favorite: parsedFavoriteCards.includes(card.id),
            }))
          );
        }
      } catch (error) {
        console.error('Error loading favorite cards from AsyncStorage:', error);
      }
    };

    loadFavoriteCards();
  }, []);

  const flipCard = (cardId) => {
    setFlipped((prevFlipped) => {
      const newFlipped = [...prevFlipped];
      const index = newFlipped.indexOf(cardId);

      if (index === -1) {
        newFlipped.push(cardId);
      } else {
        newFlipped.splice(index, 1);
      }

      return newFlipped;
    });
  };

  const toggleFavorite = (cardId) => {
    setCards((prevCards) => {
      const newCards = prevCards.map((card) => {
        if (card.id === cardId) {
          return { ...card, favorite: !card.favorite };
        }
        return card;
      });

      // Save favorite cards to AsyncStorage
      AsyncStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(
          newCards.filter((card) => card.favorite).map((card) => card.id)
        )
      );

      return newCards;
    });
  };

  const allCards = cards;
  const favoriteCards = cards.filter((card) => card.favorite);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="All Cards"
          component={() => (
            <AllCardsScreen
              cards={allCards}
              flipCard={flipCard}
              toggleFavorite={toggleFavorite}
            />
          )}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorite Cards"
          component={() => (
            <FavoriteCardsScreen
              favoriteCards={favoriteCards}
              flipCard={flipCard}
              toggleFavorite={toggleFavorite}
            />
          )}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="star" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
