---
id: cor-algebraic-extensions-of-perfect-fields-are-separable
kind: corollary
title: "Every algebraic extension of a perfect field is separable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perfect-field, def-separable-elements-and-separable-extensions, thm-evaluation-kernel-and-minimal-polynomial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $K/F$ is algebraic and $F$ is perfect, then $K/F$ is separable.

## Facts & Assumptions

**Given:** An algebraic extension $K/F$ with $F$ perfect.

[L1] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L2] Every nonconstant irreducible polynomial over a perfect field is separable ([[def-perfect-field]]).

[L3] An extension is separable when every one of its elements has separable minimal polynomial over the base ([[def-separable-elements-and-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 For each $\alpha\in K$, [L1] supplies its irreducible minimal polynomial over $F$, and [L2] makes that polynomial separable. [L1, L2]

2.1 Thus every element of $K$ is separable over $F$, so $K/F$ is separable by [L3]. [step 1.1, L3] ∎
