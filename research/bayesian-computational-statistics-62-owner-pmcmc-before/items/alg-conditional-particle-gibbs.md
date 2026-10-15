---
id: alg-conditional-particle-gibbs
kind: algorithm
title: Conditional particle filter for particle Gibbs
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-particle-gibbs-extended-target
  - alg-sequential-importance-resampling
  - def-feynman-kac-path-targets-and-normalizers
  - thm-feynman-kac-path-radon-nikodym-weight
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §§4.3 and 4.5"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
    - title: "Lindsten and Schön, On the use of backward simulation in the particle Gibbs sampler, §4.1"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
---

## Definition

Fix $N\ge2$, a finite horizon $T$, a parameter $\theta$, and a reference
trajectory $x^*_{0:T}$ with a reference lineage of particle indices
$b_0,\ldots,b_T\in\{1,\ldots,N\}$. Use the proposal kernels, incremental
weights, and normalized resampling weights of
[[alg-sequential-importance-resampling]]. Require that the reference path lies
in the target path support and that the proposal path law dominates the target
path measure as in [[thm-feynman-kac-path-radon-nikodym-weight]].

1. Draw the $N-1$ initial particles other than $X_0^{b_0}$ independently from
   $\nu_0$, and set $X_0^{b_0}=x_0^*$.
2. For $t=1,\ldots,T$, for every $i\ne b_t$ draw an ancestor $A_t^i$ from the
   categorical distribution with probabilities $W_{t-1}^{1:N}$ and then draw
   $X_t^i$ from the proposal kernel conditional on $X_{t-1}^{A_t^i}$. Set
   $A_t^{b_t}=b_{t-1}$ and $X_t^{b_t}=x_t^*$. Compute all incremental and
   normalized weights by the SIR rule.
3. Return the conditional particle system, its weights, and ancestry arrays.

In a particle Gibbs sweep, the conditional particle filter is followed by a
draw $K\sim\mathrm{Categorical}(W_T^{1:N})$ and tracing the ancestry of $K$.
For a joint parameter-path target, first update $\theta$ from its exact full
conditional given the retained path. This procedure defines the finite
conditional particle Gibbs update; its correctness is a separate result.
