---
id: cex-outer-multiplicity-is-not-the-semistandard-tableau-count
kind: counterexample
title: "The outer multiplicity is not the semistandard skew-tableau count"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 2
deps:
  - thm-outer-littlewood-richardson-rule
  - def-littlewood-richardson-tableau-and-coefficient
  - def-skew-diagram-and-semistandard-skew-tableau
  - def-semistandard-tableau-and-kostka-number
  - def-partition-young-diagram-and-conjugate-partition
generation:
  role: counterexample
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford Mathematical Monographs, 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I §9, (9.1)–(9.7), printed pp. 142–148: Littlewood–Richardson tableaux and coefficients; the numerical witness here is enumerated directly from the library definitions."
    - title: "G. D. James, The Representation Theory of the Symmetric Groups, Lecture Notes in Mathematics 682, Springer 1978"
      url: "https://www-users.cse.umn.edu/~webb/oldteaching/Year2010-11/the-representation-theory-of-the-symmetric-groups-SLN.pdf"
      locator: "§16 Theorem 16.4, printed pp. 60–64: the outer-product multiplicity is the Littlewood–Richardson coefficient, supplied locally by thm-outer-littlewood-richardson-rule."
---

## Statement

The claim refuted is that for all partitions $\lambda\supseteq\mu$ and $\nu$ with $|\lambda|=|\mu|+|\nu|$, the multiplicity of $S^\lambda$ in the outer induction of $S^\mu\boxtimes S^\nu$ equals the number of semistandard skew tableaux of shape $\lambda/\mu$ and content $\nu$. This example has three such semistandard tableaux but outer multiplicity two.

## Facts & Assumptions

**Given:** $\lambda=(4,2,1)$, $\mu=(2,1)$, and $\nu=(3,1)$.

[F1] The English diagram of a partition has row and column coordinates $(i,j)$ with rows numbered downward and columns rightward; $[\lambda]$ consists of $(i,j)$ with $1\le i$ and $1\le j\le\lambda_i$ ([[def-partition-young-diagram-and-conjugate-partition]]).

[F2] The skew diagram $[\lambda/\mu]$ is $[\lambda]\setminus[\mu]$; a semistandard skew tableau is weakly increasing along each row and strictly increasing down each column ([[def-skew-diagram-and-semistandard-skew-tableau]]).

[F3] A tableau of content $\nu=(3,1)$ has exactly three entries equal to $1$ and one entry equal to $2$ ([[def-semistandard-tableau-and-kostka-number]]).

[F4] An LR tableau is semistandard and its reading word is read right-to-left in each row, from top to bottom; every prefix must have at least as many $i$'s as $(i+1)$'s for each $i\ge1$. The LR coefficient counts these tableaux ([[def-littlewood-richardson-tableau-and-coefficient]]).

[F5] The outer-induction multiplicity of $S^\lambda$ in the induced external product of $S^\mu$ and $S^\nu$ is exactly $c^\lambda_{\mu\nu}$ ([[thm-outer-littlewood-richardson-rule]]).

## Counterexample

**Counterexample technique:** direct enumeration.

1.1 The diagrams give $[\lambda/\mu]=\{(1,3),(1,4),(2,2),(3,1)\}$, and the content condition [F3] requires three $1$'s and one $2$. [F1, F2, F3]

2.1 A filling is determined by the position of its unique $2$. Placing it at $(1,3)$ is impossible: weak increase in the first row would force the entry at $(1,4)$ to be at least $2$, requiring a second $2$. The other three assignments, listed as values in the box order $(1,3),(1,4),(2,2),(3,1)$, are $(1,2,1,1)$, $(1,1,2,1)$, and $(1,1,1,2)$. Each is semistandard: the first row is weakly increasing and no two boxes lie in the same column. Thus there are exactly three semistandard fillings. [F2, F3, step 1.1]

3.1 Their reading words, in that order, are $2,1,1,1$, $1,1,2,1$, and $1,1,1,2$. The first fails the lattice condition at its first prefix; in each of the other two, every prefix has at least as many $1$'s as $2$'s. Since no entries exceed $2$, the other lattice inequalities are automatic. Hence exactly two of the three semistandard fillings are LR tableaux by [F4]. [F4, step 2.1]

4.1 Therefore $c^{(4,2,1)}_{(2,1),(3,1)}=2$ by the LR-coefficient definition [F4], and the outer-induction multiplicity is also $2$ by [F5], while the semistandard skew-tableau count is $3$ by step 2.1. These unequal counts refute the stated claim. [F4, F5, step 2.1, step 3.1] ∎
