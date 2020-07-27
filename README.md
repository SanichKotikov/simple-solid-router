# simple-solid-router

A simple router for [solid-js](https://github.com/ryansolid/solid).

```jsx
import 'solid-js';
import { render } from 'solid-js/dom';
import { RouterProvider, Route, Link } from 'simple-solid-router';

render(
  () => (
    <RouterProvider>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/user/id">User</Link>
      </nav>
      <main>
        <Route
          pattern={/^\/$/}
          component={() => <h1>Home</h1>}
        />
        <Route
          pattern={/^\/user\/(.+)$/}
          component={(props) => <h1>User #{props.routeMatch[0]}</h1>}
        />
      </main>
    </RouterProvider>
  ),
  document.getElementById('root') as Node
);
```

## Installation

```
npm i -S simple-solid-router
```

## Usage

### `<Link/>`

```jsx
<Link to="/">Simple link</Link>
<Link to={`/user/${user.id}`}>With params</Link>
<Link to="/other" classActive="active">With active class</Link>
<Link to={{ location: '/other', state: { some: 'value' } }}>With state</Link>
```

### Use history state

```typescript
const { history } = useRouter<{ some: string }>();
console.log(history.state?.some); // => string | undefined
```

### Programmatic navigation

```jsx
function Page() {
  const { navigate } = useRouter();
  function onCLick() {
    navigate('/path');
    // Or with state: navigate('/path', { some: 'value' });
  }
  return <button onClick={onCLick}>Go</button>
}
```
