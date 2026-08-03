---
id: cor-index-one-iff-whole-group
kind: corollary
title: "$[G:H]=1$ if and only if $H=G$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-index, def-coset, lem-coset-membership-and-equality, lem-coset-partition, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.1: Cosets"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.01%3A_Cosets"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.2: Lagrange's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.02%3A_Lagrange%27s_Theorem"
pipeline_run: null
---

## Statement

For any subgroup $H\le G$, finite or infinite,

$$[G:H]=1\iff H=G.$$

## Facts & Assumptions

**Given:** A group $G$ and a subgroup $H\le G$.

[F1] The coset set is $G/H=\{gH:g\in G\}$. Its index is its finite cardinality when the coset set is finite and is the non-natural symbol $\infty$ otherwise; hence $[G:H]=1$ says that $G/H$ is finite of cardinality $1$ ([[def-index]], [[def-coset]]).

[L1] The cosets partition $G$, and $gH=H$ exactly when $g\in H$ ([[lem-coset-partition]], [[lem-coset-membership-and-equality]]).

[F2] A finite set has cardinality $1$ exactly when it is a singleton: a bijection to $1=\{0\}$ has one fibre and hence one element, while the unique map from a singleton to $1$ is a bijection ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 If $H=G$, then every coset $gH$ equals $G$, so $G/H=\{G\}$ and $[G:H]=1$. [given, F1, F2]

1.2 Conversely, if $[G:H]=1$, then $G/H$ is the singleton containing $H=eH$. Thus $gH=H$ for every $g\in G$, and [L1] gives $g\in H$. Hence $G\subseteq H$. [given, F1, F2, L1]

2.1 Since always $H\subseteq G$, step 1.2 gives $H=G$; together with step 1.1 this proves the equivalence. [step 1.1, step 1.2] ∎
