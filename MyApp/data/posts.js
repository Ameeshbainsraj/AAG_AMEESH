import { USERS } from './USERS';

export const POSTS = [
  {
    imageurl: 'https://i.ibb.co/182bP1y/4k.png',
    user: USERS[0].user,
    Likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profilePicture: USERS[0].image,
    comments: [
      {
        user: 'theqazman',
        comment: 'Wow! This build looks fire. Super excited about it!',
      },
      {
        user: 'amaanath.dev',
        comment: "Once I wake up, I'll finally be ready to code this up!",
      },
    ],
  },
];
