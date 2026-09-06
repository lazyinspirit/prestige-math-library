---
id: ex-cellular-homology-of-a-lens-space
kind: example
title: Cellular homology of a lens space
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cellular-boundary-is-the-incidence-degree-matrix, thm-cellular-homology-computes-singular-homology]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Example 2.43
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Example

For $L(p,q)$, the standard cellular complex is $0\to\mathbb Z\xrightarrow0\mathbb Z\xrightarrow p\mathbb Z\xrightarrow0\mathbb Z\to0$. Hence $H_0,H_3\cong\mathbb Z$, $H_1\cong\mathbb Z/p$, and $H_2=0$.

## Facts & Assumptions

**Given:** The standard one-cell-in-each-dimension CW structure of $L(p,q)$, $p\geq1$.

## Verification

**Proof technique:** direct.

1.1 Its incidence degrees are $0,p,0$ in dimensions $3,2,1$, respectively, so the displayed complex follows from [[thm-cellular-boundary-is-the-incidence-degree-matrix]]. [given]

2.1 Its kernels and images are the stated groups (also for $p=1$, when $\mathbb Z/p=0$), and the cellular comparison transfers them to singular homology. [step 1.1] ∎
