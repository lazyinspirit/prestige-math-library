---
id: ex-digital-net-power-of-base-size-restriction
kind: example
title: "Digital net sizes are powers of their base"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-star-discrepancy-and-digital-net
  - alg-digital-net-and-lattice-rule
  - thm-koksma-hlawka-integration-bound
  - def-common-divisor-and-gcd
  - lem-divisor-bound
  - lem-power-monotone
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
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 15 §15.7 and Chapter 16 §16.1"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
    - title: "Harald Niederreiter, Random Number Generation and Quasi-Monte Carlo Methods, Chapters 4 §4.1 and 5 §5.3"
      url: "https://www.ricam.oeaw.ac.at/files/people/siambook_nied.pdf"
---

## Example

In base $2$, a digital $(t,m,d)$-net has exactly $2^m$ nodes, so six nodes cannot form one. A six-node rank-one lattice rule is still a valid deterministic quadrature rule, and the Koksma–Hlawka inequality is stated for arbitrary finite nonempty point sets rather than only digital-net sizes.

## Facts & Assumptions

**Given:** Base $2$, dimension $d=2$, and node count $N=6$.

[F1] A $(t,m,d)$-net in base $b$ has exactly $b^m$ nodes. ([[def-star-discrepancy-and-digital-net]])

[F2] A rank-one lattice rule accepts any integer $N\ge1$ and a generator $z$ with $\gcd(z_1,N)=1$, and uses nodes $x_{n,j}=\{nz_j/N\}$. ([[alg-digital-net-and-lattice-rule]])

[F3] Koksma–Hlawka is stated for any finite nonempty point multiset and integrand of finite upper-anchor Hardy–Krause variation. ([[thm-koksma-hlawka-integration-bound]])

[F4] Since $2>1$, $m\mapsto 2^m$ is strictly increasing on the natural exponents, by the monotonicity-in-the-exponent clause of [[lem-power-monotone]]. The rank-one input with $z_1=1$ and $N=6$ is admissible: $1$ is a common divisor of $1$ and $6$, and every common divisor $d$ satisfies $d\le |1|=1$ by [[lem-divisor-bound]], so $\gcd(1,6)=1$ by [[def-common-divisor-and-gcd]].

## Verification

**Proof technique:** direct.

1.1 The positive integer powers of $2$ are $1,2,4,8,\ldots$: by [F4], if $m\le2$ then $2^m\le2^2=4$, while if $m\ge3$ then $2^m\ge2^3=8$. Hence no integer $m\ge0$ gives $2^m=6$, so [F1] rules out a base-$2$ digital net with six nodes. [F1, F4, given, algebra]

1.2 With $N=6$ and $z=(1,1)$, [F2] and [F4] generate six nodes; the first coordinate is $n/6$ for $n=0,\ldots,5$, so the nodes are distinct and the lattice-rule inputs are admissible. [F2, F4, given, algebra]

2.1 The star discrepancy and the Koksma–Hlawka statement are defined for this six-node point set even though its size is not a power of $2$. Thus a finite deterministic quadrature rule exists at this size, while the digital-net label and its elementary-interval guarantee do not apply. [F1, F3, step 1.1, step 1.2] ∎
