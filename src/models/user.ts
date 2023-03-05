export type UserStructure = {
  email: string;
  passwd: string;
  firstName: string;
  lastName: string;
  snapUrl: string;
  friends: string[];
  numOfFriends: number;
  foes: string[];
  numOfFoes: number;
};

export type UserResponse = {
  results: {
    id: string;
    email: string;
    passwd: string;
    firstName: string;
    lastName: string;
    snapUrl: string;
    relations: [{ person: UserStructure; ref: string }];
  }[];
};
