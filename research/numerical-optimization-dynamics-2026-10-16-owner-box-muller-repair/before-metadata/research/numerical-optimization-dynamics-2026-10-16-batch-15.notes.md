# Batch 15 authoring notes — computed fast transforms and convolution

Run: `numerical-optimization-dynamics-2026-10-16`  
Pair: `computed-fast-transforms-and-convolution` / `computed-fast-transforms-and-convolution-examples`  
Dispatch scheduling input: `5f565fb654aef57d992fd52d78111f8c50802805f0c213ffdaa0923c28fab8cd`.

## Authority and plan reconciliation

The current owner direction, the repaired LIN-FFT contract in `research/plan-numerical-linear-track.md`, the batch assignment, and the matching rows in `research/plan-spec.json` control this work. They place the pair in `numerical-linear-algebra-and-approximation` and require the published finite Fourier and matrix-norm pages, batch 1's `finite-precision-direct-factorizations`, and batch 14's `outward-rounded-interval-and-ball-arithmetic`. The matrix-norm page is required page context; no local proof cites it as a premise. Exact Fourier item interfaces and the operationwise floating-point model are recorded in the cross-batch dependency file.

The older `research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-inventory.json` LIN-FFT row is stale: it says category `numerical-analysis`, retains raw `NA-01` / `NA-02 complex arithmetic supplier` labels, and reserves only `alg-na-computed-fast-transforms-and-convolution` plus `thm-na-computed-fast-transforms-and-convolution-contract`. Those labels and the two-ID candidate inventory conflict with the current plan and the repaired contract's explicit typed prerequisites. The authored manifest therefore uses the current category and decomposes the full required scope into 19 A-page items and 3 B-page examples; the reserved contract theorem ID was not created. The older inventory's Van Loan reference is treated as source-design history, not as a source read or a logical premise.

## Inventory and dependency levels

The current manifest has 22 assigned items, within the page cap. Levels below were recomputed against the complete current run manifest, so batch 1 and batch 14 suppliers contribute their in-run levels.

| Level | Items |
|---:|---|
| 0 | `def-na-dct-ii-and-dst-i-even-odd-extension`; `lem-na-bluestein-chirp-convolution-factorization`; `lem-na-mixed-radix-cooley-tukey-factorization`; `lem-na-zero-padding-removes-linear-convolution-aliasing` |
| 1 | `lem-na-complex-product-six-operation-roundoff-bound`; `thm-na-dct-ii-orthogonality-inverse-and-dft-extension`; `thm-na-dst-i-orthogonality-inverse-and-dft-extension`; `ex-na-prime-length-five-bluestein-transform`; `ex-na-two-point-circular-aliasing` |
| 2 | `thm-na-dct-ii-chebyshev-coefficient-extraction` |
| 3 | `ex-na-three-sample-dct-chebyshev-coefficients` |
| 7 | `thm-na-interval-pi-matches-canonical-fourier-pi` |
| 11 | `alg-na-certified-unit-circle-phase` |
| 12 | `alg-na-computed-unitary-radix-two-fft`; `thm-na-certified-unit-circle-phase-enclosure` |
| 13 | `alg-na-computed-fft-cyclic-and-linear-convolution`; `lem-na-computed-unitary-butterfly-error-bound` |
| 14 | `alg-na-computed-fast-transforms-and-convolution`; `thm-na-computed-unitary-radix-two-fft-error-bound` |
| 15 | `thm-na-arbitrary-length-fft-correctness-and-cost`; `thm-na-computed-fft-convolution-error-bound` |
| 16 | `thm-na-bluestein-chirp-phase-error-separate-from-fft-error` |

The batch dependency evidence still assigns batch 15 level 2 with prerequisite batches 1 and 14. The dispatch hash above is the scheduling input recorded by the assignment; it is distinct from the current batch-dependency file's internal content hash.

## Mathematical scope and limits

The A page defines fixed DCT-II/DST-I extension and endpoint conventions, proves their inverse/orthogonality statements and Chebyshev extraction, and supplies explicit mixed-radix, Bluestein, zero-padding, and six-operation complex-product results. The DCT-II matrix is not treated as symmetric: the proof establishes `CC^T=D`, obtains a right inverse, then uses rank-nullity to prove invertibility and the stated inverse. Trigonometric identities and zero-set facts are cited to exact published items.

