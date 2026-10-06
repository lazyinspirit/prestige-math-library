---
id: cor-strict-convexity-gives-uniqueness-of-a-minimiser
kind: corollary
title: "Strict convexity gives uniqueness of a minimiser"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [def-convex-and-strictly-convex-functionals-on-a-banach-space, def-infimum, def-proper-coercive-and-weakly-lower-semicontinuous-functional]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Corollary 13.4 and its proof, printed p. 299"
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 2 Section 4, printed p. 14"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $K$ be a convex subset of a real vector space and let $I:K\to(-\infty,+\infty]$ be proper and strictly convex ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]], [[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]). If $u,v\in K$ both minimise $I$ on $K$, then $u=v$.

## Facts & Assumptions

**Given:** A convex subset $K$ of a real vector space and a proper, strictly convex extended-real functional $I:K\to(-\infty,+\infty]$ ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]], [[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]); points $u,v\in K$ that both minimise $I$ on $K$, in the sense that $I(u)=I(v)=\inf_KI$.

[F1] Strict convexity: for $u\ne v$ with $I(u),I(v)<+\infty$ and $\lambda\in(0,1)$ one has $I(\lambda u+(1-\lambda)v)<\lambda I(u)+(1-\lambda)I(v)$; convexity gives $\lambda u+(1-\lambda)v\in K$ ([[def-convex-and-strictly-convex-functionals-on-a-banach-space]]).

[F2] The infimum is a lower bound: $\inf_KI\le I(w)$ for every $w\in K$ ([[def-infimum]]).

## Proof

**Proof technique:** direct, by evaluating strict convexity at the midpoint of two minimisers.

1.1 Set-up. Let $u,v\in K$ both minimise $I$ and suppose for contradiction that $u\ne v$. Properness gives $\inf_KI<+\infty$, so $t:=\inf_KI=I(u)=I(v)$ is finite. [F1, F2, given]

2.1 Strict convexity at the midpoint. The midpoint $w:=\tfrac12u+\tfrac12v$ lies in the convex set $K$, and strict convexity with $\lambda=\tfrac12$ applies because $u\ne v$ and $I(u)=I(v)=t<+\infty$: hence $I(w)<\tfrac12I(u)+\tfrac12I(v)=t$. [F1, step 1.1, algebra]

3.1 Contradiction. Step 2.1 gives $I(w)<t=\inf_KI$, while [F2] gives $\inf_KI\le I(w)$ since $w\in K$. This is impossible, so $u=v$; two distinct minimisers cannot exist. [F2, step 2.1] ∎

## Remarks

**Properness is necessary.** Without it the statement is false: on $K=[0,1]\subseteq\mathbb R$ the functional $I\equiv+\infty$ is convex and vacuously strictly convex, and $0$ and $1$ are two distinct points at which $I$ equals $\inf_KI=+\infty$. Properness, equivalently the existence of a finite competitor, is what excludes this degenerate case, and it holds in the finite-valued integral-functional applications ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]).
