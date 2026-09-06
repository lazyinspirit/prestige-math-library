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
label: step8-fa-f-round-1

# Final Adjudicator queue — frontier-31a, group f, round 1

This is the exact queue frozen in `research/frontier-31a-step8-fa-f-round-1.json`. It contains 15 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `def-c-zero-and-ell-infinity` (run)

1. Read `items/def-c-zero-and-ell-infinity.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-1-def-c-zero-and-ell-infinity.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-c-zero-and-ell-infinity --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-1-def-c-zero-and-ell-infinity.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-c-zero-and-ell-infinity --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-1-def-c-zero-and-ell-infinity.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `def-continuous-annihilator-of-a-subspace` (run)

1. Read `items/def-continuous-annihilator-of-a-subspace.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-2-def-continuous-annihilator-of-a-subspace.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-continuous-annihilator-of-a-subspace --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-2-def-continuous-annihilator-of-a-subspace.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-continuous-annihilator-of-a-subspace --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-2-def-continuous-annihilator-of-a-subspace.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 3. `def-graded-derivation-of-the-algebra-of-differential-forms` (run)

1. Read `items/def-graded-derivation-of-the-algebra-of-differential-forms.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-3-def-graded-derivation-of-the-algebra-of-differential-forms.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-graded-derivation-of-the-algebra-of-differential-forms --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-3-def-graded-derivation-of-the-algebra-of-differential-forms.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-graded-derivation-of-the-algebra-of-differential-forms --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-3-def-graded-derivation-of-the-algebra-of-differential-forms.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 4. `def-linear-hyperplane` (run)

1. Read `items/def-linear-hyperplane.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-4-def-linear-hyperplane.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-linear-hyperplane --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-4-def-linear-hyperplane.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-linear-hyperplane --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-4-def-linear-hyperplane.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 5. `def-semilinear-and-quasilinear-first-order-cauchy-problems` (run)

1. Read `items/def-semilinear-and-quasilinear-first-order-cauchy-problems.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-5-def-semilinear-and-quasilinear-first-order-cauchy-problems.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-semilinear-and-quasilinear-first-order-cauchy-problems --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-5-def-semilinear-and-quasilinear-first-order-cauchy-problems.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-semilinear-and-quasilinear-first-order-cauchy-problems --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-5-def-semilinear-and-quasilinear-first-order-cauchy-problems.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 6. `ex-semilinear-characteristics-with-logistic-growth` (run)

1. Read `items/ex-semilinear-characteristics-with-logistic-growth.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-6-ex-semilinear-characteristics-with-logistic-growth.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-semilinear-characteristics-with-logistic-growth --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-6-ex-semilinear-characteristics-with-logistic-growth.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-semilinear-characteristics-with-logistic-growth --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-6-ex-semilinear-characteristics-with-logistic-growth.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 7. `lem-burgers-slope-obeys-a-riccati-law-along-characteristics` (run)

1. Read `items/lem-burgers-slope-obeys-a-riccati-law-along-characteristics.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-7-lem-burgers-slope-obeys-a-riccati-law-along-characteristics.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-burgers-slope-obeys-a-riccati-law-along-characteristics --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-7-lem-burgers-slope-obeys-a-riccati-law-along-characteristics.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-burgers-slope-obeys-a-riccati-law-along-characteristics --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-7-lem-burgers-slope-obeys-a-riccati-law-along-characteristics.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 8. `lem-characteristic-strip-compatibility` (run)

1. Read `items/lem-characteristic-strip-compatibility.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-8-lem-characteristic-strip-compatibility.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-characteristic-strip-compatibility --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-8-lem-characteristic-strip-compatibility.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-characteristic-strip-compatibility --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-8-lem-characteristic-strip-compatibility.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 9. `lem-quasilinear-solution-lifts-to-characteristics` (run)

1. Read `items/lem-quasilinear-solution-lifts-to-characteristics.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-9-lem-quasilinear-solution-lifts-to-characteristics.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-quasilinear-solution-lifts-to-characteristics --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-9-lem-quasilinear-solution-lifts-to-characteristics.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-quasilinear-solution-lifts-to-characteristics --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-9-lem-quasilinear-solution-lifts-to-characteristics.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 10. `prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor` (run)

1. Read `items/prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-10-prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-10-prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-10-prop-coordinate-formula-for-the-lie-derivative-of-a-contravariant-tensor.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 11. `prop-the-exterior-derivative-commutes-with-restriction` (run)

1. Read `items/prop-the-exterior-derivative-commutes-with-restriction.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-11-prop-the-exterior-derivative-commutes-with-restriction.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-the-exterior-derivative-commutes-with-restriction --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-11-prop-the-exterior-derivative-commutes-with-restriction.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-the-exterior-derivative-commutes-with-restriction --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-11-prop-the-exterior-derivative-commutes-with-restriction.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 12. `thm-local-coordinate-formula-for-the-exterior-derivative` (run)

1. Read `items/thm-local-coordinate-formula-for-the-exterior-derivative.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-12-thm-local-coordinate-formula-for-the-exterior-derivative.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-local-coordinate-formula-for-the-exterior-derivative --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-12-thm-local-coordinate-formula-for-the-exterior-derivative.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-local-coordinate-formula-for-the-exterior-derivative --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-12-thm-local-coordinate-formula-for-the-exterior-derivative.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 13. `thm-local-fully-nonlinear-cauchy-problem-by-charpit` (run)

1. Read `items/thm-local-fully-nonlinear-cauchy-problem-by-charpit.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-13-thm-local-fully-nonlinear-cauchy-problem-by-charpit.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-local-fully-nonlinear-cauchy-problem-by-charpit --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-13-thm-local-fully-nonlinear-cauchy-problem-by-charpit.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-local-fully-nonlinear-cauchy-problem-by-charpit --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-13-thm-local-fully-nonlinear-cauchy-problem-by-charpit.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 14. `thm-separation-of-an-open-convex-set-and-a-point` (run)

1. Read `items/thm-separation-of-an-open-convex-set-and-a-point.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-14-thm-separation-of-an-open-convex-set-and-a-point.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-separation-of-an-open-convex-set-and-a-point --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-14-thm-separation-of-an-open-convex-set-and-a-point.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-separation-of-an-open-convex-set-and-a-point --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-14-thm-separation-of-an-open-convex-set-and-a-point.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 15. `thm-the-exterior-derivative-is-a-graded-derivation` (run)

1. Read `items/thm-the-exterior-derivative-is-a-graded-derivation.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-f-15-thm-the-exterior-derivative-is-a-graded-derivation.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-the-exterior-derivative-is-a-graded-derivation --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-f-15-thm-the-exterior-derivative-is-a-graded-derivation.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-the-exterior-derivative-is-a-graded-derivation --resolved-by final-adjudicator --group f --queue research/frontier-31a-step8-fa-f-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-f-15-thm-the-exterior-derivative-is-a-graded-derivation.md
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
