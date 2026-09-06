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
label: step8-fa-d-round-1

# Final Adjudicator queue — frontier-31a, group d, round 1

This is the exact queue frozen in `research/frontier-31a-step8-fa-d-round-1.json`. It contains 15 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `def-arithmetical-level-completeness` (run)

1. Read `items/def-arithmetical-level-completeness.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-1-def-arithmetical-level-completeness.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-arithmetical-level-completeness --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-1-def-arithmetical-level-completeness.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-arithmetical-level-completeness --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-1-def-arithmetical-level-completeness.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `def-efficient-universal-simulation-with-clock` (run)

1. Read `items/def-efficient-universal-simulation-with-clock.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-2-def-efficient-universal-simulation-with-clock.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-efficient-universal-simulation-with-clock --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-2-def-efficient-universal-simulation-with-clock.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-efficient-universal-simulation-with-clock --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-2-def-efficient-universal-simulation-with-clock.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 3. `def-logspace-uniform-circuit-family` (run)

1. Read `items/def-logspace-uniform-circuit-family.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-3-def-logspace-uniform-circuit-family.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-logspace-uniform-circuit-family --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-3-def-logspace-uniform-circuit-family.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id def-logspace-uniform-circuit-family --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-3-def-logspace-uniform-circuit-family.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 4. `ex-circuit-value-is-p-complete` (run)

1. Read `items/ex-circuit-value-is-p-complete.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-4-ex-circuit-value-is-p-complete.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-circuit-value-is-p-complete --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-4-ex-circuit-value-is-p-complete.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-circuit-value-is-p-complete --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-4-ex-circuit-value-is-p-complete.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 5. `ex-logspace-reductions-compose` (run)

1. Read `items/ex-logspace-reductions-compose.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-5-ex-logspace-reductions-compose.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-logspace-reductions-compose --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-5-ex-logspace-reductions-compose.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-logspace-reductions-compose --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-5-ex-logspace-reductions-compose.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 6. `ex-time-diagonal-language-respects-its-budget` (run)

1. Read `items/ex-time-diagonal-language-respects-its-budget.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-6-ex-time-diagonal-language-respects-its-budget.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-time-diagonal-language-respects-its-budget --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-6-ex-time-diagonal-language-respects-its-budget.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id ex-time-diagonal-language-respects-its-budget --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-6-ex-time-diagonal-language-respects-its-budget.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 7. `lem-effective-enumeration-of-clocked-machines` (run)

1. Read `items/lem-effective-enumeration-of-clocked-machines.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-7-lem-effective-enumeration-of-clocked-machines.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-effective-enumeration-of-clocked-machines --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-7-lem-effective-enumeration-of-clocked-machines.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-effective-enumeration-of-clocked-machines --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-7-lem-effective-enumeration-of-clocked-machines.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 8. `lem-padding-transfers-time-bounds` (run)

1. Read `items/lem-padding-transfers-time-bounds.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-8-lem-padding-transfers-time-bounds.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-padding-transfers-time-bounds --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-8-lem-padding-transfers-time-bounds.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-padding-transfers-time-bounds --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-8-lem-padding-transfers-time-bounds.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 9. `lem-polynomial-time-computations-have-logspace-uniform-circuits` (run)

1. Read `items/lem-polynomial-time-computations-have-logspace-uniform-circuits.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-9-lem-polynomial-time-computations-have-logspace-uniform-circuits.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-polynomial-time-computations-have-logspace-uniform-circuits --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-9-lem-polynomial-time-computations-have-logspace-uniform-circuits.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-polynomial-time-computations-have-logspace-uniform-circuits --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-9-lem-polynomial-time-computations-have-logspace-uniform-circuits.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 10. `lem-read-only-workspace-universal-simulation` (run)

1. Read `items/lem-read-only-workspace-universal-simulation.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-10-lem-read-only-workspace-universal-simulation.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-read-only-workspace-universal-simulation --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-10-lem-read-only-workspace-universal-simulation.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-read-only-workspace-universal-simulation --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-10-lem-read-only-workspace-universal-simulation.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 11. `lem-time-diagonal-language-respects-its-budget` (run)

1. Read `items/lem-time-diagonal-language-respects-its-budget.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-11-lem-time-diagonal-language-respects-its-budget.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-time-diagonal-language-respects-its-budget --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-11-lem-time-diagonal-language-respects-its-budget.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id lem-time-diagonal-language-respects-its-budget --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-11-lem-time-diagonal-language-respects-its-budget.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 12. `prop-hierarchy-theorems-do-not-separate-p-from-np` (run)

1. Read `items/prop-hierarchy-theorems-do-not-separate-p-from-np.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-12-prop-hierarchy-theorems-do-not-separate-p-from-np.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-hierarchy-theorems-do-not-separate-p-from-np --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-12-prop-hierarchy-theorems-do-not-separate-p-from-np.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id prop-hierarchy-theorems-do-not-separate-p-from-np --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-12-prop-hierarchy-theorems-do-not-separate-p-from-np.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 13. `thm-immerman-szelepcsenyi-nl-equals-conl` (run)

1. Read `items/thm-immerman-szelepcsenyi-nl-equals-conl.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-13-thm-immerman-szelepcsenyi-nl-equals-conl.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-immerman-szelepcsenyi-nl-equals-conl --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-13-thm-immerman-szelepcsenyi-nl-equals-conl.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-immerman-szelepcsenyi-nl-equals-conl --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-13-thm-immerman-szelepcsenyi-nl-equals-conl.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 14. `thm-nondeterministic-time-hierarchy` (run)

1. Read `items/thm-nondeterministic-time-hierarchy.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-14-thm-nondeterministic-time-hierarchy.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-nondeterministic-time-hierarchy --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-14-thm-nondeterministic-time-hierarchy.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-nondeterministic-time-hierarchy --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-14-thm-nondeterministic-time-hierarchy.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 15. `thm-shoenfield-limit-lemma` (run)

1. Read `items/thm-shoenfield-limit-lemma.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently adjudicate the Terra rejudge rejection and decide whether the current Sol repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-31a-step8-fa-d-15-thm-shoenfield-limit-lemma.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current Sol repair or independently repair it and its directly required local metadata/contracts. If that repair changes a run-local direct dependency, record the exact final-adjudicator prerequisite-repair licence required by the FA brief. Run focused checks. Do not append a Sol adjudication and do not request another judge call.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-shoenfield-limit-lemma --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition accepted-after-review --source-status verified --basis-file research/frontier-31a-step8-fa-d-15-thm-shoenfield-limit-lemma.md
node tools/step8-terminal-resolution.mjs record --run frontier-31a --id thm-shoenfield-limit-lemma --resolved-by final-adjudicator --group d --queue research/frontier-31a-step8-fa-d-round-1.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-31a --disposition repaired --source-status verified --basis-file research/frontier-31a-step8-fa-d-15-thm-shoenfield-limit-lemma.md
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
