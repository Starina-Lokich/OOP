// src/characters.js

class Character {
    constructor(name, type) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Некорректное имя персонажа (длина должна быть от 2 до 10 символов)');
      }
  
      if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
        throw new Error('Некорректный тип персонажа');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
    }
  
    levelUp() {
      if (this.health === 0 ) {
        throw new Error('Нельзя повысить уровень мёртвого персонажа');
      }
  
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      if (this.health <= 0) {
        throw new Error('Персонаж уже мёртв');
      }
  
      this.health -= points * (1 - this.defence / 100);
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }
  
  class Bowman extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Swordsman extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  class Magician extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  class Daemon extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 10;
      this.defence = 40;
    }
  }
  
  class Undead extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 25;
      this.defence = 25;
    }
  }
  
  class Zombie extends Character {
    constructor(name, type) {
      super(name, type);
      this.attack = 40;
      this.defence = 10;
    }
  }
  
  export {
    Character,
    Bowman,
    Swordsman,
    Magician,
    Daemon,
    Undead,
    Zombie,
  };