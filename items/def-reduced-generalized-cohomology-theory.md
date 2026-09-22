---
id: def-reduced-generalized-cohomology-theory
kind: definition
title: Reduced generalized cohomology theory
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-reduced-cone-suspension-and-cofiber-sequence]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yiannis Loizides, The Atiyah–Hirzebruch Spectral Sequence, §2, printed pp. 3–4"
      url: https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf
      locator: "§2, reduced theory axioms, printed pp. 3–4"
    - title: "James Davis and Paul Kirk, Lecture Notes in Algebraic Topology, §8.8, printed pp. 227–233"
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
      locator: "§8.8, reduced and unreduced generalized (co)homology theories, printed pp. 227–233"
---

## Definition

A **reduced generalized cohomology theory** on based CW complexes consists of the
following data.

1. For every integer $n$ a contravariant functor $\widetilde h^n$ from based CW
   complexes and based cellular maps to abelian groups; a based cellular map $f:X\to Y$
   induces $f^*:\widetilde h^n(Y)\to\widetilde h^n(X)$.
2. For every based CW complex $X$ and integer $n$ a **suspension isomorphism**
   $$\sigma=\sigma_n(X):\widetilde h^n(X)\xrightarrow{\ \cong\ }\widetilde h^{n+1}(\Sigma X),$$
   natural in $X$, where $\Sigma$ is the reduced suspension and the sphere
   coordinate is written first.

For every based cellular map $f:X\to Y$, use the cofiber convention of
[[def-reduced-cone-suspension-and-cofiber-sequence]]:
$$X\xrightarrow{f}Y\xrightarrow{i}C_f\xrightarrow{q_f}\Sigma X.$$
The **connecting homomorphism is normalized by the suspension** and is not
independent structure:
$$
\delta_f:=q_f^*\circ\sigma_n(X):\widetilde h^n(X)\longrightarrow\widetilde h^{n+1}(C_f).
$$
Thus its sign is fixed by the displayed cofiber sequence, the convention that
the suspension coordinate is written first, and the chosen suspension
isomorphism.

The data satisfy the following axioms.

- **(H) Homotopy invariance.** If $f\simeq_* g$ are based homotopic based maps,
  then $f^*=g^*$ on every reduced group.
- **(E) Exactness.** For every based cellular map $f:X\to Y$ the sequence
$$\cdots\to\widetilde h^n(C_f)\xrightarrow{i^*}\widetilde h^n(Y) \xrightarrow{f^*}\widetilde h^n(X)\xrightarrow{\delta_f}\widetilde h^{n+1}(C_f)\to\cdots$$
  is exact. The normalized connecting maps are natural for maps of based maps
  because the collapse maps $q_f$ and the suspension isomorphisms are natural.
- **(W) Wedge axiom.** For every family $(X_\alpha)$ of based CW complexes and
  every $n$ the natural map
$$\widetilde h^n\Bigl(\bigvee_\alpha X_\alpha\Bigr)\longrightarrow \prod_\alpha\widetilde h^n(X_\alpha)$$
  induced by the summand inclusions is an isomorphism. For a finite index set the
  product is the direct sum; the empty wedge is a point and the empty product is
  the zero group, so in particular $\widetilde h^n(*)=0$.

No **dimension axiom** is imposed: the value $\widetilde h^n(S^0)$ is an
arbitrary abelian group, called the coefficient group of degree $n$; the
coefficient bookkeeping is recorded by the coefficient-groups definition on this
page. Ordinary reduced
singular cohomology with coefficients in an abelian group is the special case in
which the dimension axiom holds, and the whole point of the definition is to admit
theories for which $\widetilde h^n(S^0)$ is nonzero in infinitely many degrees.
A **morphism** of reduced generalized cohomology theories is a family of natural
transformations commuting with the suspension isomorphisms. It then commutes
with every connecting map because $\delta_f=q_f^*\sigma$.

## Source notes

Compare [Loizides](https://math.gmu.edu/~yloizide/Atiyah-Hirzebruch.pdf), §2,
printed pp. 3–4, for the homotopy, wedge and exactness axioms, the suspension
isomorphism $h^n\circ\Sigma\simeq h^{n-1}$ and the definition
$h^n:=h^n(S^0)=h^n(\mathrm{pt})$ of the coefficient groups. In the paragraph
ending on printed p. 3, the pair boundary is explicitly the suspension
isomorphism followed by pullback along the cofiber-to-suspension map; this is
the normalization imposed above. Davis--Kirk, §8.8, gives the corresponding
reduced/unreduced axioms and correspondence.
