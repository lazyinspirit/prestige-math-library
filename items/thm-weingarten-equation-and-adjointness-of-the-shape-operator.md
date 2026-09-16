---
id: thm-weingarten-equation-and-adjointness-of-the-shape-operator
kind: theorem
title: Weingarten equation and adjointness of the shape operator
status: published
origin: pipeline
deps: ["def-shape-operator", "def-normal-connection", "lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor", "def-induced-connection-and-second-fundamental-form", "def-levi-civita-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, Proposition 2.1.1 with complete proof, printed pages 24–25
    - title: Ved Datar, Lectures on Riemannian Geometry
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: Lecture 14, Proposition 14.1.4(1) with complete proof, printed page 103
    - title: "John M. Lee, Riemannian Manifolds: An Introduction to Curvature"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/leeriemm.pdf
      locator: Chapter 8, Lemma 8.3 with complete proof, printed pages 135–136
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

Assume $\mathrm{AC}_\omega$. For tangent fields $X,Y$ and a normal field
$\nu$ along an embedded Riemannian submanifold,

$$\overline\nabla_X\nu=-S_\nu X+\nabla^\perp_X\nu$$

and

$$g(S_\nu X,Y)=\overline g(\mathrm{II}(X,Y),\nu).$$

Consequently every shape operator $S_\nu$ is self-adjoint. The choice
hypothesis is inherited exactly through the smooth normal-bundle projections.

## Facts & Assumptions

**Given:** Countable choice, the embedded Riemannian submanifold, tangent fields $X,Y$, and a normal field $\nu$.

[F1] The shape operator is $S_\nu X=-(\overline\nabla_X\nu)^\top$. [[def-shape-operator]].

[F2] The normal connection is $\nabla^\perp_X\nu=(\overline\nabla_X\nu)^\perp$. [[def-normal-connection]].

[F3] The Gauss decomposition is $\overline\nabla_XY=\nabla^M_XY+\mathrm{II}(X,Y)$. [[def-induced-connection-and-second-fundamental-form]].

[F4] The ambient Levi–Civita connection is compatible with $\overline g$. [[def-levi-civita-connection]].

[F5] The second fundamental form is symmetric. [[lem-the-second-fundamental-form-is-a-symmetric-normal-bundle-valued-two-tensor]].

## Proof

**Proof technique:** direct.

1.1 Split $\overline\nabla_X\nu$ into its tangential and normal components. By [F1] its tangential component is $-S_\nu X$, and by [F2] its normal component is $\nabla^\perp_X\nu$. This proves the first displayed identity. [F1, F2, algebra]

2.1 Since $\overline g(\nu,Y)=0$ along $M$, differentiation in the tangent direction $X$ and [F4] give $$0=X\overline g(\nu,Y)=\overline g(\overline\nabla_X\nu,Y)+\overline g(\nu,\overline\nabla_XY).$$ By step 1.1 the first inner product is $-g(S_\nu X,Y)$; by [F3] the second is $\overline g(\nu,\mathrm{II}(X,Y))$, since $\nu$ is normal and $\nabla^M_XY$ is tangent. Rearranging proves the second displayed identity. [F3, F4, step 1.1, algebra]

3.1 Using [F5] and the symmetry of the metric, $$g(S_\nu X,Y)=\overline g(\mathrm{II}(X,Y),\nu)=\overline g(\mathrm{II}(Y,X),\nu)=g(S_\nu Y,X)=g(X,S_\nu Y).$$ Thus $S_\nu$ is self-adjoint. [F5, step 2.1, algebra]

4.1 All identities are vacuous on the empty submanifold and reduce to the unique zero maps when tangent or normal rank is zero. They apply unchanged in rank one and at boundary points. Positive definiteness is used for the orthogonal splitting and for the usual self-adjoint interpretation. The stated $\mathrm{AC}_\omega$ is inherited through [F1]–[F3], and no new selection occurs. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
