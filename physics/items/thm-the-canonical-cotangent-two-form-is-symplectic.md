---
id: thm-the-canonical-cotangent-two-form-is-symplectic
kind: theorem
title: The canonical cotangent two-form is symplectic
status: published
origin: pipeline
deps: ["def-countable-choice", "lem-the-tautological-one-form-is-intrinsic-and-smooth"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, cotangent bundles, pp. 11--12
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

Assume $\mathrm{AC}_\omega$. On $T^*Q$ the canonical form
$\omega_{\mathrm{can}}=-d\lambda$ is symplectic and, in cotangent
coordinates,

$$\omega_{\mathrm{can}}=\sum_{i=1}^n dq^i\wedge dp_i.$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth $n$-manifold $Q$, and the tautological form on $T^*Q$.

[A1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F1] In cotangent coordinates, $\lambda=\sum_i p_i\,dq^i$. [[lem-the-tautological-one-form-is-intrinsic-and-smooth]].

## Proof

**Proof technique:** direct.

1.1 From [F1], $-d\lambda=-\sum_i dp_i\wedge dq^i=\sum_i dq^i\wedge dp_i$. Also $d\omega_{\mathrm{can}}=-d^2\lambda=0$. [F1, algebra]

2.1 For $X=\sum_i(a^i\partial_{q^i}+b_i\partial_{p_i})$, step 1.1 gives $\iota_X\omega_{\mathrm{can}}=\sum_i(a^i dp_i-b_i dq^i)$. This vanishes only when all $a^i,b_i$ vanish, so the form is nondegenerate. For $n=0$ the same assertion is vacuous. Thus it is symplectic. [A1, F1, step 1.1] ∎
