---
id: cor-finite-galois-over-every-intermediate-field
kind: corollary
title: "A finite Galois extension is Galois over every intermediate field"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finite-galois-extension-and-galois-group, prop-normality-descends-to-intermediate-fields, def-separable-elements-and-separable-extensions]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Corollary 3.13"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $K/F$ is finite Galois and $F\subseteq E\subseteq K$, then $K/E$ is finite Galois.

## Facts & Assumptions

**Given:** A finite normal and separable extension $K/F$ ([[def-finite-galois-extension-and-galois-group]]) and an intermediate field $E$; separability means every element has a separable minimal polynomial ([[def-separable-elements-and-separable-extensions]]), and a finite $F$-basis of $K$ also spans $K$ over $E$.

[L1] If $K/F$ is a normal algebraic extension and $F\subseteq E\subseteq K$, then $K/E$ is a normal algebraic extension ([[prop-normality-descends-to-intermediate-fields]]).

## Proof

**Proof technique:** direct.

1.1 Normality of $K/F$ descends through the intermediate field, so $K/E$ is normal. [L1]

1.2 For $\alpha\in K$, its minimal polynomial over $E$ divides its separable minimal polynomial over $F$, since the latter lies in $E[x]$ and vanishes at $\alpha$. A divisor of a separable polynomial is separable, so $K/E$ is separable. This includes $\alpha=0$. [given, algebra]

2.1 The extension $K/E$ is finite because a finite $F$-basis spans it over $E$; together with steps 1.1 and 1.2 this makes $K/E$ finite Galois. Both endpoints are included: $E=F$ recovers the hypothesis and $E=K$ gives the degree-one extension. [step 1.1, step 1.2, given] ∎

## Remarks

The conclusion concerns $K/E$. The extension $E/F$ need not be normal; the normal-subgroup criterion identifies exactly when it is.
