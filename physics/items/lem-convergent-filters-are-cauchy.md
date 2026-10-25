---
id: lem-convergent-filters-are-cauchy
kind: lemma
title: "Every convergent filter on a uniform space is Cauchy"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-space-by-entourages, def-cauchy-filter-in-a-uniform-space, def-filter-convergence-and-cluster-point, thm-uniformity-induces-a-topology, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-09
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

Every filter converging in the induced topology of a uniform space is Cauchy.

## Facts & Assumptions

**Given:** A filter $\mathcal F$ converging to $x$ in a uniform space.

[L1] Filter convergence means that every neighbourhood of the limit belongs to the filter ([[def-filter-convergence-and-cluster-point]]).

[L2] Entourage balls form neighbourhood bases, and every entourage has a symmetric square root ([[thm-uniformity-induces-a-topology]], [[def-uniform-space-by-entourages]], [[lem-symmetric-entourages-form-a-base]]).

[L3] A Cauchy filter has an $E$-small member for every entourage $E$ ([[def-cauchy-filter-in-a-uniform-space]]).

## Proof

**Proof technique:** direct.

1.1 Let $E$ be an entourage and choose a symmetric entourage $D$ with $D\circ D\subseteq E$. [L2, choose]

1.2 The neighbourhood $D[x]$ belongs to $\mathcal F$ by convergence. [L1, L2]

2.1 Since $D$ is symmetric, $D[x]\times D[x]\subseteq D^{-1}\circ D=D\circ D\subseteq E$, so $D[x]$ is $E$-small. [step 1.1, step 1.2]

3.1 As $E$ was arbitrary, $\mathcal F$ is Cauchy by [L3]. [step 2.1, L3] ∎
