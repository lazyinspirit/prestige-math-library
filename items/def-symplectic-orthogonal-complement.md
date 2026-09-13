---
id: def-symplectic-orthogonal-complement
kind: definition
title: Symplectic orthogonal complement
status: draft
origin: pipeline
deps: ["def-symplectic-vector-space"]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §2.2, Definition 2.4, p. 7
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Definition

Let $(V,\omega)$ be a [[def-symplectic-vector-space|symplectic vector space]]
and $W\le V$. Its **symplectic orthogonal complement** is

$$W^\omega=\{v\in V:\omega(v,w)=0\text{ for every }w\in W\}.$$

Equivalently, $W^\omega=(\omega^\flat)^{-1}(\operatorname{ann}W)$, so it is a
linear subspace. In particular, $0^\omega=V$ and $V^\omega=0$.
