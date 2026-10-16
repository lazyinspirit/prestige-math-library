# Step 3a reader report — batch 37

Run: quantum-computing-algorithms-60-2026-10-15

## Inventory opened

Assigned pages:

- library/quantum-algorithms/amplitude-estimation-and-counting.md (A)
- library/quantum-algorithms/amplitude-estimation-and-counting-examples.md (B)

Assigned A-page items, read in dependency order:

- lem-qa-13-pi-rational-bounds; lem-qa-13-two-nearest-phase-mass; def-qa-13-amplitude-estimation-task; lem-qa-13-grover-eigenphase-relation; lem-qa-13-real-cyclotomic-comparison
- alg-qa-13-iterative-likelihood-amplitude-estimation; alg-qa-13-phase-estimation-amplitude-estimation; alg-qa-13-counting-from-amplitude-estimation; alg-qa-13-median-confidence-estimation; lem-qa-13-certified-count-output-rounding
- thm-qa-13-amplitude-estimation-guarantee; thm-qa-13-iterative-likelihood-query-count; lem-qa-13-counting-zero-outcome-kernel; thm-qa-13-amplitude-estimation-query-complexity; thm-qa-13-counting-error-guarantee
- thm-qa-13-median-confidence-guarantee; alg-qa-13-relative-approximate-counting; thm-qa-13-counting-query-complexity; thm-qa-13-median-confidence-query-cost; thm-qa-13-relative-counting-query-cost; thm-qa-13-relative-counting-success

Assigned B-page items:

- cex-qa-13-controlled-powers-are-not-free
- ex-qa-13-counting-error-regimes

I opened all 62 unique direct suppliers listed by the assigned manifest, plus the two suppliers added to the repaired rounding proof (def-abs-value and lem-nth-term-test). The supplier inventory was:

alg-qa-12-amplitude-amplification; alg-qa-quantum-phase-estimation; cor-complex-exponential-cartesian-form-modulus-and-eulers-identity; cor-mean-value-theorem; cor-sine-and-cosine-are-one-lipschitz; cor-trigonometric-parity-and-pythagorean-identity; def-nat-power; def-natural-logarithm; def-pi-via-first-positive-cosine-zero; def-qa-12-prepared-success-subspace; def-qa-classical-bit-cost; def-qa-circular-phase-distance; def-qa-eigenphase-estimation-model; def-qa-input-encoding-and-size; def-qa-phase-query; def-qa-quantum-query-algorithm; def-qa-quantum-query-complexity; def-qa-task-and-promise-domain; def-qc-controlled-unitary-access; def-qc-dirac-notation-conversion; def-qc-elementary-circuit-resources; def-qc-inverse-unitary-access; def-qc-one-qubit-gate-alphabet-and-rotations; def-qc-projective-measurement; def-qc-reflection; def-sine-and-cosine-by-power-series; lem-chernoff-bound-for-independent-bernoulli-trials; lem-complex-conjugation-and-modulus-laws; lem-integer-part; lem-qa-12-amplification-plane-invariant; lem-qa-phase-estimation-geometric-sum; lem-qa-phase-estimation-outcome-kernel; lem-qa-phase-estimation-sine-chord-bounds; thm-algebra-of-derivatives; thm-alternating-series-test; thm-chain-rule; thm-cofunction-supplementary-and-reflection-identities; thm-complex-exponential-addition-and-real-extension; thm-cyclotomic-polynomials-are-irreducible-over-the-rationals; thm-double-angle-and-power-reduction-identities; thm-ftc-first-part; thm-induction-principle; thm-kernel-and-fibres-of-complex-exponential; thm-logarithm-derivative-and-integral; thm-natural-logarithm-laws; thm-of-archimedean; thm-principal-inverse-tangent-calculus; thm-pythagorean-and-parity-identities-for-all-six-trigonometric-functions; thm-qa-phase-estimation-access-cost; thm-qa-phase-estimation-exact-grid; thm-qa-phase-estimation-success-and-tail; thm-qa-phase-estimation-superposition-law; thm-qc-controlled-global-phase-is-relative-phase; thm-qc-reflection-unitary-involution; thm-qc-standalone-global-phase-invariance; thm-quarter-turn-values-and-shift-formulas; thm-ratio-test; thm-sine-and-cosine-addition-formulas; thm-sine-and-cosine-derivatives; thm-sine-cosine-signs-monotonicity-and-ranges; thm-sine-cosine-zero-sets-and-fundamental-period; thm-tangent-cotangent-secant-cosecant-derivatives-and-periods.

