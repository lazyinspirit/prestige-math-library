---
id: ex-the-standard-symplectic-vector-space
kind: example
title: The standard symplectic vector space
status: published
origin: pipeline
deps: ["def-symplectic-vector-space"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 1, standard symplectic space, pp. 3--4
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

On $\mathbb R^{2n}$ with coordinates $(q^1,\ldots,q^n,p_1,\ldots,p_n)$,
the form $\omega_0=\sum_i dq^i\wedge dp_i$ is symplectic.

## Facts & Assumptions

**Given:** The displayed vector space and alternating form.

[F1] Nondegeneracy means that $v\mapsto\iota_v\omega_0$ has zero kernel.
[[def-symplectic-vector-space]].

## Verification

**Proof technique:** direct.

1.1 For $v=\sum_i(a^i\partial_{q^i}+b_i\partial_{p_i})$, contraction gives $\iota_v\omega_0=\sum_i(a^i dp_i-b_i dq^i)$. [given, algebra]

2.1 This covector vanishes only when every $a^i$ and $b_i$ is zero, so [F1] proves nondegeneracy. Equivalently, $\omega_0^n=n!\,dq^1\wedge dp_1\wedge\cdots\wedge dq^n\wedge dp_n\ne0$. For $n=0$ the zero space is included. [F1, step 1.1] ∎
