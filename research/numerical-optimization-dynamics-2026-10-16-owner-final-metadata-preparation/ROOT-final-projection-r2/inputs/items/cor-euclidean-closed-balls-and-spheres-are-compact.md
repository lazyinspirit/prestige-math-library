---
id: cor-euclidean-closed-balls-and-spheres-are-compact
kind: corollary
title: "For $n\\ge1$, every Euclidean closed ball and every Euclidean sphere of positive radius is compact"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-euclidean-spheres-and-closed-balls, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, def-metric-topology, def-metric-bounded-diameter]
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
    - title: "Heine-Borel theorem"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
pipeline_run: null
---

## Statement

For $n\ge1$, $c\in\mathbb{R}^n$, and $r>0$, the Euclidean closed ball $\overline B_2(c,r)$ and Euclidean sphere $S_2(c,r)$ are compact.

## Facts & Assumptions

**Given:** $n\ge1$, $c\in\mathbb{R}^n$, and $r>0$.

[L1] The sets $\overline B_2(c,r)$ and $S_2(c,r)$ are respectively the points satisfying $\lVert x-c\rVert_2\le r$ and $\lVert x-c\rVert_2=r$ ([[def-euclidean-spheres-and-closed-balls]]).

[L2] The Euclidean norm is continuous and satisfies $|\lVert u\rVert_2-\lVert v\rVert_2|\le\lVert u-v\rVert_2$ ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]]).

[L3] The Euclidean compactness theorem identifies compactness with closedness and boundedness ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[L4] Euclidean open sets are the metric-open sets, and metric boundedness means containment in a ball ([[def-metric-topology]], [[def-metric-bounded-diameter]]).

## Proof

**Proof technique:** direct.

1.1 Both sets are bounded: $\overline B_2(c,r)$ lies in the ball of radius $r+1$ about $c$, and $S_2(c,r)\subseteq\overline B_2(c,r)$. [L1, L4]

1.2 The complement of $\overline B_2(c,r)$ is open: if $\lVert x-c\rVert_2>r$, then the ball about $x$ of radius $(\lVert x-c\rVert_2-r)/2$ stays in the complement by [L2]. [L1, L2, L4]

1.3 The complement of $S_2(c,r)$ is open: if $\lVert x-c\rVert_2\ne r$, then a ball about $x$ of radius $|\lVert x-c\rVert_2-r|/2$ avoids the sphere by [L2]. [L1, L2, L4]

2.1 Thus both sets are closed and bounded, hence compact by [L3]. [step 1.1, step 1.2, step 1.3, L3] ∎
