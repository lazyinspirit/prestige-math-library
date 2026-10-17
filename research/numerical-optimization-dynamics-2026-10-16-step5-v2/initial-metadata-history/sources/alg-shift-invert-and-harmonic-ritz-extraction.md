---
id: alg-shift-invert-and-harmonic-ritz-extraction
kind: algorithm
title: "Shift-invert and harmonic Ritz extraction with solve and pencil status"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-arnoldi-process
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - prop-eigenvalue-iff-shift-is-not-invertible
  - def-regular-generalized-eigenvalue-pencil
  - def-ritz-values-and-ritz-vectors-from-arnoldi
  - def-full-reduced-and-column-pivoted-computational-qr-factorisations
  - alg-finite-budget-qz-iteration-with-deflation-and-residual
  - prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yousef Saad, Numerical Methods for Large Eigenvalue Problems, second edition, §8.1"
      url: "https://www-users.cse.umn.edu/~saad/eig_book_2ndEd.pdf"
    - title: "Peter Arbenz, Lecture Notes on Solving Large Scale Eigenvalue Problems, §12.6"
      url: "https://people.inf.ethz.ch/arbenz/ewp/Lnotes/lsevp.pdf"
---

## Definition

Let $A\in\mathbb C^{n\times n}$, $n\ge1$, choose a shift
$\sigma\in\mathbb C$, and put $M=A-\sigma I$. This procedure returns candidate
values and their residual data; it asserts no convergence or forward-error
bound. Its branch statuses are `available`, `arnoldi-breakdown`,
`linear-solve-unavailable`, `zero-transformed-Ritz-value`,
`infinite-harmonic-value`, `projected-pencil-unresolved`,
`qz-budget-exhausted`, and `qz-certificate-inconclusive`.

**Shift-invert branch.** This branch requires $M$ to be invertible, equivalently
that $\sigma$ is not an eigenvalue of $A$ by
[[prop-eigenvalue-iff-shift-is-not-invertible]]. Its inputs also include a
nonzero starting vector $v$, an integer Arnoldi dimension $1\le m\le n$, a
residual tolerance $\tau\ge0$, and a solve routine. Normalize
$v_1=v/\|v\|_2$. For $j=1,\ldots,m$, request either the exact solution
$y_j=M^{-1}v_j$ or a computed vector $y_j$ together with its actual equation
residual $s_j=My_j-v_j$. If a requested solve is unavailable, return
`linear-solve-unavailable` with the residuals already recorded. Set $w=y_j$.
For $i=1,\ldots,j$, compute $h_{ij}=\langle w,v_i\rangle$ and replace
$w\gets w-h_{ij}v_i$. Repeat this pass once, adding each second-pass
coefficient to the corresponding $h_{ij}$. Set $h_{j+1,j}=\|w\|_2$. If this
norm is zero, set the current dimension to $k=j$ and stop with status
`arnoldi-breakdown`; otherwise set $v_{j+1}=w/h_{j+1,j}$. After $m$ columns,
set $k=m$ and stop with status `available`.
When every solve is exact, this is Arnoldi applied to $M^{-1}$. When any solve
is inexact, the projected matrix is only the one produced from the computed
vectors; the procedure makes no exact-Arnoldi or convergence claim for that
branch.

Compute the Ritz pairs $(\theta,z)$ of the current $k\times k$ matrix $H$ as
in [[def-ritz-values-and-ritz-vectors-from-arnoldi]], normalize $z$ to unit
norm, and lift $u=V_kz$. For each $\theta\ne0$, report the transformed candidate
$\lambda=\sigma+1/\theta$, the lifted vector $u$, and the directly computed
original residual $r_A=Au-\lambda u$. Mark this candidate accepted exactly
when $\|r_A\|_2\le\tau$. If $\theta=0$, assign no finite inverse map and mark
that candidate `zero-transformed-Ritz-value`. To record the solve-error
transfer for a candidate with $\theta\ne0$, request one additional solve
$My=u$; if it is available, store $s_0=My-u$ and $r_T=y-\theta u$ alongside
the directly computed residual $r_A$.
If this additional solve is unavailable, return
`linear-solve-unavailable` with the candidate and accumulated ledger.

**Harmonic Ritz branch.** This branch takes a full-column-rank trial basis
$U\in\mathbb C^{n\times k}$, $k\ge1$; it does not require $M$ to be
invertible. Form $W=MU$ and
$$G=W^*W=U^*M^*MU,\qquad C=W^*U=U^*M^*U.$$
Compute an exact column-pivoted QR of $W$ as in
[[def-full-reduced-and-column-pivoted-computational-qr-factorisations]] and let
$r_W$ be its exact rank. If $r_W<k$, choose $z\ne0$ with $Wz=0$. Then
$z^*G=(Wz)^*W=0$ and $z^*C=(Wz)^*U=0$. Thus the nonzero row
$z^*$ annihilates $G-\eta C$ for every $\eta$; if this matrix were invertible,
right multiplication by its inverse would force $z^*=0$, a contradiction.
Hence $G-\eta C$ is singular for every $\eta$; return
`projected-pencil-unresolved`. If $W$ has full column rank, then
$z^*Gz=\|Wz\|_2^2>0$ for every $z\ne0$. Thus $G$ is positive definite and
the pencil $G-\eta C$ is regular in the convention of
[[def-regular-generalized-eigenvalue-pencil]], since
$\det(G-0C)=\det G\ne0$.

Supply a finite QZ sweep budget $N\ge0$ and tolerance $\tau_{QZ}\ge0$, and run
[[alg-finite-budget-qz-iteration-with-deflation-and-residual]] on $(G,C)$.
Compute $G,C$ exactly in the mathematical procedure; a finite implementation
must include their formation errors in the perturbation ledger or return
`qz-certificate-inconclusive`. On `qz-computed`, require its exact-factor and
local-update certificates; if either is unavailable, return
`qz-certificate-inconclusive`. With these certificates,
[[prop-finite-budget-qz-iteration-terminates-and-preserves-pencil-equivalence]]
then records equivalence to a perturbed projected pencil. For each diagonal
index $i$, set $\alpha_i=S_{ii}$ and $\beta_i=T_{ii}$. If
$(\alpha_i,\beta_i)=(0,0)$, return `projected-pencil-unresolved`; if
$\beta_i\ne0$, report the computed harmonic Ritz value
$\lambda_i=\sigma+\alpha_i/\beta_i$; if $\beta_i=0$, mark that candidate
`infinite-harmonic-value`. These are values of the computed perturbed
pencil, with the QZ residual and perturbation ledger retained; no exact-root,
eigenvector, or forward-error claim is made. After processing all diagonal
candidates, return `available` with the candidate list, its per-candidate
marks, and the residual and perturbation ledger. Map a QZ `budget-exhausted` status
to `qz-budget-exhausted`; map a QZ `certificate-inconclusive` or `range-failure`
to `qz-certificate-inconclusive`; map `singular-pencil-suspected` to
`projected-pencil-unresolved`.
