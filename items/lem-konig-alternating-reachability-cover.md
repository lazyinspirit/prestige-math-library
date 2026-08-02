---
id: lem-konig-alternating-reachability-cover
kind: lemma
title: "Alternating reachability from unmatched left vertices produces a vertex cover of the same size as a maximum matching"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-berge-augmenting-path-characterisation, def-bipartite-neighbourhood-hall-condition-and-sdr, def-vertex-and-edge-covers-and-covering-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Goemans, Lecture notes on bipartite matching"
      url: "https://math.mit.edu/~goemans/18433S07/matching-notes.pdf"
pipeline_run: null
---

## Statement

Let $G$ have bipartition $(X,Y)$ and let $M$ be a maximum matching. From every
$M$-exposed vertex of $X$, follow alternating paths that begin with a nonmatching
edge. Let $Z_X\subseteq X$ and $Z_Y\subseteq Y$ be the reachable vertices in
the two parts. Then
$$C:=(X\setminus Z_X)\cup Z_Y$$
is a vertex cover and $|C|=|M|$.

## Facts & Assumptions

**Given:** A finite bipartite graph $(X,Y)$ and a maximum matching $M$.

[L1] A maximum matching has no augmenting path ([[thm-berge-augmenting-path-characterisation]]).

[F1] A vertex cover meets every edge, and its size is its cardinality ([[def-vertex-and-edge-covers-and-covering-numbers]]).

## Proof

**Proof technique:** direct.

1.1 No vertex of $Z_Y$ is $M$-exposed, for an alternating path from an exposed vertex of $X$ to it would be $M$-augmenting, contrary to [L1]. [L1]

1.2 Every edge $xy$ is met by $C$: if $x\notin Z_X$ it is met by $x$, while if $x\in Z_X$, a nonmatching edge reaches $y$ and a matching edge reaches $y$ by the preceding alternating step; hence $y\in Z_Y$. [L1, F1]

2.1 The matching edges pair $Z_Y$ with $Z_X$ and pair $X\setminus Z_X$ with $Y\setminus Z_Y$; exposed left vertices lie in $Z_X$, so this gives $|M|=|Z_Y|+|X\setminus Z_X|=|C|$. [step 1.1]

3.1 Step 1.2 makes $C$ a vertex cover and step 2.1 gives its size. [step 1.2, step 2.1] ∎

## Remarks

- The direction of alternation is essential: left-to-right steps are nonmatching edges and right-to-left steps are matching edges.
