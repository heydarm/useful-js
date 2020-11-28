function immutableObjPropertyChange(obj, keysPath, val, i = 0) {
  if (!keysPath) {
    throw new Error("'keys path' (second argument) is not defined");
  }

  if (!Array.isArray(keysPath)) {
    throw new Error("'keys path' (second argument) is not an array");
  }

  if (keysPath[i] === undefined || keysPath[i] === null) {
    throw new Error(
      "one of 'keys path' (second argument) elements is not defined"
    );
  }

  console.log(i < keysPath.length);
  return {
    ...obj,
    [keysPath[i]]:
      i < keysPath.length - 1
        ? immutableObjPropertyChange(obj[keysPath[i]], keysPath, val, ++i)
        : val,
  };
}
