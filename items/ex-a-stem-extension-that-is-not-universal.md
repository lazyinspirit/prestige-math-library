---
id: ex-a-stem-extension-that-is-not-universal
kind: example
title: "A stem extension that is not universal"
status: draft
origin: pipeline
deps: [def-central-and-stem-extensions, thm-a-group-admits-a-universal-central-extension-iff-it-is-perfect]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Example

The central extension C2→D8→C2×C2 is stem but not universal because its base is not perfect.

## Verification

**Given:** The center and commutator subgroup of $D_8$ are both $\langle r^2\rangle$.

1.1 Thus $C_2\to D_8\to C_2\times C_2$ is stem. [given]

2.1 Its nontrivial abelian base is not perfect, so it cannot be universal. [step 1.1, algebra] ∎
