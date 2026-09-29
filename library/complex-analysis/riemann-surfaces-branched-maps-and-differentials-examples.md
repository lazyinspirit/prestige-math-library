---
page: riemann-surfaces-branched-maps-and-differentials-examples
title: "Riemann Surfaces, Branched Maps, and Differentials: Examples and Counterexamples"
status: draft
items: []
examples:
  - ex-basic-riemann-surface-atlases
  - ex-complex-torus-holomorphic-atlas
  - ex-smooth-affine-conic-as-punctured-plane
  - ex-nonsingular-algebraic-curve-charts
  - ex-coordinate-change-for-meromorphic-differential
  - cex-exponential-local-biholomorphism-is-not-proper
  - ex-hyperelliptic-double-cover-ramification
  - ex-power-map-riemann-hurwitz
---

The examples build the standard Riemann surfaces from explicit atlases: the
sphere with its two charts and transition $w\mapsto1/w$, plane domains with the
identity chart, the complex lattice torus with the quotient atlas, and the
smooth affine conic, exhibited as the punctured plane by an explicit
biholomorphism. The general nonsingular algebraic curve example runs the
implicit-function-theorem chart construction of the companion page.

The differential computation inverts coordinates at infinity on the sphere:
$dz/z$ has residues $+1$ and $-1$ at $0$ and $\infty$, and $dz$ has a double
pole with residue $0$ at infinity, both in agreement with the compact residue
theorem. The two large examples are worked Riemann–Hurwitz computations: the
power map $z\mapsto z^{n}$ on the sphere, whose two critical points contribute
the total deficit $2(n-1)$, and the hyperelliptic curves $y^2=P(x)$, completed
at infinity, which are degree-two covers of the sphere whose genus is read off
from the parity of $\deg P$. The counterexample shows that a local
biholomorphism need not be proper — the exponential map has infinite fibres —
so the properness hypothesis in the degree theorem cannot be dropped.
