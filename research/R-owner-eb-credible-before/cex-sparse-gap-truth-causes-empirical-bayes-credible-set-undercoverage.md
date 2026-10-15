---
id: cex-sparse-gap-truth-causes-empirical-bayes-credible-set-undercoverage
kind: counterexample
title: "Sparse-gap truth causes empirical-Bayes credible-set undercoverage"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-adaptive-empirical-bayes-gaussian-sequence-procedure
  - def-axiom-of-choice
  - def-gaussian-sequence-hyperrectangle-class
  - lem-gaussian-sequence-empirical-bayes-posterior-formula
  - lem-empirical-bayes-maximizer-bracket-on-polished-tails
justified_by: []
proof_strategy: direct
axiom_use: "The probability model inherits AC through the Gaussian sequence procedure. No stronger choice principle is asserted."
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Botond Szabó, Aad van der Vaart and Harry van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015)"
      url: "https://arxiv.org/pdf/1310.4489v5"
      locator: "Theorem 3.1 and complete proof in §9, printed pp. 8 and 32–34 (PDF pp. 9 and 33–35)."
    - title: "B. T. Knapik, A. W. van der Vaart and J. H. van Zanten, Bayesian inverse problems with Gaussian priors, Annals of Statistics 39(5) (2011)"
      url: "https://research.vu.nl/ws/portalfiles/portal/2619416/276605.pdf"
      locator: "Theorem 4.2(iii) and complete proof in §7.4, printed pp. 2635–2638 (PDF pp. 11–14); bias larger than posterior spread yields vanishing coverage for a fixed regularity prior."
---

## Statement

For the source sparse-gap sequence below, with $M$ chosen sufficiently
small, the adaptive empirical-Bayes credible balls have coverage tending to
zero along the corresponding sample-size subsequence whenever
$L_{n_j}\lesssim\sqrt M\,\rho_j^{(1+2p)/(8+8\beta+8p)}$. Thus the claim that
these balls have nonvanishing coverage uniformly over every truth in
$\Theta_\beta(M)$ is false.

## Explicit sparse-gap construction

Use the inverse Gaussian sequence procedure of
[[def-adaptive-empirical-bayes-gaussian-sequence-procedure]]. Fix
$\beta>0$, $p\ge0$, and $M>0$. Put $s=1+2\beta+2p$,
$\rho_j=2^j$, $n_1=2$, and recursively define the positive integers
$n_{j+1}$ by
$$ n_{j+1}=\left\lceil(2\rho_{j+1}^2)^s n_j\right\rceil. $$
Let $N_j=n_j^{1/s}$. Then $1<N_1<\rho_1$ and
$n_{j+1}\ge(2\rho_{j+1}^2)^s n_j$. Define a fixed nonnegative sequence by
$$ \theta_{0,i}^2= \begin{cases} 0,&N_j/\rho_j<i\le N_j\text{ for some }j,\\ 0,&2N_j<i\le\rho_jN_j\text{ for some }j,\\ Mi^{-1-2\beta},&\text{otherwise}. \end{cases} $$
Then $\theta_{0,1}=0$ and $\theta_0\in\Theta_\beta(M)$. The source
counterexample asserts that, for $M$ chosen sufficiently small, along
$n_j$,
$$ P_{\theta_0}^{(n_j)} \{\theta_0\in\widehat C_{n_j}(L_{n_j})\}\longrightarrow0 \quad\text{whenever}\quad L_{n_j}\lesssim \sqrt M\,\rho_j^{(1+2p)/(8+8\beta+8p)}. $$

## Escalation record

**Given:** The source-specific Gaussian sequence model and the sparse-gap
sequence above.

**Escalated proof gap:** The construction and hyperrectangle bound are
retained, but no local proof of the vanishing-coverage claim is supplied.
The source proof first establishes a lower bound on the empirical-Bayes
maximizer through the unresolved polished-tail score bracket, then compares
posterior radius and centered noise with the bias on the retained
$[N_j,2N_j)$ blocks. The plan's growth condition uses $\rho_j$ where the
source uses $\rho_{j+1}$; the source indexing is used here so consecutive
gap blocks remain separated.
