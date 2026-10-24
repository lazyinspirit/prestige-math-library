---
id: prop-symplectic-reduction-of-a-coisotropic-vector-subspace
kind: proposition
title: Symplectic reduction of a coisotropic vector subspace
status: published
origin: pipeline
deps: ["def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §2.4, Proposition 2.20 and following paragraph, pp. 11--12
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

If $W$ is coisotropic in $(V,\omega)$, then $W/W^\omega$ has the symplectic
form

$$\overline\omega([u],[v])=\omega(u,v).$$

## Facts & Assumptions

**Given:** A symplectic vector space $(V,\omega)$ and a coisotropic subspace $W$.

[F1] Coisotropic means $W^\omega\subseteq W$. [[def-isotropic-coisotropic-symplectic-and-lagrangian-subspaces]].

## Proof

**Proof technique:** direct.

1.1 The quotient is defined by [F1]. Replacing $u$ by $u+a$ with $a\in W^\omega$, or $v$ by $v+b$ with $b\in W^\omega$, does not change $\omega(u,v)$ because $u,v\in W$. Hence $\overline\omega$ is well-defined, bilinear, and alternating. [F1, algebra]

2.1 If $[u]$ lies in its radical, then $\omega(u,v)=0$ for every $v\in W$, so $u\in W^\omega$ and $[u]=0$. Thus the descended form is nondegenerate. When $W=V$ this recovers $V$; when $W$ is Lagrangian the quotient is the zero symplectic space. [F1, step 1.1] ∎
