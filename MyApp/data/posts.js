import { USERS } from './USERS';

export const POSTS = [
  {
    imageurl: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w,f_auto,q_auto:best/streams/2013/April/130423/6C7055605-g-tdy-110621-hangover-4a.jpg',
    user: USERS[0].user,
    Likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[0].image,
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
  {
    imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzqT4mQpeWfMaXi4SRde0qUR6OPBMfHNfhLA&s',
    user: USERS[1].user,
    Likes: 7870,
    caption: 'Train Ride to Hogwarts.',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'cleverqazi',
        comment: 'yo',
      },
      {
        user: 'amaanath.dev',
        comment: "I'M SLEEPING!!!",
      },
    ],
  },
];


