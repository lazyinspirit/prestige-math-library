---
id: cor-hall-deficiency-formula
kind: corollary
title: "The maximum matching from $X$ has size $|X|-\\max_{S\\subseteq X}(|S|-|N(S)|)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-hall-marriage-finite-bipartite, def-bipartite-neighbourhood-hall-condition-and-sdr, def-matching-maximum-perfect-and-matching-number]
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
      url: "https://math.mit.edu/~goemans/18433S11/matching-notes.pdf"
pipeline_run: null
---

## Statement

Let $(X,Y)$ be a finite bipartite graph and put
$$d:=\max_{S\subseteq X}\bigl(|S|-|N(S)|\bigr).$$
Then the greatest number of vertices of $X$ saturable by a matching is $|X|-d$.

## Facts & Assumptions

**Given:** A finite bipartite graph with parts $(X,Y)$ and the displayed $d$.

[L1] Hall's theorem supplies a matching saturating a finite left part exactly under Hall's inequalities ([[thm-hall-marriage-finite-bipartite]]).

## Proof

**Proof technique:** direct.

1.1 Any matching saturating $r$ vertices of $X$ leaves at least $|S|-|N(S)|$ vertices of every $S\subseteq X$ unmatched, so $r\le|X|-d$. [given]

1.2 Adjoin $d$ new right vertices, adjacent to every $x\in X$; then every $S\subseteq X$ has at least $|N(S)|+d\ge|S|$ neighbours, so [L1] gives a matching saturating $X$ in the enlarged graph. [L1]

2.1 At most $d$ of its matching edges use new vertices, so deleting those edges leaves a matching of the original graph saturating at least $|X|-d$ vertices of $X$. [step 1.2]

3.1 The upper bound in step 1.1 and lower bound in step 2.1 establish the formula. [step 1.1, step 2.1] ∎
