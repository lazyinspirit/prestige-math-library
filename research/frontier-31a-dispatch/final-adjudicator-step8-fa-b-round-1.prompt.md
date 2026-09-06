# Final Adjudicator (FA) — Step 8 terminal mathematical review

You are the independent final adjudicator after the owning Sol group Alpha has
adjudicated and, when necessary, repaired a Step-7 judge rejection or reader
warning, and Terra has rejudged the repaired item once. If that rejudge rejects,
you alone adjudicate the final rejection and make any final repair; the item is
not returned to Sol and is not judged a third time. You are not continuing the
Alpha's conversation. Read
`CLAUDE.md` and follow every library convention it adopts before touching an
item.

Your task file is a mechanically ordered queue for one Alpha group. Process it
strictly **one item at a time**. Do not begin substantive review of item N+1
until item N has either been accepted or independently repaired, checked, and
recorded through `tools/step8-terminal-resolution.mjs`. The recorder refuses an
out-of-order decision.

For each item, independently inspect the current statement, proof, cited
dependencies, A/B-page context, proof contract, risk record, judge rejection,
Sol adjudication, any repair, and the Terra rejudge. Apply the conventions fixed by the item's page,
batch manifest, coverage notes, and the surrounding published library. Do not
rubber-stamp the Alpha.

If any mathematics is unfamiliar or uncertain, use web search and verify it
against authoritative sources: original papers where practical, standard
monographs, or official scholarly notes. Record the exact URLs and what they
support in the item's FA evidence file. Never substitute a search snippet,
unsourced recollection, or an aggregator for the underlying source.

For each queued item choose exactly one outcome:

- `accepted-after-review`: the current Sol repair is mathematically correct,
  complete, properly scoped, and consistent with library conventions despite
  the final Terra rejection.
- `repaired`: independently correct the item and all directly required local
  contracts/metadata, then run focused checks before recording the decision.

If an independent repair must also change a run-local direct dependency, that
dependency edit needs its own exact guard licence. Append one version-1
`owner-prerequisite-repair` JSON row to
`research/frontier-31a-step8-owner-prerequisite-repairs.jsonl` with
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

run: frontier-31a
role: final-adjudicator
label: step8-fa-b-round-1

# Final Adjudicator queue — frontier-31a, group b, round 1

This is the exact queue frozen in `research/frontier-31a-step8-fa-b-round-1.json`. It contains 27 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable` (run)

1. Read `items/cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-1-cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-1-cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-1-cor-ext-can-be-computed-from-any-injective-resolution-of-the-second-variable.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable` (run)

1. Read `items/cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-2-cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-2-cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-2-cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 3. `cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set` (run)

1. Read `items/cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-3-cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-3-cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-3-cor-the-class-of-extensions-is-a-set-whenever-derived-ext-one-is-a-set.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 4. `def-evaluation-map-from-cohomology-to-hom-of-homology` (run)

1. Read `items/def-evaluation-map-from-cohomology-to-hom-of-homology.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-4-def-evaluation-map-from-cohomology-to-hom-of-homology.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-evaluation-map-from-cohomology-to-hom-of-homology --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-4-def-evaluation-map-from-cohomology-to-hom-of-homology.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-evaluation-map-from-cohomology-to-hom-of-homology --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-4-def-evaluation-map-from-cohomology-to-hom-of-homology.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 5. `def-normalized-bar-resolution` (run)

1. Read `items/def-normalized-bar-resolution.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-5-def-normalized-bar-resolution.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-normalized-bar-resolution --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-5-def-normalized-bar-resolution.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-normalized-bar-resolution --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-5-def-normalized-bar-resolution.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 6. `def-restriction-and-corestriction-on-group-cohomology` (run)

1. Read `items/def-restriction-and-corestriction-on-group-cohomology.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-6-def-restriction-and-corestriction-on-group-cohomology.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-restriction-and-corestriction-on-group-cohomology --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-6-def-restriction-and-corestriction-on-group-cohomology.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-restriction-and-corestriction-on-group-cohomology --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-6-def-restriction-and-corestriction-on-group-cohomology.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 7. `ex-baer-sum-of-two-extensions-of-cyclic-groups` (run)

1. Read `items/ex-baer-sum-of-two-extensions-of-cyclic-groups.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-7-ex-baer-sum-of-two-extensions-of-cyclic-groups.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-baer-sum-of-two-extensions-of-cyclic-groups --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-7-ex-baer-sum-of-two-extensions-of-cyclic-groups.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-baer-sum-of-two-extensions-of-cyclic-groups --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-7-ex-baer-sum-of-two-extensions-of-cyclic-groups.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 8. `ex-the-tensor-double-complex-in-low-degrees` (run)

1. Read `items/ex-the-tensor-double-complex-in-low-degrees.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-8-ex-the-tensor-double-complex-in-low-degrees.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-the-tensor-double-complex-in-low-degrees --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-8-ex-the-tensor-double-complex-in-low-degrees.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-the-tensor-double-complex-in-low-degrees --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-8-ex-the-tensor-double-complex-in-low-degrees.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 9. `fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition` (run)

1. Read `items/fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-9-fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-9-fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-9-fs-the-universal-coefficient-theorem-always-gives-a-natural-direct-sum-decomposition.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 10. `lem-the-kunneth-cross-product-map-is-well-defined-and-natural` (run)

1. Read `items/lem-the-kunneth-cross-product-map-is-well-defined-and-natural.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-10-lem-the-kunneth-cross-product-map-is-well-defined-and-natural.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-the-kunneth-cross-product-map-is-well-defined-and-natural --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-10-lem-the-kunneth-cross-product-map-is-well-defined-and-natural.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-the-kunneth-cross-product-map-is-well-defined-and-natural --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-10-lem-the-kunneth-cross-product-map-is-well-defined-and-natural.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 11. `lem-the-kunneth-tor-map` (run)

