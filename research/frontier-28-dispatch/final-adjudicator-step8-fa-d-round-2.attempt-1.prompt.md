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
label: step8-fa-d-round-2

# Final Adjudicator queue — frontier-28, group d, round 2

This is the exact queue frozen in `research/frontier-28-step8-fa-d-round-2.json`. It contains 2 item(s).
Work in the numbered order below. Do not substantively review the next item until the recorder accepts the current one.

## 1. `lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses` (run)

1. Read `items/lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-d-1-lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses --resolved-by final-adjudicator --group d --queue research/frontier-28-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-d-1-lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses --resolved-by final-adjudicator --group d --queue research/frontier-28-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-d-1-lem-the-auxiliary-pattern-has-a-polynomial-homogeneous-set-under-the-source-hypotheses.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

## 2. `thm-polynomial-reductions-transfer-p-np-and-conp-membership` (run)

1. Read `items/thm-polynomial-reductions-transfer-p-np-and-conp-membership.md`, its cited dependencies, pair/page context, proof contract, judge and Alpha evidence, and this group's conventions.
2. Independently decide whether the Alpha repair is correct. If unfamiliar or uncertain, use web search and verify against authoritative sources.
3. Write concrete evidence to `research/frontier-28-step8-fa-d-2-thm-polynomial-reductions-transfer-p-np-and-conp-membership.md`, including exact source URLs and what they support, or explain why the mathematics was familiar.
4. Either accept the current repair or independently repair it and its directly required local metadata/contracts. Run focused checks.
5. Record the exact final bytes with exactly one of these commands:

```bash
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-polynomial-reductions-transfer-p-np-and-conp-membership --resolved-by final-adjudicator --group d --queue research/frontier-28-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition accepted-after-review --source-status verified --basis-file research/frontier-28-step8-fa-d-2-thm-polynomial-reductions-transfer-p-np-and-conp-membership.md
node tools/step8-terminal-resolution.mjs record --run frontier-28 --id thm-polynomial-reductions-transfer-p-np-and-conp-membership --resolved-by final-adjudicator --group d --queue research/frontier-28-step8-fa-d-round-2.json --state-dir /home/lazyinspirit/Projects/prestige-math-library/.autopilot/frontier-28 --disposition repaired --source-status verified --basis-file research/frontier-28-step8-fa-d-2-thm-polynomial-reductions-transfer-p-np-and-conp-membership.md
```

Both commands default to `--source-status verified` and require at least one authoritative http(s) URL in the evidence file. Change only that exact word to `familiar` when no external verification was needed.

