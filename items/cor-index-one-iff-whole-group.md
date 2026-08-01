---
id: cor-index-one-iff-whole-group
kind: corollary
title: "$[G:H]=1$ if and only if $H=G$"
status: published
origin: session
deps: [def-index, def-coset, lem-coset-membership-and-equality, lem-coset-partition, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Statement

For any subgroup $H\le G$, finite or infinite,

$$[G:H]=1\iff H=G.$$

## Facts & Assumptions

**Given:** A group $G$ and a subgroup $H\le G$.

[F1] The coset set is $G/H=\{gH:g\in G\}$, and when finite its cardinality is $[G:H]$ ([[def-index]], [[def-coset]]).

[L1] The cosets partition $G$, and $gH=H$ exactly when $g\in H$ ([[lem-coset-partition]], [[lem-coset-membership-and-equality]]).

[F2] A finite set has cardinality $1$ exactly when it is a singleton ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 If $H=G$, then every coset $gH$ equals $G$, so $G/H=\{G\}$ and $[G:H]=1$. [given, F1, F2]

1.2 Conversely, if $[G:H]=1$, then $G/H$ is the singleton containing $H=eH$. Thus $gH=H$ for every $g\in G$, and [L1] gives $g\in H$. Hence $G\subseteq H$. [given, F1, F2, L1]

2.1 Since always $H\subseteq G$, step 1.2 gives $H=G$; together with step 1.1 this proves the equivalence. [step 1.1, step 1.2] ∎
