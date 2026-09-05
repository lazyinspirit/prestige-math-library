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
label: step8-fa-d-round-2

# Final Adjudicator queue — frontier-30, group d, round 2

This is the exact queue frozen in `research/frontier-30-step8-fa-d-round-2.json`. It contains 9 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `def-elliptic-hyperbolic-and-parabolic-principal-symbols` (run)

1. Read `items/def-elliptic-hyperbolic-and-parabolic-principal-symbols.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-d-1-def-elliptic-hyperbolic-and-parabolic-principal-symbols.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id def-elliptic-hyperbolic-and-parabolic-principal-symbols --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-d-1-def-elliptic-hyperbolic-and-parabolic-principal-symbols.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id def-elliptic-hyperbolic-and-parabolic-principal-symbols --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-d-1-def-elliptic-hyperbolic-and-parabolic-principal-symbols.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `def-leaf-of-a-regular-foliation` (run)

1. Read `items/def-leaf-of-a-regular-foliation.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-d-2-def-leaf-of-a-regular-foliation.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id def-leaf-of-a-regular-foliation --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-d-2-def-leaf-of-a-regular-foliation.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id def-leaf-of-a-regular-foliation --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-d-2-def-leaf-of-a-regular-foliation.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 3. `def-two-variable-second-order-discriminant` (run)

1. Read `items/def-two-variable-second-order-discriminant.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-d-3-def-two-variable-second-order-discriminant.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id def-two-variable-second-order-discriminant --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-d-3-def-two-variable-second-order-discriminant.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id def-two-variable-second-order-discriminant --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-d-3-def-two-variable-second-order-discriminant.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 4. `fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold` (run)

1. Read `items/fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-d-4-fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-d-4-fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-d-4-fs-every-leaf-of-a-regular-foliation-is-an-embedded-submanifold.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 5. `prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution` (run)

1. Read `items/prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-d-5-prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-d-5-prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-d-5-prop-every-leaf-is-initial-among-smooth-maps-tangent-to-the-distribution.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 6. `thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds` (run)

1. Read `items/thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-d-6-thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-d-6-thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-d-6-thm-existence-and-uniqueness-of-maximal-connected-integral-manifolds.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 7. `thm-homogeneous-linear-transport-by-the-flow` (run)

1. Read `items/thm-homogeneous-linear-transport-by-the-flow.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-d-7-thm-homogeneous-linear-transport-by-the-flow.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-homogeneous-linear-transport-by-the-flow --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-d-7-thm-homogeneous-linear-transport-by-the-flow.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-homogeneous-linear-transport-by-the-flow --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-d-7-thm-homogeneous-linear-transport-by-the-flow.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 8. `thm-inhomogeneous-linear-transport-formula` (run)

1. Read `items/thm-inhomogeneous-linear-transport-formula.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-d-8-thm-inhomogeneous-linear-transport-formula.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-inhomogeneous-linear-transport-formula --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-d-8-thm-inhomogeneous-linear-transport-formula.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-inhomogeneous-linear-transport-formula --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-d-8-thm-inhomogeneous-linear-transport-formula.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 9. `thm-local-linear-transport-cauchy-problem` (run)

1. Read `items/thm-local-linear-transport-cauchy-problem.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-30-step8-fa-d-9-thm-local-linear-transport-cauchy-problem.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-local-linear-transport-cauchy-problem --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition accepted-after-review --source-status verified --basis-file research/frontier-30-step8-fa-d-9-thm-local-linear-transport-cauchy-problem.md
node tools/step8-terminal-resolution.mjs record --run frontier-30 --id thm-local-linear-transport-cauchy-problem --resolved-by final-adjudicator --group d --queue research/frontier-30-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot-frontier-30 --disposition repaired --source-status verified --basis-file research/frontier-30-step8-fa-d-9-thm-local-linear-transport-cauchy-problem.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

