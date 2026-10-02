---
page: residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem-examples
title: "Residues Serre Duality for Curves and the Full Riemann Roch Theorem — Examples"
status: draft
requires: [residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem]
items: []
examples:
  - ex-residue-projective-line
  - ex-serre-duality-projective-line-twists
  - ex-full-rr-projective-line
  - ex-genus-one-rr-degree-positive
  - ex-plane-cubic-canonical-trivial
  - ex-plane-quartic-canonical-hyperplane
  - cex-canonical-map-hyperelliptic-not-embedding
  - cex-degree-two-g-minus-one-not-always-basepoint-free
  - cex-degree-two-g-not-always-very-ample
  - ex-riemann-hurwitz-double-cover
  - ex-residue-pairing-one-cocycle
---

These examples and counterexamples run the page's residue, duality and
Riemann–Roch results on explicit curves and divisors.

On the projective line with affine coordinate $t$, the residues of $f\,dt$ at
the points cut out by irreducible polynomials are computed from the Laurent
expansion in a local parameter, and their sum is checked to vanish, including
the point at infinity. Duality is unpacked for the twists
$\mathcal O(-d-2)$ and $\mathcal O(d)$: the monomial bases pair into the
coefficient of $t^{-1}$, exhibiting the perfect pairing in coordinates. The
full Riemann–Roch theorem is verified on $\mathbf P^1$ for every degree, and
on a genus-one curve it gives $h^0 = \deg$ for positive-degree line bundles.

Adjunction is applied to plane cubics and plane quartics: a smooth cubic has
trivial canonical bundle while a smooth quartic has $\omega_C \cong
\mathcal O_C(1)$ with genus three, recovering the hyperplane class. Three
counterexamples record the sharpness of the standard thresholds: the
canonical map of a hyperelliptic curve factors through the degree-two map to
$\mathbf P^1$ and so is not an embedding, a degree-$2g-1$ line bundle on a
hyperelliptic curve need not be base-point-free, and a degree-$2g$ line bundle
need not be very ample. A tame double cover of $\mathbf P^1$ with $2r$ simple
branch points has its genus computed from the complete Riemann–Hurwitz
formula with the different divisor, and one explicit principal part is
carried through the residue pairing to compute a class of $H^1$ on the
projective line.
