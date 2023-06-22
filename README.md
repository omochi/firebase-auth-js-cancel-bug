# Step to reproduce

1. Put firebase client json.

```
$ vim firebase.json
{
  "apiKey": "xxx",
  "authDomain": "xxx.firebaseapp.com",
  "projectId": "xxx",
  "storageBucket": "xxx.appspot.com",
  "messagingSenderId": "xxx",
  "appId": "1:xxx:web:xxx"
}
```

2. install libraries.

```
$ npm install
```

3. Build and run.

```
$ npx vite
```

4. Open in browser

5. See console.

```
on mount
on unmount
on mount
onAuthStateChanged – 1
onAuthStateChanged – 2
```

It should be:

```
on mount
on unmount
on mount
onAuthStateChanged – 1
```

`onAuthStateChanged` should be called only once.
Because it's canceled at unmount.
