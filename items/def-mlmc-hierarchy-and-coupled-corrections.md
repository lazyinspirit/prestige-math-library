---
id: def-mlmc-hierarchy-and-coupled-corrections
kind: definition
title: "Geometric MLMC hierarchy and coupled corrections"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: []
justified_by: []
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
    - title: "Michael B. Giles, Multilevel Monte Carlo Path Simulation, §2"
      url: "https://people.maths.ox.ac.uk/gilesm/files/opre.pdf"
    - title: "Christoph Reisinger, Stochastic Simulation: Lecture 9a, Multilevel Monte Carlo Theory, slides 4–8"
      url: "https://courses.maths.ox.ac.uk/mod/resource/view.php?id=8613"
---

## Definition

Fix a refinement factor $M\in\mathbb N$ with $M\ge2$, a base scale $T>0$, and a finite level $L\in\mathbb N\cup\{0\}$. The geometric mesh widths are $h_\ell=T M^{-\ell}$ for $0\le\ell\le L$. Let $P$ be a real random variable with $\mathbb E|P|<\infty$, and for each $\ell$ let $P_\ell$ be a real random variable with $\mathbb E[P_\ell^2]<\infty$.

At level $0$, set $\Delta_0=P_0$. At each level $\ell\ge1$, choose a joint law for a pair $(P_\ell^{\mathrm f},P_{\ell-1}^{\mathrm c})$ whose marginals are the laws of $P_\ell$ and $P_{\ell-1}$, respectively. Such a joint law is a coupling of the two levels. Define the correction $\Delta_\ell=P_\ell^{\mathrm f}-P_{\ell-1}^{\mathrm c}$. This construction gives $\mathbb E\Delta_\ell=\mathbb E P_\ell-\mathbb E P_{\ell-1}$.

For each level choose a positive integer $N_\ell$ and take $\Delta_{\ell,1},\ldots,\Delta_{\ell,N_\ell}$ to be independent copies of $\Delta_\ell$. Require the complete sample blocks from distinct levels to be independent. Write $\bar\Delta_\ell=N_\ell^{-1}\sum_{i=1}^{N_\ell}\Delta_{\ell,i}$. The finite-level multilevel Monte Carlo estimator is
$$\widehat\mu_{L,\mathbf N}=\sum_{\ell=0}^L\bar\Delta_\ell.$$
All corrections have finite second moments because each level approximation does. The shared randomness inside one fine/coarse pair is what can reduce the correction variance; the estimator still uses independent sample blocks across levels.

## Remarks

The definition makes no claim that a coupling is optimal, that the bias or correction variance has a particular rate, or that a data-dependent stopping rule reliably estimates the remaining bias.
