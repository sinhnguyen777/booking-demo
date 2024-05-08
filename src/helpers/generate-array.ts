export const generateArray = (type?: string): Array<number> => {
  const randomArray: number[] = Array.from({length: 200}, (_, index) =>
    type === "adults" ? index + 1 : index
  );

  return randomArray;
};
