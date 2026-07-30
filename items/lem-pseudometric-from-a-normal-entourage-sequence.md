---
id: lem-pseudometric-from-a-normal-entourage-sequence
kind: lemma
title: "A normal sequence of entourages yields a uniformly continuous pseudometric with controlled dyadic balls"
status: published
origin: session
deps: [def-metric-space, def-rational-power, def-integer-power, def-infimum, def-finite-sum, def-gauge-of-pseudometrics, lem-geometric-sequence-null, thm-infimum-property, lem-inf-epsilon, lem-finite-sum-laws, lem-rational-power-laws, lem-rational-power-monotone, def-uniform-space-by-entourages, def-filter, thm-strong-induction]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

Given a decreasing symmetric sequence $(E_n)$ with $E_0=X\times X$ and
$E_{n+1}^{\circ3}\subseteq E_n$, there is a pseudometric $p$ on $X$ such that
$$
E_n\subseteq\{p\le2^{-n}\}\subseteq E_{n-1}
$$
for every $n\ge1$. In particular, each set $\{p<\varepsilon\}$ is an
entourage, so $p$ is uniformly continuous for the original uniformity in the
sense of [[def-gauge-of-pseudometrics]].

## Facts & Assumptions

**Given:** A normal sequence $(E_n)$ of symmetric entourages on $X$.

[A1] The given sequence satisfies $E_0=X\times X$, is decreasing, and has $E_{n+1}^{\circ3}\subseteq E_n$.

[A2] Every entourage contains the diagonal, and every superset of an entourage is again an entourage because a uniformity is an upward-closed filter ([[def-uniform-space-by-entourages]], [[def-filter]]).

[L1] A pseudometric satisfies symmetry, the triangle inequality, and $p(x,x)=0$ ([[def-metric-space]]).

[L2] Every nonempty set of reals bounded below has an infimum, which is a lower bound and is approached from above within every positive epsilon ([[thm-infimum-property]], [[lem-inf-epsilon]], [[def-infimum]]).

[L3] Finite sums split under concatenation and are nonnegative when their terms are nonnegative; a nonempty finite sum of positive terms is positive ([[def-finite-sum]], [[lem-finite-sum-laws]], claims 3 and 4).

[L4] The dyadic weights $2^{-n}=(1/2)^n$ are positive, satisfy the rational power laws, strictly decrease with $n$, and tend to $0$ ([[lem-rational-power-laws]], claims 1 and 2, [[lem-rational-power-monotone]], claim 1, and [[lem-geometric-sequence-null]], claim 1).

[L5] Strong induction may assume a claim for every smaller natural number ([[thm-strong-induction]]).

## Proof

**Proof technique:** constructive.

1.1 For $x,y\in X$, let $W(x,y)$ be the set of sums $\sum_{i<k}2^{-n_i}$ over all finite chains $x=x_0,\ldots,x_k=y$ with $(x_{i-1},x_i)\in E_{n_i}$. This set is nonempty because the one-edge $E_0=X\times X$ chain has weight $1$. Every dyadic term is positive by [L4], so every such finite sum is nonnegative by [L3]; hence $0$ is a lower bound. By [L2], the infimum exists; define $p(x,y):=\inf W(x,y)$. [A1, L2, L3, L4, construct]

1.2 We prove by strong induction on the number $k$ of edges, simultaneously for every $n$, that a $k$-edge chain of total weight less than $2^{-n}$ has $E_n$-related endpoints. For $k=0$ the endpoints coincide and hence are $E_n$-related by [A2]. Now let $k\ge1$ and assume the claim for every shorter chain. Its total weight $w$ is positive by [L3] and [L4]. Take the first edge for which the cumulative weight through that edge exceeds $w/2$. The subchain before it has weight at most $w/2$, and the subchain after it has weight less than $w/2$; because $w<2^{-n}$, both are less than $2^{-(n+1)}$. They have fewer than $k$ edges, so the induction hypothesis makes both endpoint pairs $E_{n+1}$-related. The middle edge has weight $2^{-m}\le w<2^{-n}$; strict decrease of the dyadic weights gives $m\ge n+1$, and decreasingness of $(E_j)$ puts that edge in $E_{n+1}$. Thus the endpoints lie in $E_{n+1}^{\circ3}\subseteq E_n$. Strong induction proves the claim for every finite chain. [A1, A2, L3, L4, L5]

2.1 The empty chain has weight $0$, while all weights are nonnegative, so $p(x,x)=0$. Reversing a chain preserves its weight because each $E_n$ is symmetric, so $p(x,y)=p(y,x)$. For the triangle inequality, suppose instead that $p(x,z)>p(x,y)+p(y,z)$ and put $\delta=(p(x,z)-p(x,y)-p(y,z))/3>0$. By [L2], choose an $x$-to-$y$ chain of weight $a<p(x,y)+\delta$ and a $y$-to-$z$ chain of weight $b<p(y,z)+\delta$. Their concatenation has weight $a+b<p(x,y)+p(y,z)+2\delta<p(x,z)$ by [L3], contradicting that $p(x,z)$ is a lower bound of $W(x,z)$. Thus the triangle inequality holds, and $p$ is a pseudometric by [L1]. [step 1.1, L1, L2, L3]

2.2 A one-edge $E_n$-chain has weight $2^{-n}$, so $E_n\subseteq\{p\le2^{-n}\}$. [step 1.1]

2.3 If $p(x,y)\le2^{-n}$ with $n\ge1$, then [L4] gives $p(x,y)\le2^{-n}<2^{-(n-1)}$. Apply the epsilon property in [L2] with $\varepsilon=2^{-(n-1)}-p(x,y)>0$ to obtain a chain of weight less than $2^{-(n-1)}$. Step 1.2 gives $(x,y)\in E_{n-1}$. Thus $\{p\le2^{-n}\}\subseteq E_{n-1}$. [step 1.1, step 1.2, L2, L4]

3.1 Given $\varepsilon>0$, choose $n$ with $2^{-n}<\varepsilon$ by [L4]. Then $E_n\subseteq\{p\le2^{-n}\}\subseteq\{p<\varepsilon\}$, so the latter set is an entourage by upward closure. By [[def-gauge-of-pseudometrics]], $p$ is uniformly continuous for the original uniformity. [A2, step 2.2, L4, discharge-construct] ∎
