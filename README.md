# JS IDLE (React)

This script can run a callback function after some time of idle

## USAGE

### Import:

import { idleTimeout } from [donde esté]/'idle'

### Run

idleTimeout(() => {
    history.push('/logout');
});
