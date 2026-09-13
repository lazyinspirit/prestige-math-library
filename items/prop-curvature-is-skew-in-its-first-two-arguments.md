---
id: prop-curvature-is-skew-in-its-first-two-arguments
kind: proposition
title: Curvature is skew in its first two arguments
status: published
origin: pipeline
deps: ["def-curvature-of-an-affine-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Proposition 11.3.2(1), printed page 75
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Proposition 7.4(a), printed pages 121–122
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

For every affine connection and all smooth vector fields $X,Y,Z$,

$$R(X,Y)Z=-R(Y,X)Z.$$

Thus curvature is alternating in its first two arguments; no metric or torsion
hypothesis is needed.

## Facts & Assumptions

[F1] Curvature is the bracket-corrected commutator $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$. [[def-curvature-of-an-affine-connection]].

## Proof

**Given:** Smooth vector fields $X,Y,Z$ and an affine connection $\nabla$.

1.1 Interchanging $X$ and $Y$ in [F1] gives $R(Y,X)Z=\nabla_Y\nabla_XZ-\nabla_X\nabla_YZ-\nabla_{[Y,X]}Z$. [F1]

2.1 The Lie bracket is a commutator of derivations, so $[Y,X]=-[X,Y]$; the connection is real-linear in its differentiating field. Hence the expression in step 1.1 is $-(\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z)=-R(X,Y)Z$. [F1, step 1.1, algebra] ∎
