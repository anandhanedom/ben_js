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

const makerArr = <T>(x: T): Array<T> => {
  return [x];
};

const v = makerArr(4);
const v2 = makerArr("a");
