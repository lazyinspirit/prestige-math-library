---
id: lem-finite-coset-partition
kind: lemma
title: "In a finite group, the subgroup, every coset and the set of cosets are finite"
status: published
origin: session
deps: [def-index, lem-coset-partition, lem-coset-equinumerous-with-subgroup, def-finite-cardinality, thm-subset-of-a-finite-set, cor-cardinality-of-the-power-set]
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

Let $G$ be a finite group and $H\le G$. Then $H$, every left and right coset of
$H$, and the coset set $G/H$ are finite. Moreover every coset has cardinality
$|H|$, and $[G:H]=|G/H|$ is a natural number.

## Facts & Assumptions

**Given:** A finite group $G$ and a subgroup $H\le G$.

[L1] Every subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[L2] The power set of a finite set is finite ([[cor-cardinality-of-the-power-set]]).

[L3] Every left or right coset of $H$ is equinumerous with $H$ ([[lem-coset-equinumerous-with-subgroup]]).

[F1] A bijection transports finiteness and finite cardinality ([[def-finite-cardinality]]).

[F2] The coset set is $G/H=\{gH:g\in G\}$, and its finite cardinality is the index ([[def-index]], [[lem-coset-partition]]).

## Proof

**Proof technique:** direct.

1.1 Since $H\subseteq G$ and $G$ is finite, $H$ is finite by [L1]. [given, L1]

1.2 Every coset is a subset of $G$, so $G/H\subseteq\mathcal P(G)$. The power set is finite by [L2], hence $G/H$ is finite by [L1]. [F2, L1, L2]

2.1 Every coset is equinumerous with $H$, so every coset is finite and has cardinality $|H|$. [step 1.1, L3, F1]

3.1 Therefore $[G:H]=|G/H|\in\mathbb N$, and the finiteness and cardinality assertions are steps 1.1, 1.2 and 2.1. [step 1.1, step 2.1, step 1.2, F2] ∎
