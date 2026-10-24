---
id: ex-dirichlet-series-abscissa-boundaries
kind: example
title: "Boundary behavior can agree or differ for Dirichlet-series abscissae"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-abscissae-dirichlet-series, thm-dirichlet-series-half-plane-convergence, thm-dirichlet-series-absolute-half-plane-holomorphy, lem-abel-summation-for-complex-series, thm-p-series-rational, lem-nth-term-test]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Leonard Tomczak, Analytic Number Theory, Chapter 3"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
pipeline_run: null
---

## Example

The ordinary zeta series $\sum_{n \ge 1} n^{-s}$ has

$$\sigma_c=\sigma_a=1,$$

while the alternating eta series

$$\sum_{n \ge 1} (-1)^{n-1}n^{-s}$$

has $\sigma_c=0$ and $\sigma_a=1$.

## Facts & Assumptions

**Given:** The two displayed Dirichlet series.

[L1] The abscissae $\sigma_c$ and $\sigma_a$ are defined by half-plane convergence and absolute convergence ([[def-abscissae-dirichlet-series]]).

[L2] Convergence at one point forces convergence on the open half-plane to its right ([[thm-dirichlet-series-half-plane-convergence]]).

[L3] Absolute convergence at one point forces absolute convergence on every closed half-plane to its right ([[thm-dirichlet-series-absolute-half-plane-holomorphy]]).

[L4] Abel summation for complex series rewrites tails through bounded partial sums ([[lem-abel-summation-for-complex-series]]).

[L5] For rational $q>1$, the series $\sum_{n \ge 1} n^{-q}$ converges, while the $p=1$ case, the harmonic series, diverges ([[thm-p-series-rational]]).

[L6] A series whose terms do not tend to $0$ diverges ([[lem-nth-term-test]]).

## Verification

**Proof technique:** direct.

1.1 For the zeta series, fix $s$ with $\Re s>1$ and choose a rational $q$ with $1<q<\Re s$. Then $|n^{-s}|=n^{-\Re s}\le n^{-q}$, so [L5] gives absolute convergence. At $s=1$ the same series is the harmonic series and diverges by [L5]. Therefore [L1], [L2], and [L3] force both abscissae to equal $1$: convergence at any point with real part $<1$ would imply convergence at $1$, and absolute convergence at any point with real part $<1$ would imply absolute convergence at $1$. [L1, L2, L3, L5, given, choose, algebra]

2.1 For the eta series, fix $s$ with $\sigma:=\Re s>0$. The partial sums of $\sum (-1)^{n-1}$ are bounded by $1$. Applying [L4] to the tail weights $b_n=n^{-s}$ gives $$\sum_{n=M}^N (-1)^{n-1}n^{-s} = A_NN^{-s}-A_{M-1}M^{-s}+\sum_{n=M}^{N-1} A_n\bigl(n^{-s}-(n+1)^{-s}\bigr),$$ with $|A_n|\le1$. Since $n^{-s}-(n+1)^{-s}=O_s(n^{-\sigma-1})$ and $N^{-s}\to0$, the right-hand side tends to $0$ as $M,N\to\infty$, so the eta series converges for every $\Re s>0$. Its absolute series is $\sum n^{-\Re s}$, so step 1.1 shows $\sigma_a=1$. At $s=0$ the terms are $(-1)^{n-1}$, which do not tend to $0$, so [L6] gives divergence. Therefore [L1] and [L2] force $\sigma_c=0$. [step 1.1, L1, L2, L4, L6, given, algebra] ∎
