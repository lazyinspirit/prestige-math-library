---
id: prop-coordinate-formula-for-the-poisson-bracket
kind: proposition
title: Coordinate formula for the Poisson bracket
status: draft
origin: pipeline
deps: ["def-countable-choice", "thm-hamilton-equations-in-canonical-cotangent-coordinates", "def-poisson-bracket-on-a-symplectic-manifold"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, §§18.2--18.3, pp. 107--109
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. In canonical cotangent coordinates,

$$\{F,G\}=\sum_i\left(\frac{\partial F}{\partial q^i}\frac{\partial G}{\partial p_i}-\frac{\partial F}{\partial p_i}\frac{\partial G}{\partial q^i}\right).$$

## Facts & Assumptions

**Given:** Smooth functions $F,G$ in a canonical cotangent chart.

[F1] Hamilton's equations give
$X_G=\sum_i(G_{p_i}\partial_{q^i}-G_{q^i}\partial_{p_i})$.
[[thm-hamilton-equations-in-canonical-cotangent-coordinates]].

[F2] $\{F,G\}=X_G(F)$.
[[def-poisson-bracket-on-a-symplectic-manifold]].

## Proof

**Proof technique:** direct.

1.1 Apply the vector field in [F1] to $F$: $X_G(F)=\sum_i(G_{p_i}F_{q^i}-G_{q^i}F_{p_i})$. [F1, given]

2.1 By [F2] this is $\{F,G\}$, and commuting scalar factors gives the displayed formula with the library sign. [F2, step 1.1, algebra] ∎
