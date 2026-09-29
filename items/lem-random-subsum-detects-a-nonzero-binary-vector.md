---
id: lem-random-subsum-detects-a-nonzero-binary-vector
kind: lemma
title: "Random binary subsums detect every nonzero discrepancy"
status: published
origin: pipeline
deps:
  - lem-walsh-hadamard-code-has-distance-one-half
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.4.2 random subsum principle and its applications, printed pp. 366–367"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Statement

For every nonzero $d\in\mathbb F_2^m$ and uniform $z\in\mathbb F_2^m$,
$$\Pr[z\cdot d=1]=\frac12.$$
The same conclusion applies whenever $d$ is a nonzero vector of violated
quadratic equations or the difference of two distinct decoded prefixes.

## Facts & Assumptions

**Given:** A nonzero binary vector $d\in\mathbb F_2^m$ and the uniform
distribution on the finite cube.

[F1] Distinct Walsh–Hadamard messages in dimension $m\ge1$ have tables that
disagree on exactly half the coordinates. ([[lem-walsh-hadamard-code-has-distance-one-half]])

## Proof

1.1 Since $d\ne0$, choose the least index $j$ with $d_j=1$, and let $e_j$ be its unit vector. The map $z\mapsto z+e_j$ is a fixed-point-free involution of the cube and $(z+e_j)\cdot d=z\cdot d+1$, so it pairs each outcome with one whose dot product has the opposite bit. [given, construct, algebra]

2.1 Each pair from step 1.1 has exactly one vector with $z\cdot d=1$, hence exactly $2^{m-1}$ of the $2^m$ vectors satisfy the event and its uniform probability is $1/2$. Equivalently these are precisely the coordinates where $\operatorname{WH}_m(0)$ and $\operatorname{WH}_m(d)$ disagree, consistent with the half-distance lemma in [F1]. Thus every nonzero violated-equation vector and every difference of distinct prefixes has the same detection probability; the number and correlations of its coordinates are irrelevant. [F1, step 1.1, algebra, discharge-construct] ∎
