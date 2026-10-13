# Step 3a reader report — batch 37

Run: `physics-cm-qm-gr-79-2026-10-11`  
Role: independent reader  
Scope: batch 37 only

## Opened inventory

Pages opened:

- A: `qm-math-orbital-and-spin`.
- B: `qm-math-orbital-and-spin-examples`.

All 18 assigned items were opened and reviewed in dependency order. The A-page carriers were: `prop-nrqm-orbital-and-spin-finite-spin-matrices`, `thm-nrqm-orbital-and-spin-symmetric-power-su2-representation`, `thm-nrqm-orbital-and-spin-finite-spin-block-decomposition`, `thm-nrqm-orbital-and-spin-tensor-spin-composition`, `thm-nrqm-orbital-and-spin-tsirelson-bound`, `thm-nrqm-orbital-and-spin-legendre-rodrigues-equation`, `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates`, `thm-nrqm-orbital-and-spin-associated-polynomial-normalization`, `thm-nrqm-orbital-and-spin-weighted-angular-completeness`, `thm-nrqm-orbital-and-spin-sphere-onb`, `thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain`, `thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension`, `thm-nrqm-orbital-and-spin-strongly-continuous-rotation-action`, `thm-nrqm-orbital-and-spin-orbital-self-adjoint-generators`, and `thm-nrqm-orbital-and-spin-dipole-angular-selection-rules`.

The B-page items were `ex-nrqm-orbital-and-spin-example-spin-singlet-chsh`, `ex-nrqm-orbital-and-spin-example-coupled-triplet-and-singlet`, and `ex-nrqm-orbital-and-spin-example-orbital-core-commutators`.

Argument-bearing mathematical suppliers opened for the repaired or disputed steps included `thm-ftc-second-part`, `cor-mean-value-theorem`, `thm-chain-rule`, `thm-chain-rule-for-total-derivatives`, `thm-euclidean-inverse-function-theorem`, `thm-sine-and-cosine-derivatives`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `lem-nrqm-orbital-and-spin-sphere-integral-in-angle-coordinates`, and `thm-nrqm-orbital-and-spin-sphere-laplacian-diagonal-domain`. Relevant tensor, finite-dimensional spectral, and CHSH sampling supplier statements were also opened for the assigned spin proofs and examples.

## Repairs made

- `thm-nrqm-orbital-and-spin-legendre-rodrigues-equation`, proof step 1.3: treated $l=0$ separately, where the derivative formula for $(t^2-1)^l$ would otherwise use an invalid negative exponent at the endpoints. Corrected the source locator: the Legendre Rodrigues formula is DLMF §14.7(ii), equation 14.7.13, and the Ferrers associated-function formula is §14.7(ii), equation 14.7.8. The old locator to §18.3 did not support the Rodrigues claim; the Legendre Rodrigues row is in §18.5(ii), Table 18.5.1. Sources: [DLMF §14.7](https://dlmf.nist.gov/14.7) and [DLMF §18.5](https://dlmf.nist.gov/18.5).

- `thm-nrqm-orbital-and-spin-associated-polynomial-normalization`: renamed the title to “Associated Legendre function normalization,” since $w_{lm}$ need not be a polynomial for odd $m$. In the statement, defined the chart image and its omitted cut as `C = {(x,0,z) in S² : x >= 0}`, used the sphere-angle lemma to establish $σ(C)=0$, and specified the continuous representative on the cut, including the integer-$m$ seam match and the pole limits. The $L²$ class and chart values remain the same. DLMF §14.7(ii), equation 14.7.8, and §14.30.6–14.30.8 support the associated-function and spherical-harmonic conventions: [DLMF §14.7](https://dlmf.nist.gov/14.7), [DLMF §14.30](https://dlmf.nist.gov/14.30).

  In proof step 3.1, bounded the endpoint terms in the Wronskian expression for odd $m$, then extended $G$ continuously with $G(±1)=0$. The cited FTC supplier requires one-sided differentiability at both endpoints. The step now derives those derivatives from the mean value theorem and the continuous extension of $G′$, before applying FTC. Facts & Assumptions and the proof contract now state the exact FTC hypotheses; the contract also records `cor-mean-value-theorem` for the endpoint argument.

- `thm-nrqm-orbital-and-spin-weighted-angular-completeness`, source facts: corrected the DLMF section description and separated the completeness result in §18.2(viii) from the orthogonality and normalization table in §18.3, Table 18.3.1. DLMF §18.3.1 itself is not a Rodrigues formula; the Legendre Rodrigues formula is at §18.5(ii), Table 18.5.1. Sources: [DLMF §18.2](https://dlmf.nist.gov/18.2), [§18.3](https://dlmf.nist.gov/18.3), and [§18.5](https://dlmf.nist.gov/18.5).

- `thm-nrqm-orbital-and-spin-harmonic-polynomial-dimension`, proof step 3.1: replaced “chain rule yields” with the polar-coordinate calculation. The proof now cites the sphere-angle lemma’s $C¹$-diffeomorphism result, writes the Jacobian columns and determinant $r² sin θ$, obtains the inverse-Jacobian rows, and computes the Laplacian coefficients by the product rule before applying the spherical-harmonic eigenvalue equation. The local suppliers give the total chain rule, inverse-function derivative, and sine/cosine derivatives.

The affected entries in `research/physics-cm-qm-gr-79-2026-10-11-batch-37.proof-contracts.json` were updated, including the new harmonic-coordinate derivation and the associated-function endpoint step. No changed item had a `verification.judge` record. Reflow reported all four item files unchanged; precheck passed all four; the final proof-layout command reported 4 items, 24 steps, 0 defects.

Other source checks included [DLMF §14.30](https://dlmf.nist.gov/14.30), Axler, Bourdon, and Ramey, *Harmonic Function Theory*, Theorem 5.12 and equation 5.38 ([author-hosted PDF](https://www.axler.net/HFT.pdf)), and Brunner et al., *Bell nonlocality* ([arXiv:1303.2849](https://arxiv.org/abs/1303.2849)). The CHSH example was treated as a conditional model calculation; no measurement data or experimental conclusion is asserted by this review.

## Defects outside this batch’s write scope

No confirmed defect remained in assigned prose, and I found no confirmed defect in an out-of-batch supplier that could be reported as an uneditable finding. The associated-function statement clarification has current-run downstream dependency closure through batches 39, 40, 54–61, and 64. I checked its assigned in-batch use and enumerated the external closure, but did not inspect every external dependent proof; the added representative agrees with the polynomial representative and leaves the chart formulas and $L²$ class unchanged.

## Page verdicts

- `qm-math-orbital-and-spin` (A): no remaining page-level defect found. The page summary remains accurate after the item repairs; the page prose was unchanged.
- `qm-math-orbital-and-spin-examples` (B): no page-level defect found. The three examples were reviewed and the page prose was unchanged.

## Blocker and coverage limits

No blocker prevented the in-scope repairs. The batch has 119 unique direct dependencies outside the assigned carriers. I opened the supplier statements needed for the disputed steps and example checks, but did not independently audit every external supplier proof or the full out-of-batch consumer closure. This report does not certify those unreviewed proofs or consumers.
