```javascript
// Correct usage of Firebase Realtime Database with null checks
const database = firebase.database();
database.ref().once('value').then(snapshot => {
  const data = snapshot.val();
  // Accessing data safely with optional chaining and nullish coalescing
  const userName = data?.users?.someUser?.name ?? 'Guest';
  console.log(userName); // Outputs 'Guest' if data is missing
});
```