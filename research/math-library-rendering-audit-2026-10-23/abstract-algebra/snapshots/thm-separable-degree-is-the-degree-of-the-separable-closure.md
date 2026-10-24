---
id: thm-separable-degree-is-the-degree-of-the-separable-closure
kind: theorem
title: "For a finite extension, $[K:F]_s=[K_s:F]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-closure-in-an-algebraic-extension, thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure, thm-purely-inseparable-extension-characterizations, thm-finite-extension-is-separable-iff-separable-degree-is-full, thm-multiplicativity-of-separable-degree]
justified_by: []
aliases: []
landmark: true
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

If $K/F$ is finite and $K_s$ is the separable closure of $F$ in $K$, then

$$[K:F]_s=[K_s:F].$$

## Facts & Assumptions

**Given:** A finite extension $K/F$ and its relative separable closure $K_s$.

[L1] The field $K_s$ consists of the elements separable over $F$ ([[def-separable-closure-in-an-algebraic-extension]]).

[L2] The extension $K/K_s$ is purely inseparable ([[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]).

[L3] A finite purely inseparable extension has separable degree one ([[thm-purely-inseparable-extension-characterizations]]).

[L4] A finite separable extension has full separable degree ([[thm-finite-extension-is-separable-iff-separable-degree-is-full]]).

[L5] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

## Proof

**Proof technique:** direct.

1.1 The finite extension $K_s/F$ is separable by [L1], so [L4] gives $[K_s:F]_s=[K_s:F]$. [L1, L4]

1.2 By [L2] and [L3], one has $[K:K_s]_s=1$. [L2, L3]

2.1 Multiplicativity [L5] in $F\subseteq K_s\subseteq K$ gives $[K:F]_s=[K:K_s]_s[K_s:F]_s=[K_s:F]$. This includes $K_s=F$. [step 1.1, step 1.2, L5, algebra] ∎
