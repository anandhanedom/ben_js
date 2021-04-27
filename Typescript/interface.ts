interface Bat {
  name: string;
}

interface Man {
  strength: number;
}

const batman: Bat & Man = {
  name: "Bruce Wayne",
  strength: 100,
};
