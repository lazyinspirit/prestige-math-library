---
id: thm-topological-group-uniformities-induce-the-given-topology
kind: theorem
title: "The left and right uniformities of a topological group induce its topology, and inversion interchanges them"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-left-and-right-uniformities-of-a-topological-group, lem-topological-group-translations-and-inversion, thm-uniformity-induces-a-topology]
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
  references: [{title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}]
pipeline_run: null
---

## Statement

The left and right uniformities of a topological group induce its given topology. Inversion is a uniform isomorphism from the left uniformity to the right uniformity.

## Facts & Assumptions

**Given:** A topological group $G$.

[L1] The left and right balls are $L_U[x]=xU$ and $R_U[x]=Ux$ ([[def-left-and-right-uniformities-of-a-topological-group]]).

[L2] Translations and inversion are homeomorphisms ([[lem-topological-group-translations-and-inversion]]).

[L3] Entourage balls form bases for the induced topologies ([[thm-uniformity-induces-a-topology]]).

## Proof

**Proof technique:** direct.

1.1 As $U$ ranges over neighbourhoods of $e$, $xU$ ranges over neighbourhoods of $x$ by the left translation homeomorphism, so left balls induce the given topology. [L1, L2, L3]

1.2 Similarly $Ux$ ranges over neighbourhoods of $x$ by right translation, so right balls induce the given topology. [L1, L2, L3]

1.3 The identity $(x^{-1})^{-1}y^{-1}=(yx^{-1})^{-1}$ sends a left entourage to the inverse of the corresponding right entourage; shrinking neighbourhoods proves uniform continuity in both directions. [L1, L2]

2.1 Thus inversion interchanges the two uniformities as a uniform isomorphism. [step 1.3] ∎
