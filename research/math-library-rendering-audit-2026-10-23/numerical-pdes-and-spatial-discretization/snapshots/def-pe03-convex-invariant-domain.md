---
id: def-pe03-convex-invariant-domain
kind: definition
title: Convex invariant domains for a one-step update
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
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
    date: 2026-10-18
sources:
  references:
    - title: "J.-L. Guermond and B. Popov, Invariant Domains and First-Order Continuous Finite Element Approximation for Hyperbolic Systems"
      url: "https://people.tamu.edu/~guermond/PUBLICATIONS/guermond_popov_sinum_hyperbolic_systems_2016.pdf"
      locator: "§2.2, Definitions 2.3–2.4, PDF pp. 3–4; complete 24-page article read"
---

## Definition

Let $m,N\ge1$, let $\mathcal A\subseteq\mathbb R^m$ be a state domain, and let
$\Phi:\mathcal A^N\to\mathcal A^N$ be a one-step update on $N$ cell states.
A set $K\subseteq\mathcal A$ is **convex** if
$\theta U+(1-\theta)V\in K$ for every $U,V\in K$ and $\theta\in[0,1]$.
It is a **convex invariant domain for $\Phi$** if it is convex and
$\Phi(K^N)\subseteq K^N$. The word invariant refers only to this stated
one-step map and its stated admissible inputs; it asserts no invariance for a
different flux, time integrator, or exact Riemann evolution.

