# Step 3a reader report — batch 14

Run: `numerical-optimization-dynamics-2026-10-16`  
Review date: 2026-10-17  
Scope: batch 14 only, with direct prerequisites opened where needed.

## Opened inventory

The current batch-14 manifest assigns these two draft pages:

- A: `outward-rounded-interval-and-ball-arithmetic`
- B: `outward-rounded-interval-and-ball-arithmetic-examples`

Opened the A-page items in dependency order. The manifest’s dependency levels were followed; item dependencies listed below are suppliers before consumers.

- Level 0: `def-complete-ordered-real-field`.
- Level 1: `def-continuity-and-derivative-on-real-interval`, `def-dyadic-floating-point-format-and-directed-rounding`, `lem-archimedean-property-from-completeness`, `lem-closed-interval-compactness-from-completeness`, `lem-nonnegative-square-root-exists-and-unique`.
- Level 2: `alg-dyadic-square-root-bisection`, `def-intervals-rectangles-and-complex-balls`, `lem-directed-dyadic-rounding-enclosure-and-error`.
- Level 3: `def-outward-rounded-interval-and-ball-operations`, `lem-real-and-complex-modulus-rules`, `thm-dyadic-square-root-bisection-encloses`.
- Level 4: `def-centered-taylor-model-with-derivative-interval`, `lem-absolutely-convergent-series-cauchy-product`, `lem-derivative-algebra-and-chain-rules`, `lem-elementary-power-series-converge-uniformly-on-bounded-sets`, `lem-extreme-value-theorem-from-compactness`, `lem-power-series-termwise-differentiation`, `thm-outward-rounded-operations-are-isotone-and-dag-sound`.
- Level 5: `lem-continuous-functions-riemann-integrable`, `lem-rolle-theorem-from-extreme-values`.
- Level 6: `def-real-elementary-functions-and-domains`, `lem-mean-value-theorem-on-closed-interval`, `lem-riemann-integral-linearity`.
- Level 7: `lem-fundamental-theorem-and-integration-by-parts`, `lem-range-reduced-exp-log-and-arctan-series-enclosures`, `lem-taylor-lagrange-remainder-from-mean-value`.
- Level 8: `lem-taylor-integral-remainder`, `lem-trigonometric-identities-machin-and-range-reduction`.
- Level 9: `alg-certified-elementary-range-evaluation`, `thm-centered-taylor-model-encloses-function-range`.
- Level 10: `alg-budgeted-validated-range-evaluation`, `thm-real-elementary-range-enclosures`.
- Level 11: `thm-complex-elementary-range-enclosures`.
- Level 12: `thm-budgeted-range-evaluation-terminates-and-is-sound`.

Opened the B-page examples after their suppliers: `ex-division-by-interval-containing-zero`, `ex-interval-subtraction-dependency`, and `ex-certified-sine-near-a-multiple-of-pi`.

Also opened the two page-level prerequisites listed by the A page: `library/linear-algebra/matrix-norms-condition-numbers-and-numerical-stability.md` (published) and `library/numerical-linear-algebra-and-approximation/finite-precision-direct-factorizations.md` (draft). The assigned item dependency lists are internal to batch 14; these page requirements are reading context and no proof uses an item from either page.

For the evaluator Definition repair, I checked its direct batch-15 consumers `alg-na-certified-unit-circle-phase` and `thm-na-certified-unit-circle-phase-enclosure`. The algorithm handles a non-finite evaluator result by retrying or returning `inconclusive`; the theorem claims accuracy only on the certified branch. No batch-15 carrier was edited.

Opened the current batch-14 proof-contract file, authoring notes, coverage record, and cross-batch dependency record as evidence, not verdicts. The long coverage record was tool-output truncated and was not treated as a complete source audit; I checked the relevant claims directly in the carriers and cited sources. I found no batch-14 rendered review bundle in the matching run research/runtime evidence paths, so the review used the current item and page carriers directly.

## Repairs made and evidence

- In the A-page opening summary, replaced the blanket “every finite arithmetic result” endpoint-extrema description. `def-outward-rounded-interval-and-ball-operations` uses endpoint formulas for real intervals and rectangles, while ball operations use the conservative `M_B` modulus bounds and upward-rounded output radii. The revised summary distinguishes those methods.
- In `alg-dyadic-square-root-bisection`, removed the iteration-count claim from the Definition. In `thm-dyadic-square-root-bisection-encloses`, stated and proved that the loop takes at most `n+1` iterations: the integer gap starts at `2^(n+1)` and each update reduces it to at most its ceiling half.
- In `alg-certified-elementary-range-evaluation`, specified the sine and cosine quarter-period maps by `k mod 4`, supplied a conservative test for certifying a tangent pole, and made tangent evaluate canonical cells even when the broad sine/cosine shortcut applies. The broad sine/cosine result now outward-rounds `[-1,1]` and reports overflow if that conversion overflows. Removed the complexity and finite-list summary from the algorithm Definition; procedure properties are handled by the theorem items.
- Updated Step 1.2 of `thm-real-elementary-range-enclosures` to prove enclosure and nesting for the outward-rounded wide-input result.
- In `alg-budgeted-validated-range-evaluation`, removed the split-coverage explanation from the procedure Definition. `thm-budgeted-range-evaluation-terminates-and-is-sound` proves the coverage invariant using the two closed halves.
- Narrowed the title of `ex-division-by-interval-containing-zero` to “Division of [1,2] by [-1,1] has no finite hull,” matching its stated numerator and denominator.
- Updated the affected batch-14 proof-contract excerpts and derivations, including the title-dependent boundary notes. No stale `verification.judge` record was present in the changed items.

The interval overflow convention was checked against the cited mathematical sources. Rump’s *Verification Methods*, §4, equation (4.1), defines round-down/up and notes that directed results may be infinite on overflow or underflow. Tucker’s *Validated Numerics*, Chapter 1 §1.3.2, equation (1.4), defines the directed maps over the extended real and floating-point sets. These passages support the existing sentinel convention; I did not change the floating-point definition.

## Checks

For all six changed item paths, reflow and precheck completed successfully. Proof-bearing items reported `PASS`; the three algorithms reported zero proof sections to check. The required batched proof-layout pass reported **6 items, 11 steps, 0 defects**.

## Page verdicts and remaining defect

- A page: **Pass after the summary correction.** Its local item dependencies support the page summary; the retained factorization and matrix-norm page requirements are not logical proof premises.
- B page: **Not clean.** The examples themselves are correct, and the division example title is now scoped to its actual inputs. The B-page summary’s first sentence still says that a divisor interval crossing zero cannot produce a finite sound hull. This is overbroad: for numerator `{0}` and divisor `[-1,1]`, restricting to nonzero divisors gives the finite exact quotient range `{0}`. The operation’s policy of returning `split-domain` is not evidence that no finite hull exists. The summary is B-page prose, outside reader-14 edit scope; the owner should qualify it to the `[1,2]/[-1,1]` example.

No other assigned item or page defect remained. The B-page summary is the only unresolved issue; no other blocker was encountered.
