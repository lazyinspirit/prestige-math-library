---
id: def-intersection-form-on-the-homology-of-a-closed-oriented-surface
kind: definition
title: The intersection form on the homology of a closed oriented surface
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-axiom-of-choice
  - lem-cellular-homology-of-the-one-polygon-surface-model
  - thm-classification-of-compact-connected-surfaces
  - thm-topological-classification-compact-riemann-surfaces
  - def-topological-manifold-without-boundary
  - def-r-orientation-of-a-topological-manifold
  - thm-poincare-duality-for-oriented-topological-manifolds
  - cor-poincare-duality-gives-a-nonsingular-cup-pairing
  - def-cap-duality-map-for-an-oriented-manifold
  - def-cap-product-with-cohomology-first
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-singular-cohomology-ring
  - def-singular-cup-product-on-cochains
  - def-kronecker-evaluation-pairing
  - lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives
  - thm-singular-cohomology-is-graded-commutative
  - def-geometric-intersection-pairing-on-a-closed-oriented-manifold
  - thm-geometric-intersection-equals-the-poincare-dual-cup-pairing
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology (author-hosted PDF)
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
      locator: Section 3.3, Theorem 3.30 and Example 3.31, printed pp. 241–242; Poincaré duality and the genus-g surface basis
    - title: Eduard Looijenga, Riemann Surfaces (2007 author lecture notes)
      url: https://webspace.science.uu.nl/~looij101/riemannsurfaces.pdf
      locator: Chapter 3 §3, Proposition 3.19 and Corollary 3.20, printed pp. 33–34; the alternating de Rham pairing and the intersection behavior of dual curve bases
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]), as required by the classification, Poincaré-duality, and geometric-intersection interfaces used here. Let $X$ be a nonempty compact connected topological $2$-manifold without boundary, with a specified integral orientation ([[def-topological-manifold-without-boundary]], [[def-r-orientation-of-a-topological-manifold]]) and with $H_1(X;\mathbb Z)$ free of finite rank. For the standard surfaces on this page, the rank condition follows from [[lem-cellular-homology-of-the-one-polygon-surface-model]]; for a general compact connected orientable surface it follows from [[thm-classification-of-compact-connected-surfaces]] and the same cellular computation. A compact Riemann surface has the orientation determined by its complex structure ([[thm-topological-classification-compact-riemann-surfaces]]).

Write $[X]\in H_2(X;\mathbb Z)$ for the fundamental class of the specified orientation ([[def-fundamental-class-of-a-compact-oriented-manifold]]). Cap with this class gives the Poincaré-duality isomorphism
$$D_X:H^1(X;\mathbb Z)\longrightarrow H_1(X;\mathbb Z),\qquad D_X(a):=a\cap[X]$$
([[def-cap-duality-map-for-an-oriented-manifold]], [[thm-poincare-duality-for-oriented-topological-manifolds]]); write $D_X^{-1}$ for its inverse. The **intersection form** is
$$\langle\cdot,\cdot\rangle_X:H_1(X;\mathbb Z)\times H_1(X;\mathbb Z)\longrightarrow\mathbb Z,\qquad \langle\gamma,\delta\rangle_X:=\bigl\langle D_X^{-1}(\gamma)\smile D_X^{-1}(\delta),[X]\bigr\rangle,$$
where $\smile$ is the singular cup product ([[def-singular-cohomology-ring]], [[def-singular-cup-product-on-cochains]]) and the outer brackets denote Kronecker evaluation ([[def-kronecker-evaluation-pairing]], [[lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives]]).

For genus zero, $H_1(X;\mathbb Z)=0$ and this is the unique bilinear form on the zero group. A closed connected oriented surface has $\operatorname{rank}H_1=2g$, so rank one does not occur ([[lem-cellular-homology-of-the-one-polygon-surface-model]], [[thm-classification-of-compact-connected-surfaces]]).

This form is well defined and biadditive because the cup product and Kronecker evaluation descend to cohomology and homology. Graded commutativity in degree one gives $\langle\gamma,\delta\rangle_X=-\langle\delta,\gamma\rangle_X$ ([[thm-singular-cohomology-is-graded-commutative]]); since the values lie in the torsion-free group $\mathbb Z$, it follows also that $\langle\gamma,\gamma\rangle_X=0$, so the form is alternating. For all $a,b\in H^1(X;\mathbb Z)$ the cap-cup adjunction identity is
$$\langle a\smile b,[X]\rangle=\langle b,D_X(a)\rangle,$$
where the right side is Kronecker evaluation ([[cor-poincare-duality-gives-a-nonsingular-cup-pairing]]). Equivalently, for all $\gamma,\delta\in H_1(X;\mathbb Z)$,
$$\langle\gamma,\delta\rangle_X=\langle D_X^{-1}(\delta),\gamma\rangle.$$

When $X$ is a closed oriented smooth surface and $A,B\subset X$ are closed oriented smooth embedded curves meeting transversely, $\langle[A],[B]\rangle_X$ equals their algebraic intersection number $I(A,B)$, with the first-factor convention of [[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]] ([[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]]). The analogous geometric formula modulo $2$ holds for closed smooth surfaces without orientability ([[thm-geometric-intersection-equals-the-poincare-dual-cup-pairing]]).

Reversing the orientation changes $[X]$ and both inverse-duality classes by a sign. The signs on the two cup-product factors cancel, while evaluation on $-[X]$ negates the result, so the intersection form changes sign. No unimodularity assertion is made here; it is proved with the symplectic-basis theorem below. Once the duality isomorphism is given, the formula and its algebraic identities are choice-free; AC is used only through the stated global classification, duality, and geometric-intersection interfaces.
