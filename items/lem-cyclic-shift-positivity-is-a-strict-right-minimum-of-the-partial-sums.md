---
id: lem-cyclic-shift-positivity-is-a-strict-right-minimum-of-the-partial-sums
kind: lemma
title: "$\\sigma^{j}a$ has all partial sums positive exactly when $S_a(i)>S_a(j)$ for every $i>j$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cyclic-shift-and-the-periodic-partial-sum-function, thm-induction-principle, cor-division-algorithm-nonzero-divisor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'N. Dershowitz and S. Zaks, "The Cycle Lemma and Some Applications", Europ. J. Combinatorics 11 (1990) 35–40, §1.1'
      url: "https://www.cs.tau.ac.il/~nachumd/papers/CL.pdf"
pipeline_run: null
---

## Statement

Let $m\ge1$, let $a$ be a word of length $m$ of integers with
$\lVert a\rVert\ge1$, and let $j\in\mathbb{Z}$
([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

1. For every $r$ with $0\le r\le m$,

   $$\sum_{i<r}(\sigma^{j}a)_i = S_a(j+r)-S_a(j).$$

2. Every partial sum $\sum_{i<r}(\sigma^{j}a)_i$ with $1\le r\le m$ is positive
   if and only if $S_a(i)>S_a(j)$ for every integer $i>j$.

Call $j\in\mathbb{Z}$ a **strict right minimum** of $S_a$ when $S_a(i)>S_a(j)$
for every integer $i>j$. Clause 2 says that the shift $\sigma^{j}a$ has all of
its partial sums positive exactly when $j$ is a strict right minimum of $S_a$.

## Facts & Assumptions

**Given:** a natural number $m\ge1$, a word $a$ of length $m$ of integers with $\lVert a\rVert\ge1$, and an integer $j$.

[F1] $(\sigma^{j}a)_i=a_{(i+j)\bmod m}$ for $0\le i<m$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

[F2] $S_a(0)=0$; $S_a(j)-S_a(j-1)=a_{(j-1)\bmod m}$ for every $j\in\mathbb{Z}$; $S_a(j+m)=S_a(j)+\lVert a\rVert$ for every $j\in\mathbb{Z}$; and the finite sum satisfies $\sum_{i<0}c_i=0$ and $\sum_{i<r+1}c_i=\sum_{i<r}c_i+c_r$ ([[def-cyclic-shift-and-the-periodic-partial-sum-function]]).

[L1] A property that holds at $0$ and passes from every natural number to its successor holds at every natural number: if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L2] For $x,b\in\mathbb{Z}$ with $b\ne0$ there is exactly one pair $(q,r)$ of integers with $x=qb+r$ and $0\le r<\lvert b\rvert$ ([[cor-division-algorithm-nonzero-divisor]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1 holds by induction on $r$. At $r=0$ both sides are $0$ by [F2]. If it holds at $r$ with $r<m$, then the finite-sum clause gives $\sum_{i<r+1}(\sigma^{j}a)_i=\sum_{i<r}(\sigma^{j}a)_i+(\sigma^{j}a)_r$, which by the inductive hypothesis and [F1] is $S_a(j+r)-S_a(j)+a_{(j+r)\bmod m}$, and the one-step difference identity of [F2] applied at $j+r+1$ turns the last two terms into $S_a(j+r+1)-S_a(j)$. [F1, F2, L1]

2.1 For every $t\in\mathbb{N}$ and every $i\in\mathbb{Z}$ one has $S_a(i+tm)=S_a(i)+t\lVert a\rVert$: at $t=0$ this is trivial, and the step is the quasiperiodicity clause of [F2]. Hence, if every partial sum of $\sigma^{j}a$ over $1\le r\le m$ is positive, then $S_a(j+r)>S_a(j)$ for those $r$ by step 1.1, and for an arbitrary integer $i>j$ we may write $i-j-1=tm+r'$ with $0\le r'<m$ and $t\ge0$ by [L2], since $i-j-1\ge0$; putting $r:=r'+1$, so $1\le r\le m$ and $i=j+r+tm$, gives $S_a(i)=S_a(j+r)+t\lVert a\rVert\ge S_a(j+r)>S_a(j)$ because $\lVert a\rVert\ge1$ and $t\ge0$. [F2, L1, L2, step 1.1]

3.1 Conversely, if $S_a(i)>S_a(j)$ for every integer $i>j$, then in particular $S_a(j+r)>S_a(j)$ for $1\le r\le m$, so every partial sum of $\sigma^{j}a$ over that range is positive by step 1.1. The two directions together are clause 2. [step 1.1, step 2.1] ∎

## Remarks

- **Why the condition is stated for all $i>j$ and not for one period.** The one-period form is what a shift's partial sums see, and the unbounded form is what the succession structure of the strict right minima is stated in. The equivalence needs $\lVert a\rVert\ge1$: with weight $0$ the function $S_a$ is periodic, $S_a(j+m)=S_a(j)$, and no index is a strict right minimum. In that case the full-period partial sum is also $0$, so no shift has every nonempty partial sum positive.

- **The strict right minima are a property of $S_a$ alone.** They do not refer to the word except through its partial-sum function, and that is what makes the counting argument of the cycle lemma a statement about $\mathbb{Z}$ rather than about words.
