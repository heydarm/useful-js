function immutableObjPropertyChange(obj, keysPath, val, i = 0) {
  if (i < keysPath.length) {
    return {
      ...obj,
      [keysPath[i]]:
        typeof obj[keysPath[i]] === "object"
          ? immutableObjPropertyChange(obj[keysPath[i]], keysPath, val, ++i)
          : val,
    };
  }
}
