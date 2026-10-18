---
page: vertex-algebra-state-field-foundations
title: "Vertex Algebra Axioms and State–Field Constructions"
status: draft
requires:
  - affine-current-algebras-virasoro-and-sugawara
items:
  - def-formal-distribution-on-a-vector-space
  - lem-affine-vacuum-character-at-level-k
  - def-vertex-algebra-state-field
  - def-universal-affine-vacuum-module
  - lem-locality-determines-formal-ope-coefficients
  - lem-affine-vacuum-module-pbw-basis
  - lem-affine-translation-derivation
  - lem-state-field-reconstruction-from-local-generators
  - lem-affine-vacuum-module-is-restricted
  - lem-affine-current-fields-are-local
  - thm-universal-affine-vertex-algebra
examples: []
---

This page fixes the ordinary, non-super state–field convention $Y(a,z)=\sum_{n\in\mathbb Z}a_{(n)}z^{-n-1}$. Fields act on lower-truncated formal Laurent series; locality is polynomial annihilation of their commutator. The formal OPE coefficients are residues and delta-derivative coefficients, so OPE notation carries no analytic convergence claim.

The affine current algebra prerequisite is [[affine-current-algebras-virasoro-and-sugawara]].

For a finite-dimensional complex simple Lie algebra $\mathfrak g$ with the normalized invariant form, the universal affine vacuum module is induced from $\mathfrak g[t]$ acting trivially and the central element acting by $k$. Its currents satisfy $[J^x(z),J^y(w)]=J^{[x,y]}(w)\delta(z,w)+kB(x,y)\partial_w\delta(z,w)$. Locality and reconstruction give the vertex-algebra structure for every $k\in\mathbb C$, including the critical value. A grading, simple quotient, unitarity, and the Sugawara conformal vector are separate structures; the normalized Sugawara formula requires $k+h^\vee\ne0$ and is not used to construct this vertex algebra.

The companion [[vertex-algebra-state-field-foundations-examples]] checks the commutative differential-algebra example, the critical-level $\mathfrak{sl}_2$ current OPE, and the distinction between field truncation and locality.
