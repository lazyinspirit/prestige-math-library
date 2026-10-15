---
id: ex-sparse-gap-sequence-is-hyperrectangular-but-undercovered
kind: example
title: "A sparse-gap truth lies in a hyperrectangle but is undercovered"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage
  - def-axiom-of-choice
  - def-gaussian-sequence-hyperrectangle-class
justified_by: []
proof_strategy: direct
axiom_use: "The deterministic sequence verification is choice-free; the coverage claim inherits AC through the source probability model."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Botond Szabó, Aad van der Vaart and Harry van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015)"
      url: "https://arxiv.org/pdf/1310.4489v5"
      locator: "Theorem 3.1 and complete proof in §9, printed pp. 8 and 32–34 (PDF pp. 9 and 33–35); sparse gaps and undercoverage along a subsequence."
---

## Example

Fix $\beta>0$, $M>0$, and $p\ge0$. Put $s=1+2\beta+2p$,
$\rho_j=2^j$, $n_1=2$, and recursively let
$n_{j+1}=\lceil(2\rho_{j+1}^2)^s n_j\rceil$. Put $N_j=n_j^{1/s}$.
Then $1<N_1<\rho_1$ and
$n_{j+1}\ge(2\rho_{j+1}^2)^s n_j$. Define $\theta_{0,i}\ge0$ by
$$ \theta_{0,i}^2=\begin{cases}0,&N_j/\rho_j<i\le N_j\text{ for some }j,\\0,&2N_j<i\le\rho_jN_j\text{ for some }j,\\Mi^{-1-2\beta},&\text{otherwise}.\end{cases} $$
The verification below proves $\theta_{0,1}=0$ and
$\theta_0\in\Theta_\beta(M)$. The source counterexample
[[cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage]]
asserts that sufficiently small $M$ and inflation constants in its stated
regime make coverage of this truth tend to zero along $n_j$.
That undercoverage proof remains escalated, so this example does not certify
the coverage conclusion.

## Facts & Assumptions

**Given:** The parameters and sparse-gap sequence in the Example.

[F1] $\Theta_\beta(M)$ consists of square-summable sequences satisfying
$\sup_i i^{1+2\beta}\theta_i^2\le M$.
[[def-gaussian-sequence-hyperrectangle-class]]

## Verification

1.1 The growth condition implies $N_{j+1}\ge2\rho_{j+1}^2N_j$, so $N_{j+1}/\rho_{j+1}\ge2\rho_{j+1}N_j\ge2\rho_jN_j$. Each next first gap therefore begins beyond the preceding second gap; the two gaps with the same index are disjoint because the first ends at $N_j$ and the second begins strictly after $2N_j$. Every coordinate is zero or has squared value $Mi^{-1-2\beta}$. Hence $\sup_i i^{1+2\beta}\theta_{0,i}^2\le M$, and $\sum_i\theta_{0,i}^2\le M\left(1+\int_1^\infty x^{-1-2\beta}\,dx\right)<\infty$. Thus [F1] holds. [F1, given, algebra]

2.1 Since $N_1=2^{1/s}$ with $s>1$, $N_1/\rho_1<1<N_1$. Therefore coordinate $1$ lies in the first zero gap and $\theta_{0,1}=0$. [given, algebra] ∎

## Escalation record

The deterministic sequence and hyperrectangle membership are verified above.
The source undercoverage conclusion still needs the unproved maximizer-bracket
and blockwise radius/noise-versus-bias argument recorded for
[[cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage]].
