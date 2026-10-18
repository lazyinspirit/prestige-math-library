---
page: exterior-wave-problems-absorbing-boundaries-and-pml
title: Exterior waves, absorbing boundaries and PML
status: draft
items:
  - lem-pe18-spherical-hankel-modulus-and-radiation-bounds
  - thm-pe18-rellich-uniqueness-for-a-spherical-obstacle
  - def-pe18-exact-spherical-dtn-map
  - thm-pe18-exact-spherical-dtn-map-on-smooth-data
  - def-pe18-spherical-dtn-truncated-variational-problem
  - lem-pe18-modal-trace-and-form-continuity
  - thm-pe18-spherical-exact-dtn-variational-wellposedness
  - def-pe18-local-impedance-absorbing-boundary
  - thm-pe18-planar-impedance-reflection-coefficient
  - thm-pe18-spherical-impedance-modal-reflection
  - def-pe18-cartesian-complex-stretch-pml
  - thm-pe18-pml-perfect-matching-and-propagating-mode-decay
  - thm-pe18-finite-pml-dirichlet-reflection
examples: []
requires:
  - spectral-collocation-and-galerkin-methods
  - boundary-integral-equations-and-galerkin-bem
---

The exterior model and angular, radial-flux and outgoing-mode foundations are placed on [[boundary-integral-equations-and-galerkin-bem]], retaining their original item identifiers. This page uses them for the spherical-obstacle and truncation results below.

This page fixes the time factor $e^{-i\omega t}$ and proves the sound-soft exterior Helmholtz results for a centered spherical obstacle with smooth boundary data. Spherical harmonic projections reduce the exterior equation to radial modes; the outgoing spherical Hankel mode gives both the exact modal Dirichlet-to-Neumann (DtN) map and an exact variational truncation on a concentric annulus. The local impedance condition is compared with that exact map through its plane-wave and spherical-mode reflection coefficients.

The PML branch is Cartesian, homogeneous, and modewise. It proves exact matching at the interface and attenuation for propagating modes whose normal wavenumber stays bounded below. The finite layer calculation gives its exact reflected amplitude for a Dirichlet termination.

The two diagrams fix the geometric and sign conventions used in the formulas. The concentric curves denote the obstacle boundary $S_a$ and artificial boundary $S_R$, with $0<a<R$; the PML coordinate begins at $x=0$, where its stretch is the identity.

```tikz
\begin{tikzpicture}[scale=1.0]
  \draw[thick] (0,0) circle (0.75);
  \draw[thick,dashed] (0,0) circle (2.0);
  \fill (0,0) circle (1.4pt);
  \draw[->] (0,0) -- (0.75,0) node[midway,below] {$a$};
  \draw[->] (0,0) -- (2.0,0) node[midway,below] {$R$};
  \node at (0,0.25) {$B_a$};
  \node at (0,1.15) {$a<r<R$};
  \node at (0,2.25) {$S_R$};
  \draw[->,thick] (2.15,0.55) -- (2.75,0.55);
  \node[right] at (2.75,0.55) {outgoing};
\end{tikzpicture}
```

```tikz
\begin{tikzpicture}[x=1.0cm,y=1.0cm]
  \draw[thick] (-2,0) -- (0,0);
  \draw[thick,fill=blue!8] (0,-0.8) rectangle (2.4,0.8);
  \draw[thick,dashed] (2.4,-0.8) -- (2.4,0.8);
  \draw[->,thick] (-1.8,0.25) -- (0,0.25);
  \draw[->,thick] (0,0.25) -- (1.8,0.25);
  \draw[->] (0,-0.55) -- (1.0,-0.55) node[midway,below] {$x$};
  \draw[->] (0,-0.55) -- (0,0.2) node[midway,left] {$y$};
  \node at (-1.0,0.65) {physical};
  \node at (1.2,0.65) {PML};
  \node[below] at (0,-0.8) {$x=0,\ X(0)=0$};
  \node[below] at (2.4,-0.8) {$x=L$};
\end{tikzpicture}
```

The arrows indicate an outgoing mode across the interface. In the PML strip the analytic coordinate is $X(x)=x+iS(x)$, so the mode amplitude is multiplied by $e^{-qS(x)}$ only for a real positive normal wavenumber $q$. The proofs do not use either drawing.
