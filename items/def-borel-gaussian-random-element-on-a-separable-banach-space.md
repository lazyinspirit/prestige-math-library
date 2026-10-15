---
id: def-borel-gaussian-random-element-on-a-separable-banach-space
kind: definition
title: "Centered Borel Gaussian random element on a separable Banach space"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-measurable-function-between-measurable-spaces
  - def-borel-probability-law-on-a-polish-space
  - def-polish-space
  - def-separable-space
  - def-dual-space-of-a-normed-space
  - def-standard-normal-and-normal-laws
  - def-axiom-of-choice
justified_by: []
forward_refs: []
aliases: []
axiom_use: "AC is inherited from the scalar normal-law definition."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "A. W. van der Vaart and J. H. van Zanten, Rates of contraction of posterior distributions based on Gaussian process priors (2008)"
      url: "https://arxiv.org/pdf/0806.3024"
      locator: "Section 2.1, printed pp. 1436–1437: definition of a Borel Gaussian random element in a Banach space."
    - title: "M. Hairer, An Introduction to Stochastic PDEs"
      url: "https://www.hairer.org/notes/SPDEs_Course.pdf"
      locator: "Section 4.2: Gaussian measures on a separable Banach space."
---

## Definition

Let $(\Omega,\mathcal F,P)$ be a probability space and let $B$ be a real
separable Banach space with its norm Borel sigma-algebra. A map
$W:\Omega\to B$ is a **centered Borel Gaussian random element** if it is
Borel-measurable and, for every $\ell\in B^*$, the real random variable
$\ell(W)$ has a centered (possibly zero-variance) normal law. Its law is the
Borel probability $\mu=P\circ W^{-1}$. When the word *tight* is used, it means
that for every $\delta>0$ there is a norm-compact $K\subseteq B$ with
$\mu(K)>1-\delta$.

This definition concerns a random element in $B$. A Gaussian process on an
arbitrary index set with only a cylinder-space law does not satisfy it unless
a Borel $B$-valued realization is separately constructed.
