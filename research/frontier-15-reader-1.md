# Frontier 15 — independent reader 1 report

Run: `frontier-15`  
Role: Step 6a independent reader  
Batch: 1  
Scope: `quadratic-reciprocity-and-the-jacobi-symbol` and `quadratic-reciprocity-and-the-jacobi-symbol-examples`

## Findings

Findings are assigned stable ids in discovery order and are never renumbered. Fatal findings are presented first in the final report.

### Fatal

#### R1-1 — `quadratic-reciprocity-and-the-jacobi-symbol` page summary

- **Location:** second summary paragraph, final sentence.
- **Defect:** the summary said, “This proof uses only integer division, rational inequalities, and finite sets.” That is false: the page's rectangle proof has Gauss's lemma and the half-system permutation as essential inputs.
- **Evidence:** `lem-gauss-lower-half-lattice-count` explicitly invokes both `thm-gauss-quadratic-residue-lemma` and `lem-gauss-half-system-permutation`; `lem-reciprocity-rectangle-lattice-count` then depends on that count. This is a false exclusivity claim in page prose, not a sub-30-second gap between proof steps.
- **Severity:** **fatal**.
- **Disposition:** repaired the sentence to distinguish the imported Gauss-lemma inputs from the elementary ingredients used by the subsequent rectangle argument.

#### R1-2 — `thm-jacobi-symbol-multiplicativity`

- **Location:** proof step 2.1 and its former `[L3]` citation.
- **Defect:** step 2.1 chose prime-factor lists for arbitrary positive odd denominators, but `[L3]` cited `thm-canonical-prime-factorisation`, whose Statement begins from an already supplied finite list of prime factors. It does not prove that such a list exists.
- **Evidence:** the cited Statement only constructs canonical exponents from a hypothesis of the form `n = product p_i`; existence of a prime factorization requires the fundamental theorem of arithmetic.
- **Severity:** **fatal**.
- **Disposition:** added `thm-fundamental-theorem-of-arithmetic` as `[L5]`, used it for existence, and retained `[L3]`/`[L4]` for canonical exponents and valuation additivity.

#### R1-3 — `thm-jacobi-symbol-reciprocity`

- **Location:** proof step 1.1 and its former `[L3]` citation.
- **Defect:** the proof chose prime factorizations of arbitrary odd coprime positive integers from a canonical-exponent result that assumes a factor list rather than establishes one.
- **Evidence:** the dependency's hypotheses do not license the factorization-existence inference made in step 1.1.
- **Severity:** **fatal**.
- **Disposition:** added `thm-fundamental-theorem-of-arithmetic` as `[L5]` and rewrote step 1.1 so `[L5]` supplies existence while `[L4]` supplies canonical grouping.

#### R1-4 — `thm-unit-square-criterion-modulo-n`

- **Location:** proof step 1.1 and its former `[L4]` citation.
- **Defect:** step 1.1 decomposed an arbitrary positive integer `n` into prime powers, but the cited canonical-exponent result only applies after a finite prime-factor list has been supplied.
- **Evidence:** no cited input at that point established existence of the prime factorization.
- **Severity:** **fatal**.
- **Disposition:** added `thm-fundamental-theorem-of-arithmetic` as `[L5]` and separated existence from canonical regrouping in step 1.1.

#### R1-5 — `cor-number-of-square-roots-of-a-unit-modulo-n`

- **Location:** proof step 1.1.
- **Defect:** the proof decomposed an arbitrary `n` into prime powers without any dependency establishing that such a decomposition exists.
- **Evidence:** the former dependency list contained the local root counts and CRT but no theorem establishing existence of a finite prime factorisation.
- **Severity:** **fatal**.
- **Disposition:** added `thm-fundamental-theorem-of-arithmetic` as `[L4]` and rewrote step 1.1 to cite it for existence.

#### R1-6 — `cor-infinitely-many-primes-congruent-to-one-modulo-three`

- **Location:** proof step 2.1 and its former use of `[L4]`.
- **Defect:** from `q` occurring among the factors of `P`, step 2.1 inferred `q | P` using only finite-product permutation invariance. Permutation invariance can reorder a product but does not itself provide the recursion needed to expose `P = P' q` and prove divisibility.
- **Evidence:** `def-monoid-finite-product`, already a dependency, supplies the finite-product recursion; `thm-generalised-associativity` supplies only the reordering/permutation invariance used here.
- **Severity:** **fatal**.
- **Disposition:** expanded `[L3]` to quote the product recursion and rewrote step 2.1 to permute `q` to the final position and then use recursion to obtain `P = P' q`.

### Nonfatal

#### R1-7 — inaccurate or insufficient proof-contract citation clauses

