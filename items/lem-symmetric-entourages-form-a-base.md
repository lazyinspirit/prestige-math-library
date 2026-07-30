---
id: lem-symmetric-entourages-form-a-base
kind: lemma
title: "Every uniformity has a base of symmetric entourages"
status: published
origin: session
deps: [def-uniform-space-by-entourages, def-filter-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

If $\mathcal U$ is a uniformity on $X$, then its symmetric entourages form a filter base: for every $E\in\mathcal U$ there is a symmetric $D\in\mathcal U$ with $D\subseteq E$.

## Facts & Assumptions

**Given:** A uniformity $\mathcal U$ on $X$ and an entourage $E\in\mathcal U$.

[A1] A uniformity is a filter whose members are closed under inverse and admit square roots ([[def-uniform-space-by-entourages]]).

[L1] A nonempty, proper family that refines every pair of its members is a filter base ([[def-filter-base]]).

## Proof

**Proof technique:** direct.

1.1 Choose $D\in\mathcal U$ with $D\circ D\subseteq E$, and put $S:=D\cap D^{-1}$. [A1, choose]

2.1 The set $S$ is an entourage, since $D,D^{-1}\in\mathcal U$ and a filter is closed under intersections; also $S=S^{-1}$ and $S\subseteq D\circ D\subseteq E$, because every entourage contains the diagonal. [step 1.1, A1]

3.1 Thus symmetric entourages refine every entourage; their intersections are symmetric entourages and none is empty because each contains the diagonal, so they form a filter base by [L1]. [step 2.1, L1] ∎
