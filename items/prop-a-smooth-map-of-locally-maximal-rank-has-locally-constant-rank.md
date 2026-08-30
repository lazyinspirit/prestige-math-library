---
id: prop-a-smooth-map-of-locally-maximal-rank-has-locally-constant-rank
kind: proposition
title: "A smooth map of locally maximal rank has locally constant rank"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rank-of-a-smooth-map-at-a-point, thm-differential-rank-is-lower-semicontinuous, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, Maps of Constant Rank"
      url: "https://books.google.com/books/about/Introduction_to_Smooth_Manifolds.html?id=eqfgZtjQceYC"
---

## Statement

Let $F:M\to N$ be smooth and let $p\in M$. Suppose there is a neighbourhood
$U$ of $p$ such that $\operatorname{rank}_xF\le \operatorname{rank}_pF$ for
every $x\in U$. Then $F$ has constant rank on some neighbourhood of $p$.

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$, a point $p\in M$, and a neighbourhood $U$
on which the rank never exceeds $\operatorname{rank}_pF$.

[F1] $\operatorname{rank}_xF$ is the rank of the differential at $x$
([[def-rank-of-a-smooth-map-at-a-point]]).

[L1] For Euclidean smooth maps, the set where the differential has rank at
least a fixed value is open ([[thm-differential-rank-is-lower-semicontinuous]]).

[L2] Charts identify neighbourhoods in manifolds with open Euclidean sets
([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

## Proof
**Proof technique:** direct.

1.1 Choose charts around $p$ and $F(p)$ as in [L2], and let $f$ be the coordinate representative of $F$. By [F1], $Df(\varphi(p))$ has rank $r:=\operatorname{rank}_pF$, and the hypothesis says nearby ranks are at most $r$. [F1, L2, given]

2.1 By [L1], the locus where $Df$ has rank at least $r$ is open. Since $\varphi(p)$ lies in that locus and nearby ranks are never above $r$, there is a smaller Euclidean neighbourhood on which the rank is both at least $r$ and at most $r$, hence exactly $r$. [step 1.1, L1]

3.1 Pulling that neighbourhood back through the source chart, $F$ has constant rank $r$ on a neighbourhood of $p$. [step 2.1, L2] ∎