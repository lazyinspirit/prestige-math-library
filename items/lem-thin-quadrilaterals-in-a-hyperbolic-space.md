---
id: lem-thin-quadrilaterals-in-a-hyperbolic-space
kind: lemma
title: "Hyperbolic spaces have thin geodesic quadrilaterals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-delta-slim-geodesic-triangle-and-hyperbolic-space]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Clara Löh, Geometric Group Theory, Section 6.2.3"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ss22/lecture_notes.pdf"
---

## Statement

Let $X$ be a geodesic $\delta$-hyperbolic space. Then every geodesic
quadrilateral in $X$ is $2\delta$-thin: each side lies in the closed
$2\delta$-neighborhood of the union of the other three sides.

## Facts & Assumptions

**Given:** A geodesic $\delta$-hyperbolic space $X$ and a geodesic quadrilateral with vertices $a,b,c,d$.

[L1] Every geodesic triangle in $X$ is $\delta$-slim
([[def-delta-slim-geodesic-triangle-and-hyperbolic-space]]).

[A1] The diagonal $[a,c]$ cuts the quadrilateral into the geodesic triangles
$abc$ and $acd$.

## Proof

**Proof technique:** direct.

1.1 By [A1], each point of the side $[a,b]$ lies either within distance $\delta$ of $[a,c]$ or within distance $\delta$ of $[b,c]$ by applying [L1] to triangle $abc$. [A1, L1]

2.1 If such a point lies near $[a,c]$, then applying [L1] to triangle $acd$ shows that the nearby point on $[a,c]$ lies within distance $\delta$ of $[a,d] \cup [d,c]$. Hence every point of $[a,b]$ lies within distance $2\delta$ of $[b,c] \cup [c,d] \cup [d,a]$. Cyclic symmetry gives the same bound for each side, so the quadrilateral is $2\delta$-thin. [L1, step 1.1, algebra] ∎ 