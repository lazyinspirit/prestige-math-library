---
id: alg-abc-rejection
kind: algorithm
title: ABC rejection sampling
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-approximate-bayesian-computation
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
    - title: "Jarno Lintusaari, Michael U. Gutmann, Ritabrata Dutta, Samuel Kaski, and Jukka Corander, Fundamentals and Recent Developments in Approximate Bayesian Computation"
      url: https://www.pure.ed.ac.uk/ws/files/27977065/Lintusaari2016b.pdf
    - title: "Aki Honkela, Computational Statistics I, Chapter 9"
      url: https://www.cs.helsinki.fi/u/ahonkela/teaching/compstats1/book/further-monte-carlo-techniques-and-approximate-bayesian-computation-abc.html
    - title: "Mark A. Beaumont, Wenyang Zhang, and David J. Balding, Approximate Bayesian Computation in Population Genetics"
      url: https://people.eecs.berkeley.edu/~jordan/sail/readings/beaumont-zhang-balding.pdf
---

## Definition

The inputs are a proper prior $\Pi$ on $(\Theta,\mathcal T)$, a simulator probability kernel $K(\theta,dy)$, a measurable summary statistic $S:\mathsf Y\to\mathbb R^d$, an observed summary $s_0$, and a tolerance $\epsilon\ge0$ as in [[def-approximate-bayesian-computation]]. The procedure is admissible when $p_\epsilon(s_0)>0$.

1. Draw a candidate parameter $\theta$ from $\Pi$.
2. Conditional on $\theta$, draw synthetic data $Y$ from $K(\theta,\cdot)$, independently of all earlier proposal-simulator pairs.
3. Compute $S(Y)$. If $\|S(Y)-s_0\|_2\le\epsilon$, return $\theta$ and stop. Otherwise repeat from step 1 with a fresh independent pair.

The output is one accepted parameter value. It does not itself assert a finite-run estimate or an accuracy bound for an empirical distribution of accepted values.
