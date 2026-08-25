---
id: cor-sauer-shelah-polynomial-bound
kind: corollary
title: "For $d\\ge1$ a family on $[n]$ of VC dimension at most $d$ has at most $(n+1)^{d}$ members"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sauer-shelah, thm-binomial-theorem, def-binomial-coefficient, thm-cardinality-of-a-set-of-functions, def-nat-power, def-sum-over-a-finite-index-set]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Statement

Let $d\ge1$. If $\mathcal{F}\subseteq\mathcal{P}([n])$ has VC dimension at most
$d$, then

$$\lvert\mathcal{F}\rvert\le(n+1)^d.$$

## Facts & Assumptions

**Given:** a family $\mathcal{F}\subseteq\mathcal{P}([n])$ with $\operatorname{VC}(\mathcal{F})\le d$ and $d\ge1$.

[L1] Sauer-Shelah gives $\lvert\mathcal{F}\rvert\le\sum_{i=0}^{d}\binom{n}{i}$ ([[thm-sauer-shelah]]).

[F1] For $0\le i\le n$, increasing enumeration injects the $i$-element subsets of $n$ into the words of length $i$ over $n$, so $\binom{n}{i}\le n^i$; for $i>n$, $\binom ni=0$ ([[def-binomial-coefficient]], [[thm-cardinality-of-a-set-of-functions]]).

[F2] In $\mathbb{R}$, the binomial theorem gives $(n+1)^d=\sum_{j=0}^{d}\iota\binom{d}{j}n^j$ ([[thm-binomial-theorem]]), and for $0\le j\le d$ the coefficient $\iota\binom dj$ is at least $1$ because the initial segment $j\subseteq d$ is one $j$-element subset ([[def-binomial-coefficient]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], it suffices to bound the sum $\sum_{i=0}^{d}\binom{n}{i}$. [L1]

2.1 Each summand satisfies $\binom{n}{i}\le n^i$: use the injection in [F1] for $i\le n$, and its zero clause for $i>n$. Hence $\sum_{i=0}^{d}\binom{n}{i}\le\sum_{i=0}^{d}n^i$. [F1, step 1.1]

3.1 By [F2], viewed in $\mathbb{R}$ every summand $n^i$ appears in the expansion of $(n+1)^d$ with coefficient at least $1$, so $\sum_{i=0}^{d}n^i\le(n+1)^d$. Since both sides are natural numbers, the same inequality holds in the present setting. Combining with step 2.1 proves the claim. [F2, step 2.1] ∎

## Remarks

- The hypothesis $d\ge1$ matters only to avoid the trivial constant case. The companion page's false statement replaces $(n+1)^d$ by $n^d$, which already fails at $n=1$, $d=1$.
