---
id: thm-finite-ramsey-for-uniform-subsets
kind: theorem
title: "For positive $k,c,r$ there is an $N$ such that every $c$-colouring of $[N]^k$ has a monochromatic $r$-element set"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ramsey-colouring-and-arrow-notation, thm-finite-graph-ramsey-binomial-bound, thm-the-strong-pigeonhole-principle, thm-induction-principle, thm-cardinality-of-a-set-of-functions, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
short: "Finite uniform Ramsey theorem"
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. Diestel, Graph Theory, 6th ed., Theorem 9.1.3"
      url: "https://www.math.uni-hamburg.de/home/diestel/books/graph.theory/preview/Ch9.pdf"
    - title: "I. B. Leader, Ramsey Theory, Corollary 3"
      url: "https://www.dpmms.cam.ac.uk/~par31/notes/ramsey.pdf"
pipeline_run: null
---

## Statement

For all positive natural numbers $k,c,r$, some natural number $N$ satisfies

$$N\to(r)^k_c.$$

Equivalently, every $c$-colouring of $[N]^k$ has a monochromatic $r$-element set in the sense of [[def-ramsey-colouring-and-arrow-notation]]. Finite cardinalities and the induction are those of [[def-finite-cardinality]] and [[thm-induction-principle]].

## Facts & Assumptions

**Given:** Positive natural numbers $k,c,r$; finite pigeonhole is available from [[thm-the-strong-pigeonhole-principle]].

[L1] For all positive $s,t$, $\binom{s+t-2}{s-1}\to(s,t)^2$ ([[thm-finite-graph-ramsey-binomial-bound]]).

[L2] If $A$ and $B$ are finite, then $A^{B}$ is finite and $\lvert A\rvert^{\lvert B\rvert}=\lvert A^{B}\rvert$ ([[thm-cardinality-of-a-set-of-functions]]).



## Proof

**Proof technique:** induction.

1.1 If $r=1$ or $c=1$, any sufficiently large finite set works. For $k=1$, $N=c(r-1)+1$ works by finite pigeonhole. For $k=2$, repeatedly group one colour against all remaining colours and apply [L1]; induction on $c$ gives a finite multicolour graph witness for every target $r$. [base, L1]

1.2 Assume $k\ge3$ and that the theorem is known for $(k-1)$-subsets with every finite colour and target parameter. Put $M=c(r-1)+1$. Choose finite reservoir sizes backwards by $q_M=1$ and, for $i<M$, let $q_i$ be one more than a $(k-1)$-uniform Ramsey witness for target $q_{i+1}$ and $c$ colours, which exists by the induction hypothesis. [ih]

2.1 Starting with a $q_0$-element set, choose its least vertex $x_0$. Colour each $(k-1)$-subset $A$ of the remaining reservoir by the colour of $A\cup\{x_0\}$, and restrict to a homogeneous $q_1$-element reservoir. Repeat. After $M$ stages there are vertices $x_0,\ldots,x_{M-1}$ and colours $d_0,\ldots,d_{M-1}$ such that every $k$-set of chosen vertices whose least member is $x_i$ has colour $d_i$. [step 1.2, L2, construct]

3.1 Finite pigeonhole gives indices $i_1<\cdots<i_r$ for which $d_{i_1}=\cdots=d_{i_r}$. Every $k$-subset of $\{x_{i_1},\ldots,x_{i_r}\}$ has least element $x_{i_j}$ for some $j$, hence has this common colour by step 2.1. This is a monochromatic $r$-set. [step 2.1]

4.1 The bases and the step from $(k-1)$ to $k$ prove the assertion for every positive $k,c,r$. [step 1.1, step 3.1, discharge-induction] ∎
