# Frontier 21 Reader 2 Report

Run: `frontier-21`  
Role: independent reader (`reader-2`)  
Batch: `2`  
Assigned pages: [pell-equations-and-generalized-pell-orbits](/home/lazyinspirit/Projects/prestige-math-library/library/number-theory/pell-equations-and-generalized-pell-orbits.md:1), [pell-equations-and-generalized-pell-orbits-examples](/home/lazyinspirit/Projects/prestige-math-library/library/number-theory/pell-equations-and-generalized-pell-orbits-examples.md:1)

## Opened Scope

- Batch/task artifacts: [CLAUDE.md](/home/lazyinspirit/Projects/prestige-math-library/CLAUDE.md:1), [README.md](/home/lazyinspirit/Projects/prestige-math-library/README.md:1), [SCHEMA.md](/home/lazyinspirit/Projects/prestige-math-library/SCHEMA.md:1), [WORKFLOW.md](/home/lazyinspirit/Projects/prestige-math-library/WORKFLOW.md:1), [research/frontier-21-reader.task.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-reader.task.md:1), [research/frontier-21-beta-2.task.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-beta-2.task.md:1), [research/frontier-21-covers.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-covers.json:1), [research/frontier-21-batch-2.pages.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-batch-2.pages.json:1), [research/frontier-21-batch-2.coverage.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-batch-2.coverage.json:1), [research/frontier-21-batch-2.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-batch-2.proof-contracts.json:1), [research/frontier-21-batch-2.notes.md](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-batch-2.notes.md:1), and the NT-8 design block at [research/plan-number-theory-track.md](/home/lazyinspirit/Projects/prestige-math-library/research/plan-number-theory-track.md:834).
- Assigned A-page items opened: `def-pell-equation`, `def-generalized-and-negative-pell-equations`, `def-norm-on-integer-square-root-order`, `lem-pell-norm-multiplication`, `prop-integral-pell-solutions-form-a-group`, `lem-square-root-continued-fraction-state-recurrence`, `lem-square-root-convergent-norm-identity`, `thm-square-root-continued-fraction-period-structure`, `thm-lagrange-existence-for-pell-equation`, `thm-negative-pell-period-parity-criterion`, `def-fundamental-pell-solution`, `thm-all-positive-pell-solutions-are-fundamental-powers`, `cor-all-integral-pell-solutions`, `def-pell-equivalence-of-generalized-solutions`, `thm-generalized-pell-solutions-have-finitely-many-orbits`, `cor-generalized-pell-solubility-is-decidable`, `cor-one-generalized-pell-solution-gives-infinitely-many`.
- Assigned B-page items opened: `ex-pell-equation-for-two`, `ex-pell-equation-for-three`, `ex-negative-pell-equation-for-five`, `ex-pell-equation-for-fourteen`, `ex-large-fundamental-pell-solution-for-sixty-one`, `ex-generalized-pell-orbits-for-six`, `ex-generalized-pell-bounded-representatives`, `cex-generalized-pell-solutions-need-not-all-be-convergents`, `cex-pell-units-need-not-be-all-quadratic-field-units`.
- Published prerequisite pages opened: [regular-continued-fractions-and-diophantine-approximation](/home/lazyinspirit/Projects/prestige-math-library/library/number-theory/regular-continued-fractions-and-diophantine-approximation.md:1) and [regular-continued-fractions-and-diophantine-approximation-examples](/home/lazyinspirit/Projects/prestige-math-library/library/number-theory/regular-continued-fractions-and-diophantine-approximation-examples.md:1).
- Published dependency items opened to verify current claims: `def-continued-fraction-complete-quotients`, `def-convergents-of-regular-continued-fraction`, `lem-continued-fraction-complete-quotient-formula`, `lem-continued-fraction-determinant-identity`, `thm-legendre-continued-fraction-criterion`.

Opened item/page count: 21 scoped items, 5 published dependency items, and 4 page files.

## Findings

### R2-1
Item: `thm-all-positive-pell-solutions-are-fundamental-powers`  
Location: [items/thm-all-positive-pell-solutions-are-fundamental-powers.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-all-positive-pell-solutions-are-fundamental-powers.md:46)  
Severity: fatal

The pre-repair proof said the decreasing sequence
`α, α ε_D^{-1}, α ε_D^{-2}, ...` "terminates" and therefore yields an index
`k` with `1 ≤ α ε_D^{-k} < ε_D`. That conclusion did not follow: termination of
the `> 1` phase alone still leaves open the boundary case `α ε_D^{-k} < 1`,
which would not support step `2.1`. The classification theorem therefore
needed an explicit maximal-index argument.

Status: repaired in item text and batch contract.

