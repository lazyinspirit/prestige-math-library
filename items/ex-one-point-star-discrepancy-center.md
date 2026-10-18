---
id: ex-one-point-star-discrepancy-center
kind: example
title: "Exact star discrepancy of the center point"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  - def-star-discrepancy-and-digital-net
justified_by: []
axiom_use: "None; the proof uses finite products and an explicit sequence of anchored boxes."
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Art B. Owen, Practical Quasi-Monte Carlo, Chapter 15, printed pp. 17–19 and Theorem 15.7"
      url: "https://artowen.su.domains/mc/practicalqmc.pdf"
    - title: "Josef Dick, Optimal Polynomial Tractability Exponents for the Inverse Star Discrepancy, arXiv:2607.23571v3"
      url: "https://arxiv.org/pdf/2607.23571v3"
---

## Example

For an integer $d\ge2$, let $P=(x)$ be the singleton configuration with $x=(1/2,\ldots,1/2)\in[0,1)^d$. Its star discrepancy is $D_1^*(P)=1-2^{-d}$. Thus the exact values are $3/4$ in dimension two and $7/8$ in dimension three.

## Facts & Assumptions

**Given:** An integer $d\ge2$ and the singleton configuration $P=(1/2,\ldots,1/2)$. Compute $D_1^*(P)$ using the half-open anchored-box convention.

[F1] [[def-star-discrepancy-and-digital-net]]: A point multiset is an ordered list in $[0,1)^d$, repetitions are counted with multiplicity, and $D_N^*$ is the supremum over $u\in[0,1]^d$ of the absolute difference between the fraction of listed points in $\prod_j[0,u_j)$ and its volume $\prod_j u_j$.

## Verification

1.1 For $u\in[0,1]^d$, the point $x$ lies in $\prod_{j=1}^d[0,u_j)$ exactly when $u_j>1/2$ for every $j$, because the box is half-open. The point count is therefore one if all these inequalities hold and zero otherwise. [given, F1]

2.1 If some $u_j\le1/2$, the count is zero, so the discrepancy is $\prod_j u_j\le u_j\le1/2$. Since $d\ge2$, $1-2^{-d}\ge3/4>1/2$, so this case contributes less than $1-2^{-d}$. [given, step 1.1, algebra]

2.2 If every $u_j>1/2$, the count is one and the discrepancy is $1-\prod_j u_j$. The product exceeds $2^{-d}$, so this value is less than $1-2^{-d}$. [given, step 1.1, algebra]

3.1 For each integer $k\ge3$, the box endpoint $u^{(k)}=(1/2+1/k,\ldots,1/2+1/k)$ lies in $[0,1]^d$ and has discrepancy $1-(1/2+1/k)^d\to1-2^{-d}$. Thus the supremum is at least $1-2^{-d}$, while steps 2.1–2.2 bound every box error above by this value; hence $D_1^*(P)=1-2^{-d}$. Substitution gives $D_1^*(P)=3/4$ for $d=2$ and $7/8$ for $d=3$. [given, F1, step 2.1, step 2.2, choose, algebra] ∎

## Remarks

The finite calculation is proved only from the definition; it is not an asymptotic-rate claim. For context, Owen reports the planar order $n^{-1}\log n$ and, for fixed $d\ge3$, a classical Roth lower baseline $n^{-1}(\log n)^{(d-1)/2}$ alongside a known construction upper order $n^{-1}(\log n)^{d-1}$. The cited lower bound is not presented as the strongest known lower bound. Dick's version 3 result concerns uniform growing-dimension tractability, and Remark 1.4 keeps fixed dimension separate. These source-reported comparisons do not prove a matching lower bound or resolve the open question.
