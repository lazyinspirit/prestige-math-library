---
id: fs-every-half-dimensional-submanifold-is-lagrangian
kind: false-statement
title: Every half-dimensional submanifold is Lagrangian
status: draft
origin: pipeline
deps: ["def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 2, Lagrangian submanifolds, pp. 15--17
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement refuted

Every half-dimensional submanifold of a symplectic manifold is Lagrangian.

## Facts & Assumptions

**Given:** The proposed universal claim.

[F1] A Lagrangian submanifold must have Lagrangian tangent spaces, hence the
symplectic form restricts to zero on them.
[[def-isotropic-coisotropic-symplectic-and-lagrangian-submanifolds]].

## Refutation

**Proof technique:** direct.

1.1 In standard $\mathbb R^4$ with $\omega=dq_1\wedge dp_1+dq_2\wedge dp_2$, take the coordinate plane $S=\{q_2=p_2=0\}$. It has dimension two, half of four. [given, algebra]

2.1 The restriction is $\omega|_S=dq_1\wedge dp_1\ne0$. By [F1], $S$ is symplectic rather than Lagrangian, so half dimension alone does not suffice. [F1, step 1.1] ∎
