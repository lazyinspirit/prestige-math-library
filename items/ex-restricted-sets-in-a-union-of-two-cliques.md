---
id: ex-restricted-sets-in-a-union-of-two-cliques
kind: example
title: "For $0\\le\\epsilon<1/2$, every sufficiently large $\\epsilon$-restricted set lies in one side"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-c-sparse-and-c-restricted-vertex-set, ex-zero-sparse-sets-are-the-stable-sets, def-clique-stable-set-and-numbers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $G$ be the disjoint union of two cliques of the same order. For
$0\le\epsilon<1/2$, every $\epsilon$-restricted set of unbounded size is
concentrated in one of the two cliques.

## Facts & Assumptions

**Given:** A graph $G$ that is the disjoint union of two cliques $A$ and $B$ of the same order, a real $0\le\epsilon<1/2$, and a nonempty set $X\subseteq V(G)$ with $a=|X\cap A|$ and $b=|X\cap B|$.

[L1] A nonempty set contained in one clique is $0$-dense ([[ex-zero-sparse-sets-are-the-stable-sets]]).

[L2] A nonempty set $Y$ is $\epsilon$-restricted when either every vertex of $Y$ has at most $\epsilon|Y|$ neighbours in $Y$, or every vertex of $Y$ has at most $\epsilon|Y|$ non-neighbours in $Y$ other than itself ([[def-c-sparse-and-c-restricted-vertex-set]]).

## Verification

**Proof technique:** direct.

1.1 If $a=0$ or $b=0$, then $X$ lies in one clique, so [L1] makes it $0$-dense and hence $\epsilon$-restricted. [L1]

1.2 Suppose $a,b>0$. The largest internal degree in $X$ is $\max\{a,b\}-1$, while the largest number of non-neighbours in $X$ is $\max\{a,b\}$, attained by a vertex in the smaller trace. [given]

2.1 If $X$ is $\epsilon$-restricted, then [L2] and step 1.2 force either $\max\{a,b\}-1\le\epsilon(a+b)$ in the sparse case or $\max\{a,b\}\le\epsilon(a+b)$ in the dense case. Either implies $\tfrac12(a+b)-1\le\epsilon(a+b)$, so $|X|=a+b\le2/(1-2\epsilon)$. Thus a restricted set meeting both sides has size bounded solely in terms of $\epsilon$. [step 1.2, L2, algebra]

3.1 Therefore every sufficiently large $\epsilon$-restricted set is concentrated on one side. [step 1.1, step 2.1] ∎
