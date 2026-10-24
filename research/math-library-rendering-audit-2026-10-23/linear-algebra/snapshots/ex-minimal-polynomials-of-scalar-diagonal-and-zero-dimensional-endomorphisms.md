---
id: ex-minimal-polynomials-of-scalar-diagonal-and-zero-dimensional-endomorphisms
kind: example
title: "Minimal polynomials of scalar and diagonal endomorphisms, including the zero-dimensional case"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-minimal-polynomial-is-well-defined-and-controls-annihilators, thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]
aliases: []
landmark: false
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
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §5B'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Anthony W. Knapp, Basic Algebra, 2nd ed., Ch. V, §3'
      url: 'https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf'
pipeline_run: null
---

## Example

The zero-dimensional endomorphism has minimal polynomial $1$. On a nonzero space, the scalar endomorphism $\lambda I$ has minimal polynomial $x-\lambda$. A diagonal matrix whose distinct diagonal values are $\lambda_0,\ldots,\lambda_{r-1}$ has minimal polynomial $\prod_{i<r}(x-\lambda_i)$, regardless of repetitions on the diagonal.

## Facts & Assumptions

**Given:** The endomorphisms described in the Example.

[L1] An annihilating polynomial is exactly a multiple of the minimal polynomial ([[thm-minimal-polynomial-is-well-defined-and-controls-annihilators]]).

[L2] A diagonalisable endomorphism has a minimal polynomial that is a product of distinct linear factors ([[thm-diagonalisable-iff-minimal-polynomial-splits-with-distinct-roots]]).

## Verification

**Proof technique:** direct.

1.1 On the zero space, $I=0$, so $1$ annihilates and [L1] gives $\mu=1$. On a nonzero space, $(\lambda I-\lambda I)=0$, while no nonzero constant polynomial annihilates; hence $\mu_{\lambda I}=x-\lambda$. [L1, algebra]

2.1 For the diagonal matrix, a polynomial vanishes on the matrix exactly when it vanishes at every displayed diagonal value. The monic polynomial of least degree with those distinct roots is $\prod_i(x-\lambda_i)$, agreeing with [L2]. [L1, L2, algebra] ∎
