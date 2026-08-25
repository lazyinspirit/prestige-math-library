# Frontier 18 Reader 1 Report

Opened scope: `lagrange-four-square-theorem`, `lagrange-four-square-theorem-examples`.

## Findings

### R1-1
- item: `thm-lagrange-four-square-theorem`
- location: proof step `5.1`
- severity: fatal
- defect: The step used `q >= 2` from “`q` is prime” without importing the prime definition into the local inputs.
- evidence: Before repair, the item depended on `lem-every-integer-above-one-has-a-prime-divisor` and used its output `q is prime`, but the page had no local `[F#]` or `[L#]` carrying the clause `q > 1`. The user brief makes an unstated proof input a defect even when the conclusion is true.
- action: Added `def-prime` to the item deps, added `[F3]`, and rewrote step `5.1` to cite `[F3]` explicitly. Synced `research/frontier-18-batch-1.proof-contracts.json`.

### R1-2
- item: `cor-integers-requiring-four-squares`
- location: proof steps `1.1` to `3.1` (before repair: old step `1.1`)
- severity: fatal
- defect: The existence half used `n = 4^a m` as a nonnegative integer without sufficient local support for `4^a >= 1` and hence `n > 0`.
- evidence: The original proof cited only `def-group-power`, `lem-units-of-z`, and `thm-induction-principle` for the positivity claim. That did not license the order/discreteness facts needed to move from the power recursion to `4^a >= 1` and then to `n >= 0`.
- action: Added `thm-int-ordered-ring`, `lem-nat-embeds-int`, `lem-nat-order-is-membership`, `lem-nat-discrete`, and `def-natural-numbers`; rewrote the proof in canonical phase order; reran `reflow` and `precheck`; synced `research/frontier-18-batch-1.proof-contracts.json`.

### R1-3
- item: `prop-three-square-congruence-obstruction`, `cor-integers-requiring-four-squares`, `library/number-theory/lagrange-four-square-theorem.md`
- location: titles and page synopsis
- severity: fatal
- defect: The positive-`m` hypothesis was omitted from the proposition title, the corollary title, and the A-page synopsis sentence.
- evidence: The proved statement is for `m` a positive integer with `m ≡ 7 (mod 8)`. The pre-repair titles/synopsis said only “`4^a m` with `m ≡ 7 mod 8`”, which also covers negative `m` such as `-1 ≡ 7 (mod 8)`. The brief treats a title asserting more than the proof/Statement gives as fatal.
- action: Narrowed both titles to “Positive integers ...” and narrowed the A-page synopsis accordingly. Updated the batch manifest titles in `research/frontier-18-batch-1.pages.json`.

### R1-4
- item: `research/frontier-18-batch-1.proof-contracts.json`
- location: citation quotes for `lem-four-square-congruence-for-primes` `[L1]`, `thm-lagrange-four-square-theorem` `[L3]`, and `ex-four-square-congruence-for-an-odd-prime` `[L2]`
- severity: nonfatal
- defect: The stored quote strings were clipped before the operative clause.
- evidence: The two residue-proposition quotes stopped at “there are integers `x,y` such that”, and the prime-divisor quote stopped before the prime-divisor conclusion. The on-page mathematics was fine; the contract metadata was not.
- action: Replaced those quote strings with faithful clauses and resynced the changed proof-contract rows for the repaired items.

## Additional Checks

- Every in-scope mathematical-content item I opened had both `provenance.statement` and `provenance.proof`.
- I found no in-scope item whose `deps` relied on another item with `provenance.statement: ai-generated`.
- I found no additional proof-step, boundary-row, or citation defect in the remaining in-scope items after the repairs above.

## Verification

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-lagrange-four-square-theorem.md items/prop-three-square-congruence-obstruction.md items/cor-integers-requiring-four-squares.md`
  - unchanged on all three files
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-lagrange-four-square-theorem.md items/prop-three-square-congruence-obstruction.md items/cor-integers-requiring-four-squares.md`
  - pass / pass / pass after adopting the canonical phase order in `cor-integers-requiring-four-squares`

## Per-Page Verdicts

- `lagrange-four-square-theorem`: repaired `R1-1`, `R1-2`, `R1-3`; no remaining defects found on this page after recheck.
- `lagrange-four-square-theorem-examples`: clean mathematical read; only the nonfatal proof-contract quote repair in `R1-4` touched this page’s support metadata.

Items opened: 51 item files total (`26` in scope, `25` cited dependencies).
