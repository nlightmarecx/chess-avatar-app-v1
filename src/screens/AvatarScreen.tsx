import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AvatarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>PlayerName</Text>
      <Text style={styles.clan}>Clan Valiant 🦁</Text>
      <View style={styles.xpBar}>
        <View style={styles.xpFill} />
      </View>
      <Text style={styles.level}>Level 5 – Strategist</Text>

      <Image source={require('../../assets/avatar-img.png')} style={styles.avatar} />

      <View style={styles.buttonRow}>
        <AppButton title="🎯 Solve Puzzle" />
        <AppButton title="⚔️ Duel" />
      </View>
      <View style={styles.buttonRow}>
        <AppButton title="🏅 Clan Scoreboard" />
        <AppButton title="🎨 Customize" />
      </View>

      <View style={styles.stats}>
        <Text style={styles.stat}>🔥 Streak: 4</Text>
        <Text style={styles.stat}>🧩 Puzzles: 58</Text>
        <Text style={styles.stat}>🏛 Clan Tax: 30%</Text>
      </View>
    </View>
  );
}

const AppButton = ({ title }: { title: string }) => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    alignItems: 'center',
    paddingTop: 40,
  },
  username: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  clan: {
    color: '#f0c040',
    fontSize: 16,
  },
  xpBar: {
    width: 200,
    height: 10,
    backgroundColor: '#444',
    borderRadius: 5,
    marginVertical: 10,
  },
  xpFill: {
    width: '75%',
    height: '100%',
    backgroundColor: '#4caf50',
    borderRadius: 5,
  },
  level: {
    color: '#fff',
    marginBottom: 10,
  },
  avatar: {
    width: 180,
    height: 180,
    marginVertical: 20,
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#f0c040',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  stats: {
    marginTop: 20,
    alignItems: 'center',
  },
  stat: {
    color: '#ccc',
    fontSize: 14,
    marginVertical: 2,
  },
});
