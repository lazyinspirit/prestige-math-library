---
page: construction-of-r-via-cauchy-sequences
title: "Construction of the Real Numbers via Cauchy Sequences"
status: draft
items: [def-rational-cauchy-sequence, def-null-sequence, lem-cauchy-bounded]
examples: []
---

The rational numbers have holes: sequences like $1, 1.4, 1.41, 1.414, \dots$
cluster ever more tightly yet converge to nothing in $\mathbb{Q}$. This page
builds the real numbers by taking such sequences — Cauchy sequences — as the
*objects themselves*, identifying two sequences when their difference tends to
zero. We show the Cauchy sequences form a commutative ring, the null sequences
a maximal ideal within it, and the quotient a complete ordered field: the real
numbers. Completeness — every Cauchy sequence of reals converges — is the
payoff: the holes are filled, and nothing new is needed to fill them twice.
