---
id: thm-durfee-square-identity
kind: theorem
title: "Durfee-square decomposition of the partition series"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-ferrers-young-diagram-conjugate-partition-and-durfee-square,
       cor-partitions-with-at-most-k-parts-equal-parts-at-most-k,
       cor-integer-partitions-have-euler-product,
       prop-coefficient-extraction-linearity-and-extensionality]
justified_by: []
aliases: []
landmark: false
proof_strategy: decomposition
sources:
  scraped: []
  references:
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 9: Integer Partitions"
      url: "https://enumeration.ca/extensions/partitions/"
pipeline_run: null
---

## Statement

In $\mathbb{Z}\llbracket x\rrbracket$,

$$\sum_{n \ge 0} p(n)x^n=\sum_{k \ge 0}\frac{x^{k^2}}{\prod_{i=1}^{k}(1-x^i)^2},$$

where the empty product at $k=0$ is $1$.

## Facts & Assumptions

**Given:** partitions written by Ferrers diagrams.

[L1] Two formal series are equal exactly when their coefficients agree ([[prop-coefficient-extraction-linearity-and-extensionality]]).

[L2] Partitions with at most $k$ parts are equinumerous with partitions whose parts are all at most $k$ ([[cor-partitions-with-at-most-k-parts-equal-parts-at-most-k]]).

## Proof

**Proof technique:** decomposition.

1.1 Let $\lambda$ be a partition with Durfee length $k$. Removing its $k\times k$ Durfee square leaves two pieces: a right-hand piece $\alpha$ consisting of the cells to the right of the square, and a lower piece $\beta$ consisting of the cells below the square. The piece $\alpha$ has at most $k$ rows, while each row of $\beta$ has length at most $k$. Conversely, given $k$, a partition $\alpha$ with at most $k$ parts, and a partition $\beta$ with all parts at most $k$, one reconstructs $\lambda$ uniquely by adjoining $\alpha$ to the right side and $\beta$ below the square. [construct]

2.1 For fixed $k$, the square contributes the factor $x^{k^2}$. By [L2], the right-hand piece $\alpha$ has the same generating function as partitions with parts at most $k$, namely $\prod_{i=1}^{k}(1-x^i)^{-1}$; the lower piece $\beta$ has the same generating function for the same direct multiplicity reason. Thus partitions whose Durfee square has size $k$ contribute $x^{k^2}/\prod_{i=1}^{k}(1-x^i)^2$. [step 1.1, L2]

3.1 Every partition has exactly one Durfee length, so summing the contributions of step 2.1 over all $k \ge 0$ counts every partition exactly once. Therefore the coefficient of $x^n$ on the right is $p(n)$ for every $n \ge 0$, and [L1] gives the displayed identity. [step 2.1, L1] ∎
