---
id: cex-a-monomorphism-need-not-split
kind: counterexample
title: "The injection $\\varnothing\\to\\{*\\}$ is monic in $\\mathbf{Set}$ but is not split"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-monomorphisms-and-epimorphisms-in-set, def-split-monomorphism-and-split-epimorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

The assertion that every monomorphism is a split monomorphism is false.

## Facts & Assumptions

**Given:** The unique function $i:\varnothing\to\{*\}$.

[L1] Monomorphisms in $\mathbf{Set}$ are exactly injections ([[thm-monomorphisms-and-epimorphisms-in-set]]).

[L2] A split monomorphism $i:A\to B$ requires a retraction $r:B\to A$ with $ri=1_A$ ([[def-split-monomorphism-and-split-epimorphism]]).

## Counterexample

**Proof technique:** direct.

1.1 The map $i$ is injective because its domain has no elements, so [L1] makes it a monomorphism. [L1]

1.2 There is no function $r:\{*\}\to\varnothing$, since the value $r(*)$ would have to be an element of the empty set. [given]

2.1 Therefore $i$ admits no retraction and is not split by [L2], although it is monic by step 1.1. [step 1.1, step 1.2, L2] ∎
