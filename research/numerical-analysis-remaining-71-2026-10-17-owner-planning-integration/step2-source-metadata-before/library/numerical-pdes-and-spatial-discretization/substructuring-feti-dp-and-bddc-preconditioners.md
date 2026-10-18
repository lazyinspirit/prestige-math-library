---
page: substructuring-feti-dp-and-bddc-preconditioners
title: "Substructuring, FETI-DP and BDDC"
status: draft
items:
  - def-pe26-scalar-substructuring-model
  - thm-pe26-local-energy-kernel-and-interior-spd
  - def-pe26-primal-interface-spaces-and-jumps
  - thm-pe26-primal-constraints-remove-floating-kernels
  - def-pe26-discrete-harmonic-extension-and-schur-complement
  - thm-pe26-harmonic-extension-minimizes-energy
  - thm-pe26-static-condensation-is-exact-interface-solve
  - def-pe26-scaled-averaging-and-bddc-preconditioner
  - prop-pe26-bddc-constrained-local-minimization
  - def-pe26-feti-dp-dual-system-and-preconditioner
  - prop-pe26-feti-dp-is-dual-schur-complement
  - lem-pe26-preconditioned-operator-norm-bound
  - lem-pe26-complementary-primal-dual-spectrum
  - thm-pe26-nontrivial-spectrum-bddc-feti-dp
  - lem-pe26-discrete-trace-schur-equivalence
  - lem-pe26-log-edge-cutoff-and-discrete-sobolev
  - lem-pe26-scaled-averaging-energy-bound
  - thm-pe26-condition-number-2d-polylogarithmic
  - rem-pe26-conditioning-and-work-are-separate
examples: []
---

This page develops the primal and dual interface formulations for a conforming scalar $P_1$ discretization of second-order diffusion. It defines local discrete harmonic extensions and Schur complements, proves exact static condensation, and shows how primal corner constraints remove floating-subdomain constants. BDDC restores interface continuity through coefficient-scaled averaging; FETI-DP enforces the remaining jumps with multipliers in the range of the jump map, so redundant multiplier rows do not create retained zero modes. The two preconditioners share their nonunit spectrum when they use the same constraints and scaling.

The polylogarithmic estimate is proved only for two-dimensional polygonal subdomains with bounded shape complexity, matching quasiuniform shape-regular triangulations, scalar coefficients constant on each subdomain, all vertices primal, and coefficient-based edge scaling. The proof establishes the local $H^{1/2}$ trace lift, edge cutoff logarithm and averaging stability. It makes no three-dimensional vertex-only or arbitrary-geometry claim. Coarse-solver work is kept separate from conditioning.

The schematic interface convention is shown below. Rectangles are subdomains, the shared vertical side is an interface, filled dots are primal corners, and open circles are dual edge nodes. The drawing encodes only these definitions; no proof uses it.

```tikz
\begin{tikzpicture}[scale=0.9]
  \draw (0,0) rectangle (4,2);
  \draw (2,0) -- (2,2);
  \node at (1,1.5) {$\Omega_i$};
  \node at (3,1.5) {$\Omega_j$};
  \fill (2,0) circle (2pt);
  \fill (2,2) circle (2pt);
  \draw[fill=white] (2,0.65) circle (2pt);
  \draw[fill=white] (2,1.00) circle (2pt);
  \draw[fill=white] (2,1.35) circle (2pt);
  \node[anchor=west] at (2.08,0.65) {dual nodes};
  \node[anchor=west] at (2.08,1.90) {primal corners};
\end{tikzpicture}
```
