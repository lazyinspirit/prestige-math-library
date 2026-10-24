---
id: thm-the-induced-connection-is-levi-civita
kind: theorem
title: The induced connection is Levi–Civita
status: published
origin: pipeline
deps: ["def-induced-connection-and-second-fundamental-form", "thm-fundamental-theorem-of-riemannian-geometry", "def-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, induced connection equation (2.1.4), printed pages 25–26
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 14, Proposition 14.1.1 with complete proof, printed pages 101–102
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, Theorem 8.2 with complete proof, printed pages 134–135
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

Assume $\mathrm{AC}_\omega$. For an embedded Riemannian submanifold
$M\subseteq\overline M$, the tangential connection $\nabla^M$ is the unique
Levi–Civita connection of the induced metric $g=\overline g|_{TM}$.

## Facts & Assumptions

**Given:** Countable choice, the embedded Riemannian submanifold, and the ambient Levi–Civita connection $\overline\nabla$.

[F1] The ambient derivative along $M$ is well defined and $\nabla^M_XY=(\overline\nabla_XY)^\top$. [[def-induced-connection-and-second-fundamental-form]].

[F2] The ambient Levi–Civita connection is an affine connection that is torsion free and compatible with $\overline g$. [[def-levi-civita-connection]].

[F3] A supplied smooth Riemannian metric has exactly one Levi–Civita connection, with no additional choice. [[thm-fundamental-theorem-of-riemannian-geometry]].

## Proof

**Proof technique:** direct.

1.1 Orthogonal projection is fibrewise linear. Projecting the affine-connection laws in [F2] and using [F1] therefore gives real bilinearity, $\nabla^M_{fX}Y=f\nabla^M_XY$, and $$\nabla^M_X(fY)=\bigl(X(f)Y+f\overline\nabla_XY\bigr)^\top=X(f)Y+f\nabla^M_XY,$$ because $Y$ is tangent. Thus $\nabla^M$ is an affine connection on $TM$. [F1, F2, algebra]

1.2 The bracket of two fields tangent to $M$ is tangent: in a slice chart, their normal coordinate components vanish along the slice, and tangent derivatives of those zero restrictions vanish, so the coordinate formula gives zero normal components for $[X,Y]$. Ambient torsion freeness now yields $$\nabla^M_XY-\nabla^M_YX=\bigl(\overline\nabla_XY-\overline\nabla_YX\bigr)^\top=[X,Y]^\top=[X,Y].$$ Hence the induced connection is torsion free. [F1, F2, algebra]

1.3 For tangent fields $X,Y,Z$, ambient metric compatibility and the fact that tangent and normal vectors are orthogonal give $$Xg(Y,Z)=X\overline g(Y,Z)=\overline g(\overline\nabla_XY,Z)+\overline g(Y,\overline\nabla_XZ)=g(\nabla^M_XY,Z)+g(Y,\nabla^M_XZ).$$ Thus $\nabla^M$ is compatible with the induced metric. [F1, F2, algebra]

2.1 Steps 1.1–1.3 show that $\nabla^M$ is a Levi–Civita connection. By [F3] it is the unique one for $g$. [F3, step 1.1, step 1.2, step 1.3]

3.1 On the empty or zero-dimensional submanifold all displayed identities are vacuous and the connection is the unique zero operator. In dimension one and at boundary points the same local calculations apply. Positive definiteness supplies the orthogonal splitting used in step 1.3. The hypothesis $\mathrm{AC}_\omega$ is inherited exactly through [F1]'s smooth projection construction; the proof introduces no further choices. [F1, F3, step 1.1, step 1.2, step 1.3, step 2.1] ∎
