---
id: ex-the-mobius-band-line-foliation
kind: example
title: "The Mobius-band line foliation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-regular-foliation-atlas,
       def-leaf-of-a-regular-foliation,
       thm-regular-foliations-and-integrable-distributions-correspond]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=w4bhBwAAQBAJ"
---

## Example

Model the Mobius band as the quotient of $[0,1] \times \mathbb R$ by the
identification $(0,t) \sim (1,-t)$. The horizontal lines
$[0,1] \times \{t\}$ descend to a regular one-dimensional foliation.

The line $t=0$ becomes the central circle leaf, while every leaf with
$t \neq 0$ is a circle: one traversal of the horizontal segment changes the
transverse sign, and a second traversal returns to the starting point.

## Facts & Assumptions

**Given:** The strip model of the Mobius band and its horizontal lines.

[A1] The gluing preserves horizontality.

## Verification

**Proof technique:** direct.

1.1 The quotient map identifies horizontal tangent directions with horizontal [given] tangent directions, so the horizontal line field descends to a smooth one-dimensional distribution on the Mobius band. [given]

1.2 Its local plaques are the images of small horizontal intervals, and the [given] quotient charts preserve that plaque structure. Hence the descended line field defines a regular foliation. [given]

1.3 The line $t=0$ closes up to the central circle. If $t\neq 0$, then [given] the endpoint $(1,t)$ is identified with $(0,-t)$, so one horizontal pass through the quotient changes the transverse sign; a second pass along the line $-t$ returns to the original class. Thus the leaf through $t\neq 0$ is also a circle. [given]

2.1 This yields the standard line foliation of the Mobius band. [given] ∎ [given]
