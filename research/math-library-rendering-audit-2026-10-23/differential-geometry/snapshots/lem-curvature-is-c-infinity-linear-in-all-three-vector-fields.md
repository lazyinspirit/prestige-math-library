---
id: lem-curvature-is-c-infinity-linear-in-all-three-vector-fields
kind: lemma
title: Curvature is C-infinity-linear in all three vector fields
status: published
origin: pipeline
deps: ["def-curvature-of-an-affine-connection", "prop-connection-laws-in-directional-form", "prop-leibniz-rules-for-the-lie-bracket-with-function-multiples"]
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
      locator: Chapter 7, Proposition 7.1, printed pages 117–118
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

For every smooth function $f$ and smooth vector fields $X,Y,Z$, the curvature
of an affine connection satisfies

$$R(fX,Y)Z=fR(X,Y)Z,\qquad R(X,fY)Z=fR(X,Y)Z,$$

and

$$R(X,Y)(fZ)=fR(X,Y)Z.$$

Thus $R$ is $C^\infty(M)$-linear separately in all three vector-field slots.

## Facts & Assumptions

[F1] Curvature is the bracket-corrected commutator of covariant derivatives. [[def-curvature-of-an-affine-connection]].

[F2] A connection is function-linear in its differentiating field and obeys the Leibniz rule in its section field. [[prop-connection-laws-in-directional-form]].

[F3] The Lie bracket obeys $[fX,Y]=f[X,Y]-Y(f)X$ and $[X,fY]=f[X,Y]+X(f)Y$. [[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]].

## Proof

**Given:** A smooth function $f$, smooth vector fields $X,Y,Z$, and an affine connection $\nabla$.

1.1 Expanding the first slot by [F1]–[F3] gives $$R(fX,Y)Z=f\nabla_X\nabla_YZ-Y(f)\nabla_XZ-f\nabla_Y\nabla_XZ-f\nabla_{[X,Y]}Z+Y(f)\nabla_XZ.$$ The two derivative-of-$f$ terms cancel, leaving $fR(X,Y)Z$. The same calculation in the second slot gives $$R(X,fY)Z=X(f)\nabla_YZ+f\nabla_X\nabla_YZ-f\nabla_Y\nabla_XZ-f\nabla_{[X,Y]}Z-X(f)\nabla_YZ,$$ and hence the second displayed identity. [F1, F2, F3, algebra]

2.1 For the third slot, two uses of the section Leibniz rule yield $$R(X,Y)(fZ)=fR(X,Y)Z+\bigl(X(Yf)-Y(Xf)-[X,Y]f\bigr)Z.$$ The coefficient in parentheses is zero by the defining action of the Lie bracket on functions. Hence the third identity holds. Additivity and real homogeneity already follow from the connection and bracket laws, so these three identities prove separate $C^\infty(M)$-linearity. [F1, F2, step 1.1, algebra] ∎
