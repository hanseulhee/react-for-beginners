# Movie

[yts API](https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year)

## async-await

## React Router

React.js에서 페이지 전환

```js
npm install react-router-dom
```

```js
npm i react-router-dom@5.3.0
```
## Router

Hash Router vs Browser Router


url의 생김새 차이, Browser Router가 더 깔끔하게 생겨서 사용.


Browser Router에서 URL은 보통의 웹사이트처럼 생겼다. ex) localhost:3000/movie
Hash Router ex) localhost:3000/#/movie


## Switch

Route(=url)을 찾는 역할을 한다. Route를 찾으면 component를 렌더링한다.

## Link

a href = ""를 이용할 경우 화면 전체가 실행된다. 
Link는 브라우저 새로고침 없이도 유저를 다른 페이지로 이동시켜주는 컴포넌트다.


## Parameters





## 코드 정리

```js
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
```
Router를 먼저 렌더링해주고 그 안에 들어가는 것들이 유저가 있는 url에 따라 유저에게 보여진다. React Router에선 두개의 Route를 한번에 렌더링 할 수 있지만 Switch component를 통해 하나의 Route만 렌더링하였다. 