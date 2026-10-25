---
id: def-boundary-middle-form-and-signature
kind: definition
title: "Boundary middle form and boundary signature"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-poincare-lefschetz-duality, lem-compact-oriented-boundary-manifolds-have-finite-dimensional-cohomology, lem-relative-cap-evaluation-identity, lem-relative-middle-cup-products-are-symmetric, def-relative-fundamental-class-and-boundary-orientation, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, def-axiom-of-choice]
justified_by: [lem-boundary-middle-form-is-well-defined-and-glues]
aliases: []
landmark: false
dependency_level: 2
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed p. 400, the middle-dimensional form of a bounding manifold and its signature"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 3.3, Poincare-Lefschetz duality for compact manifolds with boundary, printed pp. 253-254"
---

## Definition

Assume the Axiom of Choice as inherited from Poincare-Lefschetz duality. Let
$W$ be a compact oriented smooth eight-manifold with boundary $M=\partial W$,
and consider real coefficients. Let
$$j:H^4(W,M;\mathbb R)\longrightarrow H^4(W;\mathbb R)$$
be the forgetful map and put $I=\operatorname{im}j\subseteq H^4(W;\mathbb R)$;
by [[lem-compact-oriented-boundary-manifolds-have-finite-dimensional-cohomology]]
and Poincare-Lefschetz duality ([[thm-poincare-lefschetz-duality]]) the space
$I$ is a finite-dimensional real vector space. For $x,y\in I$ choose relative
lifts $\tilde x,\tilde y\in H^4(W,M;\mathbb R)$ with $j(\tilde x)=x$,
$j(\tilde y)=y$ and define the **boundary middle form**
$$Q_W(x,y):=\langle \tilde x\smile\tilde y,[W,M]\rangle,$$
where the product uses two relative factors and the evaluation is the relative
Kronecker evaluation on the relative fundamental class
[[def-relative-fundamental-class-and-boundary-orientation]].

The following lemma [[lem-boundary-middle-form-is-well-defined-and-glues]]
proves that $Q_W$ is independent of the two relative lifts, is symmetric (it
uses that both factors have degree four and
[[lem-relative-middle-cup-products-are-symmetric]]), and is nondegenerate on
$I$: its radical is zero. Consequently $Q_W$ is a symmetric bilinear form on
the finite-dimensional real vector space $I$, and its **radical**
$\operatorname{rad}Q_W\subseteq I$ is the subspace of $x$ with $Q_W(x,y)=0$ for
all $y\in I$. The **boundary signature**
$$\sigma(W):=\text{inertia signature of }(I,Q_W)$$
is the inertia signature of the nondegenerate symmetric form induced on
$I/\operatorname{rad}Q_W$; when the radical is zero, as proved, no quotient is
needed.

This is a boundary construction and is **distinct** from the closed
middle-dimensional intersection form and closed signature of the
signature-theorem page: the closed form is not applied to $W$ with boundary,
because the relative fundamental class and the relative products are what make
the displayed evaluation well defined. For closed $W$ the construction
coincides with the closed middle form in degree four by the empty-boundary
case of Poincare-Lefschetz duality. No orientation of $M$ is chosen
separately: it is the induced boundary orientation.
