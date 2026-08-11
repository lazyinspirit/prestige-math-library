---
id: cor-orbit-stabilizer-cardinality
kind: corollary
title: 'Orbit-stabiliser cardinality: $|G\cdot x|=[G:G_x]$ whenever either side is finite, and $|G|=|G_x|\,|G\cdot x|$ for finite $G$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-orbit-stabilizer, def-index, def-finite-cardinality, thm-lagrange]
justified_by: []
aliases: [cor-orbit-stabiliser-cardinality]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, 14.1, Theorem 14.11"
      url: "https://twjudson.github.io/aata-files/aata-html/actions-section-groups-acting-on-sets.html"
pipeline_run: null
---

## Statement

For an action of $G$ on $X$ and $x\in X$,

$$|G\cdot x|=[G:G_x]$$

whenever either side is finite. In particular, if $G$ is finite, then

$$|G|=|G_x|\,|G\cdot x|.$$

## Facts & Assumptions

**Given:** A left action of $G$ on $X$ and a point $x\in X$.

[L1] The map $G/G_x\to G\cdot x$, $gG_x\mapsto g\cdot x$, is a bijection ([[thm-orbit-stabilizer]]).

[L2] The index is the finite cardinality $[G:H]=|G/H|$ when the coset set is finite ([[def-index]]).

[L3] Finite cardinality is preserved by a bijection ([[def-finite-cardinality]]).

[L4] If $G$ is finite and $H\le G$, then $|G|=[G:H]|H|$ ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the sets $G/G_x$ and $G\cdot x$ are bijective; [L2] and [L3] therefore give $|G\cdot x|=|G/G_x|=[G:G_x]$ whenever they are finite. [L1, L2, L3]

2.1 If $G$ is finite, [L4] applied to $G_x\le G$ gives $|G|=[G:G_x]|G_x|=|G\cdot x|\,|G_x|$. [step 1.1, L4, algebra] ∎
