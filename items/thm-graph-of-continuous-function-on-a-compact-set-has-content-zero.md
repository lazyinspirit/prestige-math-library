---
id: thm-graph-of-continuous-function-on-a-compact-set-has-content-zero
kind: theorem
title: 'The graph of a continuous function on a compact Euclidean set has content zero'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-and-content-zero-in-rn, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, thm-heine-borel-rn, thm-heine-cantor-metric, thm-extreme-value-metric, def-metric-continuity, lem-integer-part, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "Michael E. Taylor, Introduction to Analysis in Several Variables, Proposition 3.1.7"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf"
pipeline_run: null
---

## Statement

The graph of every continuous $f:C\to\mathbb R$ on a compact set $C\subseteq\mathbb R^m$ has content zero in $\mathbb R^{m+1}$.

## Facts & Assumptions

**Given:** A compact set $C\subseteq\mathbb R^m$, a continuous function $f:C\to\mathbb R$, its graph $G:=\{(u,f(u)):u\in C\}$, and a tolerance $\varepsilon>0$.

[F1] A continuous map from a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[F2] Content zero means the existence, for every positive tolerance, of a finite closed-cube cover with total volume at most that tolerance ([[def-null-and-content-zero-in-rn]]).

[F3] A continuous real function on a nonempty compact metric space has bounded image ([[thm-extreme-value-metric]]).

[F4] A compact subset of Euclidean space is closed and bounded ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 If $C=\varnothing$, then $G=\varnothing$ and the empty finite cover proves the conclusion. If $m=0$, then $\mathbb R^0$ has exactly one point, so $C$ has at most one point and $G$ is a single point of $\mathbb R^1$, covered for every tolerance by one closed cube of small enough side; [F2] gives content zero. Hence assume $C\ne\varnothing$ and $m\ge1$, so that the divisions by $\sqrt m$ below are defined. [given, F2, cases]

1.2 By [F4], compactness places $C$ in a closed cube $Q$, and [F3] bounds $f(C)$ in an interval. By [F1], for every $\eta>0$ there is $\delta>0$ such that $|f(u)-f(v)|<\eta$ whenever $u,v\in C$ and $\|u-v\|_2<\delta$. [given, F1, F3, F4]

2.1 Partition a fixed cube slightly larger than $Q$ into coordinate cubes of side $h<\delta/\sqrt m$. Keep only the base cells meeting $C$, and above each such cell keep the vertical $(m+1)$-grid cubes that meet $G$. Values of $f$ over one base cell differ by less than $\eta$, so its retained vertical stack has total height at most $\eta+2h$. If $B$ is the volume of the enlarged base cube, the retained cubes cover $G$ and have total volume at most $B(\eta+2h)$. [step 1.2, construct, algebra]

3.1 Choose $\eta$ and then $h$ so that $B(\eta+2h)<\varepsilon$. Step 2.1 is then a finite closed-cube cover of $G$ with total volume below $\varepsilon$; by [F2], $G$ has content zero. [step 2.1, F2, choose] ∎