- **Location:** `research/frontier-15-batch-1.proof-contracts.json`, citation rows for `prop-jacobi-symbol-well-defined` `[L3]`; `prop-jacobi-symbol-on-units-is-a-homomorphism` `[L1]`, `[L2]`, `[L4]`; `thm-jacobi-symbol-supplements` `[L2]`; `thm-jacobi-symbol-reciprocity` `[L3]`; `thm-euclidean-algorithm-for-jacobi-symbol` `[L3]`–`[L5]`; `prop-unit-square-has-jacobi-symbol-one` `[L2]`; `lem-nonsingular-square-root-lift-modulo-odd-prime-powers` `[L1]`; `thm-unit-square-criterion-modulo-odd-prime-powers` `[L1]`; `thm-unit-square-criterion-modulo-n` `[L2]`–`[L3]`; `cor-number-of-square-roots-of-a-unit-modulo-n` `[L1]`, `[L3]`; `thm-jacobi-map-kernel-and-square-subgroup` `[L4]`–`[L5]`; `ex-square-roots-modulo-an-odd-prime-power` `[L1]`–`[L2]`; `ex-four-square-roots-modulo-a-power-of-two` `[L1]`; `cex-square-modulo-each-prime-does-not-ignore-the-two-part` `[L1]`; `lem-gauss-lower-half-lattice-count` `[L3]`; and `cor-infinitely-many-primes-congruent-to-one-modulo-three` `[L3]`.
- **Defect:** these contract rows used an opening fragment, a nearby formula, or a clause narrower than the dependency result actually used. The item Facts were generally faithful, so this was a defect in the verification artifact rather than a newly false mathematical step.
- **Evidence:** comparison against each cited item's on-disk Statement showed omitted range, invariance, zero/unit, solvability/count, CRT-hypothesis, or product-recursion clauses, depending on the row.
- **Severity:** **nonfatal**.
- **Disposition:** replaced every affected contract quote with the exact used clause or the smallest faithful shortening and updated uses where necessary.

#### R1-8 — inaccurate `n = 1` boundary dispositions

- **Location:** proof-contract boundary rows `lem-gauss-lower-half-lattice-count` / `one` and `thm-quadratic-reciprocity` / `one`.
- **Defect:** both rows were marked `not_applicable` on the rationale that the relevant prime hypotheses exclude `1`. The boundary category is about a singleton finite range as well as the literal parameter value `1`; at `p = 3` the lower-half range has one element and is applicable.
- **Evidence:** substituting `p = 3` gives `(p-1)/2 = 1`; the proofs remain valid in that singleton case.
- **Severity:** **nonfatal**.
- **Disposition:** changed both rows to checked dispositions recording the `p = 3` singleton-range verification.

## Changes made

- Repaired the second summary paragraph in `library/number-theory/quadratic-reciprocity-and-the-jacobi-symbol.md`.
- Repaired proof dependencies and steps in `thm-jacobi-symbol-multiplicativity`, `thm-jacobi-symbol-reciprocity`, `thm-unit-square-criterion-modulo-n`, `cor-number-of-square-roots-of-a-unit-modulo-n`, and `cor-infinitely-many-primes-congruent-to-one-modulo-three`.
- Updated the corresponding dependency entries in `research/frontier-15-batch-1.pages.json`.
- Updated every changed proof/citation/boundary row in `research/frontier-15-batch-1.proof-contracts.json`.
- No changed item contained a stale `verification.judge` block to delete.
- No lemma, corollary, example, or counterexample was added or deleted.

## Verification after repair

- `tools/reflow.mts` reported all five changed proof items unchanged.
- Scoped `tools/precheck.mts` passed all five changed proof items: 5 checked, 0 failing.
- Strict proof-contract validation passed: 0 errors, 0 warnings, 26/26 items checked.
- Citation-fidelity validation inspected 93 citations over 26 authored items: every contract quote occurs in its cited item and the detectors found no remaining widening candidate.
- Boundary audit inspected 208 rows, including 91 `not_applicable` dispositions: it found no repeated template at the reporting threshold and no contradicted disposition.
- Content policy checked all 27 scoped items: 0 errors and 0 warnings. In particular, no `ai-generated` Statement is a dependency target.
- Coverage checklist passed its authored A-page artifact: 84 harvested results, 0 errors, 0 warnings. The B page's nine items were covered by this reader's direct item-by-item read even though that coverage artifact reports one page.
- Scoped citation, prose, and render checks passed the five changed items and the changed A-page file with no errors or warnings.
- `finite-smoke` found no registered finite obligation in this contract (0 checks over 0/26 carrying obligations); this is recorded as a non-run for evidentiary purposes, not as mathematical confirmation.
- The five `ai-generated` items were non-load-bearing. I directly checked the displayed finite witnesses in `ex-complete-reciprocity-table-for-small-odd-primes`, `ex-square-roots-modulo-an-odd-prime-power`, `ex-four-square-roots-modulo-a-power-of-two`, `ex-square-roots-modulo-a-composite-by-crt`, and `cex-square-modulo-each-prime-does-not-ignore-the-two-part`; no false witness or completeness claim remained.

An incidental whole-repository render diagnostic reported a pre-existing KaTeX parse error in the out-of-scope published item `thm-sigma-algebra-generated-by-a-countable-partition`. It is not a dependency of this batch, was not opened as part of the mathematical read, was not edited, and does not affect the successful scoped render check above.

## Coverage and per-page verdicts

- **`quadratic-reciprocity-and-the-jacobi-symbol` — 18 items opened.** Findings R1-1 through R1-5, R1-7, and R1-8 affected this page or its contract rows and were repaired. After repair, the page title and summary, every item title and Statement, all 17 numbered proofs, all cited dependency clauses, provenance, and active boundary cases agree. The remaining items had no concrete defect. **Verdict: clean after licensed repairs.**
- **`quadratic-reciprocity-and-the-jacobi-symbol-examples` — 9 items opened.** Findings R1-6 and R1-7 affected this page and were repaired. The eight other examples/counterexamples had correct witnesses and conclusions, and the repaired corollary's proof is now explicitly licensed. **Verdict: clean after licensed repairs.**

**Actual item count opened: 27/27 scoped items (18 A-page + 9 B-page), of which 26 are proof-bearing.**
