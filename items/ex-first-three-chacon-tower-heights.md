---
id: "ex-first-three-chacon-tower-heights"
kind: "example"
title: "First three chacon tower heights"
deps: ["def-chacon-three-cut-one-spacer-towers"]
verification:
  audited: 2026-09-12
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
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

The first three formal Chacon tower heights are $h_0=1$, $h_1=4$, $h_2=13$. For every integer $r\ge0$, $h_r=(3^{r+1}-1)/2$.

## Facts & Assumptions

[F1] The finite tower recursion is $h_0=1$, $h_{r+1}=3h_r+1$ [[def-chacon-three-cut-one-spacer-towers]]. Its finite combinatorial clause is choice-free.

## Verification

**Given:** The formal recursion of F1.

1.1 Direct substitution gives $h_1=3\cdot1+1=4$ and $h_2=3\cdot4+1=13$. The extra one counts the spacer level, whereas the three copies count the old levels in the three columns. [F1]

2.1 Set $b_r=(3^{r+1}-1)/2$. Then $b_0=(3-1)/2=1$ and $3b_r+1=(3^{r+2}-3+2)/2=(3^{r+2}-1)/2=b_{r+1}$. Induction on $r$ using the same initial value and recurrence proves $h_r=b_r$. At $r=1,2$ this gives $(9-1)/2=4$ and $(27-1)/2=13$, agreeing with step 1.1. Only finite arithmetic and induction are used; no measure existence or choice assumption is used. [F1, step 1.1] ∎
