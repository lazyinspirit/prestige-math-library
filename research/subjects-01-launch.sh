#!/bin/sh
# subjects-01 — launch one scaffolder lane, detached.
#   sh research/subjects-01-launch.sh <track-key>
# The subject string must match research/subjects-01-SEAMS.md §2 exactly; it is
# what the brief's "You are an expert of <subject>" line becomes.
set -u
cd "$(dirname "$0")/.." || exit 1
k="${1:?usage: subjects-01-launch.sh <track-key>}"

case "$k" in
  measure-theory)               s="measure theory" ;;
  abstract-algebra)             s="abstract algebra" ;;
  combinatorics)                s="combinatorics" ;;
  monoidal-abelian-categories)  s="category theory, specifically monoidal and abelian categories" ;;
  functional-analysis)          s="functional analysis" ;;
  commutative-algebra)          s="commutative algebra" ;;
  group-theory)                 s="group theory" ;;
  homological-algebra)          s="homological algebra" ;;
  probability-theory)           s="probability theory" ;;
  pde)                          s="partial differential equations" ;;
  number-theory)                s="number theory" ;;
  differential-geometry)        s="differential geometry" ;;
  complex-analysis)             s="complex analysis" ;;
  *) echo "unknown track: $k" >&2; exit 2 ;;
esac

t="research/subjects-01-$k.task.md"
[ -f "$t" ] || { echo "missing task file: $t" >&2; exit 2; }
if [ -f "research/subjects-01-dispatch/scaffolder-$k.result.json" ]; then
  echo "$k already landed — refusing to relaunch" >&2; exit 3
fi
# A lane already RUNNING for this label is the dangerous case: the cap queues the
# duplicate rather than rejecting it, so it waits quietly for a slot and then runs
# a second writer against the same track file. That is exactly the mutual
# exclusion the SEAMS ownership contract supplies and the lane cap does not.
# (Done once, 2026-08-13, caught before it acquired a slot.)
if ps -eo command | grep -q "[d]ispatch.mjs --role scaffolder .*--label $k --run"; then
  echo "$k is already running — refusing to start a second writer" >&2; exit 3
fi

nohup node tools/dispatch.mjs --role scaffolder --brief briefs/subject-scaffold.md \
  --label "$k" --run subjects-01 --task "$t" \
  --var subject="$s" --timeout 21600 \
  > "research/subjects-01-dispatch/$k.nohup" 2>&1 &
echo "launched $k (pid $!) — subject: $s"
