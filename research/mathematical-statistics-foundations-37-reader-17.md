# Step 3a reader report — batch 17

Run: `mathematical-statistics-foundations-37`  
Role: reader  
Batch: `17`

## Opened inventory

Assigned pages: `minimax-lower-bounds-and-information-theoretic-methods` and `minimax-lower-bounds-and-information-theoretic-methods-examples`.

Assigned items, read in dependency order: `lem-sparse-hamming-packing`; `def-kullback-leibler-divergence`; `def-mutual-information-for-finite-hypothesis-testing`; `thm-pinsker`; `thm-product-kl-additivity`; `lem-gaussian-location-kl-formula`; `thm-two-point-le-cam-risk-bound`; `thm-assouad-hypercube`; `thm-fano-packing`; `ex-gaussian-two-point-le-cam-lower-bound`; `ex-sparse-gaussian-sequence-fano-lower-bound`; `ex-gaussian-hypercube-assouad-lower-bound`.

Prerequisite pages opened: `losses-risk-and-decision-rules`, `dominated-experiments-likelihood-and-sufficiency`, `concentration-inequalities-and-tail-bounds`, and `stationary-markov-chains-and-ergodic-limits`. The latter page contains `def-total-variation-distance-for-probability-laws`, whose event-supremum convention was checked. The current batch manifest and all batch 17 proof-contract records were opened.

