---
id: ex-a-compatible-complex-structure-on-standard-symplectic-space
kind: example
title: A compatible complex structure on standard symplectic space
status: published
origin: pipeline
deps: ["def-compatible-complex-structure-on-a-symplectic-vector-space"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Example 2.25, p. 13
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

On standard $\mathbb R^{2n}=\mathbb R_q^n\oplus\mathbb R_p^n$, the map
$J(q,p)=(-p,q)$ is compatible with
$\omega_0=\sum_i dq^i\wedge dp_i$.

## Facts & Assumptions

**Given:** The displayed $J$ and standard form.

[F1] Compatibility requires $J^2=-I$ and positivity and symmetry of $\omega_0(\cdot,J\cdot)$. [[def-compatible-complex-structure-on-a-symplectic-vector-space]].

## Verification

**Proof technique:** direct.

1.1 Direct substitution gives $J^2(q,p)=(-q,-p)$. For $u=(a,b)$ and $v=(c,d)$, $\omega_0(u,Jv)=\omega_0((a,b),(-d,c))=a\cdot c+b\cdot d$. [given, algebra]

2.1 The last expression is the Euclidean inner product, hence symmetric and positive definite. By [F1], $J$ is compatible; the same calculation gives $\omega_0(Ju,Jv)=\omega_0(u,v)$. [F1, step 1.1] ∎
