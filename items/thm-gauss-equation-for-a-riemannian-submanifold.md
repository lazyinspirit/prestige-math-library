---
id: thm-gauss-equation-for-a-riemannian-submanifold
kind: theorem
title: Gauss equation for a Riemannian submanifold
status: draft
origin: pipeline
deps: ["thm-weingarten-equation-and-adjointness-of-the-shape-operator", "def-induced-connection-and-second-fundamental-form", "thm-the-induced-connection-is-levi-civita", "def-curvature-of-an-affine-connection", "def-riemann-curvature-four-tensor"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, equations (2.1.7) and (2.1.10), printed pages 26–27
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 14, Proposition 14.1.4(2) with complete proof, printed page 103
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, Theorem 8.4 with complete proof, printed pages 136–137
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For tangent fields $X,Y,Z,W$ along an embedded
Riemannian submanifold $M\subseteq\overline M$,

$$\operatorname{Rm}^M(X,Y,Z,W)=\operatorname{Rm}^{\overline M}(X,Y,Z,W)+\overline g(\mathrm{II}(X,W),\mathrm{II}(Y,Z))-\overline g(\mathrm{II}(X,Z),\mathrm{II}(Y,W)).$$

The curvature sign convention is
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$.
The choice hypothesis is inherited exactly through the smooth submanifold
projection constructions.

## Facts & Assumptions

**Given:** Countable choice, the embedded Riemannian submanifold, and tangent
fields $X,Y,Z,W$.

[F1] The Gauss decomposition is
$\overline\nabla_XY=\nabla^M_XY+\mathrm{II}(X,Y)$.
[[def-induced-connection-and-second-fundamental-form]].

[F2] The induced connection is the Levi–Civita connection of the induced
metric. [[thm-the-induced-connection-is-levi-civita]].

[F3] For every normal field $\nu$,
$(\overline\nabla_X\nu)^\top=-S_\nu X$ and
$g(S_\nu X,W)=\overline g(\mathrm{II}(X,W),\nu)$.
[[thm-weingarten-equation-and-adjointness-of-the-shape-operator]].

[F4] Curvature is the bracket-corrected covariant-derivative commutator with
the stated sign. [[def-curvature-of-an-affine-connection]].

[F5] The Riemann four-tensor pairs curvature with the metric:
$\operatorname{Rm}(X,Y,Z,W)=g(R(X,Y)Z,W)$.
[[def-riemann-curvature-four-tensor]].

## Proof

**Proof technique:** direct.

1.1 Apply [F1] to the tangent field $\nabla^M_YZ$ and [F3] to the normal field $\mathrm{II}(Y,Z)$. Taking tangential components gives $$(\overline\nabla_X\overline\nabla_YZ)^\top=\nabla^M_X\nabla^M_YZ-S_{\mathrm{II}(Y,Z)}X.$$ Interchanging $X,Y$ gives the analogous formula, and [F1] gives $(\overline\nabla_{[X,Y]}Z)^\top=\nabla^M_{[X,Y]}Z$. [F1, F3, algebra]

2.1 Substitute the three identities of step 1.1 into the curvature commutator [F4]. Since [F2] identifies the intrinsic connection, $$(\overline R(X,Y)Z)^\top=R^M(X,Y)Z-S_{\mathrm{II}(Y,Z)}X+S_{\mathrm{II}(X,Z)}Y.$$ [F2, F4, step 1.1, algebra]

3.1 Pair step 2.1 with $W$. The normal component of $\overline R(X,Y)Z$ is orthogonal to $W$, and [F3] converts the two shape terms, so [F5] yields $$\operatorname{Rm}^{\overline M}(X,Y,Z,W)=\operatorname{Rm}^M(X,Y,Z,W)-\overline g(\mathrm{II}(X,W),\mathrm{II}(Y,Z))+\overline g(\mathrm{II}(Y,W),\mathrm{II}(X,Z)).$$ Metric symmetry and rearrangement give exactly the formula in the Statement. [F3, F5, step 2.1, algebra]

4.1 The equation is vacuous on the empty submanifold. If tangent rank is zero every term vanishes. In tangent rank one the alternating curvature terms vanish, while the two quadratic terms are equal and therefore cancel; the second fundamental form itself need not vanish. If normal rank is zero the two `II` terms vanish and the identity reduces to equality of ambient and intrinsic tangent curvature. The pointwise calculation applies at boundary points, and positive definiteness supplies the orthogonal projections. The stated $\mathrm{AC}_\omega$ is inherited through [F1]–[F3]; no new choice is made. [F1, F2, F3, F5, step 1.1, step 2.1, step 3.1] ∎
