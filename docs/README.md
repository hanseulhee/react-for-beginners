# 목차

- [useEffect](#1)
- [코드 정리](#3)

<div id="1"></div>

## useEffect

react.js는 변화가 일어날 때 component를 refresh한다.

! component가 맨 처음 render될 때 빼고 다시 실행되지 않기 위해서 useEffect를 사용하였다.
ex) API를 호출하거나 어떤 중요한 일을 할 때에 계속 반복하지 않고 한번만 실행할 경우

useEffect에는 component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣어준다.
즉, useEffect function은 state가 변화하든, 무슨 일이 일어나든 코드가 딱 한번만 실행될 수 있도록 보호해준다.

**useEffect 사용 전**

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

**useEffect 사용**

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

**특정한 keyword가 update될 때만 코드를 실행하기 위해 아래와 같이 코드를 작성한다.**

```js
useEffect(() => {
  if (keyword !== "" && keyword.length > 5) {
    console.log("SEARCH FOR", keyword);
  }
}, [keyword]);
```

keyword가 변화할 때만 코드를 실행한다.
따라서 빈 array를 써주었을 때 코드가 단 한번만 실행된다.

**정리**

```js
useEffect(() => {
  console.log("I run only once.");
}, []);

useEffect(() => {
  console.log("I run when 'keyword' changes.");
}, [keyword]);

useEffect(() => {
  console.log("I run when 'counter' changes.");
}, [counter]);

useEffect(() => {
  console.log("I run when keyword & counter change.");
}, [keyword, counter]);
```

위와 같이 useEffect를 이용해 코드를 언제 실행할지 정할 수 있다.

useEffect는 두 개의 argument로 구성되어 있는데 실행하려는 코드와 dependency로 이루어져 있다. dependency란 react.js가 지켜보아야 하는 것들이며 이것이 변화할 때 코드를 실행한다. dependency가 없을 경우 지켜볼 대상이 없기 때문에 한 번만 실행한다.
array이기 때문에 여러개의 아이템을 넣을 수 있고 둘 중 하나만 변화할 경우에도 실행된다.



## Cleanup function

Cleanup function은 component가 destroy 될 때 코드를 실행할 수 있게 한다.

```js
function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created!");
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}
```

component가 파괴될 때 function을 실행하기 위해 hiFn이 byFn을 return한다.


<div id="3"></div>

## 코드 정리

```js
function App() {
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(() => {
    console.log("Call The API");
  }, []);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
    </div>
  );
}
```

input을 만들어 event listener 연결, function이 작동할 때 argument로 event를 받는다. event를 발생시킨 input에서 value를 받아 해당 value를 keyword state에 넣어준다.
keyword를 가져와 input의 value로 사용하면 원할 때 input을 조작할 수 있다.

```js
const [keyword, setKeyword] = useState("");
```

첫 번째 아이템이 value, 두 번째 아이템이 해당 value를 modify하는 function이다.



```js
const food = [1, 2, 3, 4]
[6, food] // [6, Array(4)]
[6, ...food] // [6, 1, 2, 3, 4]
```

...을 통해 6에 food array의 element들을 더해 새로운 array를 만든다.



**useEffect**
```js
import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("I run all the time");
  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);

  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);

  useEffect(() => {
    console.log("I run when keyword & counter change.");
  }, [keyword, counter]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here"
      />
      <h1 className={styles.title}>Welcome!</h1>
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
```


**Cleanup**
```js
import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created!");
    return byFn;
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;

```