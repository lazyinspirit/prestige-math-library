---
id: alg-particle-gibbs-backward-simulation
kind: algorithm
title: Particle Gibbs with backward simulation
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-particle-gibbs-backward-simulation-extended-target
  - alg-conditional-particle-gibbs
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lindsten and Schön, On the use of backward simulation in the particle Gibbs sampler, §§3–4 and Algorithms 1–3"
      url: "https://arxiv.org/pdf/1110.2873.pdf"
    - title: "Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §4.5 and Appendix A"
      url: "https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf"
---

## Definition

Use the density, support, and positive-denominator hypotheses of
[[def-particle-gibbs-backward-simulation-extended-target]]. Fix $N\ge2$. A
backward-simulation sweep on $(\theta,x^*,j)$ consists of the following
updates:

1. Draw $\theta'$ from the exact posterior full conditional given $x^*$ and
   the observations.
2. Run a conditional auxiliary particle filter at $\theta'$, conditioned on
   the reference trajectory $x^*$ and index sequence $j$. Initialize all
   particles except the indexed reference particle from the proposal. At each
   later time, draw each non-reference ancestor from the current normalized
   weights and propagate it with the proposal; fix the indexed reference state
   to its reference value and draw its ancestor $A_t^{j_t}$ with probabilities
   $B_{t-1}^i(x_t^{j_t};U)$.
3. Given the resulting particle cloud, draw $J_T$ from the final normalized
   weights $W_T^{1:N}$. For $t=T-1,T-2,\ldots,0$, draw
   $J_t$ with probabilities $B_t^{1:N}(X_{t+1}^{J_{t+1}};U)$. Return
   $\theta'$ and the selected path $X_0^{J_0},\ldots,X_T^{J_T}$ together with
   the new index sequence.

The conditional auxiliary particle filter and the backward simulator are the
two particle-coordinate conditionals of
[[def-particle-gibbs-backward-simulation-extended-target]]. Their Gibbs
interpretation and exact posterior marginal are separate proved properties.
