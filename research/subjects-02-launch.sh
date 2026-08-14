#!/bin/sh
# subjects-02 launcher. Refuses a duplicate writer: the scaffolder cap QUEUES a
# duplicate label rather than rejecting it, so without this guard a second lane
# would wait for a slot and then write the same file concurrently.
cd /Users/ianx/Projects/prestige-math-library || exit 1
for k in "$@"; do
  case "$k" in
    algebraic-geometry)              s="algebraic geometry";;
    algebraic-topology)              s="algebraic topology";;
    differential-topology)           s="differential topology";;
    representation-theory-groups)    s="the representation theory of groups";;
    representation-theory-lie)       s="the representation theory of Lie algebras";;
    fourier-analysis)                s="Fourier analysis";;
    *) echo "unknown track: $k" >&2; exit 2;;
  esac
  if ps -eo pid,command | grep "[d]ispatch.mjs --role scaffolder" | grep "^ *[0-9]* node " | grep -q "label sub02-$k "; then
    echo "  REFUSED $k — already running" >&2; continue
  fi
  if [ -f "research/subjects-02-dispatch/scaffolder-sub02-$k.result.json" ]; then
    echo "  REFUSED $k — already landed" >&2; continue
  fi
  nohup node tools/dispatch.mjs --role scaffolder --brief briefs/subjects-02-scaffold.md \
    --label "sub02-$k" --run subjects-02 \
    --task "research/subjects-02-$k.task.md" \
    --var subject="$s" --timeout 21600 \
    > "research/subjects-02-dispatch/sub02-$k.nohup" 2>&1 &
  echo "  launched $k (pid $!)"
done
