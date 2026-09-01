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

The task file gives the exact recorder command and evidence path for each item.
Write a concrete mathematical basis, including source verification or an
explicit explanation that the mathematics was familiar enough not to require
external verification. A terminal resolution is not a judge verdict and must
not create a pass stamp.


---

# This dispatch

run: frontier-28
role: final-adjudicator
label: step8-fa-b-round-2

# Final Adjudicator queue — frontier-28, group b, round 2

This is the exact queue frozen in `research/frontier-28-step8-fa-b-round-2.json`. It contains 13 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `def-profinite-completion-of-an-abstract-group` (run)

1. Read `items/def-profinite-completion-of-an-abstract-group.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-1-def-profinite-completion-of-an-abstract-group.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id def-profinite-completion-of-an-abstract-group --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-1-def-profinite-completion-of-an-abstract-group.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id def-profinite-completion-of-an-abstract-group --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-1-def-profinite-completion-of-an-abstract-group.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `def-secant-and-tangent-direction-maps-of-an-euclidean-embedding` (run)

1. Read `items/def-secant-and-tangent-direction-maps-of-an-euclidean-embedding.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-2-def-secant-and-tangent-direction-maps-of-an-euclidean-embedding.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id def-secant-and-tangent-direction-maps-of-an-euclidean-embedding --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-2-def-secant-and-tangent-direction-maps-of-an-euclidean-embedding.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id def-secant-and-tangent-direction-maps-of-an-euclidean-embedding --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-2-def-secant-and-tangent-direction-maps-of-an-euclidean-embedding.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 3. `def-tubular-neighbourhood-of-an-embedded-submanifold` (run)

1. Read `items/def-tubular-neighbourhood-of-an-embedded-submanifold.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-3-def-tubular-neighbourhood-of-an-embedded-submanifold.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id def-tubular-neighbourhood-of-an-embedded-submanifold --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-3-def-tubular-neighbourhood-of-an-embedded-submanifold.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id def-tubular-neighbourhood-of-an-embedded-submanifold --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-3-def-tubular-neighbourhood-of-an-embedded-submanifold.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 4. `lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands` (run)

1. Read `items/lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-4-lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-4-lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-4-lem-a-smooth-exhaustion-separates-the-locally-finite-chart-bands.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 5. `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams` (run)

1. Read `items/lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-5-lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-5-lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-5-lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 6. `prop-relative-transversality-preserves-a-map-on-a-closed-good-region` (run)

1. Read `items/prop-relative-transversality-preserves-a-map-on-a-closed-good-region.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-6-prop-relative-transversality-preserves-a-map-on-a-closed-good-region.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id prop-relative-transversality-preserves-a-map-on-a-closed-good-region --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-6-prop-relative-transversality-preserves-a-map-on-a-closed-good-region.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id prop-relative-transversality-preserves-a-map-on-a-closed-good-region --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-6-prop-relative-transversality-preserves-a-map-on-a-closed-good-region.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 7. `thm-euclidean-tubular-neighbourhood-theorem` (run)

1. Read `items/thm-euclidean-tubular-neighbourhood-theorem.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-7-thm-euclidean-tubular-neighbourhood-theorem.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-euclidean-tubular-neighbourhood-theorem --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-7-thm-euclidean-tubular-neighbourhood-theorem.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-euclidean-tubular-neighbourhood-theorem --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-7-thm-euclidean-tubular-neighbourhood-theorem.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 8. `thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected` (run)

1. Read `items/thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-8-thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-8-thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-8-thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 9. `thm-profinite-completion-is-functorial` (run)

1. Read `items/thm-profinite-completion-is-functorial.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-9-thm-profinite-completion-is-functorial.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-profinite-completion-is-functorial --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-9-thm-profinite-completion-is-functorial.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-profinite-completion-is-functorial --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-9-thm-profinite-completion-is-functorial.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 10. `thm-the-double-braiding-center-is-symmetric` (run)

1. Read `items/thm-the-double-braiding-center-is-symmetric.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-10-thm-the-double-braiding-center-is-symmetric.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-the-double-braiding-center-is-symmetric --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-10-thm-the-double-braiding-center-is-symmetric.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-the-double-braiding-center-is-symmetric --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-10-thm-the-double-braiding-center-is-symmetric.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 11. `thm-topological-characterisation-of-profinite-groups` (run)

1. Read `items/thm-topological-characterisation-of-profinite-groups.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-11-thm-topological-characterisation-of-profinite-groups.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-topological-characterisation-of-profinite-groups --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-11-thm-topological-characterisation-of-profinite-groups.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-topological-characterisation-of-profinite-groups --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-11-thm-topological-characterisation-of-profinite-groups.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 12. `thm-universal-property-of-profinite-completion` (run)

1. Read `items/thm-universal-property-of-profinite-completion.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-12-thm-universal-property-of-profinite-completion.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-universal-property-of-profinite-completion --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-12-thm-universal-property-of-profinite-completion.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-universal-property-of-profinite-completion --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-12-thm-universal-property-of-profinite-completion.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 13. `thm-weak-whitney-proper-embedding-theorem` (run)

1. Read `items/thm-weak-whitney-proper-embedding-theorem.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-b-13-thm-weak-whitney-proper-embedding-theorem.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-weak-whitney-proper-embedding-theorem --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-b-13-thm-weak-whitney-proper-embedding-theorem.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-weak-whitney-proper-embedding-theorem --resolved-by final-adjudicator --group b --queue research/frontier-28-step8-fa-b-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-b-13-thm-weak-whitney-proper-embedding-theorem.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

