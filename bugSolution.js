```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //This will only run once when the component mounts
    let initialCount = 0;
    setCount(initialCount + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```