---
id: fs-sard-theorem-holds-for-every-c1-map-between-arbitrary-dimensions
kind: false-statement
title: "Sard's theorem does not hold for every $C^1$ map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-morse-sard-for-euclidean-maps,
       lem-a-c1-map-from-r2-to-r-with-an-interval-of-critical-values]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Sard theorem"
      url: "https://encyclopediaofmath.org/wiki/Sard_theorem"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement

**False claim:** Sard's theorem remains true for every $C^1$ map between
arbitrary dimensions.

The differentiability threshold in [[thm-morse-sard-for-euclidean-maps]] is
real: the locally proved Cantor-sum construction below gives a $C^1$ map
$\mathbb R^2\to\mathbb R$ whose critical values contain $[0,2]$.

## Facts & Assumptions

**Given:** The universal $C^1$ claim in the Statement.

[L1] There is a $C^1$ map $F:\mathbb R^2\to\mathbb R$ whose critical-value set
contains $[0,2]$ and is not Euclidean null
([[lem-a-c1-map-from-r2-to-r-with-an-interval-of-critical-values]]).

## Refutation

1.1 Take the map $F$ supplied by [L1]. Its domain $\mathbb R^2$ is open and its target is $\mathbb R$, so it is among the maps quantified over by the claimed unrestricted $C^1$ version of Sard. [L1, given, choose]

2.1 That claim would make the critical-value set of $F$ null, whereas [L1] proves it is not null. This counterexample refutes the universal claim. For these dimensions and $r=1$, the usual threshold would require $1>2-1=1$, which fails. [L1, step 1.1, algebra] ∎
