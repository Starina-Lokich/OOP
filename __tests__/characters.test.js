// __tests__/characters.test.js

import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../src/characters.js';

describe('Character', () => {
  test('корректно создаёт персонажа', () => {
    const character = new Character('Имя', 'Bowman');
    expect(character).toEqual({
      name: 'Имя',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
    });
  });

  test('выбрасывает ошибку при некорректном имени', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Некорректное имя персонажа (длина должна быть от 2 до 10 символов)');
    expect(() => new Character('A'.repeat(11), 'Bowman')).toThrow('Некорректное имя персонажа (длина должна быть от 2 до 10 символов)');
  });

  test('выбрасывает ошибку при некорректном типе', () => {
    expect(() => new Character('Имя', 'InvalidType')).toThrow('Некорректный тип персонажа');
  });

  test('повышение уровня работает корректно', () => {
    const character = new Magician('Маг', 'Magician');
    character.levelUp();
    expect(character).toEqual({
      name: 'Маг',
      type: 'Magician',
      health: 100,
      level: 2,
      attack: 12, // 10 * 1.2
      defence: 48, // 40 * 1.2
    });
  });

  test('повышение уровня выбрасывает ошибку для мёртвого персонажа', () => {
    const character = new Magician('Маг', 'Magician');
    character.damage(200); // Персонаж умирает
    expect(() => character.levelUp()).toThrow('Нельзя повысить уровень мёртвого персонажа');
  });

  test('нанесение урона работает корректно', () => {
    const character = new Bowman('Лучник', 'Bowman');
    character.damage(50); // 50 * (1 - 25/100) = 37.5
    expect(character.health).toBe(62.5);
  });

  test('здоровье не может быть меньше 0', () => {
    const character = new Bowman('Лучник', 'Bowman');
    character.damage(150); // Персонаж умирает
    expect(character.health).toBe(0);
  });
});