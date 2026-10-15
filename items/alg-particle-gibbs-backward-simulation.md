---
id: alg-particle-gibbs-backward-simulation
kind: algorithm
title: Particle Gibbs with backward simulation
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - def-particle-gibbs-backward-simulation-extended-target
  - alg-conditional-particle-gibbs
  - alg-sequential-importance-resampling
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Lindsten and Schön, On the use of backward simulation in particle Markov chain Monte Carlo methods (arXiv 1110.2873v2), §§3–4 and Algorithms 1–3
      url: https://arxiv.org/pdf/1110.2873.pdf
    - title: Andrieu, Doucet, and Holenstein, Particle Markov chain Monte Carlo methods, §4.5 and Appendix A
      url: https://www.stats.ox.ac.uk/~doucet/andrieu_doucet_holenstein_PMCMC.pdf
---

## Definition

Use the density, support, and positive-denominator hypotheses of
[[def-particle-gibbs-backward-simulation-extended-target]]. Select multinomial resampling with ancestor indices in sampled order. Fix $N\ge2$. Before updating, require the retained parameter-path-index triple $(\theta,x^j_{0:T},j)$ to be in $D_{\rm BS}$, the set fixed in the Conditional-version convention of [[def-particle-gibbs-backward-simulation-extended-target]]; otherwise return the unchanged extended state. If a required ratio is undefined or nonfinite, or a required denominator or normalizing sum is zero or nonfinite during a sweep, return the old retained state. A finite zero density ratio is valid: assign that particle zero weight and continue. The factorization theorem proves that the stated failures have conditional probability zero on the designated full-measure set.

A backward-simulation sweep takes the current extended state $(\theta,U,j)$,
where $j=(j_0,\ldots,j_T)$ selects the reference path
$x^*_{0:T}=x^j_{0:T}$ from $U$. It returns the updated extended state $(\theta',U',J)$
and selected path $x^J_{0:T}$. First draw $\theta'$ from its exact posterior
full conditional given $x^*_{0:T}$ and the observations. If
$(\theta',x^*,j)$ is outside $D_{\rm BS}$, return the old extended state.

The initial proposal, non-reference resampling and propagation, and SIR
weight updates use [[alg-conditional-particle-gibbs]] in its density setting.
Because $j$ is a backward index sequence rather than an ancestral lineage, the
reference particle's ancestor is sampled from $B$ below instead of being fixed
to the preceding reference index.

1. Initialize the conditional auxiliary particle filter at time $0$: set
   $X_0^{j_0}=x_0^*$ and independently draw $X_0^i\sim q_{\theta',0}$ for
   $i\ne j_0$. For each $i$, compute the SIR initial weight
   $a_0^i=\mu_{\theta',0}(X_0^i)G_0(X_0^i)/q_{\theta',0}(X_0^i)$. If
   $\sum_i a_0^i>0$, set $W_0^i=a_0^i/\sum_\ell a_0^\ell$; otherwise use the
   SIR zero-weight convention $W_0^i=1/N$.
2. For $t=1,\ldots,T$, do the following in order:
   1. For each $i\ne j_t$, draw $A_t^i$ categorically with probabilities
      $W_{t-1}^{1:N}$ and then draw $X_t^i\sim
      q_{\theta',t}(\cdot\mid X_{t-1}^{A_t^i})$.
   2. Set $X_t^{j_t}=x_t^*$ and draw its ancestor $A_t^{j_t}$ categorically
      with probabilities $B_{t-1}^{1:N}(x_t^*;U')$.
   3. For every $i$, compute
      $a_t^i=G_t(X_t^i)f_{\theta',t}(X_t^i\mid
      X_{t-1}^{A_t^i})/q_{\theta',t}(X_t^i\mid
      X_{t-1}^{A_t^i})$. If $\sum_i a_t^i>0$, set
      $W_t^i=a_t^i/\sum_\ell a_t^\ell$; otherwise use the SIR zero-weight
      convention $W_t^i=1/N$.
3. Draw $J_T$ categorically with probabilities $W_T^{1:N}$. For
   $t=T-1,T-2,\ldots,0$, draw $J_t$ with probabilities
   $B_t^{1:N}(X_{t+1}^{J_{t+1}};U')$. Return the updated extended state and
   selected path.

The zero-weight conventions above define normalized weights as in
[[alg-sequential-importance-resampling]]. Retain zero individual density ratios,
importance weights, and backward probabilities. If a required ratio is undefined
or nonfinite, a backward-probability denominator is zero or nonfinite, or a
weight sum is zero or nonfinite, return the old extended state as specified above.
On the designated good set these exceptional events have conditional
probability zero. For $T=0$, Step 2 is empty and Step 3 draws $J_0$ from $W_0$.

The conditional auxiliary particle filter and the backward simulator are the
two particle-coordinate conditionals of
[[def-particle-gibbs-backward-simulation-extended-target]]. Their Gibbs
interpretation and exact posterior marginal are separate proved properties.
