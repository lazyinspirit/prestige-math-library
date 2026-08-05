---
id: lem-punctured-rn-is-polygonally-connected
kind: lemma
title: "For $n\\ge2$, the punctured space $\\mathbb{R}^n\\setminus\\{0\\}$ is polygonally connected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-polygonal-path-and-polygonal-connectedness, lem-euclidean-polygonal-paths-are-continuous, lem-standard-basis-of-f-n, def-linear-combination-and-span, def-norm-and-normed-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Path-connected space"
      url: "https://en.wikipedia.org/wiki/Path-connected_space"
    - title: "Euclidean space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
pipeline_run: null
---

## Statement

For $n\ge2$, $\mathbb R^n\setminus\{0\}$ is polygonally connected.

## Facts & Assumptions

**Given:** $n\ge2$ and nonzero vectors $x,y\in\mathbb R^n$.

[L1] The standard unit vectors form a basis of $\mathbb R^n$, so a one-dimensional span is a proper subspace when $n\ge2$ ([[lem-standard-basis-of-f-n]], [[def-linear-combination-and-span]]).

[L2] A vector outside $\operatorname{span}\{x\}$ cannot lie on a segment from $x$ to $0$, except at no point; the corresponding statement holds for $y$, by the vector-space axioms ([[def-linear-combination-and-span]], [[def-norm-and-normed-space]]).

[L3] A finite concatenation of segments contained in a subset is a polygonal path in that subset ([[lem-euclidean-polygonal-paths-are-continuous]]).

## Proof

**Proof technique:** constructive.

1.1 Choose $z\in\mathbb R^n\setminus(\operatorname{span}\{x\}\cup\operatorname{span}\{y\})$. Such a vector exists: if the two spans differ, $x+y$ lies in neither; if they agree, [L1] gives a vector outside their common proper subspace. [L1, choose]

2.1 The segment from $x$ to $z$ avoids $0$: an equality $(1-t)x+tz=0$ with $0<t\le1$ would give $z=-((1-t)/t)x\in\operatorname{span}\{x\}$, contrary to step 1.1. The segment from $z$ to $y$ similarly avoids $0$. [L2, step 1.1]

3.1 The two segments therefore form a polygonal path in $\mathbb R^n\setminus\{0\}$ from $x$ to $y$ by [L3]. [L3, step 2.1]

4.1 Since $x,y$ were arbitrary nonzero vectors, the punctured space is polygonally connected. [step 3.1, discharge-construct] ∎
