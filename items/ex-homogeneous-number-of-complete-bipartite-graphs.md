---
id: ex-homogeneous-number-of-complete-bipartite-graphs
kind: example
title: "For positive $a,b$, $\\operatorname{hom}(K_{a,b})=\\max\\{2,a,b\\}$"
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

If $a,b$ are positive integers, then
$$\operatorname{hom}(K_{a,b})=\max\{2,a,b\}.$$

## Facts & Assumptions

**Given:** Positive integers $a,b$ and a bipartition $A\cup B$ of $K_{a,b}$ with $|A|=a$ and $|B|=b$.

[L1] The homogeneous number is the maximum of the clique and stable-set numbers ([[def-homogeneous-set-and-homogeneous-number]]).

[L2] In $K_{a,b}$, the parts $A,B$ are disjoint, all cross-pairs are edges, and there are no edges inside either part ([[def-standard-complete-bipartite-path-and-cycle-graphs]]).

## Verification

**Proof technique:** direct.

1.1 A clique uses at most one vertex from each part, while positivity of $a,b$ supplies a cross-edge, so $\omega(K_{a,b})=2$. [given, L2]

1.2 A stable set lies wholly in one part, and either whole part is stable, so $\alpha(K_{a,b})=\max\{a,b\}$. [L2]

2.1 Taking the maximum in [L1] gives the formula. [step 1.1, step 1.2, L1] ∎
