---
id: ex-nilpotent-shift-and-its-single-primary-component
kind: example
title: "A nilpotent shift has minimal polynomial $x^n$ and, for $n>0$, a single primary component"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-standard-basis-of-f-n, thm-minimal-polynomial-is-well-defined-and-controls-annihilators, thm-primary-decomposition-for-an-endomorphism]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §§8A–8B'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Example

For $n>0$, let $T:F^n\to F^n$ satisfy $T(e_0)=0$ and $T(e_i)=e_{i-1}$ for $0<i<n$, where $(e_i)_{i<n}$ is the standard basis. Then $\mu_T=x^n$, and the only primary component is $\ker T^n=F^n$. For $n=0$, $\mu_T=1$ and the primary decomposition is empty.

## Facts & Assumptions

**Given:** The standard basis and shift operator in the Example.

[L1] The list $(e_i)_{i<n}$ is an ordered basis of $F^n$, including the empty case ([[lem-standard-basis-of-f-n]]).

[L2] The minimal polynomial is the least-degree monic annihilator ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

[L3] Irreducible-power factors of the minimal polynomial give the primary components ([[thm-primary-decomposition-for-an-endomorphism]]).

## Verification

**Proof technique:** direct.

1.1 For $n>0$, repeated application of $T$ gives $T^n=0$, while $T^{n-1}e_{n-1}=e_0\ne0$ by [L1]. Hence [L2] gives $\mu_T=x^n$. [L1, L2]

2.1 The sole irreducible factor is $x$, so [L3] gives the one primary component $\ker T^n=F^n$. At $n=0$, [L1] and [L2] give $\mu_T=1$. [step 1.1, L1, L2, L3] ∎
