export type TUserData = {
  _id: string;
  name: string;
  email: string;
  age: string;
  token: string;
};
export type TloginData = {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
};
export type TTodoData = {
  _id: string;
  completed: boolean;
  description: string;
};
export type TTodoPostData = {
  description: string;
};
