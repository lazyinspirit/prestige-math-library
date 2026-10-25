---
id: thm-erdos-ko-rado
kind: theorem
title: "Erdős-Ko-Rado theorem: for $1\\le k$ and $n\\ge 2k$, an intersecting family of $k$-subsets of an $n$-set has size at most $\\binom{n-1}{k-1}$, and a star attains the bound"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-katona-cyclic-interval-bound, def-intersecting-family, def-binomial-coefficient, def-factorial-and-falling-factorial, thm-number-of-bijections-of-a-finite-set, thm-product-rule, thm-binomial-closed-formula]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matoušek and J. Vondrák, The Probabilistic Method, pp. 14-15"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Statement

Let $A$ be an $n$-element set, where $1\le k$ and $n\ge2k$. If
$\mathcal F\subseteq[A]^k$ is intersecting, then

$$|\mathcal F|\le\binom{n-1}{k-1}.$$

For every fixed $a\in A$, the star
$\{S\in[A]^k:a\in S\}$ is intersecting and has cardinality
$\binom{n-1}{k-1}$, so the bound is attained. No uniqueness of extremal
families is asserted.

## Facts & Assumptions

**Given:** An $n$-element set $A$, natural numbers $1\le k$ and $n\ge2k$, and an intersecting family $\mathcal F\subseteq[A]^k$.

[L1] In any cyclic order of $A$, at most $k$ length-$k$ cyclic intervals can belong to a pairwise intersecting family ([[lem-katona-cyclic-interval-bound]]).

[F1] A $k$-uniform family is intersecting when every two members meet, and a star consists of the $k$-sets through one fixed point ([[def-intersecting-family]], [[def-binomial-coefficient]]).

[L2] An $m$-element set has $m!$ orderings, and independent finite choices multiply ([[thm-number-of-bijections-of-a-finite-set]], [[def-factorial-and-falling-factorial]], [[thm-product-rule]]).

[L3] The binomial closed formula gives $(n-1)!=(k-1)!(n-k)!\binom{n-1}{k-1}$ ([[thm-binomial-closed-formula]]).

## Proof

**Proof technique:** direct.

1.1 A cyclic order of $A$ is a linear ordering modulo cyclic rotation. There are $(n-1)!$ cyclic orders: fix one element in the first position and order the remaining $n-1$ elements. [given, L2]

1.2 Fix $S\in[A]^k$. Exactly $k!(n-k)!$ cyclic orders make $S$ a cyclic interval: arrange the elements of $S$ within one consecutive block and arrange the elements of $A\setminus S$ in the complementary block. [given, L2]

1.3 For a fixed $a\in A$, deleting $a$ is a bijection from the star centred at $a$ to the $(k-1)$-subsets of $A\setminus\{a\}$. The star is intersecting because all its members contain $a$, and its size is $\binom{n-1}{k-1}$. [F1]

2.1 Count pairs $(\omega,S)$ where $\omega$ is a cyclic order and $S\in\mathcal F$ is a length-$k$ interval in $\omega$. By step 1.2 there are $|\mathcal F|k!(n-k)!$ pairs. [step 1.2, L2]

3.1 By [L1], each of the $(n-1)!$ cyclic orders occurs in at most $k$ pairs. Hence $|\mathcal F|k!(n-k)!\le k(n-1)!$. [step 1.1, step 2.1, L1]

4.1 Cancelling the positive factor $k!(n-k)!=k(k-1)!(n-k)!$ in step 3.1 and using [L3] gives $|\mathcal F|\le\binom{n-1}{k-1}$. [step 3.1, L3, algebra]

5.1 Step 4.1 proves the upper bound and step 1.3 exhibits an intersecting family attaining it. [step 4.1, step 1.3] ∎

## Remarks

The hypothesis $n\ge2k$ is essential. At the boundary $n=2k$, choosing exactly one set from each complementary pair already gives many extremal families, so the theorem deliberately does not claim that stars are the only extremizers.
