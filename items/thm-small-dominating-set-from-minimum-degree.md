---
id: thm-small-dominating-set-from-minimum-degree
kind: theorem
title: "An $n$-vertex graph of minimum degree $\\delta>1$ has a dominating set of size at most $n(\\log(\\delta+1)+1)/(\\delta+1)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-dominating-set-in-a-graph, thm-product-probability-has-independent-coordinate-events, thm-linearity-of-expectation, thm-expectation-monotonicity-and-bounds, lem-exponential-dominates-one-plus-x, def-natural-logarithm, thm-natural-logarithm-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Theorem 6.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

Let $G$ be an $n$-vertex graph with minimum degree $\delta>1$. Then
$$\gamma(G)\le\frac{n(\log(\delta+1)+1)}{\delta+1}.$$

## Facts & Assumptions

**Given:** An $n$-vertex graph $G$ of minimum degree $\delta>1$.

[L1] A dominating set contains or neighbours every vertex ([[def-dominating-set-in-a-graph]]).

[L2] Independent Bernoulli coordinate choices form a finite product space ([[thm-product-probability-has-independent-coordinate-events]]).

[L3] Expectation is linear and some outcome is at most its expectation ([[thm-linearity-of-expectation]], [[thm-expectation-monotonicity-and-bounds]]).

[L4] $(1-p)^m\le\exp(-mp)$ for $0\le p\le1$ ([[lem-exponential-dominates-one-plus-x]]).

[L5] The natural logarithm is increasing and satisfies its inverse and product laws ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

## Proof

**Proof technique:** constructive.

1.1 Put $p=\log(\delta+1)/(\delta+1)$. Since $\delta+1>1$ and the logarithm is increasing with $\log1=0$, one has $p>0$. Applying [L4] at $-p$ is not needed here: applying its first inequality at $\log(\delta+1)$ gives $1+\log(\delta+1)\le\delta+1$, hence $p\le\delta/(\delta+1)<1$. [L4, L5, algebra]

1.2 Select every vertex independently with probability $p$, obtaining $S$, and let $U$ be the vertices neither in $S$ nor adjacent to a member of $S$. Then $D=S\cup U$ is dominating. [L1, L2, construct]

2.1 A fixed vertex belongs to $U$ only if none of at least $\delta+1$ vertices in its closed neighbourhood is selected, so $\mathbb P(v\in U)\le(1-p)^{\delta+1}\le\exp(-p(\delta+1))=1/(\delta+1)$. [step 1.1, step 1.2, L2, L4, L5]

3.1 By linearity, $\mathbb E[|D|]\le np+n/(\delta+1)=n(\log(\delta+1)+1)/(\delta+1)$. [step 2.1, L3, algebra]

4.1 Some outcome has $|D|$ at most this expectation, and its $D$ is a dominating set by step 1.2. [step 1.2, step 3.1, L3, discharge-construct] ∎
