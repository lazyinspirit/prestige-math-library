---
id: def-cycle-index-of-a-permutation-group
kind: definition
title: "The cycle index of a finite permutation group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action,
       def-fixed-point-sets-of-a-group-action,
       def-permutation-support-disjoint-cycles-and-cycle-type,
       def-multivariate-polynomial-ring-by-iteration]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Ben Lynn, Polya Theory: The Cycle Index Polynomial"
      url: "https://theory.stanford.edu/~blynn/polya/cycleindex.html"
    - title: "Eric W. Weisstein, Cycle Index, Wolfram MathWorld"
      url: "https://mathworld.wolfram.com/CycleIndex.html"
pipeline_run: null
---

## Definition

Let a finite group $G$ act on a finite set $X$ of size $n$. For $g \in G$ and
$1 \le d \le n$, let $j_d(g)$ be the number of $d$-cycles in the permutation of
$X$ induced by $g$. Then

$$\sum_{d=1}^{n} d\,j_d(g)=n,$$

so the monomial

$$\prod_{d=1}^{n} s_d^{j_d(g)}$$

lies in the polynomial ring $\mathbb{Q}[s_1,\dots,s_n]$
([[def-multivariate-polynomial-ring-by-iteration]]).

The **cycle index** of the permutation action $G \curvearrowright X$ is

$$Z_G(s_1,\dots,s_n):=\frac{1}{|G|}\sum_{g \in G}\prod_{d=1}^{n} s_d^{j_d(g)}.$$

When the acting set is clear from context, this polynomial is also written
$Z(G)$.
