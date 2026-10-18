---
id: thm-na-dmrg-sweep-truncation-energy-increase-bound
kind: theorem
title: "TT discarded weights bound the post-sweep DMRG energy increase"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - alg-na-alternating-tensor-optimization-and-effective-eigenproblems
  - prop-na-exact-local-dmrg-update-does-not-increase-energy
  - lem-na-normalized-rayleigh-energy-perturbation
  - alg-tensor-train-rounding
  - thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error
  - cor-triangle-inequality-for-inner-product-norm
  - lem-reverse-triangle-inequality-in-a-normed-space
verification:
  precheck: pass
aliases: []
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §§4.5, 6.4"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §§2–3"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Mark D. Dupuy, Tensor Train Decomposition, complete lecture notes (2026), §§1.2.2, 1.2.4–1.2.5"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
---

## Statement

Let $\psi_0$ be a normalized finite TT state and $H$ a finite Hermitian Hamiltonian. Perform one full forward/backward sweep of [[alg-na-alternating-tensor-optimization-and-effective-eigenproblems]] using exact local solves and exact SVD splits, with no rank truncation during the sweep, and call its normalized output $\psi_*$. Apply exact TT rounding with rank caps, obtaining $\widetilde\psi$ and discarded tails $\delta_1,\ldots,\delta_{d-1}$. Put $\tau=(\sum_{k=1}^{d-1}\delta_k^2)^{1/2}$. If $\tau<1$, define $\phi=\widetilde\psi/\|\widetilde\psi\|_F$. Then
$$\mathcal E_H(\phi)\le \mathcal E_H(\psi_0)+4\|H\|_{\mathrm{op}}\tau.$$
In particular,
$$\mathcal E_H(\phi)-\mathcal E_H(\psi_*)\le4\|H\|_{\mathrm{op}}\tau.$$
No normalized-output claim is made when $\tau\ge1$.

## Facts & Assumptions

**Given:** The exact finite sweep and TT rounding described above, with normalized input state, Hermitian $H$, and total discarded-tail bound $\tau<1$.

[F1] [[alg-na-alternating-tensor-optimization-and-effective-eigenproblems]]: one sweep consists of finitely many exact local ground solves, exact SVD splits, and optional TT rounding only after the completed sweep.

[F2] [[prop-na-exact-local-dmrg-update-does-not-increase-energy]]: each exact local solve before truncation weakly decreases the global Rayleigh energy and preserves normalization.

[F3] [[alg-tensor-train-rounding]]: exact TT rounding with rank caps records the omitted singular-value tails $\delta_k$.

[F4] [[thm-tensor-train-exact-ranks-and-root-sum-square-truncation-error]]: exact TT rounding with tails $\delta_k$ satisfies $\|\psi_*-\widetilde\psi\|_F^2\le\sum_k\delta_k^2$.

[F5] [[lem-na-normalized-rayleigh-energy-perturbation]]: for unit states $\psi,\phi$, $|\mathcal E_H(\psi)-\mathcal E_H(\phi)|\le2\|H\|_{\mathrm{op}}\|\psi-\phi\|_F$.

[F6] [[cor-triangle-inequality-for-inner-product-norm]]: the Frobenius norm is homogeneous and satisfies the triangle inequality.

[F7] [[lem-reverse-triangle-inequality-in-a-normed-space]]: for vectors $x,y$ in a normed space, $|\|x\|-\|y\||\le\|x-y\|$.

## Proof



1.1 There are finitely many local updates in the sweep. Each exact local solve preserves normalization and weakly decreases energy by [F2]; each intervening exact SVD split preserves the represented tensor and therefore its norm and energy by [F1]. Induction over this finite sequence shows that every intermediate state stays normalized and its energy does not exceed the preceding one. Hence $\mathcal E_H(\psi_*)\le\mathcal E_H(\psi_0)$. [given, F1, F2, induction]

1.2 The tails $\delta_k$ are those recorded by [F3]. By [F4], $e:=\|\psi_*-\widetilde\psi\|_F\le\tau$. The triangle inequality [F6] gives $1=\|\psi_*\|_F\le e+\|\widetilde\psi\|_F$, so $\|\widetilde\psi\|_F\ge1-e\ge1-\tau>0$ and $\phi$ is defined. [given, F3, F4, F6, algebra]

2.1 By [F7], $|1-\|\widetilde\psi\|_F|\le e$. Also, homogeneity [F6] and $\phi=\widetilde\psi/\|\widetilde\psi\|_F$ give $\|\phi-\widetilde\psi\|_F=|1-\|\widetilde\psi\|_F|$. Therefore $\|\phi-\psi_*\|_F\le\|\phi-\widetilde\psi\|_F+\|\widetilde\psi-\psi_*\|_F\le2e\le2\tau.$ [given, F6, F7, step 1.2, algebra]

3.1 Apply [F5] to the unit states $\phi$ and $\psi_*$ to get $\mathcal E_H(\phi)\le\mathcal E_H(\psi_*)+4\|H\|_{\mathrm{op}}\tau$. Combine this with step 1.1 to obtain the claimed bound relative to $\psi_0$. The same inequality gives the asserted upper bound on any post-rounding increase. [given, F5, step 1.1, step 2.1, algebra] ∎
