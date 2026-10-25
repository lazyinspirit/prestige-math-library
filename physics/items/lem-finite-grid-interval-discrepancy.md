---
id: lem-finite-grid-interval-discrepancy
kind: lemma
title: "A finite uniform grid approximates interval length"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-finite-sum
  - def-measure
  - def-natural-numbers
  - def-ordered-field
  - def-probability-measure
  - lem-finite-sum-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Jon A. Wellner, Empirical Processes: Theory and Applications, Chapter 1, Section 8"
      url: "https://faculty.washington.edu/jonw/RESEARCH/TALKS/Delft/emp-proc-delft-big.pdf"
---

## Statement

Let $J\ge1$ be an integer, put $u_j=-1+2j/J$ for $j=0,\ldots,J$, and give the finite set $U_J=\{u_0,\ldots,u_J\}$ the probability weights

$$\nu_J(\{u_0\})=\nu_J(\{u_J\})=\frac1{2J},\qquad \nu_J(\{u_j\})=\frac1J\quad(1\le j<J).$$

For all $-1\le a\le b\le1$,

$$\left|\nu_J([a,b)) - \frac{b-a}{2}\right|\le\frac1J.$$

## Facts & Assumptions

**Given:** An integer $J\ge1$, the grid $U_J$, and its specified weights.

[F1] A measure on a finite power-set space is a nonnegative set function that vanishes on the empty set and is countably additive ([[def-measure]]). It is a probability measure when its total mass is one ([[def-probability-measure]]).

[F2] Finite sums are additive and obey the usual recursive sum law ([[def-finite-sum]], [[lem-finite-sum-laws]]).

## Proof

**Given:** An integer $J\ge1$, the grid $U_J$, and its specified weights.

1.1 The weights are nonnegative and sum to $1/(2J)+(J-1)/J+1/(2J)=1$. Their finite weighted sum therefore defines a probability measure $\nu_J$ on the full power set of $U_J$; countable additivity reduces to finite additivity because $U_J$ is finite. [F1, F2, given, algebra]

1.2 Define $G_J(t):=\nu_J(\{u\in U_J:u<t\})$. If $t=u_k$, the included weights have sum $0$ for $k=0$ and $(k-\tfrac12)/J$ for $1\le k\le J$, while $(t+1)/2=k/J$; the difference is at most $1/(2J)$. If $u_k<t<u_{k+1}$, then $G_J(t)=(k+\tfrac12)/J$ and $(t+1)/2\in(k/J,(k+1)/J)$, again giving difference at most $1/(2J)$. The endpoint $t=-1$ has both values zero and $t=1$ is the grid-point case $k=J$. [F2, given, algebra]

2.1 For $a\le b$, the grid points in $[a,b)$ are those with $u\ge a$ and $u<b$, so $\nu_J([a,b))=G_J(b)-G_J(a)$. Subtracting $(b-a)/2$ and applying step 1.2 at each endpoint gives absolute error at most $1/(2J)+1/(2J)=1/J$. [step 1.2, algebra] ∎
