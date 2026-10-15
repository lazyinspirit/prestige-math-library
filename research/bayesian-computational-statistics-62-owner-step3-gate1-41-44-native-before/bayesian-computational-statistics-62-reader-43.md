# Step 3a reader report — batch 43

Run: `bayesian-computational-statistics-62`  
Role: reader  
Batch: `43`

## Opened inventory

Assigned pages:

- `kalman-smoothing-and-rts-recursion` (A), [page](../library/bayesian-computational-statistics/kalman-smoothing-and-rts-recursion.md).
- `kalman-smoothing-and-rts-recursion-examples` (B), [page](../library/bayesian-computational-statistics/kalman-smoothing-and-rts-recursion-examples.md).

Assigned items:

- `def-fixed-interval-gaussian-smoothing-law`
- `lem-backward-gaussian-kernel-is-valid-under-full-smoothing-data`
- `alg-rauch-tung-striebel-smoother`
- `thm-rauch-tung-striebel-fixed-interval-recursion`
- `ex-two-time-scalar-rauch-tung-striebel-smoother`
- `ex-singular-forecast-covariance-outside-rts-domain`

Reviewed the batch 43 proof-contract entries in `research/bayesian-computational-statistics-62-batch-43.proof-contracts.json` against the item facts, proof steps, examples, and boundaries.

Opened direct and relevant transitive dependencies: `def-axiom-of-choice`, `def-linear-gaussian-state-space-model-with-independent-noises`, `def-state-space-filtering-laws`, `def-multivariate-normal-law`, `def-independent-random-elements`, `def-product-sigma-algebra-and-finite-product-sigma-algebras`, `def-conditional-law-given-a-random-element`, `def-independent-sigma-algebras-and-events`, `def-measure-kernel-and-probability-kernel`, `def-regular-conditional-distribution`, `def-forward-and-back-substitution-for-triangular-systems`, `alg-kalman-filter`, `alg-rauch-tung-striebel-smoother`, `lem-independent-noise-extends-a-conditional-law`, `lem-finite-independent-gaussian-vectors-form-joint-multivariate-normal`, `lem-joint-gaussian-blocks-with-zero-cross-covariance-are-independent`, `lem-one-step-kalman-gaussian-conditioning`, `thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique`, `thm-forward-and-back-substitution-are-correct-unique-and-quadratic-cost`, `thm-multivariate-normal-conditional-law`, `thm-kalman-filter-is-exact-posterior`, `thm-linear-gaussian-state-space-path-law-is-jointly-gaussian`, `thm-state-space-filtering-and-smoothing-laws-exist`, `thm-measurability-of-integration-against-a-kernel`, `thm-dynkin-pi-lambda`, `thm-monotone-convergence-for-the-integral`, and `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`.

## Review and repair

The smoothing-law definition preserves the full observation data and the RCD version convention. The backward-kernel lemma establishes the Schur-complement covariance is positive semidefinite, verifies measurability, and uses the finite path-law factorization to show future observations do not change the conditional kernel once the next state is given. The stated positive-definite forecast condition supplies the only inverse in that argument.

I repaired one in-flight algorithm/proof gap:

- In `items/alg-rauch-tung-striebel-smoother.md`, Definition step 1 (lines 43–53), the procedure previously named two triangular solves without their row instructions. I added the increasing-row recurrence for `U_k` and decreasing-row recurrence for `C_k^T`, and showed the resulting equations imply the displayed backward gain. The recurrence inputs and order now make the procedure executable in exact arithmetic.
- In `items/thm-rauch-tung-striebel-fixed-interval-recursion.md`, Facts & Assumptions `[F13]` (line 91) and proof step 3.1 (line 101), I connected those procedure instructions to the conditional-Gaussian gain: `P^- C_k^T = F_{k+1}P_{k|k}`, hence `C_k=P_{k|k}F_{k+1}^T(P^-)^{-1}`. This supplies the missing link between the implemented gain and the gain used by the backward-kernel lemma before deriving the moment update.
- Updated the algorithm boundary evidence and theorem citation/derivation rows in the batch proof contract. Neither changed item had a `verification.judge` record. Reflow reported the algorithm unchanged and reflowed the theorem. Precheck passed for both items: the algorithm had 0 proof sections to check; the theorem had 1 checked and 0 failing. The required final `node tools/proof-layout.mjs items/alg-rauch-tung-striebel-smoother.md items/thm-rauch-tung-striebel-fixed-interval-recursion.md` reported 2 items, 4 steps, 0 defects.

The scalar example's forward innovations are `3` and `8/3`, with filter gains `2/3` and `5/8`; its backward gains are `2/5` and `1/2`. The stated smoothed means `(1/2, 1, 3/2)` and variances `(5/8, 1/2, 5/8)` follow by exact rational arithmetic. The singular-forecast example has `P_{1|0}=0` and `S_1=1`; its constant kernel `delta_0` satisfies the RCD identity for every observation event while the ordinary RTS inverse is undefined.

No other defect was found in the assigned items, page prose, reviewed proof contracts, or the opened dependency claims.

## Source check

- Särkkä, *Bayesian Filtering and Smoothing* (2013), Chapter 8, §8.2, p. 135: the official Aalto search excerpt identifies the RTS section and displays the general fixed-interval smoothing equation. The direct PDF fetch timed out, so I did not inspect the full RTS recursion passage. Locator: <https://users.aalto.fi/~ssarkka/pub/cup_book_online_20131111.pdf>.
- Law, Stuart, and Zygalakis, *Data Assimilation: A Mathematical Introduction*, Chapter 3, §3.1, pp. 54–56, Theorem 3.1: the arXiv text states the linear-Gaussian posterior smoothing distribution is Gaussian under positive-definite assumptions and derives its block-tridiagonal precision representation: <https://arxiv.org/pdf/1506.07825>. The same book's Chapter 4, §4.1, p. 78 is titled “Linear Gaussian Problems: The Kalman Filter.” These references corroborate the classical formulas; the local dependencies and proofs supply the singular-covariance and kernel-version details reviewed here.

## Page verdicts and remaining defects

- `kalman-smoothing-and-rts-recursion` (A): pass. Its summary accurately states the smoothing law, the backward kernel and the positive-definite solve conditions, and disclaims pseudoinverse and numerical-stability claims.
- `kalman-smoothing-and-rts-recursion-examples` (B): pass. Its summary accurately describes both the exact scalar calculation and the singular-forecast boundary example.
- Uneditable defects: none found. No page edits were made.
- Blockers: none for the local mathematical review. Direct access to the cited 2013 PDF timed out; the section locator and general smoothing equation were checked from the official search excerpt. The local proofs establish the recursion claims reviewed here.
