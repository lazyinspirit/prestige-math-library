#!/bin/sh
cd /Users/ianx/Projects/prestige-math-library || exit 1
echo "--- $(date '+%H:%M') ---"
echo "LANES"
live=$(ps -eo pid,etime,command | grep "[d]ispatch.mjs --role scaffolder" | grep "node tools/dispatch")
if [ -n "$live" ]; then
  echo "$live" | sed 's/--brief.*--label sub02-/ /;s/ --run.*//' | awk '{printf "  %-30s %s\n",$NF,$2}'
else
  echo "  (none live)"
fi
echo "SCAFFOLDS"
for t in algebraic-geometry algebraic-topology representation-theory-lie fourier-analysis differential-topology representation-theory-groups; do
  p="research/plan-$t-track.md"
  if [ -f "$p" ]; then
    # count DISTINCT pair labels, not table rows: a label recurs in harvests and crosswalks
    pairs=$(grep -oE '\b(RG|RL|AV|AT|DT|FR)-[0-9]+\b' "$p" 2>/dev/null | sort -u | wc -l | tr -d ' ')
    printf '  %-30s %6s lines  %3s pairs\n' "$t" "$(wc -l < "$p" | tr -d ' ')" "$pairs"
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
exit 0
