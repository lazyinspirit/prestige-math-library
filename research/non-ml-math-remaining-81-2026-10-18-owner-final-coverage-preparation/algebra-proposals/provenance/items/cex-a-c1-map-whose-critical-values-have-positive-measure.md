---
id: cex-a-c1-map-whose-critical-values-have-positive-measure
kind: counterexample
title: "A $C^1$ map whose critical values have positive measure"
status: published
dependency_level: 3
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-c1-map-from-r2-to-r-with-an-interval-of-critical-values]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-sard-completion/published-receipts/cex-a-c1-map-whose-critical-values-have-positive-measure.json
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Sard theorem"
      url: "https://encyclopediaofmath.org/wiki/Sard_theorem"
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Statement refuted

**False claim:** every $C^1$ map has critical values of measure zero.

The locally proved Cantor-sum construction gives a $C^1$ map
$f:\mathbb R^2\to\mathbb R$ whose critical values contain $[0,2]$.

## Facts & Assumptions

**Given:** The claim that every $C^1$ map has a null critical-value set.

[L1] There is a map $F\in C^1(\mathbb R^2,\mathbb R)$ whose critical-value set
contains $[0,2]$ and is not Euclidean null; its proof constructs a flat
Cantor-code map, extends it by the order-one Whitney theorem, and adds two
copies of the extension
([[lem-a-c1-map-from-r2-to-r-with-an-interval-of-critical-values]]).

## Counterexample

1.1 Take the $C^1$ map $F$ constructed in [L1]. The construction gives a closed set $K\subseteq[0,1]$ and a $C^1$ function $g$ with $g'=0$ on $K$ and $g(K)=C$, the middle-thirds Cantor set, and sets $F(x,y)=g(x)+g(y)$. On $K\times K$ the derivative of $F$ is zero, so these points are critical. The same proof establishes $F(K\times K)=C+C=[0,2]$. [L1, given, choose]

2.1 Thus $F$ is a $C^1$ map on all of $\mathbb R^2$ whose critical values contain an interval of length $2$. In particular its critical-value set is not null by [L1], which is the required counterexample to the asserted measure-zero conclusion. [L1, step 1.1] ∎
