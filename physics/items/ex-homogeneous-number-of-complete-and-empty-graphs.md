---
id: ex-homogeneous-number-of-complete-and-empty-graphs
kind: example
title: "$K_n$ and $\\overline K_n$ both have homogeneous number $n$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homogeneous-set-and-homogeneous-number, def-standard-complete-bipartite-path-and-cycle-graphs]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdos-Hajnal Conjecture: A Survey, sec. 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
pipeline_run: null
---

## Example

For every $n\in\mathbb N$,
$$\operatorname{hom}(K_n)=\operatorname{hom}(\overline K_n)=n.$$

## Facts & Assumptions

**Given:** A natural number $n$.

[L1] $\operatorname{hom}(G)=\max\{\omega(G),\alpha(G)\}$, with both numbers equal to $0$ for the null graph ([[def-homogeneous-set-and-homogeneous-number]]).

[L2] The graph $K_n$ has every possible edge and $\overline K_n$ has none ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct.

1.1 If $n=0$, both graphs are null and the assertion is [L1]. [L1, L2]

1.2 If $n>0$, all $n$ vertices form a clique in $K_n$ and a stable set in $\overline K_n$, while neither graph has a vertex set larger than its whole vertex set. [L2]

2.1 Thus the maximum in [L1] is $n$ for both graphs. [step 1.1, step 1.2, L1] ∎