### R2-2
Item: `cor-all-integral-pell-solutions`  
Location: [items/cor-all-integral-pell-solutions.md](/home/lazyinspirit/Projects/prestige-math-library/items/cor-all-integral-pell-solutions.md:46)  
Severity: fatal

The pre-repair proof omitted the boundary solutions `α = ±1`, so the statement
"every integral solution" was not fully covered. Its uniqueness step also
invoked the positive-solution theorem to compare arbitrary signed integer
exponents, which that cited theorem does not state. The corollary therefore
needed explicit handling of `k = 0` and a separate uniqueness argument for all
signed powers.

Status: repaired in item text and batch contract.

### R2-3
Item: `thm-negative-pell-period-parity-criterion`  
Location: [items/thm-negative-pell-period-parity-criterion.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-negative-pell-period-parity-criterion.md:63)  
Severity: fatal

The pre-repair proof correctly showed that `p_{2ℓ-1}/q_{2ℓ-1}` has norm `1`
when `ℓ` is odd, but its last sentence upgraded that existence statement to the
least positive norm-one solution without proof. To justify the statement as
written, the proof had to show that every positive norm-one solution also falls
under Legendre's strict convergent criterion and hence can first occur only at
index `ℓ-1` (even-period case) or `2ℓ-1` (odd-period case).

Status: repaired in item text and batch contract.

## Changes

- Rewrote [items/thm-all-positive-pell-solutions-are-fundamental-powers.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-all-positive-pell-solutions-are-fundamental-powers.md:46) so step `1.1` now takes the greatest index in the finite set `K = {j >= 0 : α ε_D^{-j} >= 1}` and derives the half-open terminal interval rigorously.
- Rewrote [items/cor-all-integral-pell-solutions.md](/home/lazyinspirit/Projects/prestige-math-library/items/cor-all-integral-pell-solutions.md:46) so step `1.1` now handles `α = ±1`, proves that a norm-one element with real value `> 1` is a positive Pell solution before invoking the classification theorem, and gives a signed-exponent uniqueness proof in step `2.1`.
- Rewrote [items/thm-negative-pell-period-parity-criterion.md](/home/lazyinspirit/Projects/prestige-math-library/items/thm-negative-pell-period-parity-criterion.md:63) so step `3.1` now applies Legendre's criterion to arbitrary positive norm-one solutions and derives the first admissible convergent index in each parity case.
- Regenerated the corresponding citation/derivation rows in [research/frontier-21-batch-2.proof-contracts.json](/home/lazyinspirit/Projects/prestige-math-library/research/frontier-21-batch-2.proof-contracts.json:1) and repaired the stale `zero` / `endpoints` boundary evidence on `cor-all-integral-pell-solutions`.
- No stale `verification.judge` record was present on any repaired item.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-all-positive-pell-solutions-are-fundamental-powers.md items/cor-all-integral-pell-solutions.md items/thm-negative-pell-period-parity-criterion.md` — pass (`thm-all-positive-pell-solutions-are-fundamental-powers.md` unchanged; `cor-all-integral-pell-solutions.md` and `thm-negative-pell-period-parity-criterion.md` reflowed once)
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-all-positive-pell-solutions-are-fundamental-powers.md items/cor-all-integral-pell-solutions.md items/thm-negative-pell-period-parity-criterion.md` — pass
- `node tools/proof-contract.mjs research/frontier-21-batch-2.proof-contracts.json --strict` — pass
- `node tools/citation-fidelity.mjs research/frontier-21-batch-2.proof-contracts.json --fail-on-missing-quote` — pass
- `node tools/boundary-audit.mjs research/frontier-21-batch-2.proof-contracts.json --fail-on-contradicted` — pass
- `node tools/finite-smoke.mjs research/frontier-21-batch-2.proof-contracts.json` — pass (`0/21 item(s) carrying obligations`)

## Verdicts

- [library/number-theory/pell-equations-and-generalized-pell-orbits.md](/home/lazyinspirit/Projects/prestige-math-library/library/number-theory/pell-equations-and-generalized-pell-orbits.md:1): three fatal proof defects were confirmed and repaired in opened A-page items (`R2-1`, `R2-2`, `R2-3`); no remaining uneditable defect was confirmed in the opened A-page prose or items.
- [library/number-theory/pell-equations-and-generalized-pell-orbits-examples.md](/home/lazyinspirit/Projects/prestige-math-library/library/number-theory/pell-equations-and-generalized-pell-orbits-examples.md:1): no defect was confirmed in the opened B-page body or its opened example/counterexample items.
- Opened published prerequisite pages and dependency items: no uneditable defect was confirmed in the specific dependency closures opened for this audit.

## Blockers

None.
