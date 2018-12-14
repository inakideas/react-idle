# JS IDLE (React)

This script can run a callback function after some time of idle

### Requires

* Local storage
* Be compiled

### It listens to:

* Click
* Mouseover
* Mouseout
* Keyup
* Keydown
* Keypress


## USAGE

### Import:

```javascript
import { idleTimeout } from [donde esté]/'idle'
```

### Run

Requires 2 parameters:

* Minutes to timeout (int)
* Callback function to execute on timeout


idleTimeout(minutes_to_timeout, callback)

#### Example:

```javascript
idleTimeout(15, () => {
    history.push('/logout');
});
```

![picture alt](https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Thats_all_folks.svg/795px-Thats_all_folks.svg.png "That's all")
