---
id: lem-binomial-coefficients-symmetric-and-unimodal
kind: lemma
title: "The binomial coefficients are symmetric and increase to the middle level before decreasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-binomial-coefficient, thm-product-rule, def-sum-over-a-finite-index-set, thm-binomial-closed-formula]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.2"
      url: "https://appliedcombinatorics.org/book/s_posets_subset-lattice.html"
pipeline_run: null
---

## Statement

For every $n$ and $0\le k\le n$,

$$\binom nk=\binom n{n-k}.$$

For $0\le k<n$,

$$\binom n{k+1}\ge\binom nk\quad\Longleftrightarrow\quad k+1\le n-k.$$

Consequently the binomial coefficients increase up to the middle rank and
decrease after it. Their maximum is attained only at $k=n/2$ when $n$ is even,
and at the two ranks $k=(n-1)/2$ and $k=(n+1)/2$ when $n$ is odd.

## Facts & Assumptions

**Given:** Natural numbers $n$ and $k$ with $0\le k\le n$.

[F1] $\binom nk$ is the number of $k$-element subsets of an $n$-element set ([[def-binomial-coefficient]]).

[L1] The binomial closed formula gives symmetry and, for $k<n$, the identity $\binom nk(n-k)=\binom n{k+1}(k+1)$ ([[thm-binomial-closed-formula]]).

[L2] The product rule licenses the usual double count of a set together with a chosen element outside or inside it ([[thm-product-rule]]).

## Proof

**Proof technique:** direct.

1.1 The symmetry $\binom nk=\binom n{n-k}$ is the symmetry clause of [L1]. [L1]

1.2 For $k<n$, count pairs $(S,x)$ with $|S|=k$ and $x\notin S$ by first choosing $S$, or by first choosing the $(k+1)$-set $S\cup\{x\}$ and then the deleted element. This gives $\binom nk(n-k)=\binom n{k+1}(k+1)$, in agreement with [L1]. [F1, L1, L2]

2.1 Since both $n-k$ and $k+1$ are positive, step 1.2 shows that $\binom n{k+1}\ge\binom nk$ exactly when $n-k\ge k+1$, with equality exactly when $n-k=k+1$. [step 1.2, algebra]

3.1 Reading step 2.1 as $k$ increases gives strict increase before the middle, equality between the two middle ranks only when $n$ is odd, and strict decrease afterward; symmetry from step 1.1 identifies the stated maximizing ranks. [step 1.1, step 2.1] ∎
