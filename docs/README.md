## ✍🏻

- [useEffect](useEffect/README.md)
- [movie](movie/README.md)
- [coinTracker](coinTracker/README.md)

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



**To Do List**

```js
import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do"
        />
        <button type="submit">Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
```

### Carousel

