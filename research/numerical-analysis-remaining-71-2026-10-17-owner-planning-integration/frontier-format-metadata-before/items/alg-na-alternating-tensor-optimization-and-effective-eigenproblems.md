---
id: alg-na-alternating-tensor-optimization-and-effective-eigenproblems
kind: algorithm
title: "Finite alternating tensor optimization with effective eigenproblems"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-na-finite-mps-state-and-hermitian-hamiltonian
  - lem-na-periodic-mps-to-open-tt
  - lem-na-mixed-canonical-qr-gauge-preserves-state
  - lem-na-mps-environment-isometry-and-effective-hamiltonian
  - lem-na-finite-hermitian-ground-vector-with-deterministic-tie
  - alg-tensor-train-rounding
  - thm-singular-value-decomposition
aliases: []
verification:
  precheck: n/a
sources:
  references:
    - title: "Ulrich Schollwöck, The density-matrix renormalization group in the age of matrix product states, Annals of Physics 326 (2011), §§6.2–6.4"
      url: "https://arxiv.org/pdf/1008.3477"
    - title: "Grégoire Misguich, Introduction to matrix-product states and tensor networks, complete lecture notes (2026), §2.7"
      url: "https://arxiv.org/pdf/2606.24803"
    - title: "Ivan V. Oseledets, Tensor-Train Decomposition, SIAM Journal on Scientific Computing 33(5) (2011), §3"
      url: "https://users.math.msu.edu/users/iwenmark/Teaching/CMSE890/TENSOR_oseledets2011.pdf"
    - title: "Mark D. Dupuy, Tensor Train Decomposition, complete lecture notes (2026), §§1.2.2, 1.2.4–1.2.5"
      url: "https://msdupuy.github.io/teaching/TT_lectures_2026.pdf"
---

## Definition

Work in exact arithmetic over $\mathbb F\in\{\mathbb R,\mathbb C\}$. The inputs are:

- a normalized finite MPS/TT state $\psi$ of order $d\ge2$;
- a finite Hermitian Hamiltonian $H$ on the full tensor-array coefficient space;
- a positive integer sweep budget $M$;
- a window width $w\in\{1,2\}$; and
- optionally, positive integer rank caps $c_1,\ldots,c_{d-1}$.

The procedure is the following.

1. If the input is in periodic trace form, convert it exactly to the open-boundary TT form using [[lem-na-periodic-mps-to-open-tt]]. Keep the resulting open-boundary core list.

2. For each of $M$ full sweeps, perform one forward pass and one backward pass. For width $w$, the windows are the $d$ single sites when $w=1$, or the $d-1$ adjacent site pairs when $w=2$. Visit them in increasing order in the forward pass and decreasing order in the backward pass.

3. Before each window update, place the TT in mixed canonical gauge about that window using the deterministic rank-revealing QR sweeps of [[lem-na-mixed-canonical-qr-gauge-preserves-state]]. Contract the fixed left and right cores to form the isometric center embedding $E$ and compute the finite effective matrix $H_{\mathrm{eff}}=E^*HE$.

4. Apply the exact ground-vector rule of [[lem-na-finite-hermitian-ground-vector-with-deterministic-tie]] to $H_{\mathrm{eff}}$. Let $x$ be the resulting unit eigenvector and replace the center coefficient vector by $x$. Record its local Rayleigh energy $x^*H_{\mathrm{eff}}x=\lambda_{\min}$ and residual $\|H_{\mathrm{eff}}x-\lambda_{\min}x\|_2$.

5. For a two-site window, reshape the updated center as a matrix with row index (left bond, first physical index) and column index (second physical index, right bond). Compute an exact compact SVD $X=U\Sigma V^*$. In a forward pass replace the first core by the reshape of $U$ and absorb $\Sigma V^*$ into the second core. In a backward pass absorb $U\Sigma$ into the first core and replace the second core by the reshape of $V^*$. Retain every positive singular direction, so this split changes no tensor entries. For a one-site window, keep that site as the center.

6. After each complete forward/backward sweep, if rank caps were supplied, apply [[alg-tensor-train-rounding]] to the current TT and record its cut tails $\delta_1,\ldots,\delta_{d-1}$ and $\tau=(\sum_{k=1}^{d-1}\delta_k^2)^{1/2}$. If $\tau<1$, normalize the rounded tensor and continue from it. If $\tau\ge1$, discard that rounded candidate, retain the last normalized unrounded tensor, and record status **rounding-skipped**. If no rank caps were supplied, do not round.

Return the final normalized TT state, the energy and local-residual records, all accepted discarded-tail records, and status **budget-complete** or **rounding-skipped** according to whether any requested rounding was skipped.

## Remarks

The local eigenproblem is specified as an exact finite Hermitian ground solve. The procedure makes no finite-precision stability, polynomial-cost, spectral-gap, global-minimizer, or convergence claim. A periodic input is first converted exactly to an open-boundary TT; the canonical environment argument is applied only to that open-boundary representation.
