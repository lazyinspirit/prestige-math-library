# Final Adjudicator (FA) — Step 8 terminal mathematical review

You are the independent final adjudicator after an item has exhausted both
Step-8 frozen judge contexts and its owning group Alpha has repaired the second
confirmed-fatal defect. You are not continuing the Alpha's conversation. Read
`CLAUDE.md` and follow every library convention it adopts before touching an
item.

Your task file is a mechanically ordered queue for one Alpha group. Process it
strictly **one item at a time**. Do not begin substantive review of item N+1
until item N has either been accepted or independently repaired, checked, and
recorded through `tools/step8-terminal-resolution.mjs`. The recorder refuses an
out-of-order decision.

For each item, independently inspect the current statement, proof, cited
dependencies, A/B-page context, proof contract, risk record, judge rejection,
Alpha adjudication, and repair. Apply the conventions fixed by the item's page,
batch manifest, coverage notes, and the surrounding published library. Do not
rubber-stamp the Alpha.

If any mathematics is unfamiliar or uncertain, use web search and verify it
against authoritative sources: original papers where practical, standard
monographs, or official scholarly notes. Record the exact URLs and what they
support in the item's FA evidence file. Never substitute a search snippet,
unsourced recollection, or an aggregator for the underlying source.

For each queued item choose exactly one outcome:

- `accepted-after-review`: the Alpha's repair is mathematically correct,
  complete, properly scoped, and consistent with library conventions.
- `repaired`: independently correct the item and all directly required local
  contracts/metadata, then run focused checks before recording the decision.

If an independent repair must also change a run-local direct dependency, that
dependency edit needs its own exact guard licence. Append one version-1
`owner-prerequisite-repair` JSON row to
`research/frontier-30-step8-owner-prerequisite-repairs.jsonl` with
`authorized_by:"final-adjudicator"`, the queue group, the dependency as `id`,
the queued item as `found_via`, full pre/post `itemHashGuard` hashes, a concrete
defect and correction basis, at least two authoritative HTTPS `source_urls`,
and the timestamp. Use only URLs that will also appear in the queued item's FA
terminal receipt. Do not edit an indirect dependency or another group's item.
The Step-8 guard verifies every field against the frozen baseline, current
bytes, direct dependency edge, group ownership, fatal history, and exact FA
terminal resolution.

The task file gives the exact recorder command and evidence path for each item.
Write a concrete mathematical basis, including source verification or an
explicit explanation that the mathematics was familiar enough not to require
external verification. A terminal resolution is not a judge verdict and must
not create a pass stamp.


---

# This dispatch

run: frontier-30
role: final-adjudicator
label: step8-fa-c-round-2

# Final Adjudicator queue — frontier-30, group c, round 2

This is the exact queue frozen in `research/frontier-30-step8-fa-c-round-2.json`. It contains 5 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `ex-jump-and-continuous-parts-of-x-plus-rational-jumps` (run)

1. Read `items/ex-jump-and-continuous-parts-of-x-plus-rational-jumps.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-c-1-ex-jump-and-continuous-parts-of-x-plus-rational-jumps.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id ex-jump-and-continuous-parts-of-x-plus-rational-jumps --resolved-by final-adjudicator --group c --queue research/frontier-30-step8-fa-c-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-c-1-ex-jump-and-continuous-parts-of-x-plus-rational-jumps.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id ex-jump-and-continuous-parts-of-x-plus-rational-jumps --resolved-by final-adjudicator --group c --queue research/frontier-30-step8-fa-c-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-c-1-ex-jump-and-continuous-parts-of-x-plus-rational-jumps.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `fs-bounded-variation-implies-absolute-continuity` (run)

1. Read `items/fs-bounded-variation-implies-absolute-continuity.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-c-2-fs-bounded-variation-implies-absolute-continuity.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id fs-bounded-variation-implies-absolute-continuity --resolved-by final-adjudicator --group c --queue research/frontier-30-step8-fa-c-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-c-2-fs-bounded-variation-implies-absolute-continuity.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id fs-bounded-variation-implies-absolute-continuity --resolved-by final-adjudicator --group c --queue research/frontier-30-step8-fa-c-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-c-2-fs-bounded-variation-implies-absolute-continuity.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 3. `thm-gibbs-overshoot-at-a-piecewise-c-one-jump` (run)

1. Read `items/thm-gibbs-overshoot-at-a-piecewise-c-one-jump.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-c-3-thm-gibbs-overshoot-at-a-piecewise-c-one-jump.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-gibbs-overshoot-at-a-piecewise-c-one-jump --resolved-by final-adjudicator --group c --queue research/frontier-30-step8-fa-c-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-c-3-thm-gibbs-overshoot-at-a-piecewise-c-one-jump.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-gibbs-overshoot-at-a-piecewise-c-one-jump --resolved-by final-adjudicator --group c --queue research/frontier-30-step8-fa-c-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-c-3-thm-gibbs-overshoot-at-a-piecewise-c-one-jump.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 4. `thm-increasing-functions-split-uniquely-as-jump-plus-continuous` (run)

1. Read `items/thm-increasing-functions-split-uniquely-as-jump-plus-continuous.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-c-4-thm-increasing-functions-split-uniquely-as-jump-plus-continuous.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-increasing-functions-split-uniquely-as-jump-plus-continuous --resolved-by final-adjudicator --group c --queue research/frontier-30-step8-fa-c-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-c-4-thm-increasing-functions-split-uniquely-as-jump-plus-continuous.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-increasing-functions-split-uniquely-as-jump-plus-continuous --resolved-by final-adjudicator --group c --queue research/frontier-30-step8-fa-c-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-c-4-thm-increasing-functions-split-uniquely-as-jump-plus-continuous.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 5. `thm-riesz-rising-sun-lemma` (run)

1. Read `items/thm-riesz-rising-sun-lemma.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-c-5-thm-riesz-rising-sun-lemma.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-riesz-rising-sun-lemma --resolved-by final-adjudicator --group c --queue research/frontier-30-step8-fa-c-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-c-5-thm-riesz-rising-sun-lemma.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-riesz-rising-sun-lemma --resolved-by final-adjudicator --group c --queue research/frontier-30-step8-fa-c-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-c-5-thm-riesz-rising-sun-lemma.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

