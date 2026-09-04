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
`research/frontier-29-step8-owner-prerequisite-repairs.jsonl` with
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

run: frontier-29
role: final-adjudicator
label: step8-fa-d-round-2

# Final Adjudicator queue — frontier-29, group d, round 2

This is the exact queue frozen in `research/frontier-29-step8-fa-d-round-2.json`. It contains 9 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor` (run)

1. Read `items/cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-29-step8-fa-d-1-cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition accepted-after-review --source-status verified --basis-file research/frontier-29-step8-fa-d-1-cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor.md
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition repaired --source-status verified --basis-file research/frontier-29-step8-fa-d-1-cex-l-zero-of-a-non-right-exact-functor-need-not-recover-the-functor.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `def-acyclic-object-for-a-left-exact-functor` (run)

1. Read `items/def-acyclic-object-for-a-left-exact-functor.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-29-step8-fa-d-2-def-acyclic-object-for-a-left-exact-functor.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id def-acyclic-object-for-a-left-exact-functor --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition accepted-after-review --source-status verified --basis-file research/frontier-29-step8-fa-d-2-def-acyclic-object-for-a-left-exact-functor.md
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id def-acyclic-object-for-a-left-exact-functor --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition repaired --source-status verified --basis-file research/frontier-29-step8-fa-d-2-def-acyclic-object-for-a-left-exact-functor.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 3. `def-balanced-derived-bifunctor` (run)

1. Read `items/def-balanced-derived-bifunctor.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-29-step8-fa-d-3-def-balanced-derived-bifunctor.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id def-balanced-derived-bifunctor --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition accepted-after-review --source-status verified --basis-file research/frontier-29-step8-fa-d-3-def-balanced-derived-bifunctor.md
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id def-balanced-derived-bifunctor --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition repaired --source-status verified --basis-file research/frontier-29-step8-fa-d-3-def-balanced-derived-bifunctor.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 4. `fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself` (run)

1. Read `items/fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-29-step8-fa-d-4-fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition accepted-after-review --source-status verified --basis-file research/frontier-29-step8-fa-d-4-fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself.md
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition repaired --source-status verified --basis-file research/frontier-29-step8-fa-d-4-fs-an-additive-functor-has-l-zero-naturally-isomorphic-to-itself.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 5. `fs-derived-functors-in-two-variables-are-automatically-balanced` (run)

1. Read `items/fs-derived-functors-in-two-variables-are-automatically-balanced.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-29-step8-fa-d-5-fs-derived-functors-in-two-variables-are-automatically-balanced.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id fs-derived-functors-in-two-variables-are-automatically-balanced --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition accepted-after-review --source-status verified --basis-file research/frontier-29-step8-fa-d-5-fs-derived-functors-in-two-variables-are-automatically-balanced.md
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id fs-derived-functors-in-two-variables-are-automatically-balanced --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition repaired --source-status verified --basis-file research/frontier-29-step8-fa-d-5-fs-derived-functors-in-two-variables-are-automatically-balanced.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 6. `prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` (run)

1. Read `items/prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-29-step8-fa-d-6-prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition accepted-after-review --source-status verified --basis-file research/frontier-29-step8-fa-d-6-prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws.md
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition repaired --source-status verified --basis-file research/frontier-29-step8-fa-d-6-prop-change-of-injective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 7. `prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws` (run)

1. Read `items/prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-29-step8-fa-d-7-prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition accepted-after-review --source-status verified --basis-file research/frontier-29-step8-fa-d-7-prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws.md
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition repaired --source-status verified --basis-file research/frontier-29-step8-fa-d-7-prop-change-of-projective-resolution-isomorphisms-satisfy-identity-and-cocycle-laws.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 8. `prop-positive-right-derived-functors-vanish-on-injective-objects` (run)

1. Read `items/prop-positive-right-derived-functors-vanish-on-injective-objects.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-29-step8-fa-d-8-prop-positive-right-derived-functors-vanish-on-injective-objects.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id prop-positive-right-derived-functors-vanish-on-injective-objects --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition accepted-after-review --source-status verified --basis-file research/frontier-29-step8-fa-d-8-prop-positive-right-derived-functors-vanish-on-injective-objects.md
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id prop-positive-right-derived-functors-vanish-on-injective-objects --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition repaired --source-status verified --basis-file research/frontier-29-step8-fa-d-8-prop-positive-right-derived-functors-vanish-on-injective-objects.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 9. `rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data` (run)

1. Read `items/rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-29-step8-fa-d-9-rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition accepted-after-review --source-status verified --basis-file research/frontier-29-step8-fa-d-9-rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data.md
node tools/step8-terminal-resolution.mjs record --run frontier-29 --id rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data --resolved-by final-adjudicator --group d --queue research/frontier-29-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-29 --disposition repaired --source-status verified --basis-file research/frontier-29-step8-fa-d-9-rem-derived-functors-are-well-defined-relative-to-supplied-resolution-data.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

