---
id: cor-a-flat-closed-oriented-surface-has-euler-characteristic-zero
kind: corollary
title: Flat closed oriented surfaces have Euler characteristic zero
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces
  - thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined
  - def-riemannian-volume-form-on-an-oriented-manifold
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
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
      locator: "Chapter 9, Theorem 9.7, printed pp. 167-172 (PDF pp. 183-188): the global Gauss-Bonnet identity for a closed oriented surface; setting K = 0 is the immediate flat case."
    - title: "Ved Datar, Lectures on Riemannian Geometry"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
      locator: "Lecture 2, Theorem 2.2.4, printed pp. 14-15 (PDF pp. 21-22): the global Gauss-Bonnet theorem used in the flat case."
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the axiom of choice.
Let $(M,g)$ be a nonempty closed oriented Riemannian surface whose Gaussian
curvature vanishes identically, $K\equiv0$ on $M$. Then $\chi(M)=0$, where
$\chi$ is the Euler characteristic of
[[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]].

## Facts & Assumptions

**Given:** A nonempty closed oriented Riemannian surface $(M,g)$ with $K\equiv0$.

[A1] full AC is assumed; it is inherited exactly through the global Gauss-Bonnet theorem and is used nowhere else ([[def-axiom-of-choice]]).

[F1] For every closed oriented Riemannian surface, $\int_MK\,dA=2\pi\chi(M)$ with $dA$ the area form of the orientation and $\chi$ the invariant of the well-definedness theorem ([[thm-global-gauss-bonnet-for-closed-oriented-riemannian-surfaces]]).

[F2] The area form $dA$ of a specified orientation is the Riemannian volume form, and the integral of a compactly supported top form is defined chartwise; in particular the zero top form has integral $0$ ([[def-riemannian-volume-form-on-an-oriented-manifold]], [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]]).

## Proof

**Proof technique:** insert the identically vanishing curvature into the global identity and divide by $2\pi$.

1.1 Since $K\equiv0$, the top form $K\,dA$ is the zero two-form at every point of $M$; by the definition of the compactly supported top-form integral, $\int_MK\,dA=0$. [F2, given]

2.1 By [F1], $\int_MK\,dA=2\pi\chi(M)$. Substituting step 1.1 gives $2\pi\chi(M)=0$, and since $2\pi\ne0$ it follows that $\chi(M)=0$. [F1, step 1.1, algebra]

3.1 No new choice is made: the only use of full AC is the inherited one through the global theorem, and the computation is a division by the nonzero constant $2\pi$ in the real numbers. [A1, step 2.1] ∎

## Source locator

Lee, *Riemannian Manifolds: An Introduction to Curvature*, Chapter 9, Theorem 9.7, printed pp. 167-172, proves $\int_MK\,dA=2\pi\chi(M)$ for a compact oriented surface without boundary; Datar, *Lectures on Riemannian Geometry*, Lecture 2, Theorem 2.2.4, printed pp. 14-15, gives the same identity. The flat case $K\equiv0$ is an immediate specialization, performed here with the library's top-form integral of [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]] and the Euler characteristic of [[thm-euler-characteristic-computed-by-a-finite-geodesic-triangulation-is-well-defined]].
