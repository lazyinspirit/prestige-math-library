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
label: step8-fa-a-round-2

# Final Adjudicator queue — frontier-28, group a, round 2

This is the exact queue frozen in `research/frontier-28-step8-fa-a-round-2.json`. It contains 13 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `cor-flat-quotients-and-idempotent-ideals` (run)

1. Read `items/cor-flat-quotients-and-idempotent-ideals.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-1-cor-flat-quotients-and-idempotent-ideals.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id cor-flat-quotients-and-idempotent-ideals --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-1-cor-flat-quotients-and-idempotent-ideals.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id cor-flat-quotients-and-idempotent-ideals --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-1-cor-flat-quotients-and-idempotent-ideals.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `ex-semilocal-adic-completion` (run)

1. Read `items/ex-semilocal-adic-completion.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-2-ex-semilocal-adic-completion.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id ex-semilocal-adic-completion --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-2-ex-semilocal-adic-completion.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id ex-semilocal-adic-completion --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-2-ex-semilocal-adic-completion.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 3. `fs-the-horseshoe-middle-resolution-is-canonical` (run)

1. Read `items/fs-the-horseshoe-middle-resolution-is-canonical.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-3-fs-the-horseshoe-middle-resolution-is-canonical.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id fs-the-horseshoe-middle-resolution-is-canonical --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-3-fs-the-horseshoe-middle-resolution-is-canonical.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id fs-the-horseshoe-middle-resolution-is-canonical --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-3-fs-the-horseshoe-middle-resolution-is-canonical.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 4. `lem-a-sufficiently-long-generator-extension-iteration-is-injective` (run)

1. Read `items/lem-a-sufficiently-long-generator-extension-iteration-is-injective.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-4-lem-a-sufficiently-long-generator-extension-iteration-is-injective.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-a-sufficiently-long-generator-extension-iteration-is-injective --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-4-lem-a-sufficiently-long-generator-extension-iteration-is-injective.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-a-sufficiently-long-generator-extension-iteration-is-injective --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-4-lem-a-sufficiently-long-generator-extension-iteration-is-injective.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 5. `lem-the-one-step-generator-map-is-a-functorial-monomorphism` (run)

1. Read `items/lem-the-one-step-generator-map-is-a-functorial-monomorphism.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-5-lem-the-one-step-generator-map-is-a-functorial-monomorphism.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-the-one-step-generator-map-is-a-functorial-monomorphism --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-5-lem-the-one-step-generator-map-is-a-functorial-monomorphism.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-the-one-step-generator-map-is-a-functorial-monomorphism --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-5-lem-the-one-step-generator-map-is-a-functorial-monomorphism.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 6. `lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps` (run)

1. Read `items/lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-6-lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-6-lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-6-lem-transfinite-iteration-of-the-generator-extension-preserves-monomorphisms-and-factorizes-small-source-maps.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 7. `thm-additivity-of-hilbert-samuel-multiplicity` (run)

1. Read `items/thm-additivity-of-hilbert-samuel-multiplicity.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-7-thm-additivity-of-hilbert-samuel-multiplicity.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-additivity-of-hilbert-samuel-multiplicity --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-7-thm-additivity-of-hilbert-samuel-multiplicity.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-additivity-of-hilbert-samuel-multiplicity --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-7-thm-additivity-of-hilbert-samuel-multiplicity.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 8. `thm-faithful-flatness-of-jacobson-adic-completion` (run)

1. Read `items/thm-faithful-flatness-of-jacobson-adic-completion.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-8-thm-faithful-flatness-of-jacobson-adic-completion.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-faithful-flatness-of-jacobson-adic-completion --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-8-thm-faithful-flatness-of-jacobson-adic-completion.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-faithful-flatness-of-jacobson-adic-completion --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-8-thm-faithful-flatness-of-jacobson-adic-completion.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 9. `thm-flatness-of-noetherian-completion` (run)

1. Read `items/thm-flatness-of-noetherian-completion.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-9-thm-flatness-of-noetherian-completion.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-flatness-of-noetherian-completion --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-9-thm-flatness-of-noetherian-completion.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-flatness-of-noetherian-completion --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-9-thm-flatness-of-noetherian-completion.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 10. `thm-hilbert-samuel-dimension-theorem` (run)

1. Read `items/thm-hilbert-samuel-dimension-theorem.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-10-thm-hilbert-samuel-dimension-theorem.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-hilbert-samuel-dimension-theorem --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-10-thm-hilbert-samuel-dimension-theorem.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-hilbert-samuel-dimension-theorem --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-10-thm-hilbert-samuel-dimension-theorem.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 11. `thm-kernel-and-universal-property-of-adic-completion` (run)

1. Read `items/thm-kernel-and-universal-property-of-adic-completion.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-11-thm-kernel-and-universal-property-of-adic-completion.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-kernel-and-universal-property-of-adic-completion --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-11-thm-kernel-and-universal-property-of-adic-completion.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-kernel-and-universal-property-of-adic-completion --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-11-thm-kernel-and-universal-property-of-adic-completion.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 12. `thm-multiplicity-under-reduction-by-a-parameter` (run)

1. Read `items/thm-multiplicity-under-reduction-by-a-parameter.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-12-thm-multiplicity-under-reduction-by-a-parameter.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-multiplicity-under-reduction-by-a-parameter --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-12-thm-multiplicity-under-reduction-by-a-parameter.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-multiplicity-under-reduction-by-a-parameter --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-12-thm-multiplicity-under-reduction-by-a-parameter.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 13. `thm-noetherianity-of-adic-completion` (run)

1. Read `items/thm-noetherianity-of-adic-completion.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-a-13-thm-noetherianity-of-adic-completion.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-noetherianity-of-adic-completion --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-a-13-thm-noetherianity-of-adic-completion.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-noetherianity-of-adic-completion --resolved-by final-adjudicator --group a --queue research/frontier-28-step8-fa-a-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-a-13-thm-noetherianity-of-adic-completion.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

