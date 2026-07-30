---
id: lem-point-filters-are-dense-in-the-minimal-cauchy-filter-space
kind: lemma
title: "The minimal Cauchy filters associated to points define a uniformly continuous dense canonical map"
status: published
origin: session
deps: [lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, def-uniformly-continuous-map, thm-uniformity-induces-a-topology, def-interior-closure-boundary-top, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: constructive
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

The map $\eta:X\to\widehat X$ sending $x$ to the minimal Cauchy filter associated to its principal filter is uniformly continuous and has dense image.

## Facts & Assumptions

**Given:** A uniform space $X$ and its minimal-Cauchy-filter space $\widehat X$.

[L1] Principal filters are Cauchy and have associated minimal Cauchy filters ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L2] The standard relations are entourages on $\widehat X$ ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]).

[L3] Entourage balls describe the induced topology and density is closure equal to the whole space ([[thm-uniformity-induces-a-topology]], [[def-interior-closure-boundary-top]]).

[L4] Symmetric entourages with prescribed finite-composite control may be chosen inside any entourage ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 Define $\eta(x)$ to be the minimal filter associated to the principal filter at $x$. [L1, construct]

1.2 Let $\widehat E[\mathcal F]$ be a basic neighbourhood. Choose a symmetric $D$ with $D^{\circ2}\subseteq E$, a $D$-small $A\in\mathcal F$, and $a\in A$. The point filter $\eta(a)$ contains $D[a]$, and $D[a]\times A\subseteq D^{\circ2}\subseteq E$, so $\eta(a)\in\widehat E[\mathcal F]$. Thus every basic neighbourhood meets $\eta[X]$. [L1, L2, L3, L4, choose]

2.1 Given a target basic entourage $\widehat E$, choose a symmetric $D$ with $D^{\circ3}\subseteq E$. If $(x,y)\in D$, then $D[x]\in\eta(x)$ and $D[y]\in\eta(y)$, while $D[x]\times D[y]\subseteq D^{\circ3}\subseteq E$. Hence $(\eta(x),\eta(y))\in\widehat E$, which proves uniform continuity. [step 1.1, L2, L4]

3.1 Thus every neighbourhood meets $\eta[X]$, so its closure is all of $\widehat X$ and the image is dense. [step 1.2, L3, discharge-construct] ∎
