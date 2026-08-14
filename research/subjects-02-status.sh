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
    case "$t" in
      algebraic-geometry) pre=AV;; algebraic-topology) pre=AT;;
      differential-topology) pre=DT;; fourier-analysis) pre=FR;;
      representation-theory-lie) pre=RL;; representation-theory-groups) pre=RG;;
    esac
    # own prefix only: a track citing another's labels must not inflate its count
    pairs=$(grep -oE "\b$pre-[0-9]+\b" "$p" 2>/dev/null | sort -u | wc -l | tr -d ' ')
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
