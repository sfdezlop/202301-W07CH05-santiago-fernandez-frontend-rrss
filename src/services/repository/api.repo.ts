import { API_URL_ALL } from "../../config";
import { UserStructure, UserResponse } from "../../models/user";

export const getAll = async (): Promise<UserStructure[]> => {
  const url = API_URL_ALL;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data: UserResponse = await response.json();

  console.log(data.results);
  // console.log(data.results[0].properrty.length);
  return data.results.map((item) => {
    return {
      id: item.id,
      email: item.email,
      passwd: item.passwd,
      firstName: item.firstName,
      lastName: item.lastName,
      snapUrl: item.snapUrl,
      friends: [item.relations[0].person.firstName],
      numOfFriends: item.relations.length,
      foes: [item.relations[0].person.firstName],
      numOfFoes: item.relations.length,
    };
  });
};

export const getUser = async (clickName: string): Promise<any> => {
  const url = API_URL_ALL;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Fetch failed");
  const data: UserResponse = await response.json();
  return data.results.filter((item) => item.id === clickName)[0];
};
