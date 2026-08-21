---
id: lem-convex-function-bound-on-an-interior-cube
kind: lemma
title: "A convex function is bounded above and below on a smaller interior cube"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-convex-and-strictly-convex-functions-on-euclidean-sets, thm-finite-jensen-inequality-in-euclidean-space, def-multidimensional-rectangle-and-volume, def-p-norms-on-rn, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
sources:
  scraped: []
  references:
    - title: "D. Bertsekas, MIT 6.253 Convex Analysis and Optimization, Lecture 4"
      url: "https://ocw.mit.edu/courses/6-253-convex-analysis-and-optimization-spring-2012/6c63c6219c60378bc27d5b4a9167f1bc_MIT6_253S12_lec_comp.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$, let $C\subseteq\mathbb R^n$ be convex, let $f:C\to\mathbb R$ be convex, and suppose the closed sup-norm cube

$$Q(a,r)=\{x:\|x-a\|_\infty\le r\}$$

with $r>0$ lies in $C$ ([[def-multidimensional-rectangle-and-volume]], [[def-p-norms-on-rn]]). Then $f$ is bounded above on the full cube and bounded above and below on the concentric half-sized cube.

## Facts & Assumptions

**Given:** The data in the Statement. Finite maxima exist by [[lem-finite-set-has-max]] and have the convention of [[def-max-min]].

[L1] For a positive finite family of points in $C$ and nonnegative weights summing to one, $f$ of their weighted Euclidean sum is at most the weighted sum of their $f$-values ([[thm-finite-jensen-inequality-in-euclidean-space]]).

## Proof

**Proof technique:** direct.

1.1 Every point of $Q(a,r)$ is an explicit convex combination of its finite vertex set. By [L1], its value is at most the corresponding weighted average of the vertex values, hence at most their maximum $M$. [L1, given, algebra]

2.1 If $x\in Q(a,r/2)$, then the reflection $2a-x$ lies in $Q(a,r)$ and $a=(x+(2a-x))/2$. Convexity gives $f(a)\le(f(x)+f(2a-x))/2$, so step 1.1 yields $$2f(a)-M\le f(x)\le M.$$ Thus the half-sized cube has both bounds. [step 1.1, given, algebra] ∎
