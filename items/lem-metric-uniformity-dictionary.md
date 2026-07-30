---
id: lem-metric-uniformity-dictionary
kind: lemma
title: "A metric generates an entourage uniformity whose induced topology and uniformly continuous maps are the usual metric notions, and this uniformity is separated"
status: published
origin: session
deps: [def-uniform-space-by-entourages, thm-uniformity-induces-a-topology, def-separated-uniform-space, def-uniformly-continuous-map, def-metric-space, def-metric-topology, def-metric-uniform-continuity, def-filter-base, lem-filter-base-generates]
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

For a metric space $(X,d)$, the sets $E_\varepsilon=\{(x,y):d(x,y)<\varepsilon\}$, $\varepsilon>0$, generate a separated uniformity. Its induced topology is the metric topology, and uniform continuity to another metric uniformity is exactly metric uniform continuity.

## Facts & Assumptions

**Given:** Metric spaces $(X,d)$ and $(Y,\rho)$.

[L1] A metric has symmetry and the triangle inequality, and a pseudometric is a metric exactly when zero distance separates points ([[def-metric-space]]).

[L2] Metric-open sets are those containing a positive-radius ball about each point ([[def-metric-topology]]).

[L3] Metric uniform continuity means: for every $\varepsilon>0$ there is $\delta>0$ such that $d(x,x')<\delta$ implies $\rho(f(x),f(x'))<\varepsilon$ ([[def-metric-uniform-continuity]]).

[L4] A nonempty proper downward-directed family is a filter base, whose upward closure is the least filter containing it ([[def-filter-base]], [[lem-filter-base-generates]]).

[L5] In an entourage uniformity, entourage balls form a neighbourhood base for the induced topology ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 The diagonal lies in every $E_\varepsilon$, inverses agree with $E_\varepsilon$ by symmetry, intersections contain $E_{\min(\varepsilon,\delta)}$, and $E_{\varepsilon/2}\circ E_{\varepsilon/2}\subseteq E_\varepsilon$ by the triangle inequality. [L1]

2.1 The family $(E_\varepsilon)_{\varepsilon>0}$ is nonempty, omits the empty set, and is downward directed by step 1.1, so [L4] makes its upward closure a filter. The diagonal, inverse, and square-root properties in step 1.1 then make it a uniformity. Its $E_\varepsilon[x]$ are precisely metric balls, so its induced topology is the metric topology by [L2] and [L5]. [step 1.1, L2, L4, L5]

2.2 The intersection of all $E_\varepsilon$ is the diagonal, since $d(x,y)>0$ for $x\ne y$ and $E_{d(x,y)/2}$ excludes $(x,y)$; hence the uniformity is separated. [L1, step 1.1]

3.1 The defining entourage implication for $E_\delta$ and $E_\varepsilon$ is exactly the quantified condition of [L3], which proves the final equivalence. [L3] ∎
