---
id: thm-bidiagonal-svd-backward-error-under-local-stability
kind: theorem
title: "Local stable reflectors and rotations give an aggregate SVD backward error"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [alg-scaled-complex-householder-and-givens-updates, lem-scaled-complex-householder-and-givens-local-backward-error, alg-householder-bidiagonalization, lem-exact-householder-bidiagonal-reduction, alg-implicit-shifted-bidiagonal-qr-with-deflation, lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence, def-frobenius-matrix-norm, thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]
dependency_level: 6
verification:
  precheck: pass
proof_strategy: direct
sources:
  references:
    - title: "Wen-Wei Lin, Lecture Notes of Matrix Computations, §§3.2.2 and 6.3"
      url: "https://zhims.github.io/doc/note/computing/matrixComputations.pdf"
---

## Statement

Let $C_0\in\mathbb F^{M\times p}$, $M\ge p$, be the tall orientation used by [[alg-householder-bidiagonalization]], and let $B_J\in\mathbb F^{p\times p}$ be the final bidiagonal-QR work matrix returned by [[alg-implicit-shifted-bidiagonal-qr-with-deflation]]. Set $C_J=\begin{bmatrix}B_J\\0_{M-p,p}\end{bmatrix}\in\mathbb F^{M\times p}$. Suppose the computed bidiagonal reduction and QR sweeps perform $J$ stages, each either an elementary left/right unitary update or an identity update for a deflation/cleanup write. At stage $j$, assume the actual active matrix obeys
$$C_j=L_j^*(C_{j-1}+E_j)R_j+D_j,$$
where $L_j,R_j$ are unitary and $\eta_j\ge0$, $\|E_j\|_F\le\eta_j\|C_{j-1}\|_F$, and $D_j$ is the additive representation of entries discarded by deflation or cleanup at that stage, with $\delta_j=\|D_j\|_F$. A deflation/cleanup write is represented by $L_j=R_j=I$, $E_j=0$, and the recorded additive change $D_j$. The deflation record returned by the algorithm identifies each such entry and its old value, so it determines $D_j$. Then the returned tall transformed matrix $C_J$ satisfies
$$C_0+E=L C_J R^*$$
for unitary accumulated factors $L,R$ and some $E$ with
$$\|E\|_F\le\left(\prod_{j=1}^J(1+\eta_j)-1\right)\|C_0\|_F+\sum_{j=1}^J\delta_j\prod_{\ell=j+1}^J(1+\eta_\ell).$$
If no deflation or other cleanup is performed, every $\delta_j=0$. For the successful scaled arithmetic realization [[alg-scaled-complex-householder-and-givens-updates]], assume also $0<u<1$ and $(r_j-1)u<1$ for every Householder dimension $r_j$. Under these arithmetic and dimension conditions, [[lem-scaled-complex-householder-and-givens-local-backward-error]] establishes these hypotheses: choose $\eta_j=\eta_H(r_j)$ for Householder updates, $\eta_j=\eta_G$ for Givens updates with an actual target zero write, and its smaller separate-block coefficient when no matrix entry is overwritten. This covers real/complex left and right updates. Every additional discarded entry is included in $D_j$. Rounded dense accumulators remain separate from these exact represented products.

## Facts & Assumptions

**Given:** The two-sided computed updates and local error bounds in the statement, with $C_0$ in tall orientation.

[F1] [[alg-householder-bidiagonalization]] and [[alg-implicit-shifted-bidiagonal-qr-with-deflation]] apply a finite sequence of left and right transformations and explicitly record each deflated entry.

[F2] [[lem-exact-householder-bidiagonal-reduction]] and [[lem-implicit-bidiagonal-qr-bulge-chase-unitary-equivalence]]: in exact arithmetic the transformations are unitary and maintain the stated matrix-factor relation.

[F3] [[def-frobenius-matrix-norm]]: the Frobenius norm is the Euclidean norm of the matrix-entry list, hence satisfies the triangle inequality.

[F4] [[thm-spectral-and-frobenius-norms-are-unitarily-invariant-with-singular-value-formulas-and-rank-comparison]]: left and right unitary multiplication preserve the Frobenius norm.

[A1] For every computed elementary reflector or plane rotation, its active-block update has the displayed local perturbation form and bound. This is a required local arithmetic interface, not a consequence of the exact unitary identities in [F2].

[F5] [[lem-scaled-complex-householder-and-givens-local-backward-error]] supplies the local real/complex left/right arithmetic bounds for the specified successful implementation when $0<u<1$ and $(r_j-1)u<1$ for each Householder dimension $r_j$.

## Proof

1.1 Iterating the norm inequality from [A1] gives $\|C_j\|_F\le(1+\eta_j)\|C_{j-1}\|_F+\delta_j$. Induction from $C_0$ yields $\|C_j\|_F\le\left(\prod_{r=1}^j(1+\eta_r)\right)\|C_0\|_F+\sum_{r=1}^j\delta_r\prod_{s=r+1}^j(1+\eta_s)$: the base case $j=0$ is equality, and the one-step inequality multiplies every prior term by $1+\eta_j$ and adds $\delta_j$. [A1, F3, induction, algebra]

2.1 Set $P_0=I_M$, $Q_0=I_p$, $P_j=P_{j-1}L_j$, $Q_j=Q_{j-1}R_j$, and $\mathcal E_0=0$. Multiplying the assumed stage equation by $P_j$ and $Q_j^*$ gives $P_jC_jQ_j^*=P_{j-1}C_{j-1}Q_{j-1}^*+P_{j-1}E_jQ_{j-1}^*+P_jD_jQ_j^*$. Thus induction gives $C_0+\mathcal E_j=P_jC_jQ_j^*$ with $\mathcal E_j=\mathcal E_{j-1}+P_{j-1}E_jQ_{j-1}^*+P_jD_jQ_j^*$. Take $E=\mathcal E_J$. Unitary left/right multiplication preserves Frobenius norm, so $\|E\|_F\le\sum_{j=1}^J\eta_j\|C_{j-1}\|_F+\sum_{j=1}^J\delta_j$. Substitute step 1.1. For the $C_0$ terms, $\sum_j\eta_j\prod_{r<j}(1+\eta_r)=\prod_r(1+\eta_r)-1$. For a fixed $\delta_i$, its contribution is $\delta_i\left(1+\sum_{j>i}\eta_j\prod_{i<r<j}(1+\eta_r)\right)=\delta_i\prod_{r>i}(1+\eta_r)$. These identities give the stated bound. [step 1.1, F1, F2, F3, F4, algebra]

3.1 The same coordinate unwinding gives $C_J= L^*(C_0+E)R$ for products $L,R$ of the unitary update factors, hence $C_0+E=L C_JR^*$. Step 2.1 gives its error bound; setting every $\delta_j=0$ gives the no-deflation case. [step 2.1, F1, F2, algebra]

4.1 For the specified finite-precision algorithm, the successful range checks and the explicit conditions $0<u<1$ and $(r_j-1)u<1$ permit [F5] at every actual update. It gives exactly [A1], including each target-zero write. Deflation and any additional discarded entries remain $D_j$, so steps 1.1, 2.1, and 3.1 prove the displayed aggregate bound for the concrete implementation. Shift rounding affects which rotation is chosen, not the validity of its unitary backward-error certificate; no unconditional convergence is asserted. [F5, step 3.1, algebra] ∎