The computed radix-two theorem uses the declared successful-operation, normal-range model and certified twiddle error. Its local constant is `eta=10u+epsilon_tw`; the `O(u log N)` shorthand additionally requires controlled twiddle error and the stated smallness condition. The phase evaluator has a finite budget and returns `inconclusive` when it cannot certify. Bluestein pads to a supported power of two `M >= 2N-1`; its chirp-phase error remains separate from FFT/convolution error. Arithmetic counts exclude integer factor search, interval evaluation, memory traffic, and bit complexity. No general mixed-radix stability claim is made. The arbitrary-length correctness/cost theorem explicitly proves an exact-constant model; it does not assert that rounded routine outputs equal exact transforms. B-page examples use exact operations and do not claim successful finite-precision execution.

The interval evaluator sets `pi=4 arctan(1)`. The local bridge identifies that value with the canonical Fourier constant using the principal inverse-tangent integral and endpoint power series, Abel's limit theorem, and continuity at 1. Its proof inputs and the exact current supplier quotations are in the proof contract.

## Cross-batch prerequisites and unresolved readiness

The exact supplier excerpts (12 total), required interfaces, and affected claims are in `numerical-optimization-dynamics-2026-10-16-batch-15.cross-batch-dependencies.json`; all 12 excerpts were rechecked against current supplier bodies. The published Fourier page's exact item interfaces are verified. The direct batch 1 item `def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma` has a current owner-true Step 1 `ready` record; its actual six-operation complex-product definition is the premise of `lem-na-complex-product-six-operation-roundoff-bound`. This does not certify the entire required NA-02 page, whose page-level completion remains open.

Batch 14's direct interface items are present and their statements/proofs and transitive dependencies were inspected, but their Step 1 records are absent. The exact unresolved IDs are:

- `def-dyadic-floating-point-format-and-directed-rounding`
- `def-intervals-rectangles-and-complex-balls`
- `def-outward-rounded-interval-and-ball-operations`
- `def-real-elementary-functions-and-domains`
- `alg-certified-elementary-range-evaluation`
- `thm-real-elementary-range-enclosures`
- `thm-outward-rounded-operations-are-isotone-and-dag-sound`

The required interface is directed dyadic rounding; sound finite real/complex range enclosures; isotone, DAG-sound outward arithmetic; exact arctangent/pi conventions; finite precision/series budgets; and explicit non-finite or `inconclusive` failure branches. The phase algorithm requires finite enclosures for `cos(pi q)` and `sin(pi q)` and cannot make a finite certification claim on failure. The phase-enclosure theorem additionally requires the complex rectangle representation and sound component enclosures. The pi bridge directly requires `def-real-elementary-functions-and-domains`.

The current run-owned transitive closure of those interval/range suppliers has 26 items and no external leaves: `def-complete-ordered-real-field`, `def-continuity-and-derivative-on-real-interval`, `def-dyadic-floating-point-format-and-directed-rounding`, `lem-archimedean-property-from-completeness`, `lem-closed-interval-compactness-from-completeness`, `lem-nonnegative-square-root-exists-and-unique`, `alg-dyadic-square-root-bisection`, `def-intervals-rectangles-and-complex-balls`, `lem-directed-dyadic-rounding-enclosure-and-error`, `def-outward-rounded-interval-and-ball-operations`, `lem-real-and-complex-modulus-rules`, `thm-dyadic-square-root-bisection-encloses`, `lem-absolutely-convergent-series-cauchy-product`, `lem-derivative-algebra-and-chain-rules`, `lem-elementary-power-series-converge-uniformly-on-bounded-sets`, `lem-extreme-value-theorem-from-compactness`, `lem-power-series-termwise-differentiation`, `thm-outward-rounded-operations-are-isotone-and-dag-sound`, `lem-continuous-functions-riemann-integrable`, `lem-rolle-theorem-from-extreme-values`, `def-real-elementary-functions-and-domains`, `lem-mean-value-theorem-on-closed-interval`, `lem-range-reduced-exp-log-and-arctan-series-enclosures`, `lem-trigonometric-identities-machin-and-range-reduction`, `alg-certified-elementary-range-evaluation`, and `thm-real-elementary-range-enclosures`.

