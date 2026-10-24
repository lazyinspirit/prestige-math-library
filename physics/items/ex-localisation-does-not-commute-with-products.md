---
id: ex-localisation-does-not-commute-with-products
kind: example
title: "Localisation need not commute with infinite products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-localisation-of-modules-commutes-with-quotients-and-sums, def-localisation-of-a-module]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise 12.27"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Fix a prime number $p$, let $S=\{p^n:n\in\mathbb N\}$, and let
$$ P=\prod_{n\ge0}\mathbb Z. $$
Then the natural map
$$ S^{-1}P \longrightarrow \prod_{n\ge0} S^{-1}\mathbb Z=\prod_{n\ge0}\mathbb Z[1/p] $$
is not surjective. So localisation need not commute with infinite products.

## Facts & Assumptions

**Given:** A prime number $p$, the multiplicative set $S=\{p^n:n\in\mathbb N\}$, and the product module $P=\prod_{n\ge0}\mathbb Z$.

[L1] Localisation commutes with arbitrary direct sums, but no corresponding product statement has been proved ([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

[L2] An element of a localisation $S^{-1}P$ has one common denominator for all coordinates, because it is represented by a single fraction $x/s$ ([[def-localisation-of-a-module]]).

## Verification

**Proof technique:** direct.

1.1 The family $y=(1,1/p,1/p^2,\dots)$ is an element of $\prod_{n\ge0}\mathbb Z[1/p]$. [given]

1.2 Suppose $y$ came from an element of $S^{-1}P$. By [L2], it would have the form $(a_0,a_1,\dots)/p^r$ for some fixed $r \ge 0$ and integers $a_n$. Then the $n$th coordinate equation $a_n/p^r=1/p^n$ would force $a_n=p^{r-n}$ in $\mathbb Z$ for every $n>r$, impossible. [L2, algebra]

2.1 Therefore the displayed map is not surjective, so localisation does not commute with this infinite product. The contrast with [L1] is exactly the point of the example. [L1, step 1.1, step 1.2] ∎
