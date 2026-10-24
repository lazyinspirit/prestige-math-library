---
id: prop-symplectic-double-orthogonal-and-dimension-identities
kind: proposition
title: Symplectic double-orthogonal and dimension identities
status: published
origin: pipeline
deps: ["def-symplectic-orthogonal-complement"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §2.2, Proposition 2.5, p. 7
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

If $W$ is a subspace of the finite-dimensional symplectic vector space
$(V,\omega)$, then

$$\dim W+\dim W^\omega=\dim V,\qquad (W^\omega)^\omega=W.$$

## Facts & Assumptions

**Given:** A finite-dimensional symplectic vector space $(V,\omega)$ and a subspace $W\le V$.

[F1] The symplectic orthogonal is $(\omega^\flat)^{-1}(\operatorname{ann}W)$, where $\omega^\flat$ is an isomorphism. [[def-symplectic-orthogonal-complement]].

## Proof

**Proof technique:** direct.

1.1 By [F1], $\omega^\flat$ restricts to an isomorphism $W^\omega\to\operatorname{ann}W$. Finite-dimensional annihilator algebra gives $\dim\operatorname{ann}W=\dim V-\dim W$, proving the dimension identity. [F1, algebra]

2.1 Alternation shows $W\subseteq(W^\omega)^\omega$: if $w\in W$ and $v\in W^\omega$, then $\omega(w,v)=-\omega(v,w)=0$. Applying step 1.1 to $W^\omega$ gives $\dim(W^\omega)^\omega=\dim W$, so the inclusion is equality. For $W=0$ or $W=V$ the same calculation gives the stated endpoint identities. [F1, step 1.1, algebra] ∎