Accordingly, 11 local items remain `escalated`: the pi bridge, certified phase algorithm/enclosure, computed radix-two and convolution procedures, butterfly and radix-two error results, arbitrary-length algorithm/correctness-cost result, convolution error result, and separate Bluestein phase-error result. Their full claims remain drafted. No escalation was overwritten. The other 11 items have current ready records: the four level-zero local items, `lem-na-complex-product-six-operation-roundoff-bound`, the DCT-II/DST-I orthogonality results, DCT coefficient extraction, and all three exact B examples.

## Source record

The A-page coverage lists every harvested result, locator, supported item, and disposition in `numerical-optimization-dynamics-2026-10-16-batch-15.coverage.json`:

- Nicholas J. Higham, *Accuracy and Stability of Numerical Algorithms*, 2nd ed., complete Chapter 24, §§24.1–24.3, printed pp. 451–457. Used for the radix-two baseline, product-of-perturbed-stages error analysis, inverse direction, and convolution context; local arguments supply this batch's explicit operation model and constants.
- C. Sidney Burrus, *Fast Fourier Transforms*, complete 248-page open textbook. Read Chapter 5 §5.2, pp. 30–32; Chapter 8 §8.3.2, pp. 76–77; Chapter 11 §§11.2 and 11.7, pp. 111–112 and 133–135; and Chapter 13 §13.1, pp. 139–140. Supports chirp, mixed-radix, DCT/DST, and schedule/cost context; each assigned identity and proof is local.
- NIST DLMF §4.23(i)–(ii), equation (4.23.3) and principal-branch conventions, supports the arctangent integral convention in the pi bridge.

The older inventory also proposed Van Loan's *Computational Frameworks for the Fast Fourier Transform*. The prior search found the official DOI access-gated and only catalog/table-of-contents or gated chapter pages; it was not harvested or cited. Higham and Burrus provide the two independent full-text treatments used for the A page, with complete local proofs for every claim. No active source was dropped and no mathematical claim was removed. `source-fetch-check --stamp` reports all 3 selected sources fetch-verified and resolved, with no documented drops; no fetch evidence is claimed for Van Loan.

## Final scoped checks

- `node tools/tsx-run.mjs tools/author-check.mts numerical-optimization-dynamics-2026-10-16 15`: pass. Precheck: 17 proof-bearing items, 0 failures; rendercheck: 24 files; content policy: 22 items, 0 warnings/errors; strict proof contract: 22/22, 0 warnings/errors. Two stale contract quotations were narrowed to exact current supplier text before this pass.
- `node tools/proof-layout.mjs` on the 22 manifest items: 22 items, 51 steps, 0 defects.
- `node tools/manifest-deps.mjs research/numerical-optimization-dynamics-2026-10-16-batch-15.pages.json`: 22 items, 0 missing dependency arrays, 0 errors.
- Current-run dependency recomputation: batch 15 has 22 items and 0 level-label discrepancies. The repository-wide CLI check currently exits 1 on 110 errors (102 empty page inventories and 8 stale level labels), all outside batch 15. The stale labels are `def-generalized-schur-form`, `alg-generalized-hessenberg-triangular-reduction`, `prop-generalized-hessenberg-triangular-reduction-preserves-form-and-equivalence`, `alg-finite-budget-qz-iteration-with-deflation-and-residual`, `prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence`, `ex-singular-b-yields-an-infinite-generalized-eigenvalue`, `ex-regular-and-singular-pencil-determinant-witnesses`, and `ex-symplectic-euler-harmonic-oscillator`. They are outside this pair's ownership.
- `node tools/batch-dependency-levels.mjs check --run numerical-optimization-dynamics-2026-10-16` could not complete: its current input parse reports “Nested mappings are not allowed in compact mappings” at line 26, column 14, at a `title: David E. Stewart, Dynamics with Inequalities...` entry. No shared scheduling input was edited.
- `node tools/step1-decisions.mjs check --run numerical-optimization-dynamics-2026-10-16` remains open globally. Its snapshot reported 919 items, 524 ready; batch 15's current records were separately checked: 11 ready and 11 escalated.
- `source-fetch-check --stamp`: 3/3 selected sources fetch-verified, 0 newly stamped; 3/3 resolved, 0 documented drops. All 12 cross-batch supplier excerpts match their named current source sections after whitespace normalization.

The latest read-only autopilot status invocation was capped at 20 seconds and timed out with exit 124 and no output. The last successful snapshot available to this handoff reported `1-scaffold`, 1/107 batches, and zero in-flight workers; that is a prior snapshot, not a fresh status claim. No tests were run.
