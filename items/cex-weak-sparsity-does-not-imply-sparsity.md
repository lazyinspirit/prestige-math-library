---
id: cex-weak-sparsity-does-not-imply-sparsity
kind: counterexample
title: "A star has tiny self-density, yet no restricted subset containing its centre has more than two vertices"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-c-sparse-and-c-restricted-vertex-set, lem-a-sparse-set-has-small-self-density, lem-a-weakly-sparse-set-has-a-large-sparse-subset, def-edge-density-between-vertex-sets, def-standard-complete-bipartite-path-and-cycle-graphs]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, A. Scott, P. Seymour, and S. Spirkl, Strengthening Rödl's theorem, sec. 1"
      url: "https://arxiv.org/pdf/2105.07370"
pipeline_run: null
---

## Statement refuted

Every weakly sparse set is sparse.

## Facts & Assumptions

**Given:** A real $\epsilon<1/3$, an integer $m\ge2$, the star $K_{1,m}$ with centre $v$, and its full vertex set $X$.

[L1] A set is $\epsilon$-sparse or $\epsilon$-dense according to the degree and non-neighbour bounds of [[def-c-sparse-and-c-restricted-vertex-set]].

[L2] The self-density is computed from the ordered internal edge count ([[def-edge-density-between-vertex-sets]]).

## Counterexample

**Proof technique:** constructive.

1.1 The set $X$ has $m+1$ vertices and exactly $m$ edges, so $d_G(X,X)=2m/(m+1)^2$, which tends to $0$ as $m\to\infty$. [L2, given, construct]

2.1 Let $Y\subseteq X$ contain the centre $v$ and at least two leaves. Then $v$ has $|Y|-1$ neighbours in $Y$, so the sparse inequality in [L1] fails when $\epsilon<1/3$. [step 1.1, L1, algebra]

3.1 Each leaf of $Y$ has at least $|Y|-2$ non-neighbours in $Y$, so the dense inequality in [L1] also fails when $\epsilon<1/3$. Thus no such $Y$ is $\epsilon$-restricted. [step 2.1, L1, algebra]

4.1 Hence a set can have arbitrarily small self-density without being sparse or dense in the maximum-degree sense. [step 1.1, step 3.1, discharge-construct] ∎
