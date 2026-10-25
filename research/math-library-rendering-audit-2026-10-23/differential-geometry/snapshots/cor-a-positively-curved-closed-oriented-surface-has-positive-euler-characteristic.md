---
id: cor-a-positively-curved-closed-oriented-surface-has-positive-euler-characteristic
kind: corollary
title: Positive curvature forces positive Euler characteristic
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - prop-positive-compactly-supported-top-forms-have-positive-integral
  - def-riemannian-volume-form-on-an-oriented-manifold
  - prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form
  - def-countable-choice
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature (1997)"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf"
      locator: "Chapter 9, Theorem 9.7, printed pp. 167-172 (PDF pp. 183-188): positivity of the curvature integral for strictly positive K, with the Euler characteristic read off from the global identity."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.2.4, printed pp. 14-15 (PDF pp. 21-22), together with the positivity of the integral of a positive top form used in its applications."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the axiom of choice.
Let $(M,g)$ be a nonempty closed oriented Riemannian surface whose Gaussian
curvature is strictly positive everywhere, $K>0$ on $M$. Then $\chi(M)>0$,
where $\chi$ is the Euler characteristic of
[[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]].
No genus formula and no classification conclusion is asserted here.

## Facts & Assumptions

**Given:** A nonempty closed oriented Riemannian surface $(M,g)$ with $K>0$ at every point.

[A1] full AC is assumed; it is inherited exactly through the global Gauss-Bonnet theorem; the compact-support positivity proposition is choice-free, and no additional choice is used ([[def-axiom-of-choice]]).

[F1] For every closed oriented Riemannian surface, $\int_MK\,dA=2\pi\chi(M)$ ([[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]]).

[F2] If a compactly supported top form on an oriented smooth manifold is nonnegative on the positive determinant ray and is not the zero form, then its integral is strictly positive ([[prop-positive-compactly-supported-top-forms-have-positive-integral]]).

[F3] On an oriented Riemannian surface the area form $dA$ is the positive unit top form of the orientation: in every positively oriented chart it has a strictly positive coordinate coefficient, and it is nonzero at every point ([[def-riemannian-volume-form-on-an-oriented-manifold]], [[prop-the-riemannian-volume-form-is-the-unique-positive-unit-top-form]]).

## Proof

**Proof technique:** exhibit the strictly positive curvature form and apply positivity of the oriented integral.

1.1 Since $M$ is closed, the smooth top form $\omega:=K\,dA$ is compactly supported. Because $M\ne\varnothing$ there is a point $p$, and at $p$ both factors are nonzero: $K(p)>0$ and $dA_p\ne0$ by [F3]; hence $\omega\ne0$. In every positively oriented chart $dA$ has strictly positive coordinate coefficient by [F3], so $K\,dA$ is nonnegative on the positive determinant ray, indeed strictly positive there. [F3, given]

2.1 By [F2] applied to the nonzero nonnegative compactly supported top form $\omega=K\,dA$ of step 1.1, $\int_MK\,dA>0$. [F2, step 1.1]

3.1 By [F1], $2\pi\chi(M)=\int_MK\,dA>0$, and since $2\pi>0$ it follows that $\chi(M)>0$. This conclusion concerns only the integer $\chi(M)$: no genus, normal form or classification statement is derived. [F1, step 2.1, algebra]

4.1 No new choice is made: the assumption full AC entered only through the global Gauss-Bonnet theorem; [F2] uses the choice-free finite-chart compact-support integral. [A1, step 3.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.7, printed pp. 167-172, gives $\int_MK\,dA=2\pi\chi(M)$; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.2.4, printed pp. 14-15, states the same identity. The strict positivity of the integral for strictly positive curvature is the positivity of the oriented integral of [[prop-positive-compactly-supported-top-forms-have-positive-integral]], applied to $\omega=K\,dA$ with the area form of [[def-riemannian-volume-form-on-an-oriented-manifold]]. The item deliberately stops at the sign of $\chi$ and asserts no classification consequence.
