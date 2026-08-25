# Frontier 18 Reader 9 Report

Run: `frontier-18`
Role: independent reader (`reader-9`)
Batch: `9`
Scope: `library/category-theory/ends-coends-and-weighted-limits.md` and `library/category-theory/ends-coends-and-weighted-limits-examples.md`

Audit complete. Findings below keep stable ids.

## Findings

### R9-1
Item: `thm-a-weighted-limit-is-an-end`, `cor-a-colimit-of-a-set-valued-functor-is-the-set-of-connected-components-of-its-category-of-elements`, `thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor`
Location: `research/frontier-18-batch-9.proof-contracts.json:4253`, `:4640`, `:5299`
Severity: nonfatal

The proof contract marks the biconditional axes `not_applicable` for these items, but each item’s own Statement asserts an `exactly when` clause. `boundary-audit.mjs --fail-on-contradicted` flags all six rows as contradicted by the authored text. These rows are not dispositions actually checked from disk and must be rewritten to record the forward and reverse directions the proofs really establish.

Status: repaired in the batch contract.

### R9-2
Item: `thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor`
Location: `research/frontier-18-batch-9.proof-contracts.json:5232`, `:5254`
Severity: nonfatal

The contract no longer describes the proof on disk. The item’s numbered proof proves the coend and end clauses by explicit correspondences between cowedges/wedges and natural transformations, then concludes by representability in step `3.1`. The contract instead claims step `2.1` “expands as a coend of copowers” and step `3.1` applies “Fubini” and “co-Yoneda”, which are not the numbered steps in the item. This makes the contract stale against the proof it is supposed to certify.

Status: repaired in the batch contract.

### R9-3
Item: `fs-every-end-exists`
Location: `research/frontier-18-batch-9.proof-contracts.json:5534`
Severity: nonfatal

The contract still describes a different proof than the one on disk. The authored refutation proves nonexistence by producing `n+1` distinct wedges from a one-point vertex into a hypothetical `n`-element end and invoking `lem-pigeonhole`; the contract instead summarizes an uncountability argument through all families in a countable product of two-element sets. The current proof is finite and step-local, so the derivation entry must be rewritten to match it.

Status: repaired in the batch contract.

## Changes

- Repaired the six contradicted `iff-forward` / `iff-reverse` boundary rows for the three items in `R9-1`.
- Rewrote the stale derivation summaries for `thm-a-coend-is-a-colimit-weighted-by-the-hom-bifunctor` and `fs-every-end-exists` to match the authored proofs on disk.
- Left item markdown unchanged; no proof text, citations, step numbering, or page composition changed.

## Checks

- `node tools/proof-contract.mjs research/frontier-18-batch-9.proof-contracts.json --strict` — pass
- `node tools/citation-fidelity.mjs research/frontier-18-batch-9.proof-contracts.json --fail-on-missing-quote` — pass
- `node tools/boundary-audit.mjs research/frontier-18-batch-9.proof-contracts.json --fail-on-contradicted` — pass after repair
- `tools/reflow.mts` / `tools/precheck.mts` were not run because no scoped item markdown changed; the repairs were confined to the batch contract and this report.

## Verdicts

- `library/category-theory/ends-coends-and-weighted-limits.md`: no fatal mathematical defect confirmed in the 50 scoped items I opened. Nonfatal proof-contract drift was found and repaired.
- `library/category-theory/ends-coends-and-weighted-limits-examples.md`: no finding in the 9 scoped example items I opened.

Items opened: 59