1. Read `items/lem-the-kunneth-tor-map.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-11-lem-the-kunneth-tor-map.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-the-kunneth-tor-map --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-11-lem-the-kunneth-tor-map.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-the-kunneth-tor-map --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-11-lem-the-kunneth-tor-map.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 12. `prop-global-dimension-zero-characterises-semisimple-module-categories` (run)

1. Read `items/prop-global-dimension-zero-characterises-semisimple-module-categories.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-12-prop-global-dimension-zero-characterises-semisimple-module-categories.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-global-dimension-zero-characterises-semisimple-module-categories --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-12-prop-global-dimension-zero-characterises-semisimple-module-categories.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-global-dimension-zero-characterises-semisimple-module-categories --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-12-prop-global-dimension-zero-characterises-semisimple-module-categories.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 13. `prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` (run)

1. Read `items/prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-13-prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-13-prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-13-prop-injective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 14. `prop-positive-ext-vanishes-on-a-projective-first-variable` (run)

1. Read `items/prop-positive-ext-vanishes-on-a-projective-first-variable.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-14-prop-positive-ext-vanishes-on-a-projective-first-variable.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-positive-ext-vanishes-on-a-projective-first-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-14-prop-positive-ext-vanishes-on-a-projective-first-variable.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-positive-ext-vanishes-on-a-projective-first-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-14-prop-positive-ext-vanishes-on-a-projective-first-variable.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 15. `prop-positive-ext-vanishes-on-an-injective-second-variable` (run)

1. Read `items/prop-positive-ext-vanishes-on-an-injective-second-variable.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-15-prop-positive-ext-vanishes-on-an-injective-second-variable.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-positive-ext-vanishes-on-an-injective-second-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-15-prop-positive-ext-vanishes-on-an-injective-second-variable.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-positive-ext-vanishes-on-an-injective-second-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-15-prop-positive-ext-vanishes-on-an-injective-second-variable.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 16. `prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable` (run)

1. Read `items/prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-16-prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-16-prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-16-prop-projective-ext-is-contravariant-in-the-first-and-covariant-in-the-second-variable.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 17. `prop-the-two-ext-long-exact-sequences-agree-under-balance` (run)

1. Read `items/prop-the-two-ext-long-exact-sequences-agree-under-balance.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-17-prop-the-two-ext-long-exact-sequences-agree-under-balance.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-the-two-ext-long-exact-sequences-agree-under-balance --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-17-prop-the-two-ext-long-exact-sequences-agree-under-balance.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-the-two-ext-long-exact-sequences-agree-under-balance --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-17-prop-the-two-ext-long-exact-sequences-agree-under-balance.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 18. `prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product` (run)

1. Read `items/prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-18-prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-18-prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-18-prop-the-yoneda-product-agrees-with-the-derived-ext-composition-product.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 19. `thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes` (run)

1. Read `items/thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-19-thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-19-thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-19-thm-a-left-module-is-flat-exactly-when-tor-one-with-every-right-module-vanishes.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 20. `thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes` (run)

1. Read `items/thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-20-thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-20-thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-20-thm-a-right-module-is-flat-exactly-when-tor-one-with-every-left-module-vanishes.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 21. `thm-higher-yoneda-ext-agrees-with-derived-ext` (run)

1. Read `items/thm-higher-yoneda-ext-agrees-with-derived-ext.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-21-thm-higher-yoneda-ext-agrees-with-derived-ext.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-higher-yoneda-ext-agrees-with-derived-ext --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-21-thm-higher-yoneda-ext-agrees-with-derived-ext.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-higher-yoneda-ext-agrees-with-derived-ext --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-21-thm-higher-yoneda-ext-agrees-with-derived-ext.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 22. `thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic` (run)

1. Read `items/thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-22-thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-22-thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-22-thm-left-and-right-projective-constructions-of-tor-are-naturally-isomorphic.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 23. `thm-long-exact-ext-sequence-in-the-first-variable` (run)

1. Read `items/thm-long-exact-ext-sequence-in-the-first-variable.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-23-thm-long-exact-ext-sequence-in-the-first-variable.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-long-exact-ext-sequence-in-the-first-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-23-thm-long-exact-ext-sequence-in-the-first-variable.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-long-exact-ext-sequence-in-the-first-variable --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-23-thm-long-exact-ext-sequence-in-the-first-variable.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 24. `thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally` (run)

1. Read `items/thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-24-thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-24-thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-24-thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 25. `thm-the-kunneth-sequence-splits-nonnaturally` (run)

1. Read `items/thm-the-kunneth-sequence-splits-nonnaturally.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-25-thm-the-kunneth-sequence-splits-nonnaturally.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-the-kunneth-sequence-splits-nonnaturally --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-25-thm-the-kunneth-sequence-splits-nonnaturally.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-the-kunneth-sequence-splits-nonnaturally --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-25-thm-the-kunneth-sequence-splits-nonnaturally.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 26. `thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric` (run)

1. Read `items/thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-26-thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-26-thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-26-thm-weak-global-dimension-is-detected-by-tor-and-is-left-right-symmetric.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 27. `thm-yoneda-product-is-associative-and-unital` (run)

1. Read `items/thm-yoneda-product-is-associative-and-unital.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-b-27-thm-yoneda-product-is-associative-and-unital.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-yoneda-product-is-associative-and-unital --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-b-27-thm-yoneda-product-is-associative-and-unital.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-yoneda-product-is-associative-and-unital --resolved-by final-adjudicator --group b --queue research/frontier-31a-step8-fa-b-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-b-27-thm-yoneda-product-is-associative-and-unital.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.



## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
