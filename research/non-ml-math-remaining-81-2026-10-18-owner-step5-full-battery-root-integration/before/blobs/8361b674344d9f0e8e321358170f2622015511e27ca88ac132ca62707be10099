---
id: cor-regular-values-form-a-dense-g-delta-set
kind: corollary
title: "Regular values form a dense $G_\\delta$ set"
status: published
dependency_level: 6
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-countable-choice, cor-regular-values-have-null-complement-and-are-dense,
       prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact,
       prop-countable-unions-and-subsets-of-manifold-null-sets-are-null,
       prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-step5-published-install-r2/receipts/cor-regular-values-form-a-dense-g-delta-set.json
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For a smooth map
$F:M\to N$, the set of regular values is a dense
$G_\delta$ subset of $N$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth map $F:M\to N$.

[L1] Under $\mathrm{AC}_\omega$, the critical value set is $\sigma$-compact ([[prop-the-critical-value-set-of-a-smooth-map-is-sigma-compact]]).

[L2] Regular values are dense, and the critical value set is null ([[cor-regular-values-have-null-complement-and-are-dense]]).

[L3] Every subset of a manifold-null set is null under Countable Choice ([[prop-countable-unions-and-subsets-of-manifold-null-sets-are-null]]).

[L4] A null subset of a positive-dimensional manifold has dense complement ([[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

## Proof
**Proof technique:** direct.

1.1 By [L1], write the critical value set as $\bigcup_{j\ge 1}K_j$ with each $K_j$ compact. [L1, given]

2.1 If $\dim N>0$, then the Sard conclusion in [L2] makes $\operatorname{CV}(F)$ null, and [L3] makes each compact set $K_j\subseteq\operatorname{CV}(F)$ null as well. By [L4], each $N\setminus K_j$ is dense; it is open because $K_j$ is compact and hence closed. The regular-value set is $$ N\setminus\bigcup_{j\ge 1}K_j=\bigcap_{j\ge 1}(N\setminus K_j), $$ so it is a dense $G_\delta$. If $\dim N=0$, then [L2] already says every value is regular, so the regular-value set is all of $N$, again a dense $G_\delta$. [L2, L3, L4, step 1.1, cases, algebra]

3.1 Therefore regular values form a dense $G_\delta$ set. [step 2.1] ∎
