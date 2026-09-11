---
id: "ex-chacon-spacer-measure-budget"
kind: "example"
title: "Chacon spacer measure budget"
deps: ["def-chacon-three-cut-one-spacer-towers", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Sarig Problem 3.8 pp.99–101
      url: https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

Assume AC for the Lebesgue-measure interpretation. The initial Chacon column has mass $2/3$. The first two spacers have masses $2/9$ and $2/27$. All spacers together have mass $1/3$; after stage $r\ge0$ the unused reservoir has mass $3^{-(r+1)}\to0$. Spacers are retained, so it is the unused tail, not total spacer mass, that tends to zero.

## Facts & Assumptions

[F1] Spacer $J_j$ has width $2/3^{j+2}$, the initial column has width $2/3$, and all the physical spacers are disjoint and retained [[def-chacon-three-cut-one-spacer-towers]].

[F2] Assume AC for the measure assertions in F1 [[def-axiom-of-choice]].

## Verification

**Given:** The finite normalized Chacon construction.

1.1 At the first cut the spacer has width $2/3^2=2/9$, and at the second it has width $2/3^3=2/27$. After stage $r$ the retained spacer mass is the finite sum $S_r=\sum_{j=0}^{r-1}2/3^{j+2}$. The empty sum at $r=0$ is zero. For $r\ge1$, multiplying the sum by $1-1/3$ cancels all interior terms, giving $(2/3)S_r=(2/9)(1-3^{-r})$, hence $S_r=1/3-3^{-(r+1)}$. The formula also gives zero at $r=0$. [F1, F2]

2.1 Adding the initial mass yields $2/3+S_r=1-3^{-(r+1)}$, whose missing mass is exactly the reservoir. As $r\to\infty$, $S_r\to1/3$ and the reservoir tends to zero. Countable additivity on the disjoint spacer intervals identifies their union's measure with this sum; their union is also the physical interval $[2/3,1)$, since their adjacent endpoints tend to one. The numerical geometric identities themselves are choice-free; AC is used only through F1's Lebesgue-measure interpretation. [F1, F2, step 1.1] ∎
