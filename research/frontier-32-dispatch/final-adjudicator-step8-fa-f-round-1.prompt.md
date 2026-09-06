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
`research/frontier-32-step8-owner-prerequisite-repairs.jsonl` with
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

run: frontier-32
role: final-adjudicator
label: step8-fa-f-round-1

# Final Adjudicator queue — frontier-32, group f, round 1

This is the exact queue frozen in `research/frontier-32-step8-fa-f-round-1.json`. It contains 15 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `cex-constant-presheaf-not-sheaf-disconnected-open` (run)

1. Read `items/cex-constant-presheaf-not-sheaf-disconnected-open.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-1-cex-constant-presheaf-not-sheaf-disconnected-open.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id cex-constant-presheaf-not-sheaf-disconnected-open --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-1-cex-constant-presheaf-not-sheaf-disconnected-open.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id cex-constant-presheaf-not-sheaf-disconnected-open --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-1-cex-constant-presheaf-not-sheaf-disconnected-open.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `cor-grassmannian-smooth-irreducible-dimension` (run)

1. Read `items/cor-grassmannian-smooth-irreducible-dimension.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-2-cor-grassmannian-smooth-irreducible-dimension.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id cor-grassmannian-smooth-irreducible-dimension --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-2-cor-grassmannian-smooth-irreducible-dimension.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id cor-grassmannian-smooth-irreducible-dimension --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-2-cor-grassmannian-smooth-irreducible-dimension.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 3. `cor-one-regular-system-of-parameters-implies-cohen-macaulay` (run)

1. Read `items/cor-one-regular-system-of-parameters-implies-cohen-macaulay.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-3-cor-one-regular-system-of-parameters-implies-cohen-macaulay.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id cor-one-regular-system-of-parameters-implies-cohen-macaulay --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-3-cor-one-regular-system-of-parameters-implies-cohen-macaulay.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id cor-one-regular-system-of-parameters-implies-cohen-macaulay --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-3-cor-one-regular-system-of-parameters-implies-cohen-macaulay.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 4. `cor-polynomial-extension-preserves-cohen-macaulayness` (run)

1. Read `items/cor-polynomial-extension-preserves-cohen-macaulayness.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-4-cor-polynomial-extension-preserves-cohen-macaulayness.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id cor-polynomial-extension-preserves-cohen-macaulayness --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-4-cor-polynomial-extension-preserves-cohen-macaulayness.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id cor-polynomial-extension-preserves-cohen-macaulayness --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-4-cor-polynomial-extension-preserves-cohen-macaulayness.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 5. `cor-segre-veronese-embedding` (run)

1. Read `items/cor-segre-veronese-embedding.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-5-cor-segre-veronese-embedding.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id cor-segre-veronese-embedding --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-5-cor-segre-veronese-embedding.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id cor-segre-veronese-embedding --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-5-cor-segre-veronese-embedding.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 6. `def-incidence-correspondence-varieties` (run)

1. Read `items/def-incidence-correspondence-varieties.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-6-def-incidence-correspondence-varieties.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id def-incidence-correspondence-varieties --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-6-def-incidence-correspondence-varieties.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id def-incidence-correspondence-varieties --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-6-def-incidence-correspondence-varieties.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 7. `def-product-varieties-universal-property` (run)

1. Read `items/def-product-varieties-universal-property.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-7-def-product-varieties-universal-property.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id def-product-varieties-universal-property --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-7-def-product-varieties-universal-property.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id def-product-varieties-universal-property --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-7-def-product-varieties-universal-property.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 8. `def-scheme-over-base` (run)

1. Read `items/def-scheme-over-base.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-8-def-scheme-over-base.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id def-scheme-over-base --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-8-def-scheme-over-base.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id def-scheme-over-base --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-8-def-scheme-over-base.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 9. `ex-projective-line-by-gluing-affines` (run)

1. Read `items/ex-projective-line-by-gluing-affines.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-9-ex-projective-line-by-gluing-affines.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id ex-projective-line-by-gluing-affines --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-9-ex-projective-line-by-gluing-affines.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id ex-projective-line-by-gluing-affines --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-9-ex-projective-line-by-gluing-affines.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 10. `lem-depth-at-a-prime-bounded-by-local-dimension` (run)

1. Read `items/lem-depth-at-a-prime-bounded-by-local-dimension.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-10-lem-depth-at-a-prime-bounded-by-local-dimension.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id lem-depth-at-a-prime-bounded-by-local-dimension --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-10-lem-depth-at-a-prime-bounded-by-local-dimension.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id lem-depth-at-a-prime-bounded-by-local-dimension --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-10-lem-depth-at-a-prime-bounded-by-local-dimension.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 11. `lem-fibre-as-base-change-to-point-classical` (run)

1. Read `items/lem-fibre-as-base-change-to-point-classical.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-11-lem-fibre-as-base-change-to-point-classical.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id lem-fibre-as-base-change-to-point-classical --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-11-lem-fibre-as-base-change-to-point-classical.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id lem-fibre-as-base-change-to-point-classical --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-11-lem-fibre-as-base-change-to-point-classical.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 12. `lem-section-zero-if-all-germs-zero` (run)

1. Read `items/lem-section-zero-if-all-germs-zero.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-12-lem-section-zero-if-all-germs-zero.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id lem-section-zero-if-all-germs-zero --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-12-lem-section-zero-if-all-germs-zero.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id lem-section-zero-if-all-germs-zero --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-12-lem-section-zero-if-all-germs-zero.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 13. `thm-affine-variety-product-coordinate-ring` (run)

1. Read `items/thm-affine-variety-product-coordinate-ring.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-13-thm-affine-variety-product-coordinate-ring.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id thm-affine-variety-product-coordinate-ring --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-13-thm-affine-variety-product-coordinate-ring.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id thm-affine-variety-product-coordinate-ring --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-13-thm-affine-variety-product-coordinate-ring.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 14. `thm-classical-varieties-equivalent-integral-separated-finite-type-schemes` (run)

1. Read `items/thm-classical-varieties-equivalent-integral-separated-finite-type-schemes.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-14-thm-classical-varieties-equivalent-integral-separated-finite-type-schemes.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id thm-classical-varieties-equivalent-integral-separated-finite-type-schemes --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-14-thm-classical-varieties-equivalent-integral-separated-finite-type-schemes.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id thm-classical-varieties-equivalent-integral-separated-finite-type-schemes --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-14-thm-classical-varieties-equivalent-integral-separated-finite-type-schemes.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 15. `thm-multihomogeneous-map-to-projective-space` (run)

1. Read `items/thm-multihomogeneous-map-to-projective-space.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-32-step8-fa-f-15-thm-multihomogeneous-map-to-projective-space.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id thm-multihomogeneous-map-to-projective-space --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition accepted-after-review --source-status verified --basis-file research/frontier-32-step8-fa-f-15-thm-multihomogeneous-map-to-projective-space.md
node tools/step8-terminal-resolution.mjs record --run frontier-32 --id thm-multihomogeneous-map-to-projective-space --resolved-by final-adjudicator --group f --queue research/frontier-32-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-32 --disposition repaired --source-status verified --basis-file research/frontier-32-step8-fa-f-15-thm-multihomogeneous-map-to-projective-space.md
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
