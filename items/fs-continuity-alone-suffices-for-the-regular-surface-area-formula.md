---
id: fs-continuity-alone-suffices-for-the-regular-surface-area-formula
kind: false-statement
title: 'FALSE: continuity alone makes the regular-patch surface-area formula applicable'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-admissible-regular-parametrized-surface-patch, def-directional-and-partial-derivatives, def-euclidean-inner-product, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: 'S. Cañez, Northwestern Math 320-3 lecture notes, cone example'
      url: 'https://www.math.northwestern.edu/~scanez/courses/320/notes/lecture-notes-320-3.pdf'
    - title: 'University of Toronto MAT237 notes, Section 5.3'
      url: 'https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter5/S5.3.html'
pipeline_run: null
---

## Statement

Every continuous injective parametrization on a compact Jordan region satisfies the regular-patch cross-product surface-area formula.

## Facts & Assumptions

**Given:** The closed unit disc $D$ and $\varphi(u,v)=(u,v,\|(u,v)\|_2)$.

[L1] The Euclidean norm is continuous for the Euclidean metric, and its definition restricts on the horizontal axis to $\|(u,0)\|_2=|u|$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-euclidean-inner-product]]).

[L2] A partial derivative is a one-variable derivative along a coordinate line ([[def-directional-and-partial-derivatives]]), while a regular patch must be $C^1$ on a neighbourhood and have a nonzero parameter cross product in the interior ([[def-admissible-regular-parametrized-surface-patch]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], $\varphi$ is continuous, and its first two coordinates make it injective on $D$. [given, L1]

1.2 Along $v=0$, the third component is $|u|$. Its right difference quotient at $0$ is $1$ and its left difference quotient is $-1$, so the $u$-partial derivative of $\varphi$ does not exist at the interior point $(0,0)$ by [L2]. [given, L1, L2, algebra]

2.1 Thus the cross-product integrand required by [L2] is unavailable at an interior point despite continuity and injectivity, refuting the statement. A polar cone parametrization moves the apex failure to a parameter-boundary point and is a different parametrization. [step 1.1, step 1.2, L2] ∎
