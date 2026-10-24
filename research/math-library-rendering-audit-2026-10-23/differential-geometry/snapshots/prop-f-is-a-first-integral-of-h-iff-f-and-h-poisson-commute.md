---
id: prop-f-is-a-first-integral-of-h-iff-f-and-h-poisson-commute
kind: proposition
title: $F$ is a first integral of $H$ iff $F$ and $H$ Poisson commute
status: published
origin: pipeline
deps: ["prop-observable-evolution-equation", "def-first-integral-and-poisson-commuting-functions"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://web.archive.org/web/20120413034139if_/http://www.math.ist.utl.pt:80/%7Eacannas/Books/symplectic.pdf
      locator: Lecture 18, Theorem 18.9, p. 109
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

$F$ is a first integral of $H$ if and only if $\{F,H\}=0$ on $M$.

## Facts & Assumptions

**Given:** Smooth functions $F,H$ on a symplectic manifold.

[F1] Along every integral curve of $X_H$, $\frac d{dt}F=\{F,H\}$. [[prop-observable-evolution-equation]].

[F2] A first integral is constant on every such local curve. [[def-first-integral-and-poisson-commuting-functions]].

## Proof

**Proof technique:** direct.

1.1 If $\{F,H\}=0$, [F1] makes the derivative of $F$ along every integral curve zero. Ordinary one-variable calculus makes $F$ constant on each interval domain, so it is a first integral by [F2]. [F1, F2, given, algebra]

2.1 Conversely, through every $p\in M$ there is a local integral curve. If $F$ is a first integral, its derivative at time zero is zero; [F1] identifies it with $\{F,H\}(p)$. Since $p$ was arbitrary, the bracket vanishes everywhere. [F1, F2, given] ∎