Direct supplier items opened for the assigned claims included: `cor-integral-logarithm-agrees-with-natural-logarithm`, `cor-integral-logarithm-is-strictly-increasing`, `cor-integral-logarithm-reciprocals-and-integer-powers`, `cor-mean-value-theorem`, `cor-exponential-reciprocal-and-positivity`, `def-absolutely-continuous-with-respect-to-a-positive-measure`, `def-binomial-coefficient`, `def-bayes-and-minimax-risk`, `def-countable-choice`, `def-extended-real-valued-measurable-function`, `def-finite-cardinality`, `def-finite-sigma-finite-and-semifinite-measures`, `def-higher-derivatives-and-smoothness`, `def-integrable-real-and-complex-functions-and-their-integrals`, `def-integral-logarithm`, `def-loss-function-and-risk`, `def-measure`, `def-measure-kernel-and-probability-kernel`, `def-measure-with-density`, `def-multivariate-normal-law`, `def-natural-logarithm`, `def-natural-numbers`, `def-nat-order`, `def-nat-power`, `def-nonnegative-lebesgue-integral`, `def-parameter-measurable-statistical-model-as-markov-kernel`, `def-positive-and-negative-parts-of-a-function`, `def-probability-measure`, `def-radon-nikodym-derivative`, `def-randomized-procedure-as-a-markov-kernel`, `def-real-exponential-function-and-e`, `def-sigma-algebra`, `def-standard-normal-and-normal-laws`, `def-statistical-experiment`, `lem-ac-supplies-sequential-choices-for-probability-constructions`, `lem-gaussian-kullback-leibler-covariance-formula`, `lem-nat-finite-sum-laws-and-the-canonical-embedding`, `lem-normal-density-has-total-mass-one`, `lem-positive-lebesgue-components-of-a-positive-measure`, `lem-procedure-action-law-is-measurable`, `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative`, `prop-closure-properties-of-measurable-functions-used-by-the-integral`, `thm-algebra-of-continuous-functions`, `thm-algebra-of-derivatives`, `thm-binomial-theorem`, `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions`, `thm-cardinality-of-a-set-of-functions`, `thm-chain-rule`, `thm-division-algorithm-in-z`, `thm-exponential-is-strictly-increasing`, `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`, `thm-indefinite-integral-of-a-nonnegative-function-is-a-measure`, `thm-integration-against-a-density`, `thm-integral-logarithm-derivative-and-normalisation`, `thm-integral-logarithm-product-law`, `thm-jensens-integral-inequality`, `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures`, `thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures`, `thm-likelihood-ratio-change-of-measure`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-measurability-of-integration-against-a-kernel`, `thm-measure-uniqueness-on-a-sigma-finite-pi-system`, `thm-natural-logarithm-laws`, `thm-product-rule`, `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`, `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`, `thm-sum-rule`, and `thm-tonelli-theorem-for-sigma-finite-product-spaces`.

The proofs of the current-run draft suppliers `thm-likelihood-ratio-change-of-measure`, `lem-radon-nikodym-density-of-a-finite-positive-measure-has-a-nonnegative-representative`, `lem-positive-lebesgue-components-of-a-positive-measure`, and `lem-procedure-action-law-is-measurable` were opened. The direct current-run consumer `lem-gaussian-kullback-leibler-covariance-formula` in batch 19 was also checked because the KL definition was clarified; its stated use remains valid.

## Page verdicts

- `minimax-lower-bounds-and-information-theoretic-methods`: pass after the KL well-definedness repairs below. Its summaries of the event-supremum convention, factor in Pinsker, sparse packing, and the unused concentration prerequisite match the reviewed items.
- `minimax-lower-bounds-and-information-theoretic-methods-examples`: pass. Its three example summaries match the reviewed two-point, sparse Fano, and Gaussian hypercube applications.

## Edits

- `def-kullback-leibler-divergence`: specified a finite-valued nonnegative density representative; justified measurability of the piecewise logarithm; connected the cited derivative of the integral logarithm to the natural logarithm; and showed the negative part of the signed integral is finite by the bound $(-t\log t)^+\le1/e$ and change of measure. This closes the domain, measurability, citation, and $\infty-\infty$ well-definedness gaps. Added its supporting direct dependencies.
- `def-mutual-information-for-finite-hypothesis-testing`: proved the finite mixture is a probability measure, derived $dP_j/d\bar P\le M$ almost everywhere from measure domination, proved the posterior densities sum to one almost everywhere, and bounded both parts of $t\log t$ to establish that each KL term is finite.
- `thm-product-kl-additivity`: changed the factor index to $i<n$, consistent with the library's $0\in\mathbb N$ convention and finite-product definitions. Added the finite-product measurability derivation for the product density. The $n=1$ case now has exactly one factor.
- `thm-pinsker`: corrected the derivative citation by including $L=\log$, stated the density-mass identity used in Jensen, and supplied the continuity/convexity argument at zero. The endpoint MVT argument is restricted to interior event probabilities before continuity extends it to the endpoints.
- `thm-fano-packing`: corrected the logarithm derivative support, supplied the limit at zero used for entropy convexity, and bounded $u\log u$ on the actual interval $[0,M]$ in the reference-divergence calculation.
- Updated `research/mathematical-statistics-foundations-37-batch-17.proof-contracts.json` for the changed definitions, derivations, citations, and $n=1$ boundary. Refreshed the KL citation in the assigned Gaussian-location lemma contract. None of the five edited items contained a `verification.judge` record.

No item or page outside the authorized batch was edited. No page prose required repair.

## Defects not repaired

None identified. The batch 19 Gaussian covariance consumer of KL remains valid under the clarified definition; no consumer repair was needed.

## Checks

`reflow.mts` and `precheck.mts` completed for each of the five changed items. Precheck passed for `thm-product-kl-additivity`, `thm-pinsker`, and `thm-fano-packing`; the two definitions reported zero proof sections to check. The final batched `proof-layout.mjs` run covered all five changed items: 13 steps, 0 defects.

## Blocker and coverage note

No blocker. Coverage includes all assigned pages/items, their cited statement/fact dependencies used in the arguments, the relevant prerequisite pages, all batch 17 contracts, and the direct current-run KL consumer in batch 19. Published supplier proofs were not re-audited except where their proof text was needed to verify a cited detail; the full proof was checked for the current-run suppliers named above.
