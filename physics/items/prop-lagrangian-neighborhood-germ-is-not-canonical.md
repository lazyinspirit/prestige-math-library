---
id: prop-lagrangian-neighborhood-germ-is-not-canonical
kind: proposition
title: A Lagrangian neighborhood germ is not uniquely determined
status: published
origin: pipeline
deps: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Theorem 5.14 and Remark 5.15, p. 63
verification:
  audited: 2026-09-14
  precheck: pass
proof_strategy: direct
---

## Statement

The data in the Weinstein Lagrangian neighborhood theorem do not uniquely
determine its symplectomorphism germ, even when that germ is required to fix
the Lagrangian pointwise. This already occurs for the zero section of
$T^*\mathbb R$ with its canonical symplectic form.

## Facts & Assumptions

**Given:** The cotangent model $T^*\mathbb R$ with its zero section.

## Proof

**Proof technique:** direct.

1.1 Already on $T^*\mathbb R=\mathbb R^2$ with coordinates $(q,p)$, the map $F(q,p)=(q+p,p)$ is a nonidentity diffeomorphism germ along the zero section. It fixes every $(q,0)$ and satisfies $F^*(dq\wedge dp)=d(q+p)\wedge dp=dq\wedge dp$. [given, algebra]

2.1 For this cotangent model, the identity map is one symplectomorphism germ fixing the zero section, and the shear $F$ from step 1.1 is another. They are distinct and have the same restriction to every point of that section. Hence these data do not uniquely determine a germ. The explicit pair requires no existence theorem or choice principle and makes no separate claim that a natural distinguished choice is impossible. [step 1.1, construct] ∎