I also opened the transitive register definition def-qc-register-and-computational-basis. For the edit-triggered consumer check on alg-qa-13-counting-from-amplitude-estimation, I opened the batch-53 consumer alg-qa-29-amplitude-counting-consumer and its direct suppliers thm-qa-29-counting-is-indicator-expectation and def-qa-29-expectation-estimation-task. It invokes the counting estimator under its explicitly declared access model and remains compatible with the clarified mode-specific cost instructions.

## Repairs and evidence

- lem-qa-13-pi-rational-bounds: stated the alternating-series remainder supplier used by the lower bound. The first eight arctangent terms give 33976/45045 > 3/4; the positive integral of x^4(1-x)^4/(1+x^2) evaluates to 22/7-pi and proves the upper bound. Updated its proof contract with the alternating-series and Archimedean citations.
- lem-qa-13-real-cyclotomic-comparison: made the interval procedure effective. Rational partial sums now have an explicit 8/(2n+1) width bound for pi; the sine and cosine truncations have uniform factorial tail bounds on [0,4], and interval refinement is tested by exact rational comparisons. The equality branch follows from divisibility by the irreducible minimal polynomial Phi_s; the nonzero branch terminates when its real interval excludes zero. Updated its proof contract with the alternating-remainder and Archimedean suppliers and the repaired derivation.
- lem-qa-13-certified-count-output-rounding: replaced the unsupported nearest-integer citation with the derivation n=floor(z+1/2), which gives |z-n|<=1/2. Clarified that the ratio test gives convergence of the factorial-bound series and the term test then gives R_r->0. Replaced the polynomial-derivative estimate by the elementary factorization bound for differences of powers, and corrected the double-angle supplier. Updated its proof contract and added exact citations for the floor, absolute value, alternating remainder, and term test.
- thm-qa-13-amplitude-estimation-guarantee: separated the repeated-unitary and power-query access cases in the circuit well-definedness proof. The repeated mode expands and charges the controlled factors; the power-query mode uses its supplied controlled powers and recorded cost vectors. Updated its proof contract.
- alg-qa-13-counting-from-amplitude-estimation, thm-qa-13-amplitude-estimation-query-complexity, and thm-qa-13-counting-error-guarantee: made membership-reflection and controlled-factor charges mode-specific. The query-complexity theorem statement already scoped its component expansion to repeated-unitary mode, so that statement was retained; its proof fact and derivation were corrected. Updated the two affected proof contracts.
- cex-qa-13-controlled-powers-are-not-free: corrected its access-cost fact and conclusion to distinguish explicitly supplied powers from repeated controlled-unitary implementations. Updated its proof contract.
- library/quantum-algorithms/amplitude-estimation-and-counting.md: changed “has no finite-sample success guarantee” to “is specified without a finite-sample success guarantee,” matching the algorithm's own scope statement.

No stale verification.judge entry was present in the repaired items. The batch-37 and run-level proof-contract files were updated consistently. I opened the cited BHMT paper at https://arxiv.org/pdf/quant-ph/0005055: §4, Theorem 11 (PDF pp. 16–17) states the phase-estimation tail and nearest-grid success bound; Theorem 12 (PDF pp. 18–19) gives the amplitude-error and endpoint guarantees. The exact cyclotomic comparison is supported by its local proof.

## Page verdicts

- A page amplitude-estimation-and-counting: acceptable after the summary wording repair; its claims now match the assigned results and access contracts.
- B page amplitude-estimation-and-counting-examples: acceptable; the N=16, M=4 substitutions and the I versus -I controlled-access witness agree with their items.

## Unedited defects

None found in the assigned scope or in the batch-53 consumer checked after the Definition clarification.

## Validation and blocker

Reflow reported unchanged for all eight changed item files. Precheck passed for the seven proof-bearing items; the algorithm definition had no proof to check. The final batched proof-layout command checked eight items and 26 proof steps, with zero defects.

The batch review has no mathematical blocker. Current autopilot status still reports the global 1-scaffold blocker: invalid construction scheduling item identity def-qc-effective-unitary-matrix-input in batch 12. This is outside batch 37.
