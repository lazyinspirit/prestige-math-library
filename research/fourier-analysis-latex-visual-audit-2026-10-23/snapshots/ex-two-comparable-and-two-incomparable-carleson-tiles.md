---
id: "ex-two-comparable-and-two-incomparable-carleson-tiles"
kind: "example"
title: "Two comparable and two incomparable carleson tiles"
deps: ["def-carleson-tiles-wave-packets-and-tile-order"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Lacey sections 2–3, tile-order convention
provenance:
  statement: ai-generated
  proof: ai-altered
status: published
origin: "pipeline"
proof_strategy: "direct"
generation:
  role: example
---

## Example

Let $s=[0,1)\times[0,1)$ and $t=[0,2)\times[0,1/2)$. Then $s\le t$. The tiles $u=s$ and $v=[1,2)\times[0,1)$ are incomparable.

## Facts & Assumptions
**Given:** The four explicitly specified rectangles in the example.

[F1] The finite interval and tile-order conventions are those of [[def-carleson-tiles-wave-packets-and-tile-order]]. Only these combinatorial clauses are used; no Fourier or choice-dependent construction is used.

## Proof

1.1 All four displayed intervals are half-open dyadic intervals. The area products are $1\cdot1=1$ for s,u,v and $2\cdot(1/2)=1$ for t. Moreover $[0,1)\subset[0,2)$ and $[0,1/2)\subset[0,1)$, so $s\le t$ by the two defining inclusions. The reverse order fails because $1\in[0,2)$ but $1\notin[0,1)$. [F1, algebra]

1.2 For u,v the frequency intervals agree, but neither spatial interval contains the other: $0\in I_u\setminus I_v$ and $1\in I_v\setminus I_u$. Thus both possible order relations fail, while every tile is comparable to itself. [F1, algebra]

2.1 Steps 1.1 and 1.2 verify the claimed comparable pair and the two failures for the incomparable pair, with midpoint and endpoint membership fixed by the half-open convention. [step 1.1, step 1.2] ∎
