---
id: prop-empty-limits-and-colimits-are-terminal-and-initial-objects
kind: proposition
title: "Limits of empty diagrams are terminal objects, and colimits of empty diagrams are initial objects"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limit-and-colimit-of-a-diagram, prop-limit-colimit-duality, def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: true
proof_strategy: universal-property
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Example 3.1.14"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

For the unique diagram $D:\varnothing\to\mathcal C$, an object is the apex of
a limiting cone exactly when it is terminal in $\mathcal C$. It is the apex of
a colimiting cocone exactly when it is initial in $\mathcal C$.

## Facts & Assumptions

**Given:** The empty diagram $D:\varnothing\to\mathcal C$.

[F1] A limit is a terminal cone and a colimit is an initial cocone
([[def-limit-and-colimit-of-a-diagram]]).

[F2] An object is terminal when every object has exactly one morphism to it,
and initial when it has exactly one morphism to every object
([[def-initial-terminal-and-zero-object]]).

[L1] Limits in a category are colimits of the dual diagram in the opposite
category ([[prop-limit-colimit-duality]]).

## Proof

**Proof technique:** universal property.

1.1 A cone over $D$ with apex $X$ has no legs, and every morphism $X\to Y$ is a cone morphism because there are no compatibility equations. [given]

2.1 Hence a cone with apex $T$ is terminal in the cone category if and only if for every $X$ there is exactly one morphism $X\to T$. By [F1] and [F2], this is equivalent to $T$ being both a limit apex and a terminal object. [F1, F2, step 1.1]

3.1 The empty category is its own opposite. Applying [L1] to step 2.1 turns the limiting assertion into the assertion that an empty-diagram colimit is an initial object, in both directions. [L1, step 2.1] ∎
