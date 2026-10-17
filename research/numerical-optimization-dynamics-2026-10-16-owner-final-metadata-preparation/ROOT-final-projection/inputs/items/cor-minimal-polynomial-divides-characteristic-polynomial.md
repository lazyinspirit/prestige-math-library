---
id: cor-minimal-polynomial-divides-characteristic-polynomial
kind: corollary
title: "The minimal polynomial divides the characteristic polynomial, $\\mu_T\\mid\\chi_T$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators, thm-cayley-hamilton, def-characteristic-polynomial-of-an-operator]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Keith Conrad, The Minimal Polynomial and Some Applications, Corollary 4.10'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/minpolyandappns.pdf'
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., Theorem 8.30'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

For every endomorphism $T$ of a finite-dimensional vector space,

$$\mu_T\mid\chi_T.$$

## Facts & Assumptions

**Given:** A finite-dimensional endomorphism $T$ with minimal polynomial $\mu_T$ and characteristic polynomial $\chi_T$ ([[def-characteristic-polynomial-of-an-operator]]).

[L1] Cayley–Hamilton states $\chi_T(T)=0$ ([[thm-cayley-hamilton]]).

[L2] A polynomial annihilates $T$ if and only if it is divisible by $\mu_T$ ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\chi_T$ annihilates $T$. [L1]

2.1 Therefore [L2] gives $\mu_T\mid\chi_T$. In dimension zero both polynomials are $1$, and the same argument applies. [step 1.1, L2] ∎
