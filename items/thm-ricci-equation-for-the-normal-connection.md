---
id: thm-ricci-equation-for-the-normal-connection
kind: theorem
title: Ricci equation for the normal connection
status: draft
origin: pipeline
deps: ["def-normal-connection", "def-shape-operator", "thm-weingarten-equation-and-adjointness-of-the-shape-operator", "def-curvature-of-a-vector-bundle-connection"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Chuu-Lian Terng, Lecture Notes on Curves and Surfaces in R^3 and Riemannian Geometry
      url: https://www.math.uci.edu/~cterng/LectureNotes1353.pdf
      locator: Section 2.1, Ricci equations (2.1.9) and (2.1.11) with surrounding conventions, printed pages 26–28
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $R^\perp$ be the curvature of the normal
connection. For tangent fields $X,Y$ and normal fields $\nu,\mu$ along an
embedded Riemannian submanifold,

$$\overline g(\overline R(X,Y)\nu,\mu)=\overline g(R^\perp(X,Y)\nu,\mu)-g([S_\nu,S_\mu]X,Y),$$

where $[S_\nu,S_\mu]=S_\nu S_\mu-S_\mu S_\nu$. Both curvatures use the
bracket-corrected sign convention, and the choice hypothesis is inherited
exactly through the smooth normal-bundle projections.

## Facts & Assumptions

**Given:** Countable choice, an embedded Riemannian submanifold, tangent
fields $X,Y$, and normal fields $\nu,\mu$.

[F1] The Weingarten decomposition is
$\overline\nabla_X\nu=-S_\nu X+\nabla^\perp_X\nu$, and shape operators are
self-adjoint with
$g(S_\mu U,V)=\overline g(\mathrm{II}(U,V),\mu)$.
[[thm-weingarten-equation-and-adjointness-of-the-shape-operator]].

[F2] The projected operation $\nabla^\perp$ is a connection on $\nu M$.
[[def-normal-connection]].

[F3] The shape operator is pointwise and linear in its normal direction.
[[def-shape-operator]].

[F4] The curvature of a vector-bundle connection is
$R^\nabla(X,Y)=\nabla_X\nabla_Y-\nabla_Y\nabla_X-\nabla_{[X,Y]}$.
[[def-curvature-of-a-vector-bundle-connection]].

## Proof

**Proof technique:** direct.

1.1 Apply [F1] first to $\overline\nabla_Y\nu=-S_\nu Y+\nabla^\perp_Y\nu$. The normal component after differentiating in direction $X$ is $$(\overline\nabla_X\overline\nabla_Y\nu)^\perp=-\mathrm{II}(X,S_\nu Y)+\nabla^\perp_X\nabla^\perp_Y\nu.$$ The analogous formula holds with $X,Y$ interchanged, and $(\overline\nabla_{[X,Y]}\nu)^\perp=\nabla^\perp_{[X,Y]}\nu$. [F1, F2, algebra]

2.1 Form the bracket-corrected ambient curvature and take its normal component. By [F4], the three normal-connection terms combine to $R^\perp(X,Y)\nu$, leaving $$(\overline R(X,Y)\nu)^\perp=R^\perp(X,Y)\nu-\mathrm{II}(X,S_\nu Y)+\mathrm{II}(Y,S_\nu X).$$ [F4, step 1.1, algebra]

3.1 Pair step 2.1 with $\mu$ and use [F1]: the two correction terms become $-g(S_\mu X,S_\nu Y)+g(S_\mu Y,S_\nu X)$. Self-adjointness rewrites their sum as $$-g(S_\nu S_\mu X,Y)+g(S_\mu S_\nu X,Y)=-g([S_\nu,S_\mu]X,Y),$$ which proves the stated equation. [F1, F3, step 2.1, algebra]

4.1 The equation is vacuous on the empty submanifold. If tangent or normal rank is zero every term vanishes; in tangent rank one the curvature pair and the commutator vanish. The same calculation applies for a normal line bundle and at boundary points. Positive definiteness supplies the orthogonal splitting and self-adjointness. The stated $\mathrm{AC}_\omega$ is inherited through [F1]–[F3], and no new selection occurs. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
