---
id: cex-closed-unbounded-euclidean-subset-not-compact
kind: counterexample
title: "$\\mathbb{R}^n$ is closed and unbounded and is not compact for $n\\ge1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, def-metric-bounded-diameter, def-topological-space, thm-of-archimedean, lem-standard-basis-of-f-n]
aliases: []
landmark: false
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
    - title: "Heine-Borel theorem"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** every closed subset of $\mathbb R^n$ is compact.

For $n\ge1$, $\mathbb R^n$ is closed and unbounded, hence it is not compact.

## Facts & Assumptions

**Given:** $n\ge1$, Euclidean space $\mathbb R^n$, and a standard unit vector $e_0$.

[A1] Every closed Euclidean subset is compact.

[L1] Euclidean compactness is equivalent to closedness and boundedness ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[L2] The standard vector $e_0$ has Euclidean norm $1$ ([[lem-standard-basis-of-f-n]]).

[L3] For every real radius there is a natural number larger than it ([[thm-of-archimedean]]).

[L4] The empty set is open, so the whole space is closed; a metric subset is bounded exactly when it lies in some ball about some centre ([[def-topological-space]], [[def-metric-bounded-diameter]]).

## Counterexample

**Proof technique:** direct.

1.1 The whole space $\mathbb R^n$ is closed, since its complement is empty and the empty set is open. [L4]

1.2 It is unbounded. Indeed, for an arbitrary centre $c\in\mathbb R^n$ and radius $r>0$, choose a natural $k>r+\lVert c\rVert_2$ by [L3]. The reverse triangle inequality gives $$ \lVert ke_0-c\rVert_2\ge k-\lVert c\rVert_2>r, $$ so $\mathbb R^n$ is contained in no ball. [L2, L3, L4, choose]

2.1 By [L1], the closed unbounded space $\mathbb R^n$ is not compact. Hence it refutes [A1]. [A1, L1, step 1.1, step 1.2] ∎
