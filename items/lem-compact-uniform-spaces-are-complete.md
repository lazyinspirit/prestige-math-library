---
id: lem-compact-uniform-spaces-are-complete
kind: lemma
title: "Every compact uniform space is complete"
status: published
origin: session
deps: [def-complete-uniform-space, lem-cauchy-filter-with-a-cluster-point-converges, def-compact-space, thm-compact-iff-fip]
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

Every compact uniform space is complete.

## Facts & Assumptions

**Given:** A compact uniform space $X$ and a Cauchy filter $\mathcal F$ on it.

[L1] Compactness is equivalent to the finite-intersection property for closed families ([[thm-compact-iff-fip]], [[def-compact-space]]).

[L2] A Cauchy filter with a cluster point converges to that point ([[lem-cauchy-filter-with-a-cluster-point-converges]]).

[L3] Completeness means convergence of every Cauchy filter ([[def-complete-uniform-space]]).

## Proof

**Proof technique:** direct.

1.1 The closures of the members of $\mathcal F$ have the finite-intersection property, because finite intersections of filter members are nonempty and lie in the corresponding intersections of closures. [L1]

2.1 Compactness gives $x\in\bigcap_{A\in\mathcal F}\overline A$; every neighbourhood of $x$ therefore meets every $A\in\mathcal F$, so $x$ is a cluster point of $\mathcal F$. [step 1.1, L1]

3.1 By [L2] the filter converges, and since it was arbitrary $X$ is complete by [L3]. [step 2.1, L2, L3] ∎
