---
id: thm-bidiagonal-svd-backward-error-under-local-stability
kind: theorem
title: "Local stable reflectors and rotations give an aggregate SVD backward error"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-householder-bidiagonalization, lem-exact-householder-bidiagonal-reduction, alg-implicit-shifted-bidiagonal-qr-with-deflation, lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence, def-frobenius-matrix-norm]
dependency_level: 3
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §§3.2.2 and 6.3"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Statement

Let $C_0\in\mathbb F^{M\times p}$, $M\ge p$, be the tall orientation used by [[alg-householder-bidiagonalization]]. Suppose the computed bidiagonal reduction and QR sweeps perform $J$ elementary left/right unitary updates. At update $j$, assume the actual active matrix obeys
$$C_j=L_j^*(C_{j-1}+E_j)R_j+D_j,$$
where $L_j,R_j$ are unitary and $\eta_j\ge0$, $\|E_j\|_F\le\eta_j\|C_{j-1}\|_F$, and $D_j$ is the post-transform additive representation of entries discarded by deflation, with $\delta_j=\|D_j\|_F$. Then the returned transformed matrix $C_J$ satisfies
$$C_0+E=L C_J R^*$$
for unitary accumulated factors $L,R$ and some $E$ with
$$\|E\|_F\le\left(\prod_{j=1}^J(1+\eta_j)-1\right)\|C_0\|_F+\sum_{j=1}^J\delta_j\prod_{\ell=j+1}^J(1+\eta_\ell).$$
In the no-deflation case every $\delta_j=0$. The local inequalities are hypotheses: they must be established for each reflector and plane rotation used by the implementation before this theorem certifies that implementation.

## Facts & Assumptions

**Given:** The two-sided computed updates and local error bounds in the statement, with $C_0$ in tall orientation.

[F1] [[alg-householder-bidiagonalization]] and [[alg-implicit-shifted-bidiagonal-qr-with-deflation]] apply a finite sequence of left and right transformations and explicitly record each deflated entry.

[F2] [[lem-exact-householder-bidiagonal-reduction]] and [[lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence]]: in exact arithmetic the transformations are unitary and maintain the stated matrix-factor relation.

[F3] [[def-frobenius-matrix-norm]]: the Frobenius norm is the Euclidean norm of the matrix-entry list, hence satisfies the triangle inequality.

[A1] For every computed elementary reflector or plane rotation, its active-block update has the displayed local perturbation form and bound. This is a required local arithmetic interface, not a consequence of the exact unitary identities in [F2].

## Proof

1.1 Iterating the norm inequality from [A1] gives $\|C_j\|_F\le(1+\eta_j)\|C_{j-1}\|_F+\delta_j$. Induction from $C_0$ yields $\|C_j\|_F\le\left(\prod_{r=1}^j(1+\eta_r)\right)\|C_0\|_F+\sum_{r=1}^j\delta_r\prod_{s=r+1}^j(1+\eta_s)$: the base case $j=0$ is equality, and the one-step inequality multiplies every prior term by $1+\eta_j$ and adds $\delta_j$. [A1, F3, induction, algebra]

2.1 Unwind each update in the accumulated unitary coordinates supplied by [F1]–[F2]. The original-input perturbation is the sum of each $E_j$ and each $D_j$ transported by products of later unitary factors. Unitary left/right multiplication preserves Frobenius norm, so $\|E\|_F\le\sum_{j=1}^J\eta_j\|C_{j-1}\|_F+\sum_{j=1}^J\delta_j$. Substitute step 1.1. For the $C_0$ terms, $\sum_j\eta_j\prod_{r<j}(1+\eta_r)=\prod_r(1+\eta_r)-1$. For a fixed $\delta_i$, its contribution is $\delta_i\left(1+\sum_{j>i}\eta_j\prod_{i<r<j}(1+\eta_r)\right)=\delta_i\prod_{r>i}(1+\eta_r)$. These identities give the stated bound. [step 1.1, F1, F2, F3, algebra]

3.1 The same coordinate unwinding gives $C_J= L^*(C_0+E)R$ for products $L,R$ of the unitary update factors, hence $C_0+E=L C_JR^*$. Step 2.1 gives its error bound; setting every $\delta_j=0$ gives the no-deflation case. [step 2.1, F1, F2, algebra] ∎
