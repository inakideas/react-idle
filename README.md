# JS IDLE (React)

This script can run a callback function after some time of idle

## Requires

· Local storage
· Be compiled

## It listens to:

· Click
· Mouseover
· Mouseout
· Keyup
· Keydown
· Keypress


## USAGE

### Import:

```
import { idleTimeout } from [donde esté]/'idle'
```

### Run

idleTimout(minutes_to_timeout, callback)

```
idleTimeout(15, () => {
    history.push('/logout');
});
```