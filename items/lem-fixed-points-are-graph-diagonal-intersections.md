---
id: lem-fixed-points-are-graph-diagonal-intersections
kind: lemma
title: "Fixed points are exactly the intersections of the graph with the diagonal"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds, prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold, prop-the-diagonal-is-an-embedded-submanifold, def-the-diagonal-of-a-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed p. 119 (a fixed point is precisely an intersection point of graph(f) with the diagonal)"
    - title: "Eleny Ionel, notes by Andrew Lin, Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: "https://web.stanford.edu/~lindrew/math215B.pdf"
      locator: "Lecture 17, printed p. 54 (fixed points as intersections of the graph with the diagonal)"
dependency_level: 0
---

## Statement

Let $M$ be a smooth manifold and $f:M\to M$ a smooth map
([[def-c-r-and-smooth-maps-between-smooth-manifolds]]) with graph
$\Gamma_f=\{(x,f(x)):x\in M\}\subseteq M\times M$
([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]]) and diagonal
$\Delta_M=\{(x,x):x\in M\}$ ([[def-the-diagonal-of-a-space]],
[[prop-the-diagonal-is-an-embedded-submanifold]]). Then for every $x\in M$,
$$x\in\operatorname{Fix}(f)\iff(x,f(x))\in\Gamma_f\cap\Delta_M\iff(x,x)\in\Gamma_f,$$
so the graph map $\gamma_f:M\to M\times M$, $\gamma_f(x)=(x,f(x))$, satisfies
$\gamma_f^{-1}(\Delta_M)=\operatorname{Fix}(f)=\{x\in M:f(x)=x\}$: fixed points
of $f$ are exactly the intersections of the graph with the diagonal.

## Facts & Assumptions

**Given:** A smooth manifold $M$, a smooth map $f:M\to M$, its graph
$\Gamma_f=\{(x,f(x)):x\in M\}$ and the diagonal $\Delta_M=\{(x,x):x\in M\}$ of
the product $M\times M$; write $\operatorname{Fix}(f)=\{x\in M:f(x)=x\}$.

[F1] The graph $\Gamma_f\subseteq M\times M$ is an embedded submanifold of
dimension $\dim M$, and $(y,z)\in\Gamma_f$ holds exactly when $z=f(y)$
([[prop-the-graph-of-a-smooth-map-is-an-embedded-submanifold]]).

[F2] $\Delta_M=\{(x,x):x\in M\}$ and the graph map $\gamma_f$, as the pairing
$\langle\mathrm{id}_M,f\rangle$, satisfies
$\gamma_f^{-1}[\Delta_M]=\{x\in M:\mathrm{id}_M(x)=f(x)\}$
([[def-the-diagonal-of-a-space]]).

[F3] The diagonal $\Delta_M$ is an embedded submanifold of $M\times M$
([[prop-the-diagonal-is-an-embedded-submanifold]]).

## Proof

1.1 Let $x\in M$. By [F2], $(x,f(x))\in\Delta_M$ holds exactly when $x=f(x)$; by [F1], $(x,x)\in\Gamma_f$ holds exactly when $x=f(x)$; and $(x,f(x))\in\Gamma_f$ always holds by the definition of the graph in [F1], while $(x,x)\in\Delta_M$ holds exactly when $x=x$. Hence the three conditions $x\in\operatorname{Fix}(f)$, $(x,f(x))\in\Gamma_f\cap\Delta_M$ and $(x,x)\in\Gamma_f$ all say the same equation $f(x)=x$, so they are equivalent. The intersection is taken inside the product $M\times M$, in which both factors are embedded submanifolds by [F1] and [F3]. [given, F1, F2, F3]

2.1 The preimage of the diagonal under the graph map is $\gamma_f^{-1}[\Delta_M]=\{x\in M:\gamma_f(x)\in\Delta_M\}=\{x\in M:(x,f(x))\in\Delta_M\}$, which by [F2] is $\{x\in M:x=f(x)\}=\operatorname{Fix}(f)$; this is the same set whose elements are the points $x$ with $(x,x)\in\Gamma_f$ by step 1.1, so fixed points of $f$ correspond exactly to the intersections $\Gamma_f\cap\Delta_M$, through the map $x\mapsto(x,f(x))=(x,x)$. [step 1.1, F2, given] ∎
