---
id: lem-topological-group-translations-and-inversion
kind: lemma
title: "Left and right translations and inversion in a topological group are homeomorphisms"
status: published
origin: session
deps: [def-topological-group, lem-group-inverse-laws, def-homeomorphism-and-open-maps]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

For $g$ in a topological group, $L_g(x)=gx$, $R_g(x)=xg$, and $\iota(x)=x^{-1}$ are homeomorphisms.

## Facts & Assumptions

**Given:** A topological group $G$ and $g\in G$.

[L1] Multiplication and inversion are continuous ([[def-topological-group]]).

[L2] $(gh)^{-1}=h^{-1}g^{-1}$ and inversion is its own inverse ([[lem-group-inverse-laws]]).

[L3] A homeomorphism is a continuous bijection with continuous inverse ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 The maps $L_g$ and $R_g$ are continuous as composites of multiplication with constant maps, and their inverses are $L_{g^{-1}}$ and $R_{g^{-1}}$, also continuous. [L1, L2]

1.2 Inversion is continuous and its own continuous inverse by [L1] and [L2]. [L1, L2]

2.1 Thus all three maps are homeomorphisms by [L3]. [step 1.1, step 1.2, L3] ∎
