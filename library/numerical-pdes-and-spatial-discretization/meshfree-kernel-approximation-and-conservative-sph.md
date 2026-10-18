---
page: meshfree-kernel-approximation-and-conservative-sph
title: "Meshfree kernel approximation and conservative sph"
status: published
requires: [ interacting-particle-mean-field-and-vortex-blob-error ]
items:
  - def-meshfree-cell-quadrature-and-fill-radius
  - def-scaled-symmetric-compact-kernel-family
  - def-regularized-conservative-sph-system
  - lem-cellwise-particle-quadrature-oscillation-bound
  - lem-symmetric-kernel-moment-cancellation
  - lem-compact-kernel-derivative-moment-identities
  - lem-scaled-kernel-moments-and-derivative-bounds
  - lem-sph-pair-forces-antisymmetric-and-central
  - thm-second-order-meshfree-convolution-bias
  - lem-regularized-sph-vector-field-lipschitz-on-positive-density-tube
  - prop-sph-conserves-linear-and-angular-momentum
  - prop-sph-matched-internal-energy-conserves-total-energy
  - thm-first-derivative-meshfree-convolution-bias
  - thm-meshfree-particle-kernel-quadrature-error
  - cor-meshfree-joint-refinement-consistency
  - thm-regularized-sph-local-wellposedness
  - thm-forward-euler-global-error-on-controlled-sph-tube
examples: []
---

## Scope

This page proves kernel smoothing and particle-cell quadrature bounds for a symmetric normalized compactly supported kernel. The convolution value bias is second order for C² fields with bounded Hessian; the kernel-gradient bias is second order for C³ fields with bounded third derivative. The particle quadrature estimate assumes f∈C¹ with both f and ∇f bounded, h≤ε≤1, and an interior point (or a periodic extension). Under these bounds, value consistency follows when ε→0 and h/ε→0; derivative consistency follows when ε→0 and h/ε²→0. The joint-refinement statement gives both conclusions for f∈C³ with f and its derivatives through order three bounded. The particle set must refine jointly with ε; keeping a fixed neighbor pattern does not guarantee derivative consistency.

Boundary truncation can destroy constant reproduction. The convergence theorems apply at interior points whose full kernel support lies in the domain, or on a periodic extension. No general boundary consistency is claimed; a boundary solver or uniformly invertible correction is a separate obligation.

## Particle-cell geometry

The cell rule in [[def-meshfree-cell-quadrature-and-fill-radius]] assigns each node x_j a bounded Jordan-measurable cell C_j and positive volume V_j, with the cell integrals included as part of the rule data. The quadrature sum uses V_jg(x_j), and the cellwise error is controlled by the oscillation of the integrand on cells meeting the kernel support.

Diagram schematic (not to scale): each cell contains its node, the cell volumes are the quadrature weights, and only cells intersecting the compact kernel footprint contribute. The dashed footprint is centered at the evaluation point x_i; no proof relies on this drawing.

~~~tikz
\begin{tikzpicture}[>=stealth,scale=0.95]
  \draw[->] (-4.1,0) -- (4.1,0) node[right] {$y$};
  \draw[fill=blue!8] (-3.4,-0.12) rectangle (-1.1,0.12);
  \draw[fill=blue!8] (-1.1,-0.12) rectangle (0.45,0.12);
  \draw[fill=blue!8] (0.45,-0.12) rectangle (2.15,0.12);
  \draw[fill=blue!8] (2.15,-0.12) rectangle (3.6,0.12);
  \foreach \x/\lab in {-2.4/x_{j-1},-0.35/x_j,1.3/x_{j+1},2.8/x_{j+2}} {
    \fill (\x,0) circle (2pt);
    \node[below=5pt] at (\x,0) {\ensuremath{\lab}};
  }
  \draw[red,dashed,thick] (-0.35,0.48) -- (2.95,0.48);
  \draw[red,dashed] (-0.35,0.43) -- (-0.35,0.05);
  \draw[red,dashed] (2.95,0.43) -- (2.95,0.05);
  \draw[green!55!black,dotted,thick] (1.3,-0.8) -- (1.3,0.65);
  \node[red,above] at (1.3,0.48) {$|x_i-y|\le R\varepsilon$};
  \node at (-2.25,0.28) {$C_{j-1}$};
  \node at (-0.32,0.28) {$C_j$};
  \node at (1.30,0.28) {$C_{j+1}$};
  \node at (2.88,0.28) {$C_{j+2}$};
  \node[green!45!black,below] at (1.3,-0.72) {$x_i=x_{j+1}$};
  \node[blue!60!black] at (1.3,-1.1) {$V_{j+1}=|C_{j+1}|$};
\end{tikzpicture}
~~~

## Conservative SPH and finite-time error

For fixed ε>0 the finite SPH system uses positive masses, a C² radial kernel, a smooth pressure map, and a positive lower bound on each density in the controlled tube. Pair antisymmetry conserves total linear momentum; radial forces conserve angular momentum. The displayed matched internal-energy equation conserves the semidiscrete total energy. These are semidiscrete statements. The page proves a first-order global forward-Euler error estimate under a tube-margin hypothesis; it does not claim the time integrator preserves energy or momentum exactly.

The published prerequisite [[interacting-particle-mean-field-and-vortex-blob-error]] supplies probability and signed-vorticity mean-field interfaces. The finite state-dependent pressure force studied here is not an instance of its fixed-kernel mean-field vector field, so the SPH conservation and Euler-error proofs are supplied locally.

This construction gives no convergence theorem for compressible Euler solutions or shock limits.
