# PerScript

A browser extension to register persistent scripts on websites via console

### usage

*dev tools console*

```javascript
> ps.add(
  () => console.log("my persistent function"),
  () => console.log("my second persistent function")
);
```

```javascript
> ps.list();
'0 | () => console.log("my persistent function")'
'1 | () => console.log("my second persistent function")'
```

```javascript
> ps.remove(1);
```

```javascript
> ps.eval();
'my persistent function'
```

`ps.eval` will be automatically called on every page load
