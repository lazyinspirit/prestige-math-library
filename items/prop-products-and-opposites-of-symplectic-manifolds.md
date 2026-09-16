---
id: prop-products-and-opposites-of-symplectic-manifolds
kind: proposition
title: Products and opposites of symplectic manifolds
status: published
origin: pipeline
deps: ["def-symplectic-form-and-symplectic-manifold", "thm-the-exterior-derivative-commutes-with-pullback"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §4.4, product and opposite convention, pp. 51--52
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

If $(M,\omega)$ and $(N,\eta)$ are symplectic, then
$M^-=(M,-\omega)$ is symplectic and

$$\Omega=\operatorname{pr}_M^*\omega+\operatorname{pr}_N^*\eta$$

is symplectic on $M\times N$.

## Facts & Assumptions

**Given:** Symplectic manifolds $(M,\omega)$ and $(N,\eta)$.

[F1] A symplectic form is closed and pointwise nondegenerate. [[def-symplectic-form-and-symplectic-manifold]].

[F2] Exterior differentiation commutes with pullback. [[thm-the-exterior-derivative-commutes-with-pullback]].

## Proof

**Proof technique:** direct.

1.1 The form $-\omega$ is closed and has the same radical as $\omega$, so it is symplectic. By [F2], $d\Omega=\operatorname{pr}_M^*d\omega+\operatorname{pr}_N^*d\eta=0$. [F1, F2, algebra]

2.1 Under $T_{(p,q)}(M\times N)=T_pM\oplus T_qN$, if $\Omega((u,v),(u',v'))=0$ for all $(u',v')$, taking $v'=0$ and then $u'=0$ gives $u=0$ and $v=0$ by [F1]. Thus $\Omega$ is nondegenerate, including when either factor has dimension zero. [F1, step 1.1] ∎
