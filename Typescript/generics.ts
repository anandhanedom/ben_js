// Array
// last
// makeArr: 2 generics, return, overwite interface, default value
// addFullName : extends
// interfaces
// props
// useState
// jsx generic

type numArray = Array<number>;

const last = <T>(arr: Array<T>): T => {
  return arr[arr.length - 1];
};

const l = last<number>([1, 2, 3]);
const l2 = last<string>(["a", "b", "c"]);

const makerArr = <T, U = string>(x: T, y: U): [T, U] => {
  return [x, y];
};

const v = makerArr(4, 4);
const v2 = makerArr("a", "b");
const v3 = makerArr<number | null>(4, "a");

const makeFullName = <T extends { firstName: string; lastName: string }>(
  obj: T
) => {
  return {
    ...obj,
    fullName: obj.firstName + obj.lastName,
  };
};

const l1 = makeFullName({ firstName: "bob", lastName: "dylan", age: 20 });
// const l2 = makeFullName({ age: 20 }); // ERROR

interface Tab<T> {
  id: string;
  position: number;
  data: T;
}

type numberTab = Tab<number>;
type stringTab = Tab<string>;
