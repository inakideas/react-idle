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