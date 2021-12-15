# 목차

- [useEffect](#1)

<div id="1"></div>
## useEffect

! component가 맨 처음 render될 때 빼고 다시 실행되지 않기 위해서 useEffect를 사용하였다.

Ex) API를 호출하거나 어떤 중요한 일을 할 때에 계속 반복하지 않고 한번만 실행할 경우

useEffect에는 component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣어준다.
즉, useEffect function은 state가 변화하든, 무슨 일이 일어나든 코드가 딱 한번만 실행될 수 있도록 보호해준다.


useEffect 사용 전

```js
function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("I run all the time"); // state가 변경될 때마다 실행된다.
  return (
    <div>
      <h1 className={styles.title}>Welcome!</h1>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
```

useEffect 사용

```js
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  useEffect(() => {
    console.log("Call The API");
  }, []);
  return (
    <div>
      <h1 className={styles.title}>Welcome!</h1>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}
```
