#!/bin/sh
# Linux run-scoped watchdog; engine controls remain native.
exec node "$(dirname "$0")/watchdog.mjs" "$@"
