---
id: thm-compatible-complex-structures-exist-on-symplectic-vector-spaces
kind: theorem
title: Compatible complex structures exist on symplectic vector spaces
status: published
origin: pipeline
deps: ["def-compatible-complex-structure-on-a-symplectic-vector-space", "thm-non-negative-square-root-exists-and-is-unique"]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Theorem 2.26, pp. 14--15
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

Every finite-dimensional symplectic vector space $(V,\omega)$ admits an
$\omega$-compatible complex structure. More precisely, every chosen inner
product $k$ on $V$ canonically determines one.

## Facts & Assumptions

**Given:** A finite-dimensional symplectic vector space $(V,\omega)$ and an inner product $k$ on $V$.

[F1] A non-negative self-adjoint endomorphism of a finite-dimensional inner product space has a unique non-negative square root. [[thm-non-negative-square-root-exists-and-is-unique]].

[F2] Compatibility means that $J^2=-I$ and $g_J(u,v)=\omega(u,Jv)$ is an inner product. [[def-compatible-complex-structure-on-a-symplectic-vector-space]].

## Proof

**Proof technique:** direct.

1.1 Nondegeneracy of $\omega$ uniquely defines an invertible $A\in\operatorname{End}(V)$ by $k(u,v)=\omega(u,Av)$. Skew-symmetry of $\omega$ gives $k(u,A^{-1}v)=-k(A^{-1}u,v)$, so $A^*=-A$. Hence $-A^2=A^*A$ is positive definite. [given, algebra]

2.1 Let $P=(-A^2)^{1/2}$ be the positive square root from [F1]. Since $A$ commutes with $-A^2$, it preserves each eigenspace of $-A^2$; on that eigenspace $P$ is multiplication by the positive square root of the eigenvalue, so $P$ commutes with $A$. Define $J=AP^{-1}$. Then $J^2=A^2P^{-2}=-I$. [F1, step 1.1, algebra]

3.1 Since $P$ is positive definite and commutes with $A$, $$\omega(u,Jv)=\omega(u,AP^{-1}v)=k(u,P^{-1}v)=k(P^{-1/2}u,P^{-1/2}v).$$ This is symmetric and positive definite, so [F2] makes $J$ compatible. For $V=0$ the same formulas give the unique endomorphism, and all conditions are vacuous. [F1, F2, step 1.1, step 2.1] ∎
