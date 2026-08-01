---
id: cor-order-of-element-divides-group-order
kind: corollary
title: "The order of every element of a finite group divides the order of the group"
status: published
origin: session
deps: [thm-lagrange, def-order-in-a-group, lem-order-characterisation, def-generated-subgroup, lem-cyclic-subgroup-is-the-set-of-powers, def-divides-in-z, lem-nat-embeds-int]
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
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
pipeline_run: null
---

## Statement

If $G$ is finite and $g\in G$, then $g$ has finite order and

$$\iota(\operatorname{ord}(g))\mid\iota(|G|)$$

in $\mathbb Z$, where $\iota:\mathbb N\to\mathbb Z$ is the canonical
embedding.

## Facts & Assumptions

**Given:** A finite group $G$ and an element $g\in G$.

[F1] The generated set $\langle g\rangle$ is a subgroup of $G$ and equals the set of integer powers of $g$ ([[def-generated-subgroup]], [[lem-cyclic-subgroup-is-the-set-of-powers]]).

[L1] If $g$ has finite order, then $\langle g\rangle$ is finite and $|\langle g\rangle|=\operatorname{ord}(g)$; every element of a finite group has finite order ([[lem-order-characterisation]], [[def-order-in-a-group]]).

[L2] Lagrange's theorem gives $|G|=[G:H]|H|$ for every subgroup $H$ of a finite group and consequently $\iota(|H|)\mid\iota(|G|)$ ([[thm-lagrange]], [[def-divides-in-z]], [[lem-nat-embeds-int]]).

## Proof

**Proof technique:** direct.

1.1 The element $g$ has finite order, and $\langle g\rangle\le G$ has order $|\langle g\rangle|=\operatorname{ord}(g)$. [F1, L1]

2.1 Apply [L2] to $H=\langle g\rangle$ to obtain $\iota(\operatorname{ord}(g))\mid\iota(|G|)$. [step 1.1, L2] ∎
