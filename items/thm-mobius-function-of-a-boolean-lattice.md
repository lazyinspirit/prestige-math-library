---
id: thm-mobius-function-of-a-boolean-lattice
kind: theorem
title: "For $A\\subseteq B$ in a finite Boolean lattice, $\\mu(A,B)=(-1)^{\\lvert B\\setminus A\\rvert}$"
status: published
origin: session
deps: [thm-mobius-function-of-a-product-poset, def-boolean-lattice-and-levels, cor-binomial-theorem-consequences, def-integer-power, def-finite-cardinality, lem-finite-sum-reindexing-and-fubini, lem-poset-mobius-recurrence, def-group-power, thm-int-comm-ring]
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
    - title: "R. Stanley, Enumerative Combinatorics, Volume 1"
      url: "https://math.mit.edu/~rstan/ec/ec1toc.html"
pipeline_run: null
---

## Statement

Let $X$ be finite and order its Boolean lattice $B(X)=\mathcal P(X)$ by inclusion ([[def-boolean-lattice-and-levels]]). For $A\subseteq B\subseteq X$,

$$\mu_{B(X)}(A,B)=(-1)^{|B\setminus A|}.$$

## Facts & Assumptions

**Given:** A finite set $X$ and subsets $A\subseteq B\subseteq X$.

[F1] The interval $[A,B]$ consists of the sets $A\cup E$ with $E\subseteq B\setminus A$, and $|(A\cup E)\setminus A|=|E|$ ([[def-boolean-lattice-and-levels]], [[def-finite-cardinality]]).

[F2] Natural powers of $-1$ are defined in the multiplicative monoid of $\mathbb Z$, and $\mathbb Z$ is a commutative ring ([[def-group-power]], [[thm-int-comm-ring]]).

[L1] Finite sums may be split over disjoint blocks and reindexed by bijections ([[lem-finite-sum-reindexing-and-fubini]]).

[L2] The Möbius function is the unique function with diagonal value $1$ and vanishing interval sums off the diagonal ([[lem-poset-mobius-recurrence]]).

[L3] The alternating binomial row sum vanishes in positive degree ([[cor-binomial-theorem-consequences]], [[def-integer-power]]).

[L4] Möbius functions multiply on product posets ([[thm-mobius-function-of-a-product-poset]]).

## Proof

**Proof technique:** direct.

1.1 Define $\nu(A,B):=(-1)^{|B\setminus A|}$ in $\mathbb Z$. On the diagonal, $B\setminus A=\varnothing$, so $\nu(A,A)=(-1)^0=1$. [F1, F2]

1.2 Suppose $A<B$ and choose $b\in B\setminus A$. The subsets $E\subseteq B\setminus A$ split into disjoint pairs $E$ and $E\cup\{b\}$ with $b\notin E$; their contributions satisfy $(-1)^{|E|}+(-1)^{|E|+1}=0$ in $\mathbb Z$. Finite splitting and reindexing therefore give $\sum_{A\subseteq C\subseteq B}\nu(A,C)=\sum_{E\subseteq B\setminus A}(-1)^{|E|}=0$. [F1, F2, L1, choose]

2.1 Thus $\nu$ satisfies the diagonal and vanishing-sum recurrence, so uniqueness gives $\nu=\mu_{B(X)}$. [step 1.1, step 1.2, L2]

2.2 Equivalently, grouping the sum in step 1.2 by $|E|$ gives the alternating binomial sum in [L3]. Identifying the interval with a finite product of two-element chains gives the same formula by [L4], since the defining recurrence and its uniqueness in [L2] transport through a poset isomorphism. [step 1.2, L2, L3, L4]

3.1 Step 2.1 is the asserted formula, with step 2.2 recording its binomial and product-poset readings. [step 2.1, step 2.2] ∎
