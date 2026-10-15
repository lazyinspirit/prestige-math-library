---
id: ex-diagonal-lattice-poor-joint-projection
kind: example
title: "Uniform coordinate projections can hide a poor joint projection"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-star-discrepancy-and-digital-net
  - alg-digital-net-and-lattice-rule
  - def-common-divisor-and-gcd
  - lem-divisor-bound
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 §15.7"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Harald Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, Chapter 4 §4.1"
      url: "https://www.ricam.oeaw.ac.at/files/people/siambook_nied.pdf"
---

## Example

Use the four-node rank-one lattice rule in dimension two with $N=4$ and $z=(1,1)$. Both one-coordinate projections are the equally spaced set $\{0,1/4,1/2,3/4\}$, but the two-coordinate set lies on the diagonal. It is not a $(0,2,2)$-net in base $2$, and its star discrepancy is at least $1/4$.

## Facts & Assumptions
**Given:** Dimension $d=2$, node count $N=4$, and rank-one lattice generator $z=(1,1)$.

[F1] The rank-one lattice rule uses nodes $x_{n,j}=\{nz_j/N\}$ for $n=0,\ldots,N-1$, with $\{a\}=a-\lfloor a\rfloor$. ([[alg-digital-net-and-lattice-rule]])

[F2] A $(t,m,d)$-net in base $b$ has $b^m$ points and each elementary interval with exponent sum $m-t$ contains exactly $b^t$ points; $D_N^*$ is the supremum of anchored-box count error. ([[def-star-discrepancy-and-digital-net]])

[F3] The rank-one input is admissible: $1$ is a common divisor of $1$ and $4$, and every common divisor $d$ satisfies $d\le |1|=1$ by [[lem-divisor-bound]]; hence $\gcd(1,4)=1$ by [[def-common-divisor-and-gcd]].

## Proof

1.1 By [F1] and [F3], the nodes are $P=\{(0,0),(1/4,1/4),(1/2,1/2),(3/4,3/4)\}$. Each coordinate projection has one point in each base-$2$ interval of length $1/4$, so each is a $(0,2,1)$-net. [F1, F3, given, algebra]

2.1 The elementary interval $E=[0,1/2)\times[0,1/2)$ has volume $1/4$ and contains $(0,0)$ and $(1/4,1/4)$, hence two points. A $(0,2,2)$-net would require exactly $2^0=1$ point in every such interval, so $P$ is not one. [F2, step 1.1]

3.1 At $u=(1/2,1/2)$, the anchored box contains $2$ of the $4$ nodes, so its empirical proportion is $1/2$ while its volume is $1/4$. Thus $D_4^*(P)\ge|1/2-1/4|=1/4$. [F2, step 1.1, algebra] ∎
