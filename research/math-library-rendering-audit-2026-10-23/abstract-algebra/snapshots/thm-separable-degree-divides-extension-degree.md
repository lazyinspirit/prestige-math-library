---
id: thm-separable-degree-divides-extension-degree
kind: theorem
title: "The separable degree divides the degree of every finite extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-separable-degree-is-the-degree-of-the-separable-closure, thm-tower-law-for-finite-field-extensions]
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
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

For every finite field extension $K/F$, the natural number $[K:F]_s$ divides
$[K:F]$.

## Facts & Assumptions

**Given:** A finite extension $K/F$ and its relative separable closure $K_s$.

[L1] The separable degree satisfies $[K:F]_s=[K_s:F]$ ([[thm-separable-degree-is-the-degree-of-the-separable-closure]]).

[L2] Ordinary degrees multiply in a finite tower ([[thm-tower-law-for-finite-field-extensions]]).

## Proof

**Proof technique:** direct.

1.1 The tower law [L2] gives $[K:F]=[K:K_s][K_s:F]$. [L2]

2.1 Substituting [L1] yields $[K:F]=[K:K_s][K:F]_s$, so $[K:F]_s$ divides $[K:F]$. [step 1.1, L1, algebra] ∎
