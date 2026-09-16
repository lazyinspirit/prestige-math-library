---
id: def-reduced-generalized-homology-theory
kind: definition
title: Reduced generalized homology theory
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "James Davis and Paul Kirk, Lecture Notes in Algebraic Topology, Definition 8.27, printed pp. 227–229"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "Definition 8.27, printed pp. 227–229"
---

## Definition

A **reduced generalized homology theory** on based CW complexes consists of the
following data.

1. For every integer $n$ a covariant functor $\widetilde h_n$ from based CW
   complexes and based continuous maps to abelian groups; a based map $f:X\to Y$
   induces $f_*:\widetilde h_n(X)\to\widetilde h_n(Y)$.
2. For every based CW complex $X$ and integer $n$ a **suspension isomorphism**
   $$\sigma=\sigma_n(X):\widetilde h_n(X)\xrightarrow{\ \cong\ }\widetilde h_{n+1}(\Sigma X),$$
   natural in $X$.
3. For every based map $f:X\to Y$ with reduced cofiber $C_f$ and structural
   inclusion $i:Y\to C_f$, **connecting homomorphisms**
   $\partial_f:\widetilde h_{n+1}(C_f)\to\widetilde h_n(X)$, natural in $f$ and of
   degree $-1$: the boundary lowers the homological degree.

The data satisfy the following axioms.

- **(H) Homotopy invariance.** Based homotopic maps induce equal homomorphisms.
- **(E) Exactness.** For every based map $f:X\to Y$ the long sequence
$$\cdots\to\widetilde h_n(X)\xrightarrow{f_*}\widetilde h_n(Y) \xrightarrow{i_*}\widetilde h_n(C_f)\xrightarrow{\partial_f}\widetilde h_{n-1}(X)\to\cdots$$
  is exact, and the connecting maps are natural for maps of based maps.
- **(W) Wedge axiom.** For every family $(X_\alpha)$ of based CW complexes and
  every $n$ the natural map
$$\bigoplus_\alpha\widetilde h_n(X_\alpha)\longrightarrow \widetilde h_n\Bigl(\bigvee_\alpha X_\alpha\Bigr)$$
  induced by the summand inclusions is an isomorphism. The empty wedge is a point
  and the empty sum is the zero group, so $\widetilde h_n(*)=0$.

No **dimension axiom** is imposed: $\widetilde h_n(S^0)$ is an arbitrary abelian
group. A generalized homology theory is a genuinely covariant notion: it is not
obtained by reversing the arrows of
[[def-reduced-generalized-cohomology-theory]], and the two notions are logically
independent apart from the common coefficient bookkeeping recorded in
[[def-coefficient-groups-of-a-generalized-homology-theory]]. A **morphism** of
reduced generalized homology theories is a family of natural transformations
commuting with suspension and the connecting maps.

## Source notes

Compare [Davis–Kirk](https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf),
Definition 8.27, printed pp. 227–229, for the reduced homology axioms on based
CW complexes, and Definition 8.28 for the coefficient groups used in
[[def-coefficient-groups-of-a-generalized-homology-theory]].
