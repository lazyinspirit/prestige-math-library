---
id: cor-the-immersion-and-submersion-loci-are-open
kind: corollary
title: "The immersion and submersion loci are open"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-immersion-submersion-and-constant-rank-map, thm-differential-rank-is-lower-semicontinuous, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Ch. 4"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
    - title: "Will J. Merry, Differential Geometry, Definition 6.11"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M^m\to N^n$ be a smooth map. The set of points where $F$ is an immersion
is open in $M$, and the set of points where $F$ is a submersion is open in
$M$.

## Facts & Assumptions

**Given:** A smooth map $F:M^m\to N^n$.

[F1] $F$ is an immersion at $p$ exactly when $\operatorname{rank}_pF=m$, and it
is a submersion at $p$ exactly when $\operatorname{rank}_pF=n$
([[def-immersion-submersion-and-constant-rank-map]]).

[L1] For a smooth Euclidean map, the locus where the differential has rank at
least a fixed integer is open ([[thm-differential-rank-is-lower-semicontinuous]]).

[L2] Every manifold chart is a diffeomorphism onto an open Euclidean set
([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

## Proof
**Proof technique:** direct.

1.1 Fix an immersion point $p$. Choose charts around $p$ and $F(p)$ as in [L2], and let $f$ be the coordinate representative of $F$. Then $\operatorname{rank}Df(\varphi(p))=m$ by [F1]. Since the differential of a map $\mathbb R^m\to\mathbb R^n$ cannot have rank above $m$, [L1] gives a Euclidean neighbourhood on which the rank stays at least $m$, hence exactly $m$. [F1, L1, L2, given]

1.2 The same argument with $n$ in place of $m$ shows that near any submersion point the rank stays equal to $n$, so the submersion locus is open. Here the upper bound $\operatorname{rank}Df\le n$ is the relevant maximal-rank bound. [F1, L1, L2, given]

2.1 Translating step 1.1 back through the source chart, every point of a smaller neighbourhood of $p$ is again an immersion point. Hence the immersion locus is open. [step 1.1, L2]

3.1 Steps 2.1 and 1.2 prove the two openness claims. [step 2.1, step 1.2] ∎
