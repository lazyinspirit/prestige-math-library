---
id: thm-mobius-inversion-for-lower-finite-posets
kind: theorem
title: "Möbius inversion on a lower-finite poset, with the dual upper-finite form"
status: published
origin: session
deps: [lem-poset-mobius-recurrence, def-poset-interval-and-finiteness-conditions, lem-finite-sum-reindexing-and-fubini, lem-integer-multiples-in-a-ring, def-commutative-ring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "F. Gotti, Incidence Algebras, MIT 18.211 notes"
      url: "https://math.mit.edu/~fgotti/docs/Courses/C.%20Combinatorial%20Analysis/38.%20Mobius%20Inversion%20Formula/Incidence%20Algebras.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a commutative ring and interpret an integer $m$ in a coefficient as the repeated-addition element $m1_R$ ([[lem-integer-multiples-in-a-ring]]).

**Lower-finite form.** If $P$ is lower-finite and $f,g:P\to R$, then the following are equivalent:

1. $g(y)=\sum_{x\le y}f(x)$ for every $y\in P$;
2. $f(y)=\sum_{x\le y}\mu_P(x,y)g(x)$ for every $y\in P$.

**Upper-finite form.** If $P$ is upper-finite and $f,g:P\to R$, then the following are equivalent:

1. $g(x)=\sum_{x\le y}f(y)$ for every $x\in P$;
2. $f(x)=\sum_{x\le y}\mu_P(x,y)g(y)$ for every $x\in P$.

The two assertions have separate finiteness hypotheses. Local finiteness alone makes each interval recurrence finite but does not make either displayed global sum finite.

## Facts & Assumptions

**Given:** A commutative ring $R$, functions $f,g:P\to R$, and either the lower-finite or the upper-finite hypotheses in the Statement.

[F1] In a lower-finite poset each principal ideal is finite; in an upper-finite poset each principal filter is finite; either condition implies local finiteness ([[def-poset-interval-and-finiteness-conditions]]).

[L1] $\sum_{u\le z\le y}\mu_P(z,y)=\delta_{u,y}$ and $\sum_{u\le z\le y}\mu_P(u,z)=\delta_{u,y}$ ([[lem-poset-mobius-recurrence]]).

[L2] Finite sums may be split, reindexed and interchanged by finite Fubini ([[lem-finite-sum-reindexing-and-fubini]]).

[L3] Integer multiples distribute through ring sums and products ([[lem-integer-multiples-in-a-ring]], [[def-commutative-ring]]).

## Proof

**Proof technique:** direct.

1.1 Assume $P$ is lower-finite and $g(y)=\sum_{u\le y}f(u)$ for every $y\in P$. Fix $y\in P$. Every index set below is contained in the finite principal ideal of $y$ by [F1]. Substitution and finite Fubini give $\sum_{x\le y}\mu_P(x,y)g(x)=\sum_{u\le x\le y}\mu_P(x,y)f(u)=\sum_{u\le y}f(u)\left(\sum_{u\le x\le y}\mu_P(x,y)\right)=f(y)$ by [L1]. [F1, L1, L2, L3]

1.2 Conversely, assume $f(x)=\sum_{u\le x}\mu_P(u,x)g(u)$ for every $x\in P$, and fix $y\in P$. Then $\sum_{x\le y}f(x)=\sum_{u\le x\le y}\mu_P(u,x)g(u)=\sum_{u\le y}g(u)\left(\sum_{u\le x\le y}\mu_P(u,x)\right)=g(y)$ by [L1]. [F1, L1, L2, L3]

1.3 Now assume $P$ is upper-finite and $g(x)=\sum_{y\ge x}f(y)$ for every $x\in P$. Fix $x\in P$. Every index set lies in the finite principal filter of $x$. Substitution and finite Fubini give $\sum_{y\ge x}\mu_P(x,y)g(y)=\sum_{x\le y\le z}\mu_P(x,y)f(z)=\sum_{z\ge x}f(z)\left(\sum_{x\le y\le z}\mu_P(x,y)\right)=f(x)$ by [L1]. [F1, L1, L2, L3]

1.4 Conversely, assume $f(y)=\sum_{z\ge y}\mu_P(y,z)g(z)$ for every $y\in P$, and fix $x\in P$. Then $\sum_{y\ge x}f(y)=\sum_{x\le y\le z}\mu_P(y,z)g(z)=\sum_{z\ge x}g(z)\left(\sum_{x\le y\le z}\mu_P(y,z)\right)=g(x)$ by [L1]. [F1, L1, L2, L3]

2.1 Steps 1.1 and 1.2 prove the lower-finite equivalence, while steps 1.3 and 1.4 separately prove its upper-finite order dual. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
