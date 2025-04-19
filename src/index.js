import { Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from './characters.js';

const bowman = new Bowman('Лучник', 'Bowman');
console.log(bowman);

bowman.levelUp();
console.log(bowman);

const magician = new Magician('Маг', 'Magician');
magician.damage(50);
console.log(magician);