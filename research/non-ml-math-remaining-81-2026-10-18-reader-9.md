# Step 3a reader report — batch 9

Run: `non-ml-math-remaining-81-2026-10-18`  
Batch: `9`  
Role: reader

## Inventory reviewed

Assigned pages:

- `library/information-theory/iid-lossless-source-coding-and-the-aep.md` (A page)
- `library/information-theory/iid-lossless-source-coding-and-the-aep-examples.md` (B page)

Assigned items, reviewed in supplier-to-consumer order:

1. `def-finite-law-self-information-and-entropy`
2. `def-finite-alphabet-iid-source`
3. `def-finite-source-information-density-and-typical-set`
4. `def-fixed-length-lossless-block-code`
5. `lem-finite-alphabet-iid-information-aep`
6. `cor-aep-typical-set-probability-and-size-bounds`
7. `thm-fixed-length-lossless-source-coding`
8. `ex-correlated-bernoulli-source-fails-the-iid-aep`
9. `ex-independent-nonidentical-source-has-no-information-rate-limit`
10. `ex-bernoulli-aep-and-typical-set-count`

Supporting pages and items opened to check the assigned claims:

- Required pages: `library/probability/weak-laws-and-series-of-independent-random-variables.md` and `library/information-theory/finite-alphabet-entropy-and-divergence.md`.
- Direct suppliers: `def-it-information-units-and-logarithm-base`, `def-qa-35-finite-probability-entropy-and-stochastic-matrices`, `def-identically-distributed-and-iid-random-variables`, `def-convergence-in-probability`, and `cor-iid-finite-variance-weak-law`.
- Suppliers used in the IID weak-law proof: `def-independent-random-elements`, `def-law-or-distribution-of-a-random-element`, `thm-factorization-of-expectations-for-independent-variables`, `thm-chebyshev-weak-law-for-uncorrelated-arrays`, and `def-finite-probability-space-and-event`.
- Batch 9 proof contracts: `research/non-ml-math-remaining-81-2026-10-18-batch-9.proof-contracts.json`.

## Review and verdicts

- The finite-law definitions consistently use positive support for logarithms, natural logarithms and nats, and the finite product law. The IID-source definition's finite block law follows from mutual independence and the common one-letter law.
- In `lem-finite-alphabet-iid-information-aep`, the finite-valued surprisal transforms remain IID. Finite summation gives mean `H(p)` and variance `V(p)`; the finite union of zero-mass symbols has probability zero. The cited IID finite-variance weak law therefore gives the stated bound `V(p)/(n epsilon^2)` and convergence in probability.
- In `cor-aep-typical-set-probability-and-size-bounds`, the lower and upper mass bounds for each typical word yield the two cardinality bounds with the stated directions. The complement inclusion gives the atypical-probability estimate, including when `V(p)=0`.
- In `thm-fixed-length-lossless-source-coding`, the typical-word code and reserved message define encoder and decoder maps on their full domains. The count of correctly decoded words yields the success bound used for both converses. The chosen typicality tolerance and integer rounding give the stated error and rate bounds; the weak converse and strong converse follow from the same bound with a fixed positive rate gap.
- `ex-correlated-bernoulli-source-fails-the-iid-aep` correctly computes the two supported block probabilities and the zero limiting normalized information while keeping the marginal entropy positive.
- `ex-independent-nonidentical-source-has-no-information-rate-limit` explicitly uses only consistent finite product laws. Its endpoint fair-coordinate fractions tend to one and zero on alternating block endpoints, respectively; the resulting deterministic information values rule out convergence in probability to any constant under the stated `P_n` interpretation.
- `ex-bernoulli-aep-and-typical-set-count` correctly derives the affine information formula, clipped binomial count, `p=1/4, n=4` probability and size, and the fair and degenerate cases. Its surprisal-variance calculation and cited typical-set bounds agree.
- The six proof contracts cover the six proof-like assigned items. Their cited source sections, quote uses, derivation claims and step references align with the current item text. No contract or author decision was treated as a mathematical verdict.

**A-page verdict:** The page summary accurately describes the finite-alphabet IID AEP, typical-set bounds, entropy-rate achievability, weak converse and strong converse. No defect found.

**B-page verdict:** The page summary accurately describes the Bernoulli count and the two non-IID examples. No defect found.

## Edits, remaining defects, and blocker

- Edits: none. No confirmed defect required a repair.
- Uneditable defects: none.
- Blocker: none.
- No reflow, precheck, or proof-layout command was needed because no item changed.

## Coverage note

Both assigned pages and all ten assigned items were read, along with the local suppliers needed to verify their claims and proofs. I did not independently audit the full transitive closures of the two required pages; their unrelated contents were not needed to verify batch 9. No unresolved mathematical uncertainty remained in the assigned material.
