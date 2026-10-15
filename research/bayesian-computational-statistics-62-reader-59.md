# Step 3a reader report — batch 59

Run: `bayesian-computational-statistics-62`  
Reader: `reader-59`  
Review date: 2026-10-16

## Inputs and assigned inventory

Read the batch manifest `research/bayesian-computational-statistics-62-batch-59.pages.json` and the matching proof contracts at `research/bayesian-computational-statistics-62-batch-59.proof-contracts.json`. The manifest and contract were treated as review evidence, not as verdicts. The contract covers all 14 assigned items.

Assigned pages opened:

- A page: `library/bayesian-computational-statistics/quasi-monte-carlo-discrepancy-and-rules.md`
- B page: `library/bayesian-computational-statistics/quasi-monte-carlo-discrepancy-and-rules-examples.md`

Assigned items opened in dependency order:

- Level 0: `def-star-discrepancy-and-digital-net`; `def-hardykrause-variation`; `lem-bounded-coordinatewise-monotone-is-riemann-integrable`.
- Level 1: `def-hardykrause-variation-lower-anchor`; `alg-digital-net-and-lattice-rule`; `lem-hk-smooth-mixed-derivative-formula`; `thm-uniform-distribution-integrates-riemann-functions`.
- Level 2: `lem-finite-hardykrause-variation-implies-riemann-integrability`; `ex-diagonal-lattice-poor-joint-projection`.
- Level 3: `lem-anchored-box-summation-by-parts-hk-variation`.
- Level 4: `thm-koksma-hlawka-integration-bound`.
- Level 5: `ex-digital-net-power-of-base-size-restriction`; `ex-smooth-finite-hk-integrand-koksma-hlawka`; `ex-inverse-cdf-integrable-singularity-infinite-variation`.

Direct prerequisite statements/definitions opened:

- Integer, power, and series facts: `def-prime`; `thm-z-mod-p-is-a-field`; `thm-division-algorithm-in-z`; `def-integer-power`; `lem-power-laws`; `lem-power-monotone`; `lem-of-inverse-positive`; `def-series`; `thm-geometric-series`; `thm-direct-comparison-test`; `lem-integer-part`; `def-common-divisor-and-gcd`; `lem-divisor-bound`.
- Riemann and grid facts: `def-multidimensional-darboux-integral`; `def-multidimensional-grid-partition`; `def-multidimensional-rectangle-and-volume`; `def-multidimensional-darboux-sums`; `thm-multidimensional-riemann-criterion`; `cor-archimedean-reciprocal`; `def-multidimensional-tagged-partition-and-riemann-sum`; `thm-newton-leibniz-with-interior-derivative`; `thm-heine-borel-rn`; `thm-heine-cantor-metric`; `lem-p-norms-are-norms-and-induce-the-published-metrics`; `thm-continuous-on-a-rectangle-is-riemann-integrable`; `thm-riemann-fubini-on-product-rectangles`; `thm-multidimensional-integral-properties`; `cor-of-reverse-triangle`; `thm-reals-ordered-field`; `thm-multidimensional-darboux-equals-riemann`.
- The inverse-CDF example’s probability and measurability facts: `def-expectation-of-a-nonnegative-or-integrable-random-variable`; `thm-change-of-variables-for-expectation`; `def-cumulative-distribution-function-of-a-random-variable`; `def-rational-power`; `lem-rational-power-laws`; `lem-of-square-monotone`; `def-ordered-field`; `thm-of-square-roots`; `def-borel-sigma-algebra`; `def-measurable-function-between-measurable-spaces`; `def-random-element-and-real-random-variable`; `def-probability-measure`; `thm-seven-generators-of-the-borel-sigma-algebra-on-r`; `thm-composition-with-borel-functions-preserves-measurability`; `lem-geometric-sequence-null`; `cor-layer-cake-formulas-for-random-variables`; `thm-improper-p-test-rational`.
- The A-page’s error-ledger reference: `def-statistical-and-computational-error-ledger`.

## Mathematical review

