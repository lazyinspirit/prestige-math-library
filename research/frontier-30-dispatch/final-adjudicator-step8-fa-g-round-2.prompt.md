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
label: step8-fa-g-round-2

# Final Adjudicator queue — frontier-30, group g, round 2

This is the exact queue frozen in `research/frontier-30-step8-fa-g-round-2.json`. It contains 5 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `def-property-star-for-a-finite-family` (run)

1. Read `items/def-property-star-for-a-finite-family.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-g-1-def-property-star-for-a-finite-family.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id def-property-star-for-a-finite-family --resolved-by final-adjudicator --group g --queue research/frontier-30-step8-fa-g-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-g-1-def-property-star-for-a-finite-family.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id def-property-star-for-a-finite-family --resolved-by final-adjudicator --group g --queue research/frontier-30-step8-fa-g-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-g-1-def-property-star-for-a-finite-family.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star` (run)

1. Read `items/ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-g-2-ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star --resolved-by final-adjudicator --group g --queue research/frontier-30-step8-fa-g-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-g-2-ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star --resolved-by final-adjudicator --group g --queue research/frontier-30-step8-fa-g-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-g-2-ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 3. `ex-the-lemma-three-five-parameter-choice-on-a-large-graph` (run)

1. Read `items/ex-the-lemma-three-five-parameter-choice-on-a-large-graph.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-g-3-ex-the-lemma-three-five-parameter-choice-on-a-large-graph.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id ex-the-lemma-three-five-parameter-choice-on-a-large-graph --resolved-by final-adjudicator --group g --queue research/frontier-30-step8-fa-g-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-g-3-ex-the-lemma-three-five-parameter-choice-on-a-large-graph.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id ex-the-lemma-three-five-parameter-choice-on-a-large-graph --resolved-by final-adjudicator --group g --queue research/frontier-30-step8-fa-g-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-g-3-ex-the-lemma-three-five-parameter-choice-on-a-large-graph.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 4. `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes` (run)

1. Read `items/lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-g-4-lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes --resolved-by final-adjudicator --group g --queue research/frontier-30-step8-fa-g-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-g-4-lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes --resolved-by final-adjudicator --group g --queue research/frontier-30-step8-fa-g-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-g-4-lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 5. `thm-morse-functions-are-dense-by-relative-jet-transversality` (run)

1. Read `items/thm-morse-functions-are-dense-by-relative-jet-transversality.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-g-5-thm-morse-functions-are-dense-by-relative-jet-transversality.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-morse-functions-are-dense-by-relative-jet-transversality --resolved-by final-adjudicator --group g --queue research/frontier-30-step8-fa-g-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-g-5-thm-morse-functions-are-dense-by-relative-jet-transversality.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-morse-functions-are-dense-by-relative-jet-transversality --resolved-by final-adjudicator --group g --queue research/frontier-30-step8-fa-g-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-g-5-thm-morse-functions-are-dense-by-relative-jet-transversality.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

