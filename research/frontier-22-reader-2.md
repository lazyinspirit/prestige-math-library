# frontier-22 reader-2 report

Date: Friday, August 28, 2026.
Batch: `research/frontier-22-batch-2.pages.json`

## Opened scope

- Control artifacts opened: `AGENTS.md`, `CLAUDE.md`, `README.md`, `research/frontier-22-reader.task.md`, `research/frontier-22-dispatch/reader-reader-2.attempt-1.prompt.md`, `research/frontier-22-beta-2.task.md`, `research/frontier-22-batch-2.pages.json`, `research/frontier-22-batch-2.coverage.json`, `research/frontier-22-batch-2.proof-contracts.json`, `research/frontier-22-batch-2.notes.md`, `research/frontier-22-step6-hash-2-pre.json`, the relevant `research/plan-commutative-algebra-track.md` slices, the relevant `research/plan-spec.json` slice, `research/frontier-22-alpha-b-step3-scaffold-review.md`, `research/frontier-22-alpha-b-recheck.md`, the live run state from `(cd tools/autopilot && node --import tsx bin/autopilot.mts status --repo ../..)`, `.autopilot/state.json`, and recent `git log` for `research/` plus `.autopilot/`.
- Assigned page paths checked: `library/commutative-algebra/associated-primes-and-primary-decomposition.md` and `library/commutative-algebra/associated-primes-and-primary-decomposition-examples.md`.
- Prerequisite page paths opened for dependency context: `library/abstract-algebra/ideals-and-quotient-rings.md`, `library/abstract-algebra/the-field-of-fractions-and-localisation.md`, `library/abstract-algebra/modules-and-module-homomorphisms.md`, `library/abstract-algebra/free-modules-and-exact-sequences.md`, `library/abstract-algebra/chain-conditions-and-semisimple-modules.md`, `library/commutative-algebra/localisation-of-modules-and-support.md`, `library/commutative-algebra/prime-spectra-and-radicals.md`, and `library/commutative-algebra/artinian-rings-and-length-examples.md`.
- Assigned item scope: opened all `45` batch-owned item files on the current bytes (`39` A-page items and `6` B-page items).
- Dependency items opened for verification: `45`.

```text
cor-length-is-additive-in-short-exact-sequences
cor-localisation-commutes-with-finite-intersections-of-submodules
cor-nilradical-as-intersection-of-primes
def-annihilator-and-torsion-of-a-module
def-exact-and-short-exact-sequences-of-modules
def-left-right-and-two-sided-ideal
def-local-ring
def-localisation-at-a-prime-ideal
def-noetherian-ring
def-prime-and-maximal-ideals
def-quotient-module
def-radical-of-an-ideal
def-support-of-a-module
lem-localisation-preserves-injectivity
lem-radical-of-an-intersection
lem-support-membership-by-annihilator
lem-support-of-a-cyclic-module-is-its-vanishing-set
lem-support-of-a-finite-module-is-union-of-generator-cyclic-supports
lem-zero-in-a-localised-module
prop-localisation-zero-equality-and-kernel-criteria
prop-units-in-a-localisation
thm-artinian-local-ring-has-nilpotent-maximal-ideal
thm-artinian-ring-is-noetherian
thm-artinian-ring-primes-are-maximal
thm-chain-conditions-in-short-exact-sequences
thm-equivalent-characterizations-of-noetherian-modules
thm-finitely-generated-modules-over-noetherian-rings-are-noetherian
thm-ideal-correspondence-for-localisation
thm-localisation-at-a-prime-is-local
thm-localisation-commutes-with-quotients
thm-localisation-equivalence-and-ring-laws
thm-localisation-of-modules-commutes-with-quotients-and-sums
thm-localisation-of-modules-is-exact
thm-localisation-of-modules-is-tensor-product
thm-nilradical-of-a-noetherian-ring-is-nilpotent
thm-nilradical-of-artinian-ring-is-nilpotent
thm-noetherian-ring-ideal-characterisations
thm-noetherian-ring-quotients-and-localisations
thm-prime-spectrum-map-by-contraction
thm-prime-spectrum-of-a-localisation-bijection
thm-radical-as-intersection-of-primes
thm-right-exactness-of-tensor-products
thm-support-and-annihilator-of-a-finite-module
thm-support-in-a-short-exact-sequence
thm-tensor-products-commute-with-arbitrary-direct-sums
```

## Confirmed defects