- `def-star-discrepancy-and-digital-net` preserves the half-open cube and anchored-box conventions, counts repeated nodes with multiplicity, and distinguishes generator matrices from the additional net-count condition. The finite and infinite digital constructions have the stated range/convergence qualifications; no net quality or discrepancy rate is inferred from the construction alone.
- The upper- and lower-anchor Hardy–Krause definitions use consistent face and increment conventions. The smooth mixed-derivative formula applies the stated continuous mixed-partial hypotheses, including the boundary-extension argument, and identifies each face’s Vitali variation with the integral of the absolute mixed derivative.
- The bounded coordinatewise monotone lemma’s telescoping estimate gives the Darboux-gap bound (d(h(\mathbf1)-h(\mathbf0))/n). The finite-variation integrability proof reflects the upper anchor, bounds the prefix-variation function, and obtains the required coordinatewise monotone decomposition. The variation additivity at a coordinate cut and the face-increment identity supply the needed steps; the bounded monotone supplier then gives Riemann integrability.
- The uniform-distribution proof obtains each half-open grid-cell frequency error from inclusion–exclusion with at most (2^d) anchored-box terms, then squeezes the empirical average between the fixed grid’s lower and upper sums.
- The anchored-box summation-by-parts proof’s lower boundary terms vanish because the anchored discrepancy is zero when a coordinate endpoint is zero; the upper corner term vanishes because the points lie in ([0,1)^d). The remaining mixed differences are exactly upper-face increments, giving the stated variation factor. The Koksma–Hlawka proof refines grids to contain all nodes and passes the finite-grid bound to the tagged-Riemann-sum limit.
- The algorithm specifies admissible inputs, outputs, all three branches, and the optional exact net-count check. It makes no unsupported quality claim. The examples’ point counts, projection/net checks, discrepancy calculation, (xy) variation/integral calculation, and inverse-CDF/tail/variation calculations check out under their stated conventions.
- The proof-contract entries correspond to the assigned carriers’ facts and steps. I found no defective claim, silent prerequisite, unsupported inference, defective witness/computation, or material citation error in the assigned items or page summaries.

## Source checks

- Aistleitner and Dick, “Functions of bounded variation, signed measures, and a general Koksma–Hlawka inequality,” arXiv:1406.0230v2, §1, equations (1)–(2) (star discrepancy and the Koksma–Hlawka inequality) and §2, equation (18) (upper-anchor Hardy–Krause variation): <https://arxiv.org/pdf/1406.0230v2>. These passages confirm the stated upper-anchor convention and bound.
- Owen and Rudolf, “A strong law of large numbers for scrambled net integration,” arXiv:2002.07859v3, §2, Lemma 1, pp. 4–5: <https://arxiv.org/pdf/2002.07859v3>. The lemma states finite Hardy–Krause variation implies Riemann integrability; the short proof decomposes the function into a constant plus a difference of bounded monotone functions.
- Owen, *Monte Carlo Book: The Quasi-Monte Carlo Parts*, Chapter 15 §15.4, Theorem 15.3: <https://artowen.su.domains/mc/qmcstuff.pdf>. The available search excerpt states the Riemann-integrable/uniform-distribution convergence theorem used by the assigned item.

Direct full-PDF fetching timed out for Owen’s book and exceeded the fetch-size limit for Niederreiter’s book. The assigned local proofs were checked directly; the accessible primary-source passages above were used to verify the specialized claims and conventions.

## Edits and uneditable defects

- Edits: none. No item or page prose required repair, so no proof contract or judge record changed. No item changed; therefore the post-edit `reflow`, `precheck`, and batched `proof-layout` commands were not applicable.
- Defects that could not be edited: none identified.

## Page verdicts

- `quasi-monte-carlo-discrepancy-and-rules` (A): acceptable. The summary’s finite-variation, uniform-distribution, deterministic-error, and error-ledger statements match the assigned items and its cited prerequisite.
- `quasi-monte-carlo-discrepancy-and-rules-examples` (B): acceptable. Its summary matches the assigned examples and does not overstate their conclusions.

## Blocker and coverage limit

There is no mathematical blocker. The requested autopilot status recomputation reported that live status was unavailable because it could not import `tools/step6-finalize.mjs`, then displayed the last report; that displayed worker list did not include `reader-59`. I proceeded from the explicit dispatch and did not attempt a transition or gate. Published suppliers were checked at the exact Statement/Definition clauses used, not re-audited as independent proof carriers. The direct PDF-fetch limits are recorded above.
