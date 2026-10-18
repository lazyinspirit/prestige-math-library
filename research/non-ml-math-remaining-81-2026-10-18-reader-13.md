# Step 3a reader report — batch 13

Run: non-ml-math-remaining-81-2026-10-18

## Inventory opened

Both assigned draft pages were opened:

- A page cost-constrained-gaussian-and-feedback-channels at library/information-theory/cost-constrained-gaussian-and-feedback-channels.md.
- B page cost-constrained-gaussian-and-feedback-channels-examples at library/information-theory/cost-constrained-gaussian-and-feedback-channels-examples.md.

All 29 assigned draft items were opened in manifest dependency order (25 A-page items followed by the four B-page examples):

1. def-parallel-gaussian-channel-with-power-constraint
2. lem-cost-pruned-random-code
3. lem-density-channel-threshold-random-coding-bound
4. lem-finite-simplex-entropy-continuity-and-concavity
5. lem-gaussian-maximum-differential-entropy-under-variance
6. lem-jensen-for-integrable-cost-random-variable
7. lem-standard-normal-fourth-moment
8. lem-water-filling-optimal-allocation
9. def-countable-dmc-zero-cost-information-capacity
10. def-parallel-awgn-feedback-code
11. lem-gaussian-noise-orthogonalization
12. lem-parallel-awgn-single-use-information-bound
13. lem-parallel-awgn-information-density-convergence
14. def-finite-dmc-cost-model
15. lem-parallel-awgn-cost-constrained-achievability
16. def-cost-constrained-dmc-code-and-capacity
17. def-finite-dmc-feedback-code
18. lem-cost-constrained-dmc-information-capacity-properties
19. lem-finite-message-fano-for-density-observation
20. lem-cost-constrained-dmc-achievability
21. lem-cost-constrained-dmc-mutual-information-under-average-cost
22. thm-parallel-awgn-feedback-capacity-water-filling
23. thm-cost-constrained-dmc-capacity-formula
24. cor-inactive-dmc-cost-constraint-recovers-capacity
25. thm-feedback-does-not-increase-cost-constrained-dmc-capacity
26. ex-countable-input-channel-finite-capacity-supremum-not-attained
27. ex-correlated-gaussian-noise-orthogonal-reduction
28. ex-two-branch-awgn-water-filling
29. ex-binary-identity-channel-with-cost-and-feedback

Direct dependency definitions and theorem statements needed to trace the proofs were opened, including the Gaussian density and orthogonal-normal suppliers; logarithm, derivative, convexity, integration, KL, entropy, Fano, and Jensen suppliers; DMC channel, cost, code, information-density, and capacity suppliers; and the finite-union, Markov, Chebyshev, product-measure, independence-factorization, and zero-integral results. Full local arguments were read where the review depended on their proof, including the Gaussian density, KL nonnegativity, orthogonal-normal invariance, factorization, zero-integral criterion, and the DMC information-density convergence results.

## Repairs made

- lem-cost-pruned-random-code, Proof 1.1: the zero-expectation branch used a countable-union argument without the relevant countable probability fact in its dependencies. Added thm-nonnegative-integral-zero-iff-zero-almost-everywhere and used it to show the cost-violation fraction and ensemble error are each zero almost surely. The finite union bound supplies a common realization. The statement is unchanged.
- lem-density-channel-threshold-random-coding-bound, Proof 3.1: the existence of a codebook whose error is no larger than the ensemble mean was asserted without justification. Added thm-linearity-of-the-lebesgue-integral-on-l-one and thm-nonnegative-integral-zero-iff-zero-almost-everywhere; if every codebook had error above the mean, the positive difference would have integral zero on a probability space of mass one, a contradiction. The statement is unchanged.
- lem-parallel-awgn-information-density-convergence, Proof 3.1: the variance of the sum across independent uses was asserted without establishing vanishing cross terms or citing a factorization result. Added thm-factorization-of-expectations-for-independent-variables and explicitly factorized the centered cross moments before applying Chebyshev. The statement is unchanged.
- ex-two-branch-awgn-water-filling, Example and Verification 1.1: the water-level formula omitted a value at P=0, while the example introduced T for all P≥0. The zero-power allocation and capacity are now stated separately; the water level is defined only for positive power. The allocation and rate formulas for positive power, including the matching P=3 endpoint, are unchanged.

The corresponding four entries in research/non-ml-math-remaining-81-2026-10-18-batch-13.proof-contracts.json were updated to match the repaired derivations and citations. No changed item had a verification.judge record to remove. The source evidence for the repairs is the opened Statement of thm-nonnegative-integral-zero-iff-zero-almost-everywhere, the Statement of thm-linearity-of-the-lebesgue-integral-on-l-one, the Statement of thm-factorization-of-expectations-for-independent-variables, and the Statements of lem-water-filling-optimal-allocation and thm-parallel-awgn-feedback-capacity-water-filling.

Validation after the final item edits:

- reflow.mts: unchanged for all four items.
- precheck.mts: pass for all four items, zero failures.
- node tools/proof-layout.mjs items/lem-cost-pruned-random-code.md items/lem-density-channel-threshold-random-coding-bound.md items/lem-parallel-awgn-information-density-convergence.md items/ex-two-branch-awgn-water-filling.md: 4 items, 12 steps, 0 defects.

## Unedited finding

- Page cost-constrained-gaussian-and-feedback-channels-examples, page summary, final sentence (line 14): “All examples ... identify when feedback leaves capacity unchanged.” The countable-input example ex-countable-input-channel-finite-capacity-supremum-not-attained defines and computes only the zero-cost information-capacity supremum and its nonattainment; it makes no feedback-capacity claim. This is a false universal summary claim. The page is B-page prose, outside this reader's edit permission, so it remains for the owner.

## Page verdicts

- cost-constrained-gaussian-and-feedback-channels: pass after the four item repairs. The summary's finite-DMC boundary case, Gaussian feedback/no-feedback formula, orthogonal reduction, nats convention, and threshold/pruning description agree with the assigned items.
- cost-constrained-gaussian-and-feedback-channels-examples: the four example computations are sound, including the zero-power and threshold cases after repair. The page summary has the unedited feedback-coverage error above; owner repair is required.

## Blocker and coverage note

No blocker. The live run had no generated reader evidence bundle in its runtime state, so this review used the current page/item carriers and the assigned proof-contract file directly. No web search was needed; the reviewed arguments and cited local supplier statements resolved the mathematical questions without unresolved uncertainty.