1. [items/cor-associated-primes-empty-iff-module-zero-noetherian.md](/home/lazyinspirit/Projects/prestige-math-library/items/cor-associated-primes-empty-iff-module-zero-noetherian.md:27)
   Disposition: repaired in the owned A-page item.
   Severity: nonfatal.
   Evidence: `rendercheck` reported the displayed biconditional as a multiline `$$...$$` block, which the real renderer mis-parses even though the mathematics was correct.

2. [items/ex-primary-maximal-radical-test.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-primary-maximal-radical-test.md:29)
   Disposition: repaired in the owned batch item.
   Severity: nonfatal.
   Evidence: the displayed definition of `A` and `\mathfrak m` was split across multiple source lines inside one display block, producing the same real renderer failure.

3. [items/ex-zero-module-associated-prime-boundary.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-zero-module-associated-prime-boundary.md:29)
   Disposition: repaired in the owned batch item.
   Severity: nonfatal.
   Evidence: the display for `\operatorname{Ass}_R(0)` and `\operatorname{Supp}_R(0)` was likewise multiline inside one `$$...$$` block and failed `rendercheck`.

## Boundary-audit candidates read and dismissed

- `cor-support-is-union-of-closures-of-associated-primes`: the `empty` candidate is not a live defect. On the current bytes, the proof route already admits the `M=0` branch through the empty prime filtration, so both sides are empty and the statement remains correct.
- `thm-zero-divisors-on-a-module`: the `empty` candidate is not a live defect. When `M=0`, the zero-divisor set is empty and `\operatorname{Ass}_R(M)=\varnothing` by the earlier corollary, so the displayed union is empty as well.

## Edits

- Patched [items/cor-associated-primes-empty-iff-module-zero-noetherian.md](/home/lazyinspirit/Projects/prestige-math-library/items/cor-associated-primes-empty-iff-module-zero-noetherian.md:1).
- Patched [items/ex-primary-maximal-radical-test.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-primary-maximal-radical-test.md:1).
- Patched [items/ex-zero-module-associated-prime-boundary.md](/home/lazyinspirit/Projects/prestige-math-library/items/ex-zero-module-associated-prime-boundary.md:1).
- No proof-contract row changed: all three repairs were renderer-only display normalization, not a material mathematical repair.
- No stale `verification.judge` record required removal.
- Wrote this report.
- Wrote `research/frontier-22-reader-findings-2.json`.

## Page verdicts

- `library/commutative-algebra/associated-primes-and-primary-decomposition.md`: sufficient on the current bytes after the one A-item renderer repair.
- `library/commutative-algebra/associated-primes-and-primary-decomposition-examples.md`: sufficient on the current bytes after the two batch-owned renderer repairs.

## Verification

- `node tools/source-fetch-check.mjs --coverage research/frontier-22-batch-2.coverage.json --stamp`
  Result: `source-fetch-check: 6/6 source(s) fetch-verified (0 newly stamped)`.
- `node tools/tsx-run.mjs tools/precheck.mts $(batch-2 item list)`
  Result: `42 checked, 0 failing — all clean`.
- `node tools/tsx-run.mjs tools/reflow.mts items/cor-associated-primes-empty-iff-module-zero-noetherian.md items/ex-primary-maximal-radical-test.md items/ex-zero-module-associated-prime-boundary.md`
  Result: all three changed items were already stable after the manual display fix.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-associated-primes-empty-iff-module-zero-noetherian.md items/ex-primary-maximal-radical-test.md items/ex-zero-module-associated-prime-boundary.md`
  Result: `3 checked, 0 failing — all clean`.
- `node tools/rendercheck.mjs ...batch-2 item/page file list...`
  Result: `OK — 47 file(s)`.
- `node tools/proof-contract.mjs research/frontier-22-batch-2.proof-contracts.json --strict`
  Result: `proof-contract: 0 error(s), 0 warning(s), 42/42 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-22-batch-2.proof-contracts.json --items-dir items`
  Result: `112 citation(s) over 42 authored item(s)` with no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-22-batch-2.proof-contracts.json --items-dir items`
  Result: `336 rows` with `2` heuristic candidates. I re-read both and did not confirm a live defect on the current text.
- `node tools/content-policy.mjs research/frontier-22-batch-2.pages.json`
  Result: `content-policy: 45 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-22-batch-2.coverage.json --require-destination`
  Result: `coverage-checklist: 1 page(s), 64 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/validate-plan.mjs research/plan-spec.json | tail -n 8`
  Result: `OK`, with only the standing repository-wide `redundant-prereq` notes outside this batch and the usual note that many planned pages still have no item list.

## Blockers

- No mathematical blocker remains on the current page/item bytes.
- No uneditable in-flight-item, page, or published-dependency defect remains after the three batch-local renderer repairs.
