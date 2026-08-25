---
id: thm-nonuniform-fisher-inequality
kind: theorem
title: "Fisher's inequality, nonuniform form: distinct nonempty $A_1,\\dots,A_m\\subseteq[n]$ with $\\lvert A_i\\cap A_j\\rvert=t$ for all $i\\ne j$ satisfy $m\\le n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent, lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size, lem-a-family-with-independent-incidence-vectors-has-at-most-n-members, def-set-family-and-its-incidence-matrix, def-incidence-vector-of-a-subset, thm-sum-rule, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §4.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
    - title: "J. Matousek, Thirty-three Miniatures, Miniature 4"
      url: "https://users.math.cas.cz/~matousek/mini.ps"
pipeline_run: null
---

## Statement

Let $A_1,\dots,A_m$ be distinct nonempty subsets of $[n]$. If there is a natural
number $t$ such that

$$\lvert A_i\cap A_j\rvert=t\qquad\text{for every }i\ne j,$$

then $m\le n$.

## Facts & Assumptions

**Given:** distinct nonempty subsets $A_1,\dots,A_m\subseteq[n]$ and a natural number $t$ with $\lvert A_i\cap A_j\rvert=t$ for every $i\ne j$.

[L1] If real vectors have a common pairwise inner product $t\ge0$ and larger diagonal entries, then they are linearly independent ([[lem-real-vectors-with-equal-pairwise-products-and-larger-norms-are-independent]]).

[L2] For incidence vectors over $\mathbb{R}$, the pairing is the intersection size ([[lem-the-standard-form-of-two-incidence-vectors-is-the-intersection-size]]).

[L3] A family with independent incidence vectors has at most $n$ members ([[lem-a-family-with-independent-incidence-vectors-has-at-most-n-members]]).

## Proof

**Proof technique:** direct.

1.1 First suppose that some set, say $A_1$, has size exactly $t$. Then $t\ge1$ because the sets are nonempty. For every $j>1$, the equality $\lvert A_1\cap A_j\rvert=t=\lvert A_1\rvert$ forces $A_1\subseteq A_j$, so the differences $A_j\setminus A_1$ are nonempty. If $(A_j\setminus A_1)\cap(A_k\setminus A_1)$ were nonempty for $j\ne k$, then $A_j\cap A_k$ would properly contain $A_1$, contradicting $\lvert A_j\cap A_k\rvert=t$. Thus these differences are pairwise disjoint, so there are at most $n-\lvert A_1\rvert$ of them and therefore at most $n-1$ indices $j>1$. Hence $m\le n$. [given, algebra]

1.2 Now suppose every $\lvert A_i\rvert>t$. By [L2], the incidence vectors in $\mathbb{R}^n$ satisfy $\langle v_{A_i},v_{A_j}\rangle=t$ for $i\ne j$ and $\langle v_{A_i},v_{A_i}\rangle=\lvert A_i\rvert>t$. So [L1] makes them linearly independent. [L1, L2, given]

2.1 The master lemma [L3] then gives $m\le n$. Together with step 1.1, this proves the theorem in every case. [L3, step 1.1, step 1.2] ∎

## Remarks

- The two-case split is essential. If some set has size $t$, the linear-algebra argument does not apply because the diagonal entry is not larger than the off-diagonal one.
