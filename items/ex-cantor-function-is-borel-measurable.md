---
id: ex-cantor-function-is-borel-measurable
kind: example
title: "The Cantor function is Borel measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-cantor-function-is-continuous, thm-continuous-preimages-of-borel-sets-are-borel]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Example

The Cantor function $c : [0,1] \to \mathbb{R}$ is Borel measurable.

## Facts & Assumptions

**Given:** The Cantor function $c : [0,1] \to \mathbb{R}$.

[L1] The Cantor function is continuous. ([[cor-cantor-function-is-continuous]])

[L2] A continuous map has Borel preimages of Borel sets. ([[thm-continuous-preimages-of-borel-sets-are-borel]])

## Verification

**Proof technique:** direct.

1.1 By [L1], the Cantor function is continuous on $[0,1]$. [L1]

2.1 Applying [L2] to the continuous map $c : [0,1] \to \mathbb{R}$ gives that [step 1.1, L2] $c$ is Borel measurable on the subspace $[0,1]$. [step 1.1, L2] ∎
