---
id: thm-lagrange
kind: theorem
title: "Lagrange's theorem: $|G|=[G:H]|H|$ for every subgroup $H$ of a finite group $G$"
status: published
origin: session
deps: [lem-finite-coset-partition, lem-coset-partition, lem-coset-equinumerous-with-subgroup, def-index, def-order-in-a-group, def-finite-cardinality, thm-sum-rule, def-sum-over-a-finite-index-set, def-divides-in-z, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "UCL lecture notes, Cosets and Lagrange's theorem"
      url: "https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/4-6-cosets-and-lagranges-theorem.html"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and $H\le G$. Then

$$|G|=[G:H]\,|H|.$$

Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$,
$\iota(|H|)$ divides $\iota(|G|)$.

## Facts & Assumptions

**Given:** A finite group $G$ and a subgroup $H\le G$.

[L1] The distinct left cosets of $H$ partition $G$ ([[lem-coset-partition]]).

[L2] The subgroup, every coset, and $G/H$ are finite; every coset has cardinality $|H|$ and $|G/H|=[G:H]$ ([[lem-finite-coset-partition]], [[lem-coset-equinumerous-with-subgroup]], [[def-index]]).

[L3] For a finite partition $A=\bigsqcup_{i\in I}A_i$, one has $|A|=\sum_{i\in I}|A_i|$ ([[thm-sum-rule]], [[def-sum-over-a-finite-index-set]]).

[F1] The order $|G|$ of a finite group is the unique natural equinumerous with its underlying set, hence agrees with finite cardinality ([[def-order-in-a-group]], [[def-finite-cardinality]]).

[L4] The embedding $\iota$ preserves multiplication, and $d\mid a$ in $\mathbb Z$ means $a=dq$ for some integer $q$ ([[lem-nat-embeds-int]], [[def-divides-in-z]]).

## Proof

**Proof technique:** direct.

1.1 Apply the finite partition sum to the coset partition: $|G|=\sum_{C\in G/H}|C|$. [L1, L2, L3, F1]

2.1 Every summand equals $|H|$, and there are $|G/H|=[G:H]$ summands, so the constant-sum clause gives $|G|=[G:H]|H|$. [step 1.1, L2, L3]

3.1 Applying $\iota$ gives $\iota(|G|)=\iota(|H|)\iota([G:H])$, so $\iota(|H|)\mid\iota(|G|)$. [step 2.1, L4] ∎
