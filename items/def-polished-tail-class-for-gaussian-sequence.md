---
id: def-polished-tail-class-for-gaussian-sequence
kind: definition
title: "Polished-tail class for a Gaussian sequence"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-square-summable-family-on-an-arbitrary-index-set
justified_by: []
proof_strategy: definition
axiom_use: "The class is defined by sums of a fixed real sequence; no choice principle is used."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Botond Szabó, Aad van der Vaart and Harry van Zanten, Frequentist coverage of adaptive nonparametric Bayesian credible sets, Annals of Statistics 43(4) (2015), Definition 3.2"
      url: "https://arxiv.org/pdf/1310.4489v5"
      locator: "Definition 3.2, equation (3.3), printed p. 10; polished-tail condition for an inverse Gaussian sequence."
    - title: "Evarist Giné and Richard Nickl, Mathematical Foundations of Infinite-Dimensional Statistical Models, Cambridge University Press (2016), §8.3.3"
      url: "https://www.statslab.cam.ac.uk/~rn289/Site/__files/FULLPDF.pdf"
      locator: "Chapter 8, §8.3.3, printed pp. 647–652 (PDF pp. 662–667), self-similarity restrictions and honest adaptive confidence balls for Gaussian sequences."
---

## Definition

Let $\ell^2(\mathbb N,\mathbb R)$ be the real square-summable sequence space
from [[def-square-summable-family-on-an-arbitrary-index-set]]. Fix
$L_0\ge1$, an integer $N_0\ge1$, and $\rho\ge2$. The **polished-tail class**
$\Theta_{\mathrm{pt}}(L_0,N_0,\rho)$ consists of the sequences
$\theta\in\ell^2(\mathbb N,\mathbb R)$ such that for every integer
$N\ge N_0$,
$$\sum_{i=N}^{\infty}\theta_i^2 \le L_0\sum_{i=N}^{\lfloor\rho N\rfloor}\theta_i^2.$$
Thus each tail's total squared mass is controlled by the mass in the finite
block from $N$ through $\lfloor\rho N\rfloor$. The condition concerns block
energy; it is not a coordinatewise upper or lower bound.
