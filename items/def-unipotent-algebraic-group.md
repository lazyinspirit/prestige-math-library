---
id: def-unipotent-algebraic-group
kind: definition
title: Unipotent algebraic groups and unipotent representations
dependency_level: 4
deps:
  - def-linear-basis
  - def-affine-scheme
  - def-group-scheme-over-a-field
  - def-linear-subspace
  - def-morphism-and-closed-subgroup-scheme
  - def-rational-representation-and-comodule-of-an-affine-group-scheme
  - def-vector-space
  - lem-finite-dimensional-subcomodules-contain-elements
provenance:
  statement: literature-derived
  proof: not-applicable
status: published
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Section 6.45, printed p. 135; Definition 14.2 and Proposition 14.3, printed pp. 279-280
    - title: Florian Herzig, Linear Algebraic Groups (University of Toronto lecture notes, 2013)
      url: https://www.math.toronto.edu/~herzig/lin-alg-groups13.pdf
      locator: Definition 38, Proposition 39 and Corollaries 40-41, printed pp. 19-20 (smooth classical groups over algebraically closed fields)
---
## Definition

Let $k$ be a field and let $G$ be an affine algebraic group over $k$, that is, an affine group scheme of finite type over $k$ ([[def-affine-scheme]], [[def-group-scheme-over-a-field]]).

**(a) Unipotent representations.** A finite-dimensional rational representation $(V,r,\rho)$ of $G$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]], [[def-vector-space]]) is **unipotent** if there is a $k$-basis of $V$ ([[def-linear-basis]]) such that, for every commutative $k$-algebra $R$ and every $g\in G(R)$, the operator $r_R(g)$ on $V\otimes_kR$ is upper triangular with all diagonal entries equal to $1$ in the scalar-extended basis. Equivalently, by the comodule dictionary, $V$ is unipotent if and only if $V$ has a complete $G$-stable flag
$$V=V_m\supseteq V_{m-1}\supseteq\dots\supseteq V_0=0$$
with $G$ acting trivially on each quotient $V_i/V_{i-1}$; the equivalence uses that a complete flag with trivial successive quotients is exactly a chain of subspaces in a basis as above, and conversely.

**(b) Unipotent groups.** The group $G$ is **unipotent** if every nonzero rational representation of $G$ has a nonzero $G$-fixed vector, equivalently if every simple rational representation of $G$ is one-dimensional with trivial action. Because every rational representation is a union of finite-dimensional subrepresentations ([[lem-finite-dimensional-subcomodules-contain-elements]]), it suffices to test finite-dimensional representations: $G$ is unipotent if and only if every nonzero finite-dimensional rational representation has a nonzero fixed vector.

No smoothness, reducedness or connectedness of $G$ is imposed; the matrix formulation in (a) is written out because the group scheme $U_n$ of upper unitriangular matrices is introduced separately and is not used in the definition.
