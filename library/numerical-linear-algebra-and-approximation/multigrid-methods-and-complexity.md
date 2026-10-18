---
page: multigrid-methods-and-complexity
title: "Multigrid methods and complexity"
status: published
items:
  - def-galerkin-coarse-grid-correction
  - lem-zero-boundary-piecewise-affine-functions-lie-in-h1zero
  - thm-galerkin-coarse-correction-is-energy-orthogonal-projector
  - def-symmetric-two-grid-error-operator
  - alg-aggregation-based-algebraic-multigrid-hierarchy
  - lem-one-dimensional-poisson-smoothing-and-approximation
  - alg-finite-galerkin-v-cycle
  - thm-two-grid-energy-contraction-under-joint-estimate
  - thm-aggregation-amg-hierarchy-preserves-spd-and-terminates
  - thm-galerkin-v-cycle-work-recurrence-master-regimes
  - thm-one-dimensional-poisson-two-grid-energy-contraction
examples: []
---

This page fixes a finite-dimensional real SPD convention for Galerkin
multigrid. A full-column-rank prolongation $P$ defines the Galerkin matrix
$A_H=P^{\mathsf T}A_hP$; the exact correction
$C=I-PA_H^{-1}P^{\mathsf T}A_h$ is proved to be the $A_h$-orthogonal
projector onto the complement of the coarse space. A symmetric two-grid error
map is formed from a pre-smoother, that projector, and the $A_h$-adjoint
post-smoother.

The matrix chain below draws the coarse correction subtracted from an input
fine-grid error. Each arrow is the indicated linear map; its composite is
$PA_H^{-1}P^{\mathsf T}A_h$, so the correction is $I$ minus this composite.

```tikzcd
\begin{tikzcd}
\mathbb{R}^n \arrow[r,"P^{\mathsf T}A_h"] & \mathbb{R}^m \arrow[r,"A_H^{-1}"] & \mathbb{R}^m \arrow[r,"P"] & \mathbb{R}^n
\end{tikzcd}
```

For a general hierarchy, contraction is conditional on an explicit joint
estimate $\|CSx\|_{A_h}^2\le\rho\|x\|_{A_h}^2$ with $\rho<1$.
Separate smoothing and approximation estimates do not imply this bound until
their compatibility is shown. The page proves that compatibility for one
concrete 1D Poisson hierarchy: exact piecewise-linear interpolation and a
Richardson smoother give $\rho=2/(2\nu+1)$ uniformly in the number of fine
intervals. The derivation uses the support of the Galerkin complement and a
finite spectral estimate.

The aggregation AMG setup defines a thresholded negative-coupling graph,
disjoint aggregates, indicator prolongations, and a finite Galerkin hierarchy.
It reports `coarse-reached`, `level-cap`, or `coarsening-stalled`; these setup
statuses make no general convergence claim. The page also defines a finite
Galerkin V/W-cycle. Its work count follows $T(N)=cN+\gamma T(N/2^d)$ under
uniform per-level linear work and fixed coarsening; this work statement is
separate from convergence.

The page interfaces include [[preconditioner-algorithms-and-residual-metrics]]
for shared residual and method context and
[[lax-milgram-and-weak-elliptic-solutions]] for the homogeneous weak Dirichlet
Poisson form used in the finite-element examples. The A-page proofs cite exact
item statements from these interfaces wherever they use a result.

The cycle diagram records the recursive data flow: downward arrows restrict a
fine residual, the base node solves exactly, and upward arrows prolong a
coarse correction. Pre- and post-smoothing occur at each non-base level. The
diagram explains the procedure only; the algebraic proofs above and below do
not rely on it.

```tikz
\begin{tikzpicture}[>=stealth]
  \node (f) at (0,0) {fine level $j$};
  \node (c) at (0,-1.2) {coarse level $j-1$};
  \node (b) at (0,-2.4) {base level $0$};
  \draw[->] (f) -- node[left] {restrict residual} (c);
  \draw[->] (c) -- node[left] {recurse} (b);
  \draw[->] (b.east) .. controls +(1,0.4) and +(1,-0.4) .. node[right] {prolong correction} (c.east);
  \draw[->] (c.east) .. controls +(1,0.4) and +(1,-0.4) .. node[right] {prolong correction} (f.east);
\end{tikzpicture}
```
