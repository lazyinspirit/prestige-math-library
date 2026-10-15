---
id: alg-split-rhat-from-multiple-chains
kind: algorithm
title: Split R-hat from multiple chains
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Aki Vehtari et al., Rank-normalization, folding, and localization, §3.1"
      url: https://arxiv.org/pdf/1903.08008v5
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 11, §11.11"
      url: https://artowen.su.domains/mc/Ch-MCMC.pdf
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
axiom_use: "This calculation on finite real arrays uses no choice principle."
---

## Definition

**Inputs:** $M\ge2$ scalar chains $x_{m,1},\ldots,x_{m,L}$ of equal length
$L\ge4$.

1. Let $N=\lfloor L/2\rfloor$. Replace each original chain by two chains: its
   first $N$ observations and its last $N$ observations. If $L$ is odd, discard
   the middle observation. There are now $M'=2M$ chains of length $N\ge2$.
2. For each split chain $j$, compute its mean $\bar x_j$ and sample variance
   $s_j^2=(N-1)^{-1}\sum_{i=1}^N(x_{j,i}-\bar x_j)^2$. Put
   $\bar x_{\cdot}=M'^{-1}\sum_j\bar x_j$,
   $W=M'^{-1}\sum_j s_j^2$, and
   $B=N(M'-1)^{-1}\sum_j(\bar x_j-\bar x_{\cdot})^2$.
3. If $W=0$, return **not estimable**. Otherwise return
   $$\widehat R_{\rm split}=\sqrt{\frac{\widehat V^+}{W}},\qquad \widehat V^+=\frac{N-1}{N}W+\frac{B}{N}.$$

This finite-sample formula is not clamped below at $1$; identical split-chain
means can therefore give a value slightly below $1$. Its interpretation as a
convergence diagnostic requires more than the arithmetic procedure itself.
