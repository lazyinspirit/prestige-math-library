---
id: lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor
kind: lemma
title: The second fundamental form is a symmetric normal-bundle-valued two-tensor
status: draft
origin: pipeline
deps: ["def-induced-connection-and-second-fundamental-form", "thm-the-induced-connection-is-levi-civita", "prop-connection-laws-in-directional-form"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, Proposition 2.1.1 and the ensuing identification of II, printed pages 24–25
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 14, Proposition 14.1.3 with complete proof, printed page 102
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, Lemma 8.1 with complete proof, printed pages 134–135
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. The second fundamental form of an embedded
Riemannian submanifold is $C^\infty(M)$-bilinear and symmetric in its tangent
arguments. Hence it is a smooth section
$\mathrm{II}\in\Gamma(S^2T^*M\otimes\nu M)$.

## Facts & Assumptions

**Given:** Countable choice, an embedded Riemannian submanifold, and tangent
fields $X,Y$.

[F1] The second fundamental form is the normal projection
$\mathrm{II}(X,Y)=(\overline\nabla_XY)^\perp$ of a well-defined smooth field
along $M$. [[def-induced-connection-and-second-fundamental-form]].

[F2] Covariant differentiation is function-linear in its direction and obeys
the section Leibniz rule. [[prop-connection-laws-in-directional-form]].

[F3] The induced connection is torsion free and equals the Levi–Civita
connection of the induced metric. [[thm-the-induced-connection-is-levi-civita]].

## Proof

**Proof technique:** direct.

1.1 For $f\in C^\infty(M)$, function-linearity in the first slot and fibrewise linearity of the normal projection give $$\mathrm{II}(fX,Y)=\bigl(\overline\nabla_{fX}Y\bigr)^\perp=f\bigl(\overline\nabla_XY\bigr)^\perp=f\,\mathrm{II}(X,Y).$$ Real linearity follows identically. [F1, F2, algebra]

1.2 The Leibniz rule in the second slot gives $$\mathrm{II}(X,fY)=\bigl(X(f)Y+f\overline\nabla_XY\bigr)^\perp=f\,\mathrm{II}(X,Y),$$ because $X(f)Y$ is tangent and has zero normal projection. Thus $\mathrm{II}$ is $C^\infty(M)$-bilinear. [F1, F2, algebra]

1.3 Subtract the two Gauss decompositions from [F1]. Ambient torsion freeness gives $$0=\overline\nabla_XY-\overline\nabla_YX-[X,Y]=\bigl(\nabla^M_XY-\nabla^M_YX-[X,Y]\bigr)+\mathrm{II}(X,Y)-\mathrm{II}(Y,X).$$ The parenthesized tangent term is zero by [F3], so the remaining normal term proves $\mathrm{II}(X,Y)=\mathrm{II}(Y,X)$. [F1, F3, algebra]

2.1 Smoothness was supplied in [F1], while steps 1.1–1.3 give tensoriality and symmetry; this is exactly a section of $S^2T^*M\otimes\nu M$. For an empty or zero-dimensional $M$ it is the unique zero section, and the formulas apply unchanged in dimension one, codimension zero, and at boundary points. Degenerate ambient forms are excluded by the Riemannian hypothesis. The stated $\mathrm{AC}_\omega$ is inherited exactly through [F1] and [F3]; no new selection occurs. [F1, F3, step 1.1, step 1.2, step 1.3] ∎
