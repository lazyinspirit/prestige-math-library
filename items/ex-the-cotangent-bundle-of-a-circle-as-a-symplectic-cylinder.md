---
id: ex-the-cotangent-bundle-of-a-circle-as-a-symplectic-cylinder
kind: example
title: The cotangent bundle of a circle as a symplectic cylinder
status: published
origin: pipeline
deps: ["def-countable-choice", "lem-the-tautological-one-form-is-intrinsic-and-smooth", "thm-the-canonical-cotangent-two-form-is-symplectic"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, cotangent coordinates, pp. 11--12
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. The cotangent bundle of the circle is the
symplectic cylinder

$$T^*S^1\cong S^1\times\mathbb R,\qquad \lambda=p\,d\theta,\qquad \omega_{\mathrm{can}}=d\theta\wedge dp.$$

## Facts & Assumptions

**Given:** The standard angular atlas of $S^1$ and its induced cotangent coordinates.

[F1] In cotangent coordinates, $\lambda=p_i\,dq^i$. [[lem-the-tautological-one-form-is-intrinsic-and-smooth]].

[F2] In cotangent coordinates, $\omega_{\mathrm{can}}=dq^i\wedge dp_i$. [[thm-the-canonical-cotangent-two-form-is-symplectic]].

## Verification

**Proof technique:** direct.

1.1 On overlaps, angular coordinates differ by a locally constant multiple of $2\pi$, so $d\theta'=d\theta$ and the fibre coefficient is $p'=p$. Thus the local products glue to $S^1\times\mathbb R$, and $p\,d\theta$ is global. [given, algebra]

2.1 Applying [F1] and [F2] gives $\lambda=p\,d\theta$ and $\omega_{\mathrm{can}}=-d(p\,d\theta)=d\theta\wedge dp$, the standard area form on the cylinder. [F1, F2, step 1.1] ∎
