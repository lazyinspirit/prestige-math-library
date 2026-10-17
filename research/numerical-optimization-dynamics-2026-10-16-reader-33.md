# Step 3a reader report — batch 33

## Scope and opened inventory

Reviewed run `numerical-optimization-dynamics-2026-10-16`, batch `33`, from the current carriers. Opened the batch manifest, `briefs/reader.md`, the batch-33 proof-contract file, and the batch-33 cross-batch dependency ledger. The contract and ledger were treated as evidence only.

Opened the assigned A page [computed-schur-decompositions-and-nonnormal-spectra](../library/numerical-linear-algebra-and-approximation/computed-schur-decompositions-and-nonnormal-spectra.md) and B page [computed-schur-decompositions-and-nonnormal-spectra-examples](../library/numerical-linear-algebra-and-approximation/computed-schur-decompositions-and-nonnormal-spectra-examples.md).

Opened all 22 assigned items:

- A page: `def-real-and-complex-schur-forms`, `def-exact-real-2x2-discriminant-sign-predicate`, `def-closed-epsilon-pseudospectrum`, `lem-unitary-similarity-error-accumulation`, `lem-neumann-invertibility-for-finite-matrices`, `lem-implicit-q-uniqueness-for-unreduced-hessenberg`, `lem-francis-compact-bulge-support-propagation`, `alg-complex-scaled-householder-reflector-step`, `lem-real-francis-double-shift-polynomial`, `thm-closed-pseudospectrum-resolvent-perturbation-equivalence`, `thm-bauer-fike-eigenvalue-perturbation-bound`, `alg-exact-francis-hessenberg-qr-step`, `lem-francis-double-shift-bulge-chase-matches-explicit-qr`, `alg-finite-budget-francis-schur-reduction`, `thm-computed-francis-schur-backward-error`, `thm-computed-pseudospectrum-membership-enclosure`, `lem-two-sided-scaled-householder-similarity-error`, `lem-exact-rational-two-by-two-discriminant-sign`, and `thm-finite-budget-francis-schur-termination-and-status`.
- B page: `ex-jordan-block-epsilon-pseudospectrum`, `ex-jordan-eigenvalue-residual-square-root-instability`, and `ex-real-conjugate-pair-schur-block`.

Opened all five A-page `requires` pages: `eigenvalue-iterations-and-the-qr-algorithm`, `matrix-differentiation-and-first-order-spectral-perturbation`, `the-spectral-theorem-and-singular-value-decomposition`, `finite-precision-direct-factorizations`, and `computed-singular-values-and-rank-revealing-factorizations`.

Opened claim-critical suppliers and page references, including the unitary/Frobenius and operator-norm/SVD results; Householder, Givens, QR and Hessenberg results; the operationwise floating-point model and its standard relative model; the real and complex local Householder error lemmas; the product-of-rounding-factors lemma and Cauchy–Schwarz; the bidiagonal reduction, implicit bidiagonal QR, bulge-chase and singular-value perturbation results; the computed singular-value error corollary; and the simple-eigenvalue derivative, condition-number and Schur triangularisation results. These are the item carriers named in the assigned proofs or page prose.

## Repairs and validation

- Changed `thm-computed-francis-schur-backward-error`'s title to “A finite computed Francis similarity sequence has a conditional normwise backward-error bound.” Its statement covers finite prefixes as well as completed runs and expressly does not infer Schur convergence or a completed Schur form from a prefix.
- Changed `thm-finite-budget-francis-schur-termination-and-status`'s title to “Finite Francis procedure terminates with explicit statuses and verifies its Schur pattern on success.” Its statement validates the Schur pattern only on a `Schur-computed` return.
- The theorem statements and proofs did not change, so their proof-step contracts remain applicable; neither item had a stale `verification.judge` record.
- Reflow reported both changed items unchanged. Precheck passed for each. The final batched proof-layout command reported `2 items, 6 steps, 0 defects`.

No other files were edited.

## Unrepaired findings

1. **`alg-finite-budget-francis-schur-reduction`, `## Definition`, input sentence and steps 3–4.** The input only declares “finite tables of finite exceptional shifts,” while step 3 requires each active block to consume “that block's next declared exceptional shift or real quadratic.” The procedure does not define the descriptor type for the complex and real branches, how tables are assigned or indexed across blocks, how a block schedule is inherited after deflation splits a block, how the counter behaves after consuming an exception, or the order for processing multiple active blocks in a sweep. No dependency supplies these controls. The shift schedule and resulting procedure are not uniquely specified. A repair needs an explicit descriptor type and deterministic block/table iteration, inheritance, and counter-update rules; choosing such a policy would change behavior not fixed by the current text, so it is left for the owner.

2. **`alg-exact-francis-hessenberg-qr-step`, `## Facts & Assumptions` and `## Proof`, steps 1.1–4.1.** The algorithm carrier proves termination, similarity accumulation, and that the invariant-failure branch is unreachable. The algorithm instructions require correctness and termination properties to be stated in separate proved result items; the compact bulge-support lemma supplies the pattern/direction invariant, but the algorithm's own status and termination argument remains embedded in the procedure item. Closing this requires a separate result carrier outside this dispatch's assigned inventory, so the algorithm was not rewritten or stripped of its proof.

3. **`alg-complex-scaled-householder-reflector-step`, `## Facts & Assumptions` and `## Proof`, steps 1.1–2.1.** The algorithm carrier proves wrapper termination and the success-branch nonzero/unitary-representative property. The local complex error lemma supplies arithmetic bounds, but the algorithm rule places procedure properties in separate proved result items. Moving these arguments requires a separate result carrier outside the assigned inventory; no edit was made.

4. **In-run dependency `alg-scaled-householder-reflector-formation-and-application` (batch 1), `## Proof`, steps 1.1–2.1; assigned consumer: `alg-finite-budget-francis-schur-reduction`.** This dependency likewise places termination of the algorithm in its own proof section, contrary to the algorithm content rule requiring a separate result item. Its current bytes at split had SHA-256 `d09b37d969c79d49a08bf9edc843b41b2997df1d4020afd8e8d679092087af6d`. It is outside batch 33's edit scope.

## Page verdicts

- **A page:** The page prose accurately summarizes the assigned definitions, conditional finite-budget procedure, error-certificate conditions, pseudospectrum equivalences, local sensitivity statements, and Schur-existence caveat. It makes no unconditional shift-convergence claim. The page prose is sound; the finite-procedure scheduling and algorithm-property-carrier findings above remain at item level.
- **B page:** The summary matches the three examples. The Jordan-block pseudospectrum computation, residual example, and real conjugate-pair block are supported by their displayed calculations and dependencies. No page-prose defect found.

## Blocker and coverage

The autopilot status was `running` with no active dispatch at the time checked. It showed a separate run-level blocker: `3a-split`, `split-6 failed 3x (covers 6)`. That blocker does not prevent this batch-33 review. All assigned pages and items, the listed page prerequisites, and the claim-critical supplier interfaces were opened. No external source search was needed to resolve a mathematical uncertainty; the relevant local claims were checked from their full displayed proofs and exact dependency statements.
