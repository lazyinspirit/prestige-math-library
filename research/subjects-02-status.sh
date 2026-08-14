#!/bin/sh
cd /Users/ianx/Projects/prestige-math-library || exit 1
echo "--- $(date '+%H:%M') ---"
echo "LANES"
ps -eo etime,command | grep "[d]ispatch.mjs --role scaffolder" | grep " node " \
  | sed 's/--brief.*--label sub02-/  /;s/ --run.*//' | sed 's/^ */  /'
[ -z "$(ps -eo command | grep '[d]ispatch.mjs --role scaffolder' | grep ' node ')" ] && echo "  (none live)"
echo "SCAFFOLDS"
for t in algebraic-geometry algebraic-topology representation-theory-lie fourier-analysis differential-topology representation-theory-groups; do
  p="research/plan-$t-track.md"
  if [ -f "$p" ]; then
    printf '  %-30s %6s lines  %5s pairs\n' "$t" "$(wc -l < "$p" | tr -d ' ')" \
      "$(grep -coE '^\| *`?(RG|RL|AV|AT|DT|FR)-[0-9]+`? *\|' "$p" 2>/dev/null || echo 0)"
  else
    printf '  %-30s not started\n' "$t"
  fi
done
echo "LANDED"
n=0
for f in $(ls research/subjects-02-dispatch/*.result.json 2>/dev/null); do
  b=$(basename "$f" .result.json); b=${b#scaffolder-sub02-}
  ok=$(grep -o '"ok": *[a-z]*' "$f" | head -1 | sed 's/.*: *//')
  ms=$(grep -o '"ms": *[0-9]*' "$f" | head -1 | sed 's/.*: *//')
  printf '  %-30s ok=%s  %sm\n' "$b" "$ok" "$((ms/60000))"
  n=$((n+1))
done
[ "$n" -eq 0 ] && echo "  none yet"
