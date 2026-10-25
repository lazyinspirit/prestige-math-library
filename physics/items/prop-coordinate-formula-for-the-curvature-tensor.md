---
id: prop-coordinate-formula-for-the-curvature-tensor
kind: proposition
title: Coordinate formula for the curvature tensor
status: published
origin: pipeline
deps: ["def-curvature-of-an-affine-connection", "def-christoffel-symbols-of-an-affine-connection", "prop-coordinate-vector-fields-commute"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 11, Section 11.1, printed page 72
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 7, equations (7.3)–(7.4), printed pages 117–119
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

In a coordinate chart, use the convention

$$\nabla_{\partial_i}\partial_k=\Gamma^\ell{}_{ik}\partial_\ell,\qquad R(\partial_i,\partial_j)\partial_k=R^\ell{}_{kij}\partial_\ell.$$

Then

$$R^\ell{}_{kij}=\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}.$$

## Facts & Assumptions

[F1] Curvature is $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$. [[def-curvature-of-an-affine-connection]].

[F2] The Christoffel symbols satisfy $\nabla_{\partial_i}\partial_j=\Gamma^k{}_{ij}\partial_k$, with the first lower index the differentiating direction. [[def-christoffel-symbols-of-an-affine-connection]].

[F3] Coordinate vector fields commute. [[prop-coordinate-vector-fields-commute]].

## Proof

**Given:** A coordinate chart $(x^1,\ldots,x^n)$ and indices $i,j,k$.

1.1 Applying the connection Leibniz rule to [F2] twice gives $\nabla_{\partial_i}\nabla_{\partial_j}\partial_k=(\partial_i\Gamma^\ell{}_{jk}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im})\partial_\ell$ and, after interchanging $i,j$, $\nabla_{\partial_j}\nabla_{\partial_i}\partial_k=(\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{ik}\Gamma^\ell{}_{jm})\partial_\ell$. [F2, algebra]

2.1 By [F3], the bracket term in [F1] is zero. Subtracting the two expansions from step 1.1 therefore makes the coefficient of $\partial_\ell$ exactly $\partial_i\Gamma^\ell{}_{jk}-\partial_j\Gamma^\ell{}_{ik}+\Gamma^m{}_{jk}\Gamma^\ell{}_{im}-\Gamma^m{}_{ik}\Gamma^\ell{}_{jm}$, as claimed. [F1, F3, step 1.1, algebra] ∎
