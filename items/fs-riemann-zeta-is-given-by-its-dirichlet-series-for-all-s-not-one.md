---
id: fs-riemann-zeta-is-given-by-its-dirichlet-series-for-all-s-not-one
kind: false-statement
title: "FALSE: zeta is given by the same Dirichlet series for every complex $s$ other than $1$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges, cex-the-harmonic-series-shows-the-defining-series-diverges-at-one]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement

**False claim:** zeta is given by the Dirichlet series $\sum_{n\ge1}n^{-s}$ for
every complex $s\ne1$.

## Facts & Assumptions

**Given:** The two concrete failures of that claim.

[L1] At $s=1/2$, the eta series represents the continued zeta value while the
Dirichlet series diverges
([[cex-the-eta-series-represents-the-continuation-where-the-dirichlet-series-diverges]]).

[L2] At $s=1$, the defining Dirichlet series is the divergent harmonic series
([[cex-the-harmonic-series-shows-the-defining-series-diverges-at-one]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the claim already fails at $s=1/2$: the continuation exists there, but the Dirichlet series does not converge. [L1, given]

2.1 By [L2], the excluded point $s=1$ is also a divergence point for the defining series. Therefore the slogan "the same Dirichlet series works for every $s\ne1$" is false. [step 1.1, L2, algebra] ∎
