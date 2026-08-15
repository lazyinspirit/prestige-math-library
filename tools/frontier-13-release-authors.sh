#!/bin/sh
# frontier-13 step 4 -> step 5 pipeline release.
#
# The lead Alpha splices ONE batch at a time and writes
# research/frontier-13-splice-<i>.json when that batch validates clean. This
# watches for each receipt and dispatches that batch's authoring Beta the moment
# it appears, so batch 1 is being authored while batch 7 is still being spliced.
#
# Safe only because the run has zero cross-pair seams — no item in any batch
# cites an item in another — so a later splice cannot invalidate an earlier
# batch's authoring. The receipt is the release signal AND the proof: a batch
# whose closure check is not clean must not have one, and this refuses to
# release on a receipt that reports otherwise.
#
# Emits one line per event; exits when all seven are released.
cd /Users/ianx/Projects/prestige-math-library || exit 1
released=""
while :; do
  for i in 1 2 3 4 5 6 7; do
    r="research/frontier-13-splice-$i.json"
    case "$released" in *" $i "*) continue ;; esac
    [ -f "$r" ] || continue

    # A receipt is a release signal only if it reports a clean batch. Guarding
    # here rather than trusting the writer is the point: releasing an author
    # onto a bad splice is the one failure this pipeline could cause that the
    # sequential version could not.
    verdict=$(node -e '
      try {
        const r = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"));
        const c = r.closure_check || {};
        const bad = ["out_of_closure","cross_pair","b_leaf","duplicate_ids"]
          .filter((k) => Number(c[k] ?? 0) !== 0);
        const plan = String(r.validate_plan ?? "");
        if (bad.length) console.log("DIRTY:" + bad.join(","));
        else if (!/exit 0/.test(plan)) console.log("DIRTY:validate_plan=" + plan);
        else console.log("CLEAN");
      } catch (e) { console.log("UNREADABLE:" + e.message); }
    ' "$r" 2>/dev/null)

    case "$verdict" in
      CLEAN)
        nohup node tools/dispatch.mjs --role beta \
          --brief research/frontier-13-brief-beta-author.md \
          --task "research/frontier-13-beta-$i-author.task.md" \
          --label "author-batch-$i" --run frontier-13 \
          > "research/frontier-13-dispatch/author-batch-$i.nohup" 2>&1 &
        echo "RELEASED batch $i to author (splice receipt clean)"
        released="$released $i "
        ;;
      *)
        echo "BLOCKED batch $i — receipt not clean: $verdict"
        released="$released $i "   # do not retry; this needs a human decision
        ;;
    esac
  done
  n=$(printf '%s' "$released" | wc -w | tr -d ' ')
  [ "$n" -ge 7 ] && { echo "ALL 7 BATCHES RELEASED — step 5 authoring is running"; break; }
  sleep 20
done
