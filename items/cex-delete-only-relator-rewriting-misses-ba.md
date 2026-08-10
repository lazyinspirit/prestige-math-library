---
id: cex-delete-only-relator-rewriting-misses-ba
kind: counterexample
title: 'In $\langle a,b\mid ab\rangle$, the trivial word $ba$ is stuck under free cancellation and delete-only relator rewriting'
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-group-presentation, def-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-11
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

Consider the following specific syntactic procedure for a displayed finite
presentation: at each step, freely cancel an adjacent inverse pair or delete a
contiguous occurrence of one displayed relator or its inverse. Never insert a
relator and never lengthen the word.

The false claim is that this delete-only procedure reduces every word that
represents the identity to the empty word. In
$\langle a,b\mid ab\rangle$, the word $ba$ represents the identity but admits
no step at all.

## Facts & Assumptions

**Given:** The presentation $G=\langle a,b\mid ab\rangle$ and the delete-only procedure just stated.

[F1] In a presented group, every displayed relator becomes the identity ([[def-group-presentation]]).

[F2] In a group, an equation $yx=e$ determines $y=x^{-1}$ ([[def-group]]).

## Counterexample

**Proof technique:** direct.

1.1 The relation $ab=e$ gives $b=a^{-1}$ by [F2], and therefore $ba=a^{-1}a=e$ in $G$. [F1, F2]

1.2 The word $ba$ has no adjacent inverse pair and contains neither the relator $ab$ nor its inverse $b^{-1}a^{-1}$ as a contiguous subword. [given]

2.1 Thus $ba$ represents the identity by step 1.1 but is stuck and nonempty under the stated procedure by step 1.2, refuting the claim. [step 1.1, step 1.2] ∎
