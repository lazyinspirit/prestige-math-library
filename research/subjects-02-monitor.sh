#!/bin/sh
# Purely file-based: counts result files, never greps a process table, so it
# cannot match its own command line (the phantom that cost 50 minutes once).
cd /Users/ianx/Projects/prestige-math-library || exit 1
QUEUE="differential-topology representation-theory-groups"
LAUNCHED=4
while :; do
  done_n=$(ls research/subjects-02-dispatch/scaffolder-sub02-*.result.json 2>/dev/null | wc -l | tr -d ' ')
  for f in $(ls research/subjects-02-dispatch/scaffolder-sub02-*.result.json 2>/dev/null); do
    b=$(basename "$f" .result.json); b=${b#scaffolder-}
    [ -f "/tmp/seen02-$b" ] && continue
    touch "/tmp/seen02-$b"
    if grep -q '"ok": *true' "$f" 2>/dev/null; then echo "LANDED $b ok"; else echo "LANDED $b FAILED"; fi
  done
  live=$((LAUNCHED - done_n))
  if [ "$live" -lt 4 ] && [ -n "$QUEUE" ]; then
    next=$(echo $QUEUE | cut -d' ' -f1)
    QUEUE=$(echo $QUEUE | cut -s -d' ' -f2-)
    echo "slot free -> dispatching $next"
    sh research/subjects-02-launch.sh "$next"
    LAUNCHED=$((LAUNCHED + 1))
  fi
  [ "$done_n" -ge 6 ] && { echo "ALL SIX LANDED"; break; }
  sleep 60
done
