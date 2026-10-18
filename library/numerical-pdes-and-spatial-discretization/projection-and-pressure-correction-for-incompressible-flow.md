---
page: projection-and-pressure-correction-for-incompressible-flow
title: "Projection, pressure correction and saddle-point solvers"
status: published
items:
  - def-na-periodic-staggered-grid-stokes-operators
  - def-na-symmetric-saddle-point-system-and-block-preconditioners
  - lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare
  - lem-na-periodic-staggered-grid-smooth-sampling-consistency
  - thm-na-saddle-point-exact-schur-solve
  - thm-na-pressure-schur-spectral-equivalence-from-infsup
  - alg-na-periodic-incremental-pressure-correction
  - alg-na-bdf2-incremental-and-rotational-pressure-correction
  - thm-na-symmetrically-preconditioned-saddle-point-spectrum
  - thm-na-periodic-pressure-correction-solves-well-defined
  - thm-na-periodic-discrete-helmholtz-projection
  - thm-na-periodic-pressure-correction-modified-energy-identity
  - thm-na-periodic-pressure-correction-first-order-velocity-error
  - cor-na-mini-element-pressure-mass-schur-bounds
  - cor-na-mini-element-pressure-mass-block-spectrum
examples: []
---

# Projection, pressure correction and saddle-point solvers

## Periodic staggered-grid setting

The projection results here concern the unit torus $\mathbb T^d$, a uniform
periodic grid with $N\ge2$, face-centred velocity arrays, cell-centred
pressure arrays, and the mean-zero pressure gauge. The exact index and sign
conventions are fixed in
[[def-na-periodic-staggered-grid-stokes-operators]]. In particular,
$\Delta_h=D_hG_h$ is negative semidefinite, $A_h=-\Delta_h^V$ is positive
semidefinite, and $D_h$ and $G_h$ are negative adjoints. The constant
pressure mode is removed by working in $Q_h$; the pressure Laplacian is then
invertible by
[[lem-na-periodic-grid-pressure-laplacian-zero-mode-and-poincare]]. These
claims use periodicity and the declared staggered placement. Collocated
central differences have a distinct checkerboard null mode, shown in
[[projection-and-pressure-correction-for-incompressible-flow-examples]].

## Incremental correction and exact projection

[[alg-na-periodic-incremental-pressure-correction]] defines the backward
Euler predictor, mean-zero pressure-increment Poisson solve, velocity
correction, and incremental pressure update. The well-definedness proof
[[thm-na-periodic-pressure-correction-solves-well-defined]] verifies the
predictor and pressure solves and preservation of the pressure gauge.
Each force input has zero discrete mean in every face component.
[[thm-na-periodic-discrete-helmholtz-projection]] identifies the velocity
update with the mass-orthogonal projector onto $\ker D_h$, so the corrected
velocity is exactly discretely divergence-free.

The step structure is summarized below. The arrows show the dependencies
between the three algebraic operations; every box is defined in the algorithm
item, and the diagram is not used as a proof.

```tikz
\begin{tikzpicture}[node distance=2.0cm, >=stealth, every node/.style={draw, rounded corners, align=center, minimum width=3.4cm, minimum height=0.9cm}]
  \node (pred) {Velocity predictor\\solve for provisional velocity};
  \node (poisson) [right of=pred, xshift=2.5cm] {Pressure increment\\solve mean-zero Poisson equation};
  \node (correct) [right of=poisson, xshift=2.5cm] {Velocity correction\\project to zero divergence};
  \node (pupdate) [below of=poisson, yshift=-1.2cm] {Pressure update\\add the computed increment};
  \draw[->] (pred) -- (poisson);
  \draw[->] (poisson) -- (correct);
  \draw[->] (poisson.south) -- (pupdate.north);
\end{tikzpicture}
```

The pressure-increment box feeds two updates: the velocity correction and the
pressure gauge update. The latter uses the same increment and does not alter
the velocity projection identity.
[[thm-na-periodic-pressure-correction-modified-energy-identity]] derives an
exact modified velocity-pressure energy identity for this periodic
backward-Euler scheme. No wall-boundary version of that identity is asserted.

## BDF2 and rotational variants

[[alg-na-bdf2-incremental-and-rotational-pressure-correction]] records the
standard incremental and rotational BDF2 variants, with the factor $2k/3$
in the velocity correction and the corresponding rotational pressure
update. The algorithms have explicit periodic gauge conventions and their
linear solves are well-defined by
[[thm-na-periodic-pressure-correction-solves-well-defined]]. No stability,
second-order error rate, or pressure rate is attached to these variants on
this page.

## Smooth periodic velocity accuracy

For smooth periodic solutions of the unsteady Stokes equations, the local
sampling lemma [[lem-na-periodic-staggered-grid-smooth-sampling-consistency]]
proves second-order spatial consistency of the staggered differences. Under
the explicit compatibility and smoothness assumptions in
[[thm-na-periodic-pressure-correction-first-order-velocity-error]], the
backward-Euler incremental method has the velocity estimate
$O(h^2+k)$ over a fixed time interval. The result concerns velocity only and
does not claim a pressure-error rate. Its domain is the torus; bounded-wall
pressure and boundary-layer rates require separate proofs. A tangential
no-slip defect for a Neumann pressure correction is exhibited on the B page.

## Saddle systems and conditional preconditioning bounds

[[def-na-symmetric-saddle-point-system-and-block-preconditioners]] fixes the
real symmetric saddle matrix, positive Schur matrix $S=BA^{-1}B^T$, exact
block-LU solve, pressure-mass surrogate $\gamma M_Q$, and Cholesky-symmetric
preconditioning convention. The exact solve is verified in
[[thm-na-saddle-point-exact-schur-solve]]. The generic spectral equivalence
[[thm-na-pressure-schur-spectral-equivalence-from-infsup]] requires the
stated inf-sup, continuity, and velocity-stiffness constants;
[[thm-na-symmetrically-preconditioned-saddle-point-spectrum]] translates
those bounds into eigenvalue intervals. These are spectral statements, not
claims of an iteration count or generic speed-up.

For the bounded-domain MINI pair, the steady Stokes corollaries
[[cor-na-mini-element-pressure-mass-schur-bounds]] and
[[cor-na-mini-element-pressure-mass-block-spectrum]] use the actual Fortin,
Korn, and inf-sup hypotheses with viscosity scaling shown explicitly. The
pressure-mass equivalence is for the steady velocity stiffness; no shifted
unsteady Schur estimate is inferred from it.

## Scope and source trail

The periodic projection formulas and their boundary caveats follow the
survey of Guermond, Minev and Shen and the NPTEL lecture on pressure-velocity
coupling. Block factorization and pressure-Schur scaling follow the saddle
point survey by Benzi, Golub and Liesen. The local statements on this page
retain their own assumptions and complete proofs; cited material does not
replace those arguments.
