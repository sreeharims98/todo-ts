const currentStorage = window.localStorage;

const getItem = (key: string) => {
  try {
    const value: any = currentStorage.getItem(key);
    return JSON.parse(value);
  } catch (err) {
    return undefined;
  }
};

const setItem = (key: string, value: any) => {
  currentStorage.setItem(key, JSON.stringify(value));
};

const removeItem = (key: string) => {
  currentStorage.removeItem(key);
};

export const storage = { getItem, setItem, removeItem };
