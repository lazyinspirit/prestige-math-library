---
id: thm-zero-derivative-on-connected-open-euclidean-set-iff-constant
kind: theorem
title: "A differentiable map on a connected open Euclidean set has zero derivative exactly when it is constant"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-open-connected-subsets-of-rn-are-polygonally-connected, def-polygonal-path-and-polygonal-connectedness, thm-chain-rule-for-total-derivatives, cor-zero-derivative-implies-constant, def-total-derivative-in-euclidean-space, def-vector-valued-functions-limits-and-continuity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237, §3.3"
      url: "https://www.math.utoronto.ca/courses/mat237y1/20199/notes/Chapter3/S3.3.html"
    - title: "S. Cañez, Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/~scanez/courses/320/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

Let $m,q\ge1$, let $U\subseteq\mathbb R^m$ be nonempty, open, and connected, and let $f:U\to\mathbb R^q$ be totally differentiable at every point ([[def-total-derivative-in-euclidean-space]], [[def-vector-valued-functions-limits-and-continuity]]). Then $Df=0$ on $U$ if and only if $f$ is constant on $U$.

## Facts & Assumptions

**Given:** The map and domain in the Statement, with polygonal paths interpreted by [[def-polygonal-path-and-polygonal-connectedness]].

[L1] Let $U\subseteq\mathbb R^n$ be open. Then $U$ is connected if and only if it is path-connected, if and only if it is polygonally connected ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]]).

[L2] If $g$ is totally differentiable at $a$ and $h$ is totally differentiable at $g(a)$, then $h\circ g$ is totally differentiable at $a$ and $D(h\circ g)(a)=Dh(g(a))\circ Dg(a)$ ([[thm-chain-rule-for-total-derivatives]]).

[L3] A differentiable real function whose derivative is zero throughout an interval is constant on that interval ([[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 For the implication from constancy to zero derivative, a constant map has increment zero for every displacement. The zero linear map therefore leaves an identically zero remainder, so $Df(a)=0$ at every $a\in U$. [given, algebra]

2.1 For the implication from zero derivative to constancy, fix $x,y\in U$. By [L1], a finite polygonal path in $U$ joins them. On each affine segment, [L2] makes every scalar component of the composite differentiable with derivative zero; [L3] makes that composite constant on the segment. The endpoint values agree successively along the finite path, so $f(x)=f(y)$. Since $x,y$ were arbitrary, $f$ is constant. [L1, L2, L3, given] ∎
